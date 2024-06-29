import { Container } from '@/common/container/index'
import style from './heroSection.module.css'
import Image from 'next/image'

export default function HeroSection() {
    
    return (
        <Container>
            <div className={style.welcomeSection}>
                <Image className={style.welcomeSectionItems} quality={80} width={288} height={180} src='/images/bg_section.png' alt='عکس هدر'></Image>
                <div className={style.welcomeSectionItems}>
                    <p className={style.welcomeTitle}>به وبلاگ پژواک خوش آمدید!</p>
                    <p className={style.welcomeText}>پژواک، انعکاس تازه‌ترین اخبار و ایده‌ها</p>
                </div>
            </div>
        </Container>

    )
}