import { Container } from "@/common/container";
import Image from "next/image";

export const HeroSection: React.FC = () => {
  return (
    <div className="bg-gray-300 relative">
      <Container>
        <div className="relative">
          <div className="relative w-full h-[600px]">
            <Image
              className="object-cover w-full h-full"
              src="/images/heroSection.jpg"
              alt="headerImage"
              layout="fill"
            />
          </div>
          <div className="absolute inset-0 flex flex-col justify-center items-center p-4 space-y-4">
            <p className="text-black text-3xl font-semibold px-2 text-center">
              Personal Blog
            </p>
            <p className="text-black text-base text-center">
              A Glimpse into My Life: Experiences, Ideas, and Inspirations
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};
