import { validateRoute } from "../../lib/auth";
import jwt from "jsonwebtoken";
import cookie from "cookie";
import prisma from "../../lib/prisma";

export default validateRoute(async (req, res, user) => {
  const updatedUser = await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      ...req.body,
    },
  });

  const token = jwt.sign(
    {
      email: user.email,
      id: user.id,
      role: user.role,
      time: Date.now(),
    },
    "foundation",
    { expiresIn: "8h" }
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

  return res.json({ updatedUser });
});
