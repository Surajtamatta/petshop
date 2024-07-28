import { Space, Typography } from 'antd';
import { FaBarsStaggered } from "react-icons/fa6";
import { GiCrossMark } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import { Container, Header, Nav, NavContent, NavLink, Wrapper,MenuIcon ,LogoContent,IconWrapper} from '../../styles/components/Navbar';
import { useState } from 'react';
const Navbar = () => {
    const [click,setClick] = useState(false)
    const handleClick=()=>setClick(!click)
  return (
    <Container>
        <Wrapper>
        <Header>
                <Space
                style={{gap:20}}
                >
                <Typography.Text>Help</Typography.Text>
                <Typography.Text>pets or pets</Typography.Text>
                <Typography.Text>Hi, John</Typography.Text>
                </Space>
        </Header>
        <Nav >
            <LogoContent
            >
                <Typography.Title level={2} style={{margin:0}}>PETS</Typography.Title>
            </LogoContent>
            <NavContent click={click}>
            <NavLink href="/Categories">
                <Typography.Text>Categories</Typography.Text>
            </NavLink>
            <NavLink href="/petslist">
            <Typography.Text>Pets List</Typography.Text>
            </NavLink>
            <NavLink href="/Clearance">
            <Typography.Text>Clearance</Typography.Text>
            </NavLink>
            <NavLink href="/Trending">
                <Typography.Text>Trending</Typography.Text>
          </NavLink>
            </NavContent>
            <IconWrapper 
                style={{fontSize:25}}
                direction='horizontal'
                
            >
                 <IoIosSearch/>
                 <MenuIcon 
                 onClick={handleClick}
                 >
               
                 {click ? <GiCrossMark/>:< FaBarsStaggered/>}
                </MenuIcon>
            </IconWrapper>
           
        </Nav>
        </Wrapper>
        
    </Container>
  );
};

export default Navbar;
