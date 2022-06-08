import bcrypt from "bcrypt";
// import * as jose from "jose";
import jwt from "jsonwebtoken";
import cookie from "cookie";
import prisma from "../../lib/prisma";

// const { webcrypto, KeyObject } = await import("node:crypto");
// const { subtle } = webcrypto;

// const key = await subtle.generateKey(
//   {
//     name: "ACCESS_TOKEN_SECRET",
//     hash: "SHA-256",
//     length: 256,
//   },
//   true,
//   ["sign", "verify"]
// );

// const keyObject = KeyObject.from(key);

const signin = async (req, res) => {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (user && bcrypt.compareSync(password, user.password)) {
    // const token = await new jose.SignJWT({
    //   id: user.id,
    //   email: user.email,
    //   role: user.role,
    // })
    //   .setProtectedHeader({ alg: "ES256" })
    //   .setIssuedAt()
    //   .setExpirationTime("8h")
    //   .sign(keyObject);

    // console.log(token);

    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        time: Date.now(),
      },
      "foundation",
      {
        expiresIn: "8h",
      }
    );

    res.setHeader(
      "Set-Cookie",
      cookie.serialize("FOUNDATION_ACCESS_TOKEN", token, {
        httpOnly: true,
        maxAge: 8 * 60 * 60,
        path: "/",
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
      })
    );

    res.json(user);
  } else {
    res.status(401);
    res.json({ error: "Incorrect password or email" });
  }
};

export default signin;
