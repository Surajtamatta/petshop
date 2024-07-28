import React, { useState } from "react";
import { Dropdown, Menu, Button } from 'antd';
import { StyledButton } from "styles/components/DropDown";
import { FaAngleDown } from "react-icons/fa";

const DropDown = ({ items ,onClick,value}) => {

  

  return (
    <Dropdown 
    menu={{
      items,
      selectable: true,
      onClick:onClick
      
    }}
    trigger={['click']}
    >
      <StyledButton>
        {value}
        <FaAngleDown/>
      </StyledButton>
    </Dropdown>
  );
};

export default DropDown;
