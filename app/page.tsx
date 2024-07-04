import './reset.css';
import Section from '../components/section';
import HeroSection from '@/components/heroSection'
import style from './page.module.css';
import { MainLayout } from './../layouts/main-layout'
import Link from 'next/link';
export const metadata = {
  title: 'وبلاگ پژواک',
  description: 'وبلاگ پژواک، سبک زندگی، کتاب و ادبیات، اخبار روز، بازی و سرگرمی، فرهنگ و هنر',
}

export default function Home() {
  return (
    <div className={style.container}>
      <MainLayout>
        <HeroSection />
        <Section />
      </MainLayout>
    </div>


  );
}
