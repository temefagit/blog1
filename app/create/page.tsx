import '@/app/reset.css';
import style from '@/app/page.module.css';
import { CreateArticle } from '@/components/createArticle/index';
import { MainLayout } from '@/layouts/main-layout';

export default function Create() {
    return (
        <div className={style.container}>
            <MainLayout>
                <CreateArticle />
            </MainLayout>
        </div>
    );
}
