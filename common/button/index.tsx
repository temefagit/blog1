"use client";
import { useWatchHook } from "@/hooks/useWatch";
import {
  PropsWithChildren,
  DetailedHTMLProps,
  ButtonHTMLAttributes,
} from "react";

type Props = PropsWithChildren<
  {
    variant?: "primary" | "secondary" | "error";
  } & DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
>;

type variantsTypes = Record<"primary" | "secondary" | "error", string>;

export const Button: React.FC<Props> = ({
  variant = "primary",
  children,
  ...props
}) => {
  const variants: variantsTypes = {
    primary: "bg-zinc-800 hover:bg-zinc-600 hover:shadow-zinc-300/50",
    secondary: "bg-blue-500 hover:bg-blue-600 hover:shadow-blue-300/50",
    error: "bg-red-500 hover:bg-red-600 hover:shadow-red-300/50",
  };

  const buttonStyles: string = `${variants[variant]} rounded px-6 pb-2 pt-2.5 text-sm font-medium text-white mt:after:content-['ورود']`;
  const disbableButtonStyles: string =
    "bg-zinc-400 rounded px-6 pb-2 pt-2.5 text-sm font-medium opacity-50 cursor-not-allowed";

  console.log(useWatchHook("title"));

  return (
    <button
      {...props}
      className={`${buttonStyles} ${
        props.disabled ? disbableButtonStyles : ""
      }`}
    >
      {children}
    </button>
  );
};