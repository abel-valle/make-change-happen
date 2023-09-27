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
                <div className="grid bg-yellow-100 gap-4 px-8 mb-2 sm:gap-6 sm:mb-6 sm:grid-cols-4 rounded-xl">
                  <div className="mt-20 sm:mt-2 sm:col-start-2 sm:col-span-2 sm:px-8">

                    <input
                      type="text"
                      className="mt-8 mb-3 text-sm sm:text-md peer block h-8 min-h-[auto] w-full rounded border-0 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-100"
                      placeholder="Nombre (cómo te gusta que te digan)"
                      value={nameEnroll}
                      onChange={(e) => setNameEnroll(e.target.value)}
                      required
                    />

                    <input
                      type="email"
                      className="mt-3 mb-12 sm:mb-3 text-sm sm:text-md peer block h-8 min-h-[auto] w-full rounded border-0 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-100"
                      placeholder="Correo electrónico"
                      value={emailEnroll}
                      onChange={(e) => setEmailEnroll(e.target.value)}
                      required
                    />

                    <input
                      type="submit"
                      value="¡Registrarme!"
                      disabled={
                        !nameEnroll || !emailEnroll || formState.isSubmitting
                      }
                      className="mt-3 mb-8 py-3 px-8 sm:mb-6 sm:px-16 text-white-500 font-semibold rounded-lg bg-yellow-500 hover:shadow-teal-md transition-all outline-none undefined"
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
