'use client'
import { Button } from '@/common/button';
import { Container } from '@/common/container';
import Link from 'next/link';
import Image from 'next/image';


export const Navbar:React.FC = () => {

    return (
        <Container>
            <header className='bg-white flex justify-between h-auto pt-4 pb-4 w-full'>
                <div className='flex'>
                    <div className='flex flex-row-reverse text-center justify-center items-center'>
                        <Link href='/'>
                            <div className='text-black text-lg cursor-pointer'>
                                <h1>پژواک</h1>
                            </div>
                        </Link>
                        <Image className='px-2 cursor-pointer mt:p-1 mt:h-9 mt:w-9' quality={80} width={48} height={28.8} src="/images/logo.png" alt="لوگو" />
                    </div>
                    <nav className='text-black text-base cursor-pointer flex pr-4 mt:hidden'>
                        <ul className='flex items-center'>
                            <li className='flex flex-row justify-between'>
                                <Link className="pl-3 text-black" href={'/'}>
                                    جدیدترین مطالب
                                </Link>
                            </li>
                            <li className="flex flex-row justify-between">
                                <Link className='pl-3 text-black' href={'/'}>
                                    کتاب و ادبیات
                                </Link>
                            </li>
                            <li className="flex flex-row justify-between">
                                <Link className='pl-3 text-black' href={'/'}>
                                    بازی و سرگرمی
                                </Link>
                            </li>
                            <li className="flex flex-row justify-between">
                                <Link className='pl-3 text-black' href={'/'}>
                                    فرهنگ و هنر
                                </Link>
                            </li>
                            <li className="flex flex-row justify-between">
                                <Link className='pl-3 text-black' href={'/'}>
                                    سبک زندگی
                                </Link>
                            </li>
                            <li className="flex flex-row justify-between">
                                <Link className='pl-3 text-black' href={'/'}>
                                    اتاق خبر
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className='flex items-center pl-0.5'>
                    <div className='pl-0.5'>
                        <Link href={'/'}>
                            <Button type='button' variant='primary'><span className="mt:hidden">ثبت نام / ورود</span></Button>
                        </Link>
                    </div>
                    <div className='flex md:hidden lg:flex xl:flex mt:hidden'>
                        <Link href='/create'>
                            <Button type='button' variant='primary'>نوشته جدید</Button>
                        </Link>
                    </div>
                </div>
            </header >
        </Container>

    )
}