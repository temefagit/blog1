import { Container } from '@/common/container';
import style from './comments.module.css';

export default function Comments() {
    return (
        <Container>
            <div className={style.commentSection}>
                <div className={style.commentsItems}>
                    <h3 className={style.commentTitle}>عنوان نظر</h3>
                    <p
                        className={style.commentText}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم.
                    </p>
                </div>
            </div>
        </Container>
    )
}
