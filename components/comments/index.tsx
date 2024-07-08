import style from "./comments.module.css";

export const Comments: React.FC = () => {
  return (
    <div className={style.commentSection}>
      <div className={style.commentsItems}>
        <h3 className={style.commentTitle}>عنوان نظر</h3>
        <p className={style.commentText}>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم.
        </p>
      </div>
    </div>
  );
};
