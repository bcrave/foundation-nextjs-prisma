import prisma from "../../lib/prisma";
import { validateRoute } from "../../lib/auth";

export default validateRoute(async (req, res) => {
  const organizations = await prisma.organization.findMany({});

  res.json(organizations);
});
