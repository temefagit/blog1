'use client';
import style from './articles.module.css';
import Image from 'next/image'


export default function Articles(...props) {

    const [articleList, setArticleList] = props


    return (
            <div className={style.articleSection}>
                <div className={style.articlesItems}>
                    <h3  className={style.articleTitle}>{articleList.title}</h3>
                    <Image quality={100} width={700} height={300} src='/images/articleImg.jpg' alt='عکس مقاله'></Image>
                    <p className={style.articleText}>{articleList.body}</p>
                    <div className={style.options}>
                        <div>
                            <span>افزودن دیدگاه</span>
                            <span>ذخیره</span>
                        </div>
                        <span>مشاهده</span>
                    </div>
                </div>
            </div>
    )
}
