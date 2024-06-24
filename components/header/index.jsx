import Link from 'next/link';
import style from './navbar.module.css';
import Image from 'next/image';
import { Button } from '@/common/button/index';


export default function Navbar() {

    return (
        <header className={style.header}>
            <div className={style.navRight}>
                <div className={style.logo}>
                    <div className={style.myBlog}>
                        <h1>پژواک</h1>
                    </div>
                    <Image className={style.logoImage} quality={80} width={28.8} height={28.8} src="/images/logo.png" alt="لوگو" />
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
                <Button><span>ثبت نام / ورود</span></Button>
                <Button>نوشته جدید</Button>
            </div>
        </header >

    )
}