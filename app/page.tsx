import './reset.css';
import style from './page.module.css';
import Header from '@/components/Navbar';
import Section from '@/components/Section';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className={style.constainer}>
      <Header />
      <Section />
      <Footer />
    </div>

  );
}
