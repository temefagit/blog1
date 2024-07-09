"use client";

import { Comments } from "../comments/index";
import style from "./section.module.css";
import { useQuery } from "@tanstack/react-query";
import { fetchArticles } from "@/models/articles/index";
import { useState } from "react";
import { Container } from "@/common/container";
import { Articles } from "../articles";
import { SkeletonArticle } from "../skeleton/articles";


export const Section: React.FC = () => {
  const [pagination, setPagination] = useState(1);

  const { data, isFetching } = useQuery({
    queryKey: ["articleList", pagination],
    queryFn: fetchArticles,
    enabled: !!pagination,
  });
  

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
                {isFetching
                  ? Array.from({ length: 100 }, (_, idx) => (
                      <SkeletonArticle key={`loading-article-${idx}`} />
                    ))
                  : data?.map((item) => (
                      <Articles
                        key={item.id}
                        title={item.title}
                        body={item.body}
                      />
                    ))}
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
  );
};
