'use client'
import { Button } from '@/common/button/index';
import { Container } from '@/common/container/index';
import Link from 'next/link';
import style from './navbar.module.css';
import Image from 'next/image';


export const Navbar:React.FC = () => {

    return (
        <Container>
            <header className={style.header}>
                <div className={style.navRight}>
                    <div className={style.logo}>
                        <Link href='/'>
                            <div className={style.myBlog}>
                                <h1>پژواک</h1>
                            </div>
                        </Link>
                        <Image className={style.logoImage} quality={80} width={48} height={28.8} src="/images/logo.png" alt="لوگو" />
                    </div>
                    <nav className={style.nav}>
                        <ul className={style.navUL}>
                            <li className={style.navLI}>
                                <Link className={style.borderBottoom} href={'/'}>
                                    جدیدترین مطالب
                                </Link>
                            </li>
                            <li className={style.navLI}>
                                <Link className={style.borderBottoom} href={'/'}>
                                    کتاب و ادبیات
                                </Link>
                            </li>
                            <li className={style.navLI}>
                                <Link className={style.borderBottoom} href={'/'}>
                                    بازی و سرگرمی
                                </Link>
                            </li>
                            <li className={style.navLI}>
                                <Link className={style.borderBottoom} href={'/'}>
                                    فرهنگ و هنر
                                </Link>
                            </li>
                            <li className={style.navLI}>
                                <Link className={style.borderBottoom} href={'/'}>
                                    سبک زندگی
                                </Link>
                            </li>
                            <li className={style.navLI}>
                                <Link className={style.borderBottoom} href={'/'}>
                                    اتاق خبر
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className={style.navLeft}>
                    <div className={style.btnLoginSignUp}>
                        <Link href={'/'}>
                            <Button type='button' variant='primary'><span>ثبت نام / ورود</span></Button>
                        </Link>
                    </div>
                    <div className={style.btnCreateArticle}>
                        <Link href='/create'>
                            <Button type='button' variant='primary'>نوشته جدید</Button>
                        </Link>
                    </div>
                </div>
            </header >
        </Container>

    )
}