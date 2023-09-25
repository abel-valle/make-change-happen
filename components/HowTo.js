import React, { useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const HowTo = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full"
      id="howto"
    >
      <div className="max-w-screen-xl px-8 xl:px-16 mx-auto">
        <ScrollAnimationWrapper>
          <motion.div
            className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
            variants={scrollAnimation}
          >
            <div className=" flex flex-col justify-center items-start row-start-1 sm:row-start-1">
              <h1 className="text-2xl lg:text-3xl xl:text-4xl font-medium text-teal-500 leading-normal">
                ¿Cómo logramos desarrollar un mindset de Game Changer?
              </h1>

              <p className="text-justify text-black-500 mt-6 mb-2">
                Un{" "}
                <span className="text-teal-500">Mindset de Game Changer</span>,
                se basa en el pensamiento de que cada persona es responsable de
                tomar la decisión y acción para diseñar una visión clara de lo
                que quiere lograr en su vida. Un{" "}
                <span className="text-teal-500">
                  framekwork será la guía que te acompañará paso a paso a través
                  de 5 niveles
                </span>{" "}
                para obtener los cambios, avances y resultados de una forma más
                divertida y ágil.
              </p>
{/* 
              <p className="text-justify mt-2 mb-2">
                Queremos que cada herramienta que tomes en{" "}
                <span className="text-teal-500">
                  Make Change Happen, impacte de manera positiva en ti
                </span>
                , apoyándote en lograr la vida que te genera bienestar y te
                conecta con tu <span className="text-teal-500">SUPERPODER</span>
                .
              </p>
 */}              
            </div>

            <div className="flex w-full">
              <motion.div className="h-full w-full" variants={scrollAnimation}>
                <Image
                  src="/assets/img-110032-1400x1400.png"
                  alt="Make Change Happen"
                  quality={100}
                  width={600}
                  height={600}
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

export default HowTo;
