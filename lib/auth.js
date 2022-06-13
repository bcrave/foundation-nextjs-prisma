import jwt from "jsonwebtoken";
import { jwtVerify } from "jose";
// import { publicKey } from "./jwtKeyPair";
import prisma from "./prisma";
import { publicKey } from "../pages/signin";

export const validateRoute = (handler) => {
  return async (req, res) => {
    const { FOUNDATION_ACCESS_TOKEN: token } = req.cookies;

    if (token) {
      let user;

      try {
        const { payload, protectedHeader } = await jwtVerify(token, publicKey);

        user = await prisma.user.findUnique({
          where: { id: payload.id },
        });

        if (!user) {
          throw new Error("Not real user or incorrect role");
        }
      } catch (err) {
        res.status(401);
        res.json({ error: "Not authorized" });
        return;
      }
      return handler(req, res, user);
    }
    res.status(401);
    res.json({ error: "Not authorized" });
  };
};
