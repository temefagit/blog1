"use client";
import style from "./articles.module.css";
import Image from "next/image";

type Props = {
  title: string;
  body: string;
};

export const Articles: React.FC<Props> = (props: Props) => {
  const { title, body } = props;

  return (
    <div className={style.articleSection}>
      <div className={style.articlesItems}>
        <h3 className={style.articleTitle}>{title}</h3>
        <Image
          quality={100}
          width={700}
          height={300}
          src="/images/articleImg.jpg"
          alt="عکس مقاله"
        ></Image>
        <p className={style.articleText}>{body}</p>
        <div className={style.options}>
          <div>
            <span>افزودن دیدگاه</span>
            <span>ذخیره</span>
          </div>
          <span>مشاهده</span>
        </div>
      </div>
    </div>
  );
};
