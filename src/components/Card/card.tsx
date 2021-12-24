import cardModule from  './cardStyle.module.scss';
import trainImg from '@/assets/img/card/train.png';
type Props = {
  title: string;
  children?: React.ReactNode;
};
const Card = ({ title, children }: Props) => {
  return <div className={cardModule.cardWapper}>
    <header className={cardModule.cardHeader}>
      <img src={trainImg} alt="" />
      <div className={cardModule.cardTitle}>
        {title}
      </div>
    </header>
    <div>
      {children}
    </div>
  </div>
}

export default Card