"use client";
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
        <h3 className='flex flex-row pb-4 text-sm font-bold self-end'>{title}</h3>
        <Image
          quality={100}
          width={600}
          height={160}
          src="/images/post.png"
          alt="Article Image"
        ></Image>
        <p className='text-sm font-normal py-2 text-left'>{body}</p>
        <div className='flex justify-start pt-2'>
          <div className="hidden md:flex">
            <p className="flex cursor-pointer text-xs">Add a comment</p>
            <p className="flex pr-4 cursor-pointer text-xs">Bookmark</p>
          </div>
          <p className="cursor-pointer text-xs pr-3">View</p>
        </div>
      </div>
    </div>
  );
};
