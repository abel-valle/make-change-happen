import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const AboutMe = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div>
      <div
        className="bg-gradient-to-b from-white-300 to-white-500 w-full"
        id="aboutme"
      >
        <div className="max-w-screen-xl px-8 xl:px-16 mx-auto">
          <ScrollAnimationWrapper>
            <motion.div
              className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 sm:py-16"
              variants={scrollAnimation}
            >
              <div className="flex flex-col justify-center items-start row-start-1 sm:row-start-1">
                <h1 className="text-xl lg:text-2xl xl:text-3xl font-medium text-black-500">
                  ¡Hola!
                </h1>
                <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-medium text-teal-500">
                  Mi nombre es Roxana Serrato
                </h1>
                <p className="text-justify text-black-500 text-sm sm:text-lg mt-6 mb-2">
                  Cuento con más de 14 años de experiencia, diseñando e
                  implementando estrategias en Desarrollo Organizacional y
                  Gestión del Cambio, dirigidas para diversos sectores como son:
                  Organizaciones Civiles, Consultoría en RRHH, Servicios de
                  Resguardo de Información, Desarrollo de Software, Aseguradoras
                  y Retail.
                </p>

                <p className="text-justify text-sm sm:text-lg mt-2 sm:mb-2">
                  En la actualidad soy Emprendedora Digital y{" "}
                  <span className="text-teal-500">
                    creadora del framework de autodescubrimiento Make Change
                    Happen.
                  </span>
                </p>
              </div>
              <div className="flex w-full">
                <motion.div
                  className="h-full w-full"
                  variants={scrollAnimation}
                >
                  <Image
                    src="/assets/img-105445-1280x1600.jpeg"
                    alt="Make Change Happen"
                    quality={100}
                    width={240}
                    height={300}
                    layout="responsive"
                  />
                </motion.div>
              </div>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>

      <div className="bg-gradient-to-b from-white-300 to-white-500 w-full">
        <div className="max-w-screen-xl px-8 xl:px-16 mx-auto">
          <ScrollAnimationWrapper>
            <motion.div
              className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
              variants={scrollAnimation}
            >
              <div className="flex w-full">
                <motion.div
                  className="h-full w-full"
                  variants={scrollAnimation}
                >
                  <Image
                    src="/assets/img-035117-1400x1400.png"
                    alt="Make Change Happen"
                    quality={100}
                    width={600}
                    height={600}
                    layout="responsive"
                  />
                </motion.div>
              </div>

              <div className="flex flex-col justify-center items-start row-start-1 sm:row-start-1">
                <h1 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-medium text-teal-500">
                  Formación y Estudios
                </h1>

                <p className="text-black-500 text-sm sm:text-lg mt-4 mb-2">
                  Licenciatura en Psicología Organizacional – UAQ 2004 - 2008,
                  Titulada con mención honorífica
                </p>

{/* 
                <p className="text-black-500 text-sm sm:text-lg mt-4 mb-2">
                  Licenciatura en Psicología Organizacional – UNIVERSIDAD
                  AUTÓNOMA DE QUERÉTARO 2004 - 2008, Titulada con mención
                  honorífica
                </p>
*/}
                <p className="mb-2">
                  Diplomado en Habilidades Gerenciales – FINDES
                </p>

                <p className="text-sm sm:text-lg mb-2">
                  Diplomado en Prevención de Conductas de Riesgo – Instituto
                  Humanista Gestalt
                </p>

                <h1 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-medium text-teal-500 mt-4">
                  Certificaciones
                </h1>
                <p className="text-sm sm:text-lg mt-4 mb-2">
                  2023 – Certificación Internacional en Coaching Ejecutivo –
                  Tecnológico de Monterrey
                </p>

                <p className="text-sm sm:text-lg mb-2">
                  2022 - Agile Change Management Certified by Change Americas &
                  Silicon Valley
                </p>

                <p className="text-sm sm:text-lg mb-2">
                  2021 - PROSCI Certified Change Management Practitioner
                </p>

                <p className="text-sm sm:text-lg mb-2">
                  2019 – SCRUM MÉXICO – Lean Change Management
                </p>
{/*                                
                <p className="text-sm sm:text-lg mb-2">
                  2018 - SCRUM MÉXICO & KLEE - FACILITACIÓN GRÁFICA
                </p>
*/}
                <p className="text-sm sm:text-xl mb-2">2018 - SCRUM MÉXICO - MANAGEMENT 3.0</p>
{/*             
                <p className="text-sm sm:text-lg mb-2">
                  2018 - DIGITAL BUSINESS - MARKETING INBOUND
                </p>
*/}
              </div>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
