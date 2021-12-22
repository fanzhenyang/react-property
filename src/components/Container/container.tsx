import styled from 'styled-components';
import BgImg from '@/assets/img/home/bg.png';
import FullBgImg from '@/assets/img/home/full_bg.png';

const Container = ({ imgIndex, children }: { imgIndex: number, children?: React.ReactNode }) => {
  return <ContainerWrapper imgSrc={imgIndex}>
    {children}
  </ContainerWrapper>
}

interface IViewProps {
  imgSrc: Number;
}
const ContainerWrapper = styled.div`
  background: ${(props: IViewProps) => Number(props.imgSrc) === 1 ? `url(${BgImg}) no-repeat center center / 100% 100%` : `url(${FullBgImg}) no-repeat center center / 100% 100%`};
  padding: 1rem;
  box-sizing: border-box;
  min-height: calc(100vh - 8.5vh);
  max-height: 100vh;
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
`

export default Container