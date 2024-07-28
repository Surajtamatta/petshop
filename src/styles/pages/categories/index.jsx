
import styled from 'styled-components';
import { Button, Carousel, Typography } from 'antd';
import { IoIosSearch } from "react-icons/io";
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  max-width: 1000px;
 
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px 40px;
  border: 1px solid #ccc;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
 position: relative;
`;
export const Search = styled(IoIosSearch)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: absolute;
  font-size: 20px;
  right: 5px;
  z-index: -1;

`;
export const CategoryList = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 25px;
`;





export const CustomButton = styled(Button)`
  width: 100%;
  max-width: 100px;
  background-color:#000000; 
  border-color: #000000;     
  color: white;              
  border-radius: 6px ;       
  padding: 10px 15px;  
  min-height  : 35px;
  font-size: 16px;         
  font-weight: bold;        
  box-shadow: 0 4px 6px rgba(66, 66, 66, 0.1); 
  &:hover {
    background-color: #000000c1; 
    border-color: #494949a6;     
  }

  &:focus {
    box-shadow: 0 0 0 2px rgba(40, 40, 40, 0.665);
  }
`;

export const Paragraph = styled(Typography.Paragraph)`
  display: flex;
  width: 100%;
  max-width: 90%;
  justify-content:flex-start;
  align-items: flex-start;
  text-align: left;
`


export const Text = styled(Typography.Text)`
  display: flex;
  width: 100%;
  justify-content:flex-start;
  align-items: flex-start;
  text-align: left;
`


export const RowWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content:flex-start;
  align-items: flex-start;
  gap: 20px;
  flex-direction: rows;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const ColWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ImageCarousel = styled(Carousel)`
  width: 100%;
  max-width: 350px;
  height: 100%;
  max-height: 350px;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;