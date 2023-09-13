import prisma from "../../../lib/prisma";

// POST /api/contact
export default async function handle(req, res) {
  const { name, email, subject, phone } = req.body;

  /*   console.log("------------------------------------------------------------");
  console.log("name: " + name);
  console.log("email: " + email);
  console.log("subject: " + subject);
  console.log("phone: " + phone);
  console.log("------------------------------------------------------------"); */

  const result = await prisma.contact.create({
    data: {
      name: name,
      email: email,
      subject: subject,
      phone: phone,
    },
  });
  res.json(result);
}
