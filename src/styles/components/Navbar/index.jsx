
import Link from 'next/link';
import styled from 'styled-components';

export const Container =styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  max-height: 100px;
  min-height: 100px;
  position: relative;
  

`
export const Wrapper = styled.div`
 display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 0 30px;
  height: 100%;

`;

export const LogoContent =styled.div`
  display: flex;
  justify-content:flex-start;
  align-items: center;
  width: 100%;
  max-width: 150px;
  z-index: 1000;
  

`
export const NavContent =styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  flex-direction: row;
  @media (max-width:700px) {
    display: flex;
    flex-direction: column;
    justify-content:flex-start;
    align-items: flex-start;
    background: rgb(26 30 65 / 36%);
    box-shadow: 0 8px 32px 2px rgb(22 25 65 / 66%);
    backdrop-filter: blur(7px);
    width: 100%;
    height: 100vh;
    position:absolute;
    top: 0;
    left:${({click}) => click ? '0%':'-105%' };
    /* padding: 100px 30px; */
    margin: 0;
    z-index:99;
    transition: all 0.3s ease-in-out;
}

`



export const Header =styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  max-height: 36px;
  color: #01000a;
  flex-direction: column;

`

export const  Nav = styled.div`
   width: 100%;
   height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  margin: 0 20px;
  
  position: relative;
  right: 73px;
  &:hover {
    text-decoration: underline;
  }
  @media  (max-width:700px){
    position: relative;
    top: 100px;
    left: 0;
    width: 100%;
    padding: 0 30px;
    height: 100%;
    max-height: 50px;
    margin: 0;
    display: flex;
    justify-content:stretch;
    .ant-typography{
      font-size: 18px;
    }
    &:hover {
      text-decoration: none;
    background: #221f3c8b;
    
  }
}
`;


export const MenuIcon= styled.div`
display: none;
@media  (max-width:700px){
  display: flex;
  z-index: 1000;
}
`
export const IconWrapper= styled.div`

  display: flex;
  z-index: 1000;
  font-size: 25px;
  gap: 15px;
  justify-content: center;
  align-items:center;
`