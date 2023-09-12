import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Contact = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const [nameEnroll, setNameEnroll] = useState("");
  const [emailEnroll, setEmailEnroll] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [phone, setPhone] = useState("");

  const submitContactData = async (e) => {
    e.preventDefault();
    try {
      const body = { name, email, subject, phone };
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      setName("");
      setEmail("");
      setSubject("");
      setPhone("");
      //await Router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  const submitEnrollData = async (e) => {
    e.preventDefault();
    try {
      const body = { nameEnroll, emailEnroll };
      await fetch("/api/enroll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      setNameEnroll("");
      setEmailEnroll("");
      // await Router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div
        className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
        id="signup"
      >
        <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
          <center>
            <ScrollAnimationWrapper>
              <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
                <h1 className="text-2xl lg:text-2xl xl:text-3xl font-medium text-teal-500 mb-2">
                  Regístrate
                </h1>
                <p className="text-black-100 mb-6">
                  Además, recibirás noticias de nuestros cursos.
                </p>

                <form onSubmit={submitEnrollData}>
                  <div className="grid gap-6 mb-6 md:grid-cols-3 bg-yellow-100 rounded-lg mb-8 px-8">
                    <div className="mt-8 mb-8">
                      <input
                        type="text"
                        id="name_enroll"
                        className="peer block min-h-[auto] w-full rounded border-0 px-3 py-[0.30rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200"
                        placeholder="Nombre (cómo te gusta que te digan)"
                        value={nameEnroll}
                        onChange={(e) => setNameEnroll(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mt-8 mb-8">
                      <input
                        type="email"
                        id="email_enroll"
                        className="peer block min-h-[auto] w-full rounded border-0 px-3 py-[0.30rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200"
                        placeholder="Correo electrónico"
                        value={emailEnroll}
                        onChange={(e) => setEmailEnroll(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mt-8 mb-8">
                      <input
                        type="submit"
                        value="¡Registrarme!"
                        disabled={!nameEnroll || !emailEnroll}
                        className="text-white-500 bg-yellow-500 hover:bg-teal-500 dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]] inline-block w-full rounded bg-primary px-6 pb-2 pt-2.5 text-sm font-medium leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                      />
                    </div>
                  </div>
                </form>
              </motion.div>
            </ScrollAnimationWrapper>
          </center>
        </div>
      </div>
      <div
        className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
        id="contact"
      >
        <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
          <center>
            <ScrollAnimationWrapper>
              <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
                <h1 className="text-1xl lg:text-2xl xl:text-3xl font-medium text-teal-500 mb-2">
                  ¡Contáctanos!
                </h1>
                <p className="text-black-100 mb-6">Nos encanta saber sobre tí.</p>
                
                <div className="block max-w-lg rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-teal-100">
                  <form onSubmit={submitContactData}>
                    <div
                      className="relative mb-6 mt-4"
                      data-te-input-wrapper-init
                    >
                      <input
                        autoFocus
                        type="text"
                        className="peer block min-h-[auto] w-full rounded border-0 px-3 py-[0.30rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-100"
                        id="exampleInput7"
                        placeholder="Nombre (cómo te gusta que te digan)"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>

                    <div className="relative mb-6" data-te-input-wrapper-init>
                      <input
                        type="email"
                        className="peer block min-h-[auto] w-full rounded border-0 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-100"
                        id="exampleInput8"
                        placeholder="Correo electrónico"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>

                    <div className="relative mb-6" data-te-input-wrapper-init>
                      <input
                        type="tel"
                        className="peer block min-h-[auto] w-full rounded border-0 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-100"
                        id="exampleInput9"
                        placeholder="Número de Whatsapp para contactarte"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                      />
                    </div>

                    <div className="relative mb-6" data-te-input-wrapper-init>
                      <textarea
                        className="peer block min-h-[auto] w-full rounded border-0 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-100"
                        id="exampleFormControlTextarea13"
                        rows="3"
                        placeholder="¿En qué podemos ayudarte?"
                        onChange={(e) => setSubject(e.target.value)}
                        required
                      ></textarea>
                    </div>

                    <input
                      type="submit"
                      value="Click aquí para enviar tu mensaje"
                      disabled={!name || !email || !subject || !phone}
                      className="text-white-500 bg-yellow-500 hover:bg-teal-500 dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]] inline-block w-full rounded bg-primary px-6 pb-2 pt-2.5 text-sm font-medium leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                    />
                  </form>
                </div>
                {/* <a href="" className="font-medium dark:text-teal-100 hover:underline">Ver Aviso de Privacidad</a> */}
              </motion.div>
            </ScrollAnimationWrapper>
          </center>
        </div>
      </div>
    </div>
  );
};

export default Contact;
