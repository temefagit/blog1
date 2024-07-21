"use client";

import React from "react";

type Props = {
  placeholder?: string;
  onChange?: (
    e:
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.DetailedHTMLProps<
          React.TextareaHTMLAttributes<HTMLTextAreaElement>,
          HTMLTextAreaElement
        >
  ) => void;
};

export const TextArea: React.FC<Props> = ({ ...props }) => {
  const inputStyles: string =
    "w-full border-slate-300 p-2 rounded-md focus:border-sky-500 focus:outline-none mt-4 h-64 text-gray-400 leading-8 text-sm border min-w-fit align-text-top";

  return <textarea className={inputStyles} {...props} />;
};
