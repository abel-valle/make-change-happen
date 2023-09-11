import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Contact = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [phone, setPhone] = useState("");

  const submitData = async (e) => {
    e.preventDefault();
    try {
      const body = { title, content };
      await fetch("/api/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      await Router.push("/drafts");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="contact"
    >
      <ScrollAnimationWrapper className="relative w-full mt-16">
        <motion.div
          variants={scrollAnimation}
          custom={{ duration: 3 }}
        >
          <div className="bg-white-500">
            <form onSubmit={submitData}>
              <h1>Contacto</h1>
              <input
                autoFocus
                onChange={(e) => setName(e.target.value)}
                placeholder="Nombre"
                type="text"
                value={name}
              />
              <input
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e-mail"
                type="email"
                value={email}
              />
              <textarea
                cols={50}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Asunto"
                rows={3}
                value={subject}
              />
              <input
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Telefono"
                type="tel"
                value={phone}
              />
              <input disabled={!name || !email} type="submit" value="Enviar" />
            </form>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
    </div>
  );
};

export default Contact;
