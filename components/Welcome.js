import React, { useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Welcome = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const [activeLink, setActiveLink] = useState(null);

  return (
    <div
      className="max-w-screen-xl mt-24 px-8 xl:px-16 py-2 mx-auto"
      id="welcome"
    >
      <ScrollAnimationWrapper>
        <motion.div
          initial="onscreen"
          className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
          variants={scrollAnimation}
        >
          <div className="flex flex-col justify-center items-start row-start-1">
            <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium text-teal-500 leading-normal">
              Bienvenid@
            </h1>

            <p className="text-justify text-sm sm:text-lg text-black-500 mt-4 mb-4">
              Si aterrizaste en mi sitio web, es porque probablemente seas un{" "}
              <span className="text-teal-500">GAME CHANGER</span>, en busca de
              herramientas prácticas, ágiles y útiles para hacer del{" "}
              <span className="text-teal-500">AUTODESARROLLO</span> un{" "}
              <span className="text-teal-500">SUPERPODER</span> que transforme
              tu estilo de vida y fortalezca tu Liderazgo.
            </p>

            <p className="text-justify text-sm sm:text-lg mb-4 sm:mb-8">
              En este espacio encontrarás{" "}
              <span className="text-teal-500">
                podcast, cursos online gratuitos, sesiones individuales y
                workshops para equipos de trabajo.
              </span>
              <br />
            </p>

            <a
              href="https://www.youtube.com/watch?v=MiK1_JeKR30"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg bg-yellow-500 hover:shadow-teal-md transition-all outline-none undefined"
            >
              Ver Video
            </a>
          </div>

          <div className="flex w-full">
            <motion.div className="h-full w-full" variants={scrollAnimation}>
              <Image
                src="/assets/img-035023-1400x1400.jpeg"
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
  );
};

export default Welcome;
