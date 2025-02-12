"use client";

import { Button } from "@/common/button";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";
import { Container } from "@/common/container";
import { useForm, Controller, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/common/input";
import { TextArea } from "@/common/textarea";

const schema = z.object({
  title: z.string().min(1, "عنوان الزامی است."),
  body: z
    .string()
    .min(10, "متن باید حداقل ۱۰ کاراکتر داشته باشد.")
    .max(10000, "متن باید حداکثر ۱۰۰۰۰ کاراکتر داشته باشد."),
});


type FormValues = {
  title: string;
  body: string;
};

export const CreateArticle: React.FC = () => {
  const form = useForm<FormValues>({
    defaultValues: {
      title: "",
      body: "",
    },
    resolver: zodResolver(schema),
    reValidateMode: "onChange",
  });

  const createArticle = useMutation({
    mutationFn: async (data: FormValues) => {
      return await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        data
      );
    },
    onSuccess: () => {
      console.log("The New Article Successfully Created.");
    },
  });

  const onSubmit = (data: FormValues): void => {
    createArticle.mutate(data);
    form.reset();
  };  

  return (
    <Container>
      <div className="bg-slate-200 min-h-dvh grid grid-cols-8 gap-x-4 max-[768px]:grid-cols-1 px-5">
        <div className="grid col-span-1"></div>
        <div className="pt-4 min-w-full col-span-5">
          <div>
            <div className="flex flex-row justify-between items-center">
              <Link href="/">
                <Button variant="error">بازگشت</Button>
              </Link>
              <h2 className="text-lg font-bold">نوشتن مقاله جدید</h2>
            </div>
            <FormProvider {...form}>
              <form
                className="flex flex-col pt-4"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                <Controller
                  control={form.control}
                  name="title"
                  render={({ field, fieldState }) => (
                    <div>
                      <Input
                        placeholder="یک عنوان برای مقاله خود بنویسید (الزامی)"
                        {...field}
                      />
                      <p
                        className={`${
                          fieldState.error
                            ? 'p-2 my-2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 role="alert"'
                            : ""
                        }`}
                      >
                        {fieldState.error?.message}
                      </p>
                    </div>
                  )}
                />
                <Controller
                  control={form.control}
                  name="body"
                  render={({ field, fieldState }) => (
                    <div>
                      <TextArea {...field} />
                      <p
                        className={`${
                          fieldState.error
                            ? 'p-2 my-2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 role="alert"'
                            : ""
                        }`}
                      >
                        {fieldState.error?.message}
                      </p>
                    </div>
                  )}
                />
                <div className="pt-10 pb-10">
                  <Button
                    type="submit"
                    variant="primary"
                    disabled={!form.formState.isDirty || !form.formState.isValid}
                  >
                    انتشار نوشته
                  </Button>
                </div>
              </form>
            </FormProvider>
          </div>
        </div>
        <div className="flex flex-col flex-start col-span-1 pt-24 max-[768px]:pt-5 md:col-span-2">
          <div className="flex flex-col justify-evenly">
            <div className="flex">
              <h3 className="text-base font-medium">سطح دسترسی:</h3>
            </div>
            <div className="flex flex-col py-3">
              <div className="py-2">
                <input name="access" type="radio" value="عمومی"></input>
                <label className="px-3">عمومی</label>
              </div>
              <div className="py-2">
                <input
                  name="access"
                  type="radio"
                  value="فقط دنبال کنندگان"
                ></input>
                <label className="px-3">فقط دنبال کنندگان</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid col-span-1"></div>
    </Container>
  );
};
