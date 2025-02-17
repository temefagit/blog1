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
import config from "@/config";

const schema = z.object({
  title: z.string().min(1, "Title is required."),
  body: z
    .string()
    .min(10, "The text must be at least 10 characters long.")
    .max(10000, "The text must be at most 10000 characters long."),
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
      const url = `/api/posts`;
      return await axios.post(url, data);
    },
    onSuccess: (data) => {
      console.log("The New Article Successfully Created.", data);
    },
    onError: (error) => {
      console.error("Error creating article:", error);
    },
  });

  const onSubmit = (data: FormValues): void => {
    createArticle.mutate(data);
    form.reset();
  };

  return (
    <Container>
      <div
        dir="ltr"
        className="bg-gray-100 min-h-dvh grid grid-cols-8 gap-x-4 max-[768px]:grid-cols-1 px-5"
      >
        <div className="grid col-span-1"></div>
        <div className="pt-4 min-w-full col-span-6">
          <div>
            <div className="flex flex-row justify-between items-center">
              <Link href="/">
                <Button variant="primary">Back</Button>
              </Link>
              <h2 className="text-lg font-bold">Write a New Article</h2>
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
                        placeholder="Write a title for your article (required)"
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
                <div className="pt-10 pb-10 self-center">
                  <Button
                    type="submit"
                    variant="primary"
                    disabled={
                      !form.formState.isDirty || !form.formState.isValid
                    }
                  >
                    Publish Article
                  </Button>
                </div>
              </form>
            </FormProvider>
          </div>
        </div>
        <div className="grid col-span-1"></div>
      </div>
    </Container>
  );
};