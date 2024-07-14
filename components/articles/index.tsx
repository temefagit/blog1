"use client";
import style from "./articles.module.css";
import Image from "next/image";

type Props = {
  title: string;
  body: string;
};

export const Articles: React.FC<Props> = (props: Props) => {
  const { title, body } = props;


  return (
    <div className='bg-white flex items-center justify-center rounded-lg shadow-md font-roboto'>
      <div className='flex flex-col pl-6 p-4'>
        <h3 className='flex flex-row pb-4 text-sm font-bold'>{title}</h3>
        <Image
          quality={100}
          width={320}
          height={160}
          src="/images/articleImg.jpg"
          alt="عکس مقاله"
        ></Image>
        <p className='text-sm font-normal py-2'>{body}</p>
        <div className='flex justify-end pt-2'>
          <div className="hidden md:flex">
            <p className="flex cursor-pointer text-xs">افزودن دیدگاه</p>
            <p className="flex pr-4 cursor-pointer text-xs">ذخیره</p>
          </div>
          <p className="cursor-pointer text-xs pr-3">مشاهده</p>
        </div>
      </div>
    </div>
  );
};
