import React, { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Contact = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const { register, handleSubmit, errors, formState } = useForm();
  const [isContactSuccess, setIsContactSuccess] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [phone, setPhone] = useState("");

  const submitContactData = async (e) => {
    e.preventDefault();
    try {
      const body = { name, email, subject, phone };
      const result = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      setName("");
      setEmail("");
      setSubject("");
      setPhone("");

      setIsContactSuccess(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="contact"
    >
      <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <center>
          <ScrollAnimationWrapper>
            <motion.div variants={scrollAnimation}>
              <h1 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-medium text-teal-500 mb-2">
                ¡Contáctanos!
              </h1>
              <p className="text-sm sm:text-lg text-black-100 mb-6">Nos encanta saber sobre tí.</p>

              <form onSubmit={submitContactData}>
                <div className="grid bg-teal-100 gap-2 mb-2 sm:gap-6 sm:mb-6 sm:grid-cols-4 rounded-lg mb-8 px-8">

                  <div className="sm:col-start-2 sm:col-span-2 sm:px-8">
                    <input
                      type="text"
                      className="mt-8 mb-2 text-sm sm:text-md peer block min-h-[auto] w-full rounded border-0 px-3 py-[0.30rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-100"
                      placeholder="Nombre (cómo te gusta que te digan)"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />

                    <input
                      type="email"
                      className="mt-2 mb-2 text-sm sm:text-md peer block min-h-[auto] w-full rounded border-0 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-100"
                      placeholder="Correo electrónico"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />

                    <input
                      type="tel"
                      className="mt-2 mb-2 text-sm sm:text-md peer block min-h-[auto] w-full rounded border-0 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-100"
                      placeholder="Número de Whatsapp para contactarte"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />

                    <textarea
                      className="mt-2 mb-2 text-sm sm:text-md peer block min-h-[auto] w-full rounded border-0 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-100"
                      rows="3"
                      placeholder="¿En qué podemos ayudarte?"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      required
                    ></textarea>

                    <input
                      type="submit"
                      value="Envía tu mensaje"
                      disabled={
                        !name ||
                        !email ||
                        !subject ||
                        !phone ||
                        formState.isSubmitting
                      }
                      className="mt-2 mb-6 py-3 px-8 sm:px-16 text-white-500 font-semibold rounded-lg bg-yellow-500 hover:shadow-teal-md transition-all outline-none undefined"
                    />
                  </div>

                </div>
              </form>

              {isContactSuccess && (
                <div className="text-teal-500">Tu mensaje ha sido enviado.</div>
              )}

              {/* <a href="" className="font-medium dark:text-teal-100 hover:underline">Ver Aviso de Privacidad</a> */}
            </motion.div>
          </ScrollAnimationWrapper>
        </center>
      </div>
    </div>
  );
};

export default Contact;
