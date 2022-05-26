import { validateRoute } from "../../lib/auth";
import prisma from "../../lib/prisma";

export default validateRoute(async (req, res, user) => {
  const organization = await prisma.organization.findUnique({
    where: {
      id: user.organizationId,
    },
  });

  return res.json({ ...user, organization });
});
