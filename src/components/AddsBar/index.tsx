import { Typography } from "antd";
import React from "react";
import { MdOutlineKeyboardArrowLeft,MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Container,} from '../../styles/components/AddsBar';
const AddsBar = () => {
  return <Container>
        <MdOutlineKeyboardArrowLeft/>
        <Typography.Text>Get 10% off on business sign up</Typography.Text>
        <MdOutlineKeyboardArrowRight/>
  </Container>;
};

export default AddsBar;
