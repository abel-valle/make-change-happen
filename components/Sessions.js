import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Sessions = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full"
      id="sessions"
    >
      <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <ScrollAnimationWrapper>
          <motion.div
            className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
            variants={scrollAnimation}
          >
            <div className="flex w-full">
              <motion.div className="h-full w-full" variants={scrollAnimation}>
                <Image
                  src="/assets/img-035858-1400x1400.png"
                  alt="Make Change Happen"
                  quality={100}
                  width={600}
                  height={600}
                  layout="responsive"
                />
              </motion.div>
            </div>

            <div className="flex flex-col justify-center items-start row-start-2 sm:row-start-1">
              <h1 className="text-2xl lg:text-3xl xl:text-4xl font-medium text-teal-500 leading-normal">
                Sesiones Individuales
              </h1>

              <p className="text-justify text-black-500 mt-6 mb-2">
                Mi compromiso contigo es{" "}
                <span className="text-teal-500">acompañar tu proceso</span> a
                través de preguntas que faciliten la clarificación de la visión
                de cambio a lograr.
              </p>
              {/* 
              Además de brindarte herramientas digitales
                como: workbooks, journal de reflexión y tests que serán una guía
                ágil y útil para apoyar tu autodescubrimiento.
 */}
              <p className="text-justify mt-2 mb-2">
                Las{" "}
                <span className="text-teal-500">
                  sesiones individuales son el comienzo
                </span>
                , tus logros serán el resultado del compromiso, disciplina,
                frecuencia y acción para dar seguimiento a tu plan.
              </p>
              <p className="text-justify mt-2 mb-8">
                <span className="text-teal-500">
                  <b>
                    ¡Cuando estés listo, estoy aquí para acompañarte en tu
                    viaje!
                  </b>
                </span>
              </p>
            </div>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>

      <div className="max-w-screen-xl px-6 sm:px-2 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <h1 className="text-2xl lg:text-3xl xl:text-4xl font-medium text-teal-500 leading-normal">
          Packs de Sesiones
        </h1>
        <ScrollAnimationWrapper>
          <motion.div className="py-0 w-full px-0 mb-14" variants={scrollAnimation}>
            <Image
              src="/assets/img-104947-1600x900.png"
              alt="Make Change Happen"
              quality={100}
              width={600}
              height={338}
              layout="responsive"
            />
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Sessions;
