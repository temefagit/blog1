
import { Container } from "@/common/container";
import style from "./heroSection.module.css";
import Image from "next/image";

export const HeroSection: React.FC = () => {
  return (
    <div className='bg-gray-300'>
      <Container>
        <div className='flex justify-between flex-row-reverse'>
          <Image
            className='flex justify-center flex-col'
            quality={80}
            width={288}
            height={180}
            src="/images/bg_section.png"
            alt="عکس هدر"
          ></Image>
          <div className='flex justify-center flex-col pr-4'>
            <p className='items-center text-3xl font-semibold px-2 m:hidden sm:text-base md:flex md:items-center md:text-3xl md:font-semibold md:px-2 lg:flex lg:items-center lg:text-3xl lg:font-semibold lg:px-2 xl:flex xl:items-center xl:text-3xl xl:font-semibold xl:px-2'>به وبلاگ پژواک خوش آمدید!</p>
            <p className='flex items-center text-base pr-5 pt-5 m:hidden sm:hidden md:flex lg:flex xl:flex'>
              پژواک، انعکاس تازه‌ترین اخبار و ایده‌ها
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};
