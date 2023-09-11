import prisma from "../../../lib/prisma";

// POST /api/contact/post
export default async function handle(req, res) {
  const { name, email, subject, phone } = req.body;

  console.log("------------------------------------------------------------");
  console.log("name: " + name);
  console.log("email: " + email);
  console.log("subject: " + subject);
  console.log("phone: " + phone);
  console.log("------------------------------------------------------------");

  /*   name: name,
  email: email,
  subject: subject,
  phone: phone, */

  const result = await prisma.contact.create({
    data: {
      name: "Test Name",
      email: "test@mail.com",
      subject: "Subject Test",
      phone: "55 5555-5555",
    },
  });
  res.json(result);
}
