import bcrypt from "bcrypt";
import { generateKeyPair, SignJWT } from "jose";
import cookie from "cookie";
import prisma from "../../lib/prisma";
// import { privateKey } from "../../lib/jwtKeyPair";

export const { privateKey, publicKey } = await generateKeyPair("PS256");

const signin = async (req, res) => {
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (user && bcrypt.compareSync(password, user.password)) {
    const token = await new SignJWT({
      id: user.id,
      email: user.email,
      role: user.role,
    })
      .setProtectedHeader({ alg: "PS256" })
      .setIssuedAt()
      .setExpirationTime("8h")
      .sign(privateKey);

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
