import Navbar from '../Navbar';

import AddsBar from '../AddsBar'
import { Container, Main } from '../../styles/components/Layout';

const Layout = ({ children }) => {
  return (

    <Container>
      <Navbar/>
      <AddsBar/>
      <Main>
        {children}
        </Main>

    </Container>
  );
};




export default Layout;
