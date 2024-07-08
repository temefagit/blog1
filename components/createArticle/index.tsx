"use client";

import { useState } from "react";
import { Button } from "@/common/button";
import { Container } from "@/common/container/index";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";

export const CreateArticle: React.FC = () => {

  const [formData, setFormData] = 
  useState<{title: string; body:string}>({
    title: '',
    body: ''
  });

  const createArticle = useMutation({
    mutationFn: async () => {
      await axios.post("https://jsonplaceholder.typicode.com/posts", formData);
    },
    onSuccess: () => {
      console.log("The New Article Succeccfully Created.");
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createArticle.mutate();
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
            <form onSubmit={handleSubmit} className="flex flex-col pt-4">
              <input
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="border-slate-300 p-2 rounded-md focus:border-sky-500 focus:outline-none mt-4 pt-2 pr-2 text-gray-400 leading-4 text-sm border"
                type="text"
                placeholder="یک عنوان برای مقاله خود بنویسید (الزامی)"
              ></input>
              <textarea
                name="body"
                value={formData.body}
                onChange={handleChange}
                className="border-slate-300 p-2 rounded-md focus:border-sky-500 focus:outline-none mt-4 h-64 text-gray-400 leading-8 text-sm border min-w-fit align-text-top"
              ></textarea>
              <div className="pt-10 pb-10">
                <Button type="submit" variant="primary">
                  انتشار نوشته
                </Button>
              </div>
            </form>
          </div>
        </div>
        <div className="flex flex-col flex-start col-span-1 pt-24 max-[768px]:pt-5 md:col-span-2">
          <div className="flex flex-col justify-evenly">
            <div className="flex">
              <h3 className="text-base font-medium">سطح دسترسی:</h3>
            </div>
            <div className="flex flex-col py-3">
              <div className="py-2">
                <input type="radio" value="عمومی"></input>
                <label className="px-3">عمومی</label>
              </div>
              <div className="py-2">
                <input type="radio" value="فقط دنبال کنندگان"></input>
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
