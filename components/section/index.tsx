"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchArticles } from "@/models/articles/index"; 
import { fetchComments } from "@/models/comments/index";
import { useState } from "react";
import { Articles } from "../articles";
import { SkeletonArticle } from "../skeleton/articles";
import { Container } from "@/common/container";
import { SkeletonComment } from "../skeleton/comments";
import { Comments } from "../comments";

export const Section: React.FC = () => {
  const [pagination, setPagination] = useState(1);

  const { data: articles, isFetching: ArticlesFetching } = useQuery({
    queryKey: ["articleList", pagination],
    queryFn: fetchArticles,
    enabled: !!pagination,
  });  

  const { data: comments, isFetching: CommentsFetching } = useQuery({
    queryKey: ["commentList", pagination],
    queryFn: fetchComments,
    enabled: !!pagination,
  });

  return (
    <section className="bg-gray-100 min-h-screen w-full px-4 mt:px-2 pb-10">
      <div className="max-w-screen-2xl mx-auto">
        <Container>
          <div className="grid grid-cols-4 gap-2 mt:grid-cols-1 items-start">
            <div className="grid col-span-3 items-start">
              <div className="border-b border-gray-300">
                <h2 className="font-bold flex flex-row pt-6 pb-6 pr-4 justify-self-end">
                  Latest Articles
                </h2>
              </div>
              <div className="grid grid-cols-2 gap-2 mt:grid-cols-1 mt:mx-4">
                {ArticlesFetching
                  ? Array.from({ length: 20 }, (_, idx) => (
                      <SkeletonArticle key={`loading-article-${idx}`} />
                    ))
                  : articles?.map(
                      (item: { id: string; title: string; body: string }) => (
                        <Articles
                          key={item.id}
                          title={item.title}
                          body={item.body}
                          id={item.id}
                        />
                      )
                    )}
              </div>
            </div>
            <div className="grid col-span-1 items-start">
              <div className="border-b border-gray-300 items-start">
                <h2 className="font-bold pt-6 pb-6 justify-self-end">
                  Comments
                </h2>
              </div>
              <div className="flex flex-col gap-2">
                {CommentsFetching
                  ? Array.from({ length: 20 }, (_, idx) => (
                      <SkeletonComment key={`loading-article-${idx}`} />
                    ))
                  : comments?.map(
                      (item: { id: string; name: string; body: string }) => (
                        <Comments
                          key={item.id}
                          name={item.name}
                          body={item.body}
                        />
                      )
                    )}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};