import React, { useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import YouTubePlayer from "./YouTubePlayer"

const WhatIs = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="whatis"
    >
      <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
          <motion.h3
              variants={scrollAnimation}
              className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-medium text-black-600 leading-relaxed mb-8"
            >
              <span className="text-teal-500">¿Qué es Make Change Happen?</span>
            </motion.h3>
            <div className="flex flex-col justify-center items-center lg:px-12 xl:px-20">
              <YouTubePlayer videoId="h1piCCocaOc" />
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default WhatIs;
