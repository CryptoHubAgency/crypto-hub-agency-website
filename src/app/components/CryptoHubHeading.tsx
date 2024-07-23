"use client";

import {HTMLProps} from "react";
import tw from "tailwind-styled-components";

export interface IHeadingProps extends HTMLProps<HTMLHeadingElement> {
  $variant?: "bold" | "medium";
  $bold?: boolean;
  $medium?: boolean;
  $normal?: boolean;
  $styleAs?: string;
}

export const CryptoHubHeadingStyles: Record<string, string> = {
  h1: "font-gothic text-3xl md:text-4xl lg:text-5xl lg:leading-[61.82px]",
  h2: "font-gothic text-xl md:text-2xl lg:text-4xl",
  h3: "font-gothic text-base md:text-xl lg:text-2xl",
  h4: "font-gothic text-base md:text-lg lg:text-xl",
};

const variants = {
  bold: "font-bold",
  medium: "font-medium",
  normal: "font-normal",
};

export const CryptoHubHeading = tw.h1<IHeadingProps>`
  font-gothic font-bold
  ${({$styleAs = "h1"}) =>
    CryptoHubHeadingStyles?.[$styleAs] ?? CryptoHubHeadingStyles["h1"]}
  ${({$variant = "bold", $medium, $normal}) =>
    variants[$normal ? "normal" : $medium ? "medium" : $variant]}
`;

export default CryptoHubHeading;
