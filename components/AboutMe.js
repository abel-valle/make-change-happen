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
        className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
        id="aboutme"
      >
        <div className="max-w-screen-xl mt-4 px-8 xl:px-16 mx-auto">
          <ScrollAnimationWrapper>
            <motion.div
              className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
              variants={scrollAnimation}
            >
              <div className="flex flex-col justify-center items-start row-start-2 sm:row-start-1">
                <h1 className="text-1xl lg:text-2xl xl:text-3xl font-medium text-black-500">
                  ¡Hola!
                </h1>
                <h1 className="text-2xl lg:text-3xl xl:text-4xl font-medium text-teal-500">
                  Mi nombre es Roxana Serrato
                </h1>
                <p className="text-justify text-black-500 mt-6 mb-2">
                  Cuento con más de 14 años de experiencia diseñando e
                  implementando estrategias en Desarrollo Organizacional y
                  Gestión del Cambio, dirigidas para diversos sectores como son:
                  Organizaciones Civiles, Consultoría en RRHH, Servicios de
                  Resguardo de Información, Desarrollo de Software, Aseguradoras
                  y Retail.
                </p>
                <p className="text-justify text-black-500 mt-2 mb-2">
                  Actualmente soy Emprendedora Digital, Speaker y Consultor en
                  Gestión del Cambio y creadora del framework de
                  autoconocimiento{" "}
                  <span className="text-teal-500">Make Change Happen</span>, que
                  tiene por misión ayudar y acompañar a las personas en la
                  evolución de un mindset a través de sesiones individuales,
                  cursos online y workshops para equipos de trabajo y empresas.
                </p>
              </div>
              <div className="flex w-full">
                <motion.div
                  className="h-full w-full"
                  variants={scrollAnimation}
                >
                  <Image
                    src="/assets/img-7093-1024x683.jpg"
                    alt="Make Change Happen"
                    quality={100}
                    width={600}
                    height={400}
                    layout="responsive"
                  />
                </motion.div>
              </div>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>

      <div className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14">
        <div className="max-w-screen-xl mt-4 px-8 xl:px-16 mx-auto">
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
                    src="/assets/img-7094-640x640.jpeg"
                    alt="Make Change Happen"
                    quality={100}
                    width={600}
                    height={600}
                    layout="responsive"
                  />
                  <p className="text-center mt-4">
                    ¡Me encanta ayudar y acompañar a las personas que toman la
                    decisión y acción de transformar su mindset para{" "}
                    <span className="text-teal-500">RE-INVENTARSE</span>y{" "}
                    <span className="text-teal-500">RE-DISEÑAR</span> la
                    trayectoria de su vida personal y profesional!
                  </p>
                </motion.div>
              </div>

              <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
                <h1 className="text-1xl lg:text-2xl xl:text-3xl font-medium text-teal-500">
                  Formación y Estudios
                </h1>
                <p className="text-justify text-black-500 mt-4 mb-2">
                  Licenciatura en Psicología Organizacional – UNIVERSIDAD
                  AUTÓNOMA DE QUERÉTARO 2004 - 2008, Titulada con mención
                  honorífica
                </p>
                <p className="mb-2">
                  Diplomado en Habilidades Gerenciales – FINDES
                </p>
                <p className="mb-2">
                  Diplomado en Prevención de Conductas de Riesgo– Instituto
                  Humanista Gestalt
                </p>

                <h1 className="text-1xl lg:text-2xl xl:text-3xl font-medium text-teal-500 mt-4">
                  Certificaciones
                </h1>
                <p className="mt-4 mb-2">
                  2023 – Certificación Internacional en Coaching – Tec de
                  Monterrey
                </p>
                <p className="mb-2">
                  2022 - Agile Change Management Certified by Change Americas &
                  Silicon Valley
                </p>
                <p className="mb-2">
                  2021 - PROSCI Certified Change Management Practitioner
                </p>
                <p className="mb-2">
                  2019 – SCRUM MÉXICO – Lean Change Management
                </p>
                <p className="mb-2">
                  2018 - SCRUM MÉXICO & KLEE - FACILITACIÓN GRÁFICA
                </p>
                <p className="mb-2">2018 - SCRUM MÉXICO - MANAGEMENT 3.0</p>
                <p className="mb-2">
                  2018 - DIGITAL BUSINESS - MARKETING INBOUND
                </p>
              </div>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
