"use client";
import { Button } from "@/common/button";
import { Container } from "@/common/container";
import Link from "next/link";
import Image from "next/image";

export const Navbar: React.FC = () => {
  return (
    <Container>
      <header className="bg-white flex justify-between h-auto pt-4 pb-4 w-full">
        <div className="flex items-center pr-2">
          <div className="pl-0.5">
            <Link href={"/"}>
              <Button type="button" variant="primary">
                <span className="mt:hidden">Sign Up / Login</span>
              </Button>
            </Link>
          </div>
          <div className="flex md:hidden lg:flex xl:flex mt:hidden">
            <Link href="/create">
              <Button type="button" variant="secondary">
                New Post
              </Button>
            </Link>
          </div>
        </div>
        <nav className="text-black text-base cursor-pointer flex pl-4 mt:hidden">
          <ul className="flex items-center space-x-2">
            <li>
              <Link className="px-3 py-2 rounded-lg hover:bg-gray-200 transition duration-300 ease-in-out" href={"/"}>
                Latest Articles
              </Link>
            </li>
            <li>
              <Link className="px-3 py-2 rounded-lg hover:bg-gray-200 transition duration-300 ease-in-out" href={"/"}>
                Books and Literature
              </Link>
            </li>
            <li>
              <Link className="px-3 py-2 rounded-lg hover:bg-gray-200 transition duration-300 ease-in-out" href={"/"}>
                Games and Entertainment
              </Link>
            </li>
            <li>
              <Link className="px-3 py-2 rounded-lg hover:bg-gray-200 transition duration-300 ease-in-out" href={"/"}>
                Culture and Arts
              </Link>
            </li>
            <li>
              <Link className="px-3 py-2 rounded-lg hover:bg-gray-200 transition duration-300 ease-in-out" href={"/"}>
                Lifestyle
              </Link>
            </li>
            <li>
              <Link className="px-3 py-2 rounded-lg hover:bg-gray-200 transition duration-300 ease-in-out" href={"/"}>
                Newsroom
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex flex-row text-center justify-center items-center">
          <Image
            className="px-2 cursor-pointer mt:p-1 mt:h-9 mt:w-9"
            quality={80}
            width={48}
            height={28.8}
            src="/images/logo.png"
            alt="Logo"
          />
          <Link href="/">
            <div className="text-black text-lg cursor-pointer">
              <h1 className="pl-2">Personal Blog</h1>
            </div>
          </Link>
        </div>
      </header>
    </Container>
  );
};
