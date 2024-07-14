import "./reset.css";
import { Section } from "../components/section";
import { HeroSection } from "@/components/heroSection";
import { MainLayout } from "./../layouts/main-layout";
export const metadata = {
  title: "وبلاگ پژواک",
  description:
    "وبلاگ پژواک، سبک زندگی، کتاب و ادبیات، اخبار روز، بازی و سرگرمی، فرهنگ و هنر",
};

export default function Home() {
  return (
    <div className='smooth-scroll box-border m-0 p-0 h-full	overflow-x-hidden	subpixel-antialiased'>
      <MainLayout>
        <HeroSection />
        <Section />
      </MainLayout>
    </div>
  );
}
