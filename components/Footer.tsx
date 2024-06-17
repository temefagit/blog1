import style from './footer.module.css'

export default function Footer() {

    return (
        <div className={style.footer}>
            <div className={style.footerItem}>
                <div className={style.footerItems}>
                    <div>لینک‌های مرتبط</div>
                </div>
            </div>
            <div className={style.footerItems}>
                <div className={style.about}>درباره پژواک</div>
                <img className={style.logoImage} src="/images/logo.png" alt="لوگو" />
            </div>
        </div>
    )

}