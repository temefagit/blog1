import { Container } from "@/common/container";
import Image from "next/image";

export const Footer: React.FC = () => {
  return (
    <Container>
      <footer className='bg-gray-300 grid grid-cols-3 gap-4 items-center slF:grid-cols-10 mt:flex flex-col-reverse'>
        <div className='flex pt-4 mt:hidden sl:col-span-2'>
          <div className='flex justify-end pr-4'>
            <div className='p-4 mt:flex flex-row'>
              <h3 className="pb-4">لینک‌های مرتبط</h3>
              <ol className="list-disc pr-8">
                <li className="cursor-pointer hover:font-bold leading-8 ">خانه</li>
                <li className="cursor-pointer hover:font-bold leading-8 ">مقالات</li>
                <li className="cursor-pointer hover:font-bold leading-8 ">اخبار</li>
                <li className="cursor-pointer hover:font-bold leading-8 ">انجمن نویسندگان</li>
              </ol>
            </div>
          </div>
        </div>
        <div className='p-4 mt:pr-8 pl-0 pb-0 pt-0 sl:col-span-6'>
          <ol className="list-disc flex justify-evenly mt:list-none sl:list-none mt:flex items-center sl:justify-center">
            <li className="cursor-pointer hover:font-bold leading-8 md:text-base pl-2 mt:pl-8 sl:pl-4">درباره ما</li>
            <li className="cursor-pointer hover:font-bold leading-8	md:text-base pl-2 mt:pl-8 sl:pl-4">تماس با ما</li>
            <li className="cursor-pointer hover:font-bold leading-8	md:text-base pl-2 mt:hidden">قوانین</li>
            <li className="cursor-pointer hover:font-bold leading-8	md:text-base pl-2 mt:hidden">حریم خصوصی</li>
          </ol>
        </div>
        <div className='flex justify-end pr-4 pl-4 items-center sl:col-span-2'>
          <div className='flex items-center cursor-pointer font-bold text-lg py-3 pl-1 md:text-sm mt:hidden'>درباره پژواک</div>
          <Image
            className='cursor-pointer mt:pt-4'
            width={48}
            height={48}
            quality={80}
            src="/images/logo.png"
            alt="لوگو"
          />
        </div>
      </footer>
    </Container>
  );
};
