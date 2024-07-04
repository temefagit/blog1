import '@/app/reset.css';
import style from '@/app/page.module.css';
import { MainLayout } from '@/layouts/main-layout'
import CreateArticle from '@/components/createArticle/index'


export default function Create() {
    return (
        <div className={style.container}>
            <MainLayout>
                <CreateArticle />
            </MainLayout>
        </div>
    );
}
