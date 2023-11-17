import styled from "styled-components";
import _default from "../../themes/default";

export const HeroContainer = styled.div`
  background: ${({ theme }) => theme.card_light};
  display: grid;
  grid-template-columns: 20fr 1fr 1fr 1rem;
  grid-columns:1/2;
  justify-content: left;
  position: relative;
  padding: 80px 210px;
  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640) {
    padding: 32px 16px;
  }
  z-index: 1;

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

export const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1380px;
  overflow: hidden;
  padding: 20px 30px;
  top: 50%;
  left: 40%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`;









export const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

export const TextLoop = styled.div`
font-family: Sora;
font-size: 56px;
font-style: normal;
font-weight: 700;
line-height: 72px; /* 128.571% */
letter-spacing: 1px;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#ff8a00),
    to(#e52e71)
  );
  background: linear-gradient(134deg, #3BF686 40.75%, #4CA9FF 90.52%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  box-decoration-break: clone;
  text-shadow: none;
  color: ${({ theme }) => theme.text_primary};
  
  
  @media (max-width: 780px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;





      
    
    
  
