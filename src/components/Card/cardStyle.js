import styled from 'styled-components';
import CardBg from '@/assets/img/card/card_bg.png';

export const CardWapper = styled.div`
  width: 100%;
  background: url(${CardBg}) no-repeat center center;
  background-size: 100% 100%;
  padding: 1rem;
  box-sizing: border-box;
`

export const CardHeader = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
`

export const CardTitle = styled.div`
  color: #189bde;
  font-size: 2rem;
  margin-left: 2rem;
`