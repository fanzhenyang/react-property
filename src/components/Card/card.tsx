import { CardWapper, CardHeader, CardTitle } from './cardStyle';
import trainImg from '@/assets/img/card/train.png';
type Props = {
  title: string;
  children?: React.ReactNode;
};
const Card = ({ title, children }: Props) => {
  return <CardWapper>
    <CardHeader>
      <img src={trainImg} alt="" />
      <CardTitle>
        {title}
      </CardTitle>
    </CardHeader>
    <div>
      {children}
    </div>
  </CardWapper>
}

export default Card