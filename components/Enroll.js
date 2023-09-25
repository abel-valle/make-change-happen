import React, { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Enroll = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const { register, handleSubmit, errors, formState } = useForm();
  const [isEnrollSuccess, setIsEnrollSuccess] = useState(false);

  const [nameEnroll, setNameEnroll] = useState("");
  const [emailEnroll, setEmailEnroll] = useState("");

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

      setIsEnrollSuccess(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="enroll"
    >
      <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <center>
          <ScrollAnimationWrapper>
            <motion.div variants={scrollAnimation}>
              <h1 className="text-xl sm:text-2xl lg:text-2xl xl:text-3xl font-medium text-teal-500 mb-2">
                Regístrate
              </h1>
              <p className="text-sm sm:text-lg text-black-100 mb-6">
                Además, recibirás noticias de nuestros cursos.
              </p>

              <form onSubmit={submitEnrollData}>
                <div className="grid bg-yellow-100 gap-4 mb-6 sm:grid-cols-3 rounded-lg mb-8 px-8">

                  <div className="mt-6 sm:mt-8 sm:mb-8">
                    <input
                      type="text"
                      className="peer block text-sm sm:text-md min-h-[auto] w-full rounded border-0 px-3 py-[0.5rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200"
                      placeholder="Nombre (cómo te gusta que te digan)"
                      value={nameEnroll}
                      onChange={(e) => setNameEnroll(e.target.value)}
                      required
                    />
                  </div>
                  <div className="sm:mt-8 sm:mb-8">
                    <input
                      type="email"
                      className="peer block text-sm sm:text-md min-h-[auto] w-full rounded border-0 px-3 leading-[2.5] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200"
                      placeholder="Correo electrónico"
                      value={emailEnroll}
                      onChange={(e) => setEmailEnroll(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mt-2 mb-6 sm:mt-8 sm:mb-8">
                    <input
                      type="submit"
                      value="¡Registrarme!"
                      disabled={
                        !nameEnroll || !emailEnroll || formState.isSubmitting
                      }
                      className="py-3 px-12 lg:py-2 lg:px-16 text-white-500 font-semibold rounded-lg bg-yellow-500 hover:shadow-teal-md transition-all outline-none undefined"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                    />
                  </div>
                </div>
              </form>

              {isEnrollSuccess && (
                <div className="text-teal-500">Tu registro se ha enviado.</div>
              )}
            </motion.div>
          </ScrollAnimationWrapper>
        </center>
      </div>
    </div>
  );
};

export default Enroll;
