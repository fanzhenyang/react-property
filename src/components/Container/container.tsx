import containerModule from './containerStyle.module.scss';
import BgImg from '@/assets/img/home/bg.png';
import FullBgImg from '@/assets/img/home/full_bg.png';

const Container = ({ imgIndex, children }: { imgIndex: number, children?: React.ReactNode }) => {
  const url = Number(imgIndex) === 1 ? `url(${BgImg}) no-repeat center center / 100% 100%` : `url(${FullBgImg}) no-repeat center center / 100% 100%`
  return <div className={containerModule.containerWrapper} style={{background: url}}>
    {children}
  </div>
}

export default Container