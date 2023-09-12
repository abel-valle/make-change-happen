import prisma from "../../../lib/prisma";

// POST /api/enroll
export default async function handle(req, res) {
  const { nameEnroll, emailEnroll } = req.body;

  /*   console.log("------------------------------------------------------------");
  console.log("name: " + nameEnroll);
  console.log("email: " + emailEnroll);
  console.log("------------------------------------------------------------"); */

  const result = await prisma.enroll.create({
    data: {
      name: nameEnroll,
      email: emailEnroll,
    },
  });
  res.json(result);
}
