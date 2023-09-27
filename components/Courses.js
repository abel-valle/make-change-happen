import React, { useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { Link as LinkScroll } from "react-scroll";

const Courses = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const [activeLink, setActiveLink] = useState(null);

  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="courses"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-medium text-black-600 leading-relaxed"
            >
              <span className="text-teal-500">Cursos</span>
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
            >
              <p className="text-sm sm:text-lg">
                <span className="text-teal-500">
                  Elige el plan que sea mejor para ti y explora sus
                  oportunidades.
                </span>
              </p>
              <p className="text-sm sm:text-lg">
                En este espacio encontrarás cursos online, packs de sesiones
                individuales y workshops.
              </p>
            </motion.p>
          </ScrollAnimationWrapper>
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                  <Image
                    src="/assets/Free.png"
                    width={145}
                    height={165}
                    alt="Plan Básico"
                  />
                </div>
                <p className="text-sm sm:text-lg text-black-500 font-medium my-1 sm:my-7">
                  The Journey of the Game Changer
                </p>

                <div className="flex flex-col w-full justify-center flex-none mt-2 mb-8">
                  <p className="text-sm sm:text-xl text-black-500 text-center mt-4 mb-4">
                    Test Gratuito
                  </p>

                  <a
                    href="https://forms.gle/9x5VJ4fVAFDTkbGd8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium tracking-wide py-2 px-5 sm:px-8 text-white-500 bg-teal-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-yellow-500 hover:text-white-500 transition-all hover:shadow-teal"
                  >
                     Prueba Aquí
                  </a>

                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                  <Image
                    src="/assets/Standard.png"
                    width={145}
                    height={165}
                    alt="Plan Estándar"
                  />
                </div>
                <p className="text-sm sm:text-lg text-black-500 font-medium my-2 sm:my-7">
                  Packs de sesiones individuales{" "}
                </p>

                <div className="flex flex-col w-full justify-center flex-none mt-12 mb-8">
                  <LinkScroll
                    activeClass="active"
                    to="sessions"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    onSetActive={() => {
                      setActiveLink("sessions");
                    }}
                    className="font-medium tracking-wide py-2 px-5 sm:px-8 text-white-500 bg-teal-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-yellow-500 hover:text-white-500 transition-all hover:shadow-teal"
                  >
                    Conoce más
                  </LinkScroll>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <div className="p-4 lg:p-0 mt-2 lg:mt-16">
                  <Image
                    src="/assets/Premium.png"
                    width={145}
                    height={165}
                    alt="Plan Premium"
                  />
                </div>
                <p className="text-sm sm:text-lg text-black-500 font-medium my-2 sm:my-7">
                  Workshops para Equipos de Trabajos/Empresas{" "}
                </p>

                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                  <LinkScroll
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    onSetActive={() => {
                      setActiveLink("contact");
                    }}
                    className="font-medium tracking-wide py-2 px-5 sm:px-8 text-white-500 bg-teal-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-yellow-500 hover:text-white-500 transition-all hover:shadow-teal"
                  >
                    Contáctanos
                  </LinkScroll>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
