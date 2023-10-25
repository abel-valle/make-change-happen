import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { Helmet } from "react-helmet";

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

            <div className="flex flex-col justify-center items-center row-start-1 sm:row-start-1">
              <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-medium text-teal-500 leading-normal">
                Sesiones Individuales
              </h1>

              <p className="text-justify text-sm sm:text-lg text-black-500 mt-6 mb-2">
                Mi compromiso contigo es{" "}
                <span className="text-teal-500">acompañar tu proceso</span> a
                través de preguntas que faciliten la clarificación de la visión
                de cambio a lograr. Además de brindarte herramientas digitales
                como: workbooks, journal de reflexión y tests que serán una guía
                ágil y útil para apoyar tu autodescubrimiento.
              </p>
              <p className="text-justify text-sm sm:text-lg mt-2 mb-2">
                Las{" "}
                <span className="text-teal-500">
                  sesiones individuales son el comienzo
                </span>
                , tus logros serán el resultado del compromiso, disciplina,
                frecuencia y acción para dar seguimiento a tu plan.
              </p>
              <p className="text-justify text-sm sm:text-lg text-teal-500 mt-2 mb-6">
                <b>
                  ¡Cuando estés listo, estoy aquí para acompañarte en tu viaje!
                </b>
              </p>
              <a
                href="https://www.psychologytoday.com/mx/psicologos/sandra-roxana-serrato-solis-guadalajara-ja/1165446?utm_campaign=TD_SHS_9_1&utm_medium=Email&utm_source=TDE"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium tracking-wide py-2 px-5 sm:px-8 mb-4 text-white-500 bg-yellow-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-teal-500 hover:text-white-500 transition-all hover:shadow-teal"
              >
                Agendar Sesión
              </a>

              {/* Professional verification provided by Psychology Today */}
              <a
                href="https://www.psychologytoday.com/profile/1165446"
                className="sx-verified-seal mb-4"
              ></a>
              <script
                type="text/javascript"
                src="https://member.psychologytoday.com/verified-seal.js"
                data-badge="13"
                data-id="1165446"
                data-code="aHR0cHM6Ly93d3cucHN5Y2hvbG9neXRvZGF5LmNvbS9hcGkvdmVyaWZpZWQtc2VhbC9zZWFscy9bQkFER0VdL3Byb2ZpbGUvW1BST0ZJTEVfSURdP2NhbGxiYWNrPXN4Y2FsbGJhY2s="
              ></script>

              {/* Professional verification provided by Psicology and Mind */}
              <a
                href="https://psicologiaymente.com/psicologos/2075591/sandra-roxana-serrato-solis"
                id="pym-pro-url"
                data-professional-id="2075591"
                rel="nofollow"
                data-pym-widget-version="1"
              >
                Sandra Roxana Serrato Solis - psicologiaymente.com
              </a>
              <Helmet>
                <script src="/assets/psicoymente.js" type="text/javascript" />
              </Helmet>

            </div>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>

      <div className="max-w-screen-xl px-6 sm:px-2 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <ScrollAnimationWrapper>
          <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-medium text-teal-500 leading-normal">
            Packs de Sesiones
          </h1>

          <motion.div
            className="py-0 w-full px-0 mb-14"
            variants={scrollAnimation}
          >
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
