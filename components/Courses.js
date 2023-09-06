import React, { useMemo } from "react";
import Image from "next/image";
import ButtonOutline from "./misc/ButtonOutline.";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Courses = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

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
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
            >
              Cursos
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
            >
              <span className="text-teal-500">
                Elige uno de los cursos que sean mejor para tí y explora sus
                oportunidades.
              </span>
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
                <p className="text-lg text-black-600 font-medium my-1 sm:my-7">
                  Curso<br></br>
                  <span className="text-black-500">The Journey of the Game Changer</span>
                </p>
                {/* <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                  <li className="relative check custom-list my-1">
                    Una hora de contenido en una plataforma digital.
                  </li>
                  <li className="relative check custom-list my-1">
                    Un workbook digital con ejercicios prácticos.
                  </li>
                  <li className="relative check custom-list my-1">
                    Un test para identificar en qué etapa del journey del cambio
                    te encuentras ahora.
                  </li>
                </ul> */}
                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-2">
                  <p className="text-2xl text-black-600 text-center mb-2 ">
                    Gratis
                  </p>
                  <ButtonOutline>Seleccionar</ButtonOutline>
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
                <p className="text-lg text-black-600 font-medium my-2 sm:my-7">
                  Packs de 3 ó 6 sesiones individuales{" "}
                </p>
                {/* <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                  <li className="relative check custom-list my-1">
                    Elige un plan de 3 ó 6 sesiones de acompañamiento
                    personalizado.
                  </li>
                  <li className="relative check custom-list my-1">
                    Workbook Digital
                  </li>
                  <li className="relative check custom-list my-1">
                    Test: Autoconocimiento, Estilo de Administración del Tiempo,
                    Estilo de Comunicación.
                  </li>
                  <li className="relative check custom-list my-1">
                    Test para medir nivel de madurez de 13 Competencias
                    Profesionales.
                  </li>
                  <li className="relative check custom-list my-1">
                    Un Journal Reflection (fisico) para registrar tus avances.{" "}
                  </li>
                </ul> */}
                <div className="flex flex-col w-full justify-center flex-none mt-12 mb-8">
                  <ButtonOutline>Seleccionar</ButtonOutline>
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
                <p className="text-lg text-black-600 font-medium my-2 sm:my-7">
                  Workshops para Equipos de Trabajos/Empresas{" "}
                </p>
                {/* <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                  <li className="relative check custom-list my-1">
                    Facilitación de 4 hrs. de sesión grupal teórica y práctica
                    para idear el prototipo de un producto y/o servicio.
                  </li>
                  <li className="relative check custom-list my-1">
                    Workbook Digital con ejercicios prácticos.
                  </li>
                  <li className="relative check custom-list my-1">
                    Test para medir nivel de madurez de 13 Competencias
                    Profesionales.
                  </li>
                  <li className="relative check custom-list my-1">
                    Un Reporte con los Resultados del nivel de madurez de las
                    competencias del equipo.{" "}
                  </li>
                </ul> */}
                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                  <ButtonOutline>Seleccionar</ButtonOutline>
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
