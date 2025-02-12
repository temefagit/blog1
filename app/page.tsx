import "./reset.css";
import { Section } from "../components/section";
import { HeroSection } from "@/components/heroSection";
import { MainLayout } from "./../layouts/main-layout";
export const metadata = {
  title: "Blog",
  description:
    "Personal Blog, Blog, My Blog",
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
