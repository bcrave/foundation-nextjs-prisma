import prisma from "../../lib/prisma";
import { validateRoute } from "../../lib/auth";

export default validateRoute(async (req, res, user) => {
  let users;

  if (user.role !== "USER") {
    users = await prisma.user.findMany({});
  } else {
    users = await prisma.user.findMany({
      where: {
        organizationId: user.organizationId,
      },
    });
  }

  res.json(users);
});
