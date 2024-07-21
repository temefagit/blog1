'use client';

import { useFormContext, useWatch } from "react-hook-form";

export const useWatchHook = (fieldName: string): string => {

  const formControl = useFormContext();
  const value = formControl
    ? useWatch({
        control: formControl?.control,
        name: fieldName,
        defaultValue: "مقدار پیش فرض",
      })
    : "";

  return value;
};
