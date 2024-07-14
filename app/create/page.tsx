import '@/app/reset.css';
import { CreateArticle } from '@/components/createArticle/index';
import { MainLayout } from '@/layouts/main-layout';

export default function Create() {
    return (
        <div className='smooth-scroll box-border m-0 p-0 h-full	overflow-x-hidden	subpixel-antialiased'>
            <MainLayout>
                <CreateArticle />
            </MainLayout>
        </div>
    );
}
