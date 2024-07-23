"use client";

import {HTMLProps} from "react";
import tw from "tailwind-styled-components";

interface IParagraphProps extends HTMLProps<HTMLParagraphElement> {
  $variant?: "bold" | "medium" | "normal";
  $lg?: boolean;
  $base?: boolean;
  $sm?: boolean;
  $xs?: boolean;
  $bold?: boolean;
  $medium?: boolean;
  $normal?: boolean;
}

const styles: Record<string, string> = {
  $lg: "text-base md:text-lg",
  $base: "text-sm md:text-base",
  $sm: "text-xs md:text-sm",
  $xs: "text-xs",
};

const variants = {
  bold: "font-bold",
  medium: "font-medium",
  normal: "font-normal",
};

export const CryptoHubParagraph = tw.p<IParagraphProps>`
  font-gotham
  ${({$lg, $sm, $xs}) =>
    styles?.[$lg ? "$lg" : $sm ? "$sm" : $xs ? "$xs" : "$base"] ?? ""}
  ${({$variant = "normal", $bold, $medium}) =>
    variants[$bold ? "bold" : $medium ? "medium" : $variant]}
`;

export default CryptoHubParagraph;
