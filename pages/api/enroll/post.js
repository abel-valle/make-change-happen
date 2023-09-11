import prisma from "../../../lib/prisma";

// POST /api/enroll/post
export default async function handle(req, res) {
  const { name, email } = req.body;

  console.log("------------------------------------------------------------");
  console.log("name: " + name);
  console.log("email: " + email);
  console.log("------------------------------------------------------------");

  /*   name: name,
  email: email,
  subject: subject,
  phone: phone, */

  const result = await prisma.enroll.create({
    data: {
      name: "Test Name",
      email: "test@mail.com",
    },
  });
  res.json(result);
}
