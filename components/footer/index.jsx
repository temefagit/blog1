import { Container } from '@/common/container'
import style from './footer.module.css'
import Image from 'next/image'

export default function Footer() {

    return (
        <Container>
            <footer className={style.footer}>
                <div className={style.footerItem}>
                    <div className={style.footerItems}>
                        <div className={style.footerLinks}>
                            <h3>لینک‌های مرتبط</h3>
                            <ol>
                                <li>خانه</li>
                                <li>مقالات</li>
                                <li>اخبار</li>
                                <li>انجمن نویسندگان</li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div className={`${style.footerLinks} ${style.footerLinksCenter}`}>
                    <ol>
                        <li>درباره ما</li>
                        <li>تماس با ما</li>
                        <li>قوانین</li>
                        <li>حریم خصوصی</li>
                    </ol>
                </div>
                <div className={style.footerItems}>
                    <div className={style.about}>درباره پژواک</div>
                    <Image className={style.logoImage} width={48} height={48} quality={80} src="/images/logo.png" alt="لوگو" />
                </div>
            </footer>
        </Container>
    )

}