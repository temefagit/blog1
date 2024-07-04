'use client'

import Articles from '../articles/index';
import Comments from '../comments/index';
import style from './section.module.css';
import { Container } from '@/common/container';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Section() {

    const [articleList, setArticleList] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
            setArticleList(response.data)
        }).catch((error) => {
            console.log(error);
        })
    }, [])

    return (
        <section className={style.section}>
            <div className={style.wrapper}>
                <Container>

                    <div className={style.contentSection}>
                        <div className={style.articles}>
                            <div className={style.title}>
                                <h2 className={style.articleSectionTitle}>جدیدترین‌ها</h2>
                            </div>
                            <div className={style.articlesItems}>
                                {articleList.map((item) => {
                                    return <Articles key={item.id} title={item.title} body={item.body} />
                                })}
                            </div>
                        </div>
                        <div className={style.comments}>
                            <div className={style.title}>
                                <h2 className={style.commentSectionTitle}>آخرین نظرات</h2>
                            </div>
                            <Comments />
                            <Comments />
                            <Comments />
                            <Comments />
                            <Comments />
                            <Comments />
                            <Comments />
                            <Comments />
                            <Comments />
                            <Comments />
                            <Comments />
                        </div>
                    </div>
                </Container>

            </div>
        </section>

    )
}