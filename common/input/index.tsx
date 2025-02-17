"use client";
import React from 'react';

type Props = {
  placeholder?: string;
  onChange?: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.DetailedHTMLProps<
          React.InputHTMLAttributes<HTMLInputElement>,
          HTMLInputElement
        >
  ) => void;
};

export const Input: React.FC<Props> = ({ ...props }) => {
  const inputStyles: string =
    "w-full border-slate-300 p-2 rounded-md focus:border-sky-500 focus:outline-none mt-4 pt-2 pr-2 text-gray-400 leading-4 text-sm border";

  return <input className={inputStyles} {...props} />;
};
