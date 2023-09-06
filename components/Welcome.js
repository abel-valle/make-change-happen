import React, { useMemo } from "react";
import Image from "next/image";
import ButtonPrimary from "./misc/ButtonPrimary";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Welcome = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="start">
      <ScrollAnimationWrapper>
        <motion.div
          className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
          variants={scrollAnimation}
        >
          <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
              <strong>Bienvenido</strong>
            </h1>
            <h2>Este es el lugar donde los cambios suceden.</h2>
            <p className="text-justify text-black-500 mt-4 mb-4">
              Si aterrizaste en mi sitio web, es porque probablemente seas un{" "}
              <span className="text-teal-500">Gamechanger</span>, en busca de
              herramientas prácticas, ágiles y útiles para hacer del{" "}
              <span className="text-teal-500">AUTODESARROLLO</span> un{" "}
              <span className="text-teal-500">SUPERPODER</span> que transforme
              tu estilo de vida y fortalezca tu Liderazgo para inspirar y guiar
              un cambio de mindset dentro de tu entorno personal y profesional.
            </p>

            <p className="text-justify mb-4">
              En este espacio encontrarás{" "}
              <span className="text-teal-500">
                cursos online gratuitos, sesiones individuales y herramientas
                digitales
              </span>{" "}
              para tu autoconocimiento y desarrollo personal.
            </p>

            <p className="text-justify mb-12">
              <i>
                Toma una taza de café o té…{" "}
                <span className="text-teal-500">
                  ¡Comencemos juntos este Journey del Cambio!
                </span>
              </i>
            </p>
            <ButtonPrimary>Comienza ahora</ButtonPrimary>
          </div>
          <div className="flex w-full">
            <motion.div className="h-full w-full" variants={scrollAnimation}>
              <Image
                src="/assets/img-6931-1024x683.jpg"
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
  );
};

export default Welcome;
