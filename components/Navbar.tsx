import style from './navbar.module.css';

export default function Navbar() {


    return (
        <nav className={style.header}>
            <div className={style.headerItems}>
                <div className={style.logo}>
                    <div className={style.myBlog}>
                        <p>پژواک</p>
                    </div>
                    <img className={style.logoImage} src="/images/logo.png" alt="لوگو" />
                </div>
            </div>
            <div className={style.menu}>
                <div className={style.menuItemsSection}>
                    <div className={style.borderBottoom}>
                        جدیدترین مطالب
                    </div>
                    <div className={style.borderBottoom}>
                        کتاب و ادبیات
                    </div>
                    <div className={style.borderBottoom}>
                        بازی و سرگرمی
                    </div>
                    <div className={style.borderBottoom}>
                        فرهنگ و هنر
                    </div>
                    <div className={style.borderBottoom}>
                        سبک زندگی
                    </div>
                    <div className={style.borderBottoom}>
                        اتاق خبر
                    </div>
                </div>
            </div>
            <div className={style.menuLeft}>
                <button className={style.menuLeftItem}>ثبت نام / ورود</button>
            </div>
        </nav>
    )
}