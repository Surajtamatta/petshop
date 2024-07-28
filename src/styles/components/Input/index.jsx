import { Input } from 'antd';
import styled from 'styled-components';


export const StyledInput = styled(Input)`
  border-color: #C1C1C1;   
  border-radius: 8px;     
  padding: 5px 16px;    
  font-size: 16x;    
  &.ant-input {
    border: 1px solid   #C1C1C1;  
  }
`;


export const StyledPasswordInput = styled(Input.Password)`
  border-color: #C1C1C1;
  border-radius: 8px;
  padding: 5px 16px;
  font-size: 16px;

  &.ant-input {
    border: 1px solid #C1C1C1;
  }
`;

export const StyledOtpInput = styled(Input.OTP)`
  height: 100%;
  width: 100%;
  border-color: #C1C1C1;
  border-radius: 8px;
  padding: 5px 16px;
  font-size: 16px;
&.ant-otp .ant-otp-input {
  width: 100%;
  height: 44px;
}
`;

export const  InputBorderless= styled(StyledInput)`
  background:transparent ;
  &.ant-input {
    border-width: 0 0 0 0;
    border-radius: 0;
    box-shadow: none;
    transition: width 0.6s ease-in-out;
    width: 5px;
    background:transparent ;
  }
  &.ant-input:hover{
    /* border-color: #676262; */
    box-shadow: none;
    background:transparent ;
  }
  &:focus{
    width: 200px;
    border-width: 0 0 1px 0;
    background:transparent ;
  }
`;