import { Container } from '@/common/container';
import style from './articles.module.css';
import Image from 'next/image'

export default function Articles() {
    return (
        <Container>
            <div className={style.articleSection}>
                <div className={style.articlesItems}>
                    <h3 className={style.articleTitle}>بازگشت جستجوی شغلها به سرویسهای وب سایت Stack Overflow</h3>
                    <Image quality={100} width={700} height={300} src='/images/articleImg.jpg' alt='عکس مقاله'></Image>
                    <p className={style.articleText}>سایت Stack Overflow که یکی از محبوب ترین وب سایتها برای برنامه نویسان محسوب می شود از حدود 3 سال پیش سرویس جستجوی شغل خود را بنا به دلایلی که خیلی توض...</p>
                    <div className={style.options}>
                        <div>
                            <span>افزودن دیدگاه</span>
                            <span>ذخیره</span>
                        </div>
                        <span>مشاهده</span>
                    </div>
                </div>
            </div>
        </Container>
    )
}
