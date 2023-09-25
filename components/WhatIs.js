import React, { useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const WhatIs = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full"
      id="whatis"
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
                  src="/assets/img-085131-1400x1400.jpeg"
                  alt="Make Change Happen"
                  quality={100}
                  width={600}
                  height={600}
                  layout="responsive"
                />
              </motion.div>
            </div>

            <div className="flex flex-col justify-center items-start row-start-1 sm:row-start-1">
              <h1 className="text-2xl lg:text-3xl xl:text-4xl font-medium text-teal-500 leading-normal">
                ¿Qué es Make Change Happen?
              </h1>
              <p className="text-justify text-black-500 mt-6 mb-2">
                Es un{" "}
                <span className="text-teal-500">
                  framework de autodescubrimiento
                </span>
                , que ayuda y acompaña a las personas en la evolución de un
                mindset.
              </p>

              <p className="text-justify text-black-500 mt-2 mb-6">
                Creemos que a través de pequeños ajustes en la rutina del día
                con día, las personas pueden encontrar la motivación para{" "}
                <span className="text-teal-500">
                  tomar la decisión y acción de RE-INVENTARSE y RE-DISEÑAR
                </span>{" "}
                la trayectoria de su vida personal y profesional de manera
                consciente.
              </p>
            </div>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default WhatIs;
