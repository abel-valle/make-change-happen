import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Sessions = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="aboutme"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <ScrollAnimationWrapper>
          <motion.div
            className="flex flex-col justify-center items-center rounded-xl py-4 px-6 lg:px-12 xl:px-20"
            variants={scrollAnimation}
          >
            <div className="flex flex-col justify-center">
              <h1 className="text-2xl lg:text-3xl xl:text-4xl font-medium text-teal-500">
                Sesiones Individuales
              </h1>
              <p className="text-justify text-black-500 mt-6 mb-2">
                Mi compromiso contigo es{" "}
                <span className="text-teal-500">acompañar tu proceso</span> a
                través de preguntas que faciliten la clarificación de la visión
                de cambio a lograr. Además de brindarte herramientas digitales
                como: workbooks, journal de reflexión y tests que serán una
                guía ágil y útil para apoyar tu autodescubrimiento.
              </p>

              <p className="text-justify mt-2 mb-2">
                Las{" "}
                <span className="text-teal-500">
                  sesiones individuales son el comienzo
                </span>
                , los avances serán el resultado de tu compromiso, disciplina,
                tiempo invertido y responsabilidad para tomar acción y dar
                seguimiento a tu plan.
              </p>
              <p className="text-justify mt-2 mb-2">
                Las personas tenemos el poder de tomar el control de nuestra
                realidad, para vivir con intención y consciencia.
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
            <div className="flex w-full">
              <motion.div className="h-full w-full" variants={scrollAnimation}>
                <Image
                  src="/assets/img-104332-1600x900.png"
                  alt="Make Change Happen"
                  quality={100}
                  width={600}
                  height={338}
                  layout="responsive"
                />
              </motion.div>
            </div>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Sessions;
