"use client";
import {
  PropsWithChildren,
  DetailedHTMLProps,
  ButtonHTMLAttributes,
  useEffect,
} from "react";
import { Control, useWatch } from "react-hook-form";

type FormValues = {
  title: string;
  body: string;
};

type Props = PropsWithChildren<
  {
    variant?: "primary" | "error";
    control?: Control<FormValues>;
  } & DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
>;

type variantsTypes = Record<"primary" | "error", string>;

export const Button: React.FC<Props> = ({
  variant = "primary",
  control,
  children,
  ...props
}) => {
  const variants: variantsTypes = {
    primary: "bg-zinc-800 hover:bg-zinc-600 hover:shadow-zinc-300/50",
    error: "bg-red-500 hover:bg-red-600 hover:shadow-red-300/50",
  };

  const buttonStyles: string = `${variants[variant]} rounded px-6 pb-2 pt-2.5 text-sm font-medium text-white mt:after:content-['ورود']`;

  if (control) {
    const titleValue = useWatch({
      control,
      name: "title",
      defaultValue: "default",
    });
    console.log(titleValue);
  }

  return (
    <button {...props} className={buttonStyles}>
      {children}
    </button>
  );
};
