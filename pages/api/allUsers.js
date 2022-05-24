import prisma from "../../lib/prisma";
import { validateRoute } from "../../lib/auth";

export default validateRoute(async (req, res) => {
  const users = await prisma.user.findMany({});

  res.json(users);
});
