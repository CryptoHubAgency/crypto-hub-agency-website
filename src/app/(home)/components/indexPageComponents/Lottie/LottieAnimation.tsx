"use client";

import {FC} from "react";
import Lottie from "lottie-react";
import cryptoAnimation from "@/assets/cryptoAnimation.json";

interface Props {
  className?: string;
}

const LottieAnimation: FC<Props> = ({className}): JSX.Element => {
  return (
    <div
      className={`flex justify-center items-center w-full h-full ${className}`}
    >
      <Lottie animationData={cryptoAnimation} loop={true} />
    </div>
  );
};

export default LottieAnimation;
