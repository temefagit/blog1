"use client";

import { Comments } from "../comments/index";
import style from "./section.module.css";
import { useQuery } from "@tanstack/react-query";
import { fetchArticles } from "@/models/articles/index";
import { useState } from "react";
import { Articles } from "../articles";
import { SkeletonArticle } from "../skeleton/articles";
import { Container } from "@/common/container";

export const Section: React.FC = () => {
  const [pagination, setPagination] = useState(1);

  const { data, isFetching } = useQuery({
    queryKey: ["articleList", pagination],
    queryFn: fetchArticles,
    enabled: !!pagination,
  });

  return (
    <section className="bg-gray-100 min-h-screen w-full px-4 mt:px-2">
      <div className="max-w-screen-2xl mx-auto">
        <Container>
          <div className="grid grid-cols-4 gap-2 mt:grid-cols-1">
            <div className="grid col-span-3 items-center">
              <div className="border-b border-gray-300">
                <h2 className="font-bold flex flex-row pt-6 pb-6 pr-4">
                  جدیدترین‌ها
                </h2>
              </div>
              <div className='grid grid-cols-2 gap-2 mt:grid-cols-1 mt:mx-4'>
                {isFetching
                  ? Array.from({ length: 20 }, (_, idx) => (
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
            <div className='grid col-span-1 justify-items-start	justify-start	justify-self-start content-start items-start self-start place-content-start	place-items-start	place-self-start'>
              <div className="border-b border-gray-300">
                <h2 className="font-bold pt-6 pb-6">آخرین نظرات</h2>
              </div>
              <div className="flex flex-col gap-2">
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
          </div>
        </Container>
      </div>
    </section>
  );
};
