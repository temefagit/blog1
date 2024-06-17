import style from './section.module.css';

export default function Section() {
    return (
        <div className={style.section}>
            <div className={style.welcomeSection}>

                <img className={`${style.welcomeSectionItems} ${style.bgImage}`} src='/images/bg_section.png'></img>

                <div className={`${style.welcomeSectionItems} ${style.welcomeText}`}>!به وبلاگ پژواک خوش آمدید</div>

            </div>
            <div className={style.contentSection}>
                <div className={style.commentSection}>
                    <div className={style.commentSectionTitle}>نظرات</div>
                    <div className={style.commentsItems}>
                        <div className={style.commentTitle}>عنوان نظر</div>
                        <div className={style.commentText}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. </div>
                    </div>
                    <div className={style.commentItems}>
                        <div className={style.commentTitle}>عنوان نظر</div>
                        <div className={style.commentText}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. </div>
                    </div>
                    <div className={style.commentsItems}>
                        <div className={style.commentTitle}>عنوان نظر</div>
                        <div className={style.commentText}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. </div>
                    </div>
                    <div className={style.commentsItems}>
                        <div className={style.commentTitle}>عنوان نظر</div>
                        <div className={style.commentText}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. </div>
                    </div>
                    <div className={style.commentsItems}>
                        <div className={style.commentTitle}>عنوان نظر</div>
                        <div className={style.commentText}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. </div>
                    </div>
                </div>
                <div className={style.articleSection}>
                    <div className={style.articleSectionTitle}>آخرین مقالات</div>

                    <div className={style.articlesItems}>
                        <div className={style.articleTitle}>عنوان مقاله</div>
                        <div className={style.articleText}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</div>
                    </div>
                    <div className={style.articlesItems}>
                        <div className={style.articleTitle}>عنوان مقاله</div>
                        <div className={style.articleText}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</div>
                    </div>
                    <div className={style.articlesItems}>
                        <div className={style.articleTitle}>عنوان مقاله</div>
                        <div className={style.articleText}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</div>
                    </div>
                    <div className={style.articlesItems}>
                        <div className={style.articleTitle}>عنوان مقاله</div>
                        <div className={style.articleText}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</div>
                    </div>
                </div>

            </div>


        </div>

    )
}