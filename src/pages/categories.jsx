import React, { useState, useEffect } from 'react';
import { Space,  Typography,message} from 'antd';
import { Container,Wrapper,Text,SearchWrapper,Search} from '../styles/pages/categories';



import StyledInputs from 'components/Input'
import DropDown from 'components/DropDown';
import PetLists from 'components/PetLists';

const { Title } = Typography;

const CategorySelector = ({ categories }) => {
  const [messageApi, contextHolder] = message.useMessage()
  const [petsdata, setPetsData] = useState([]);
  const [selectdata, setSelectData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');

  const fetchPets = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/pets');
      const data = await response.json();
      setSelectData(data.pets)
      setPetsData(data.pets);
    } catch (error) {
      messageApi.open({
        type: 'error',
        content: `error:${error}`,
      }); 
    } finally {
      setLoading(false); // Set loading to false after fetching
    }
  };


  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/search?q=${query}`);
      if (!response.ok) {
        throw new Error('Failed to fetch pets');
      }
      const result = await response.json();
      console.log('Fetched data:', result); 
      setPetsData(result.pets);
    } catch (error) {
      messageApi.open({
        type: 'error',
        content: `error:${error}`,
      });

    } finally {
      setLoading(false);
    }
  };


  const handleSelectbreed = async (breed) => {
    setLoading(true);
    console.log(breed);
    try {
      const response = await fetch(`/api/breeds?q=${encodeURIComponent(breed)}`);
      if (!response.ok) {
        throw new Error('Failed to fetch pets');
      }
      const result = await response.json();
      console.log('Fetched data:', result); // Add logging here
      setPetsData(result.pets);
    } catch (error) {
      messageApi.open({
        type: 'error',
        content: `error:${error}`,
      });

    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPets();
    const delayDebounceFn = setTimeout(() => {
      if (query) {
        handleSearch();
      } else {
        setPetsData([]);
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [query]);



  const dropdownmenu = selectdata.map(pet => ({
    key: pet.breed,
    label: pet.breed,
  }));
  const alldatamenu = {
    key: 'all',
    label: 'All',
  };
  const combinedMenuItems = [alldatamenu, ...dropdownmenu];
  const handleMenuClick = (e) => {
    if (e.key === 'all') {
      fetchPets();
    } else {
      handleSelectbreed(e.key);
    }
  }
  return (
    <Container>
      {contextHolder}
      <Wrapper>
        <Space direction="vertical" style={{ display: 'flex', justifyContent: 'center', gap: 0 }}>
          <Title level={3} style={{ margin: '0 0 10px 0' }}>List of Pets</Title>
          <Text>We will keep you notified.</Text>
        </Space>
        <Space style={{ width: '100%', justifyContent: 'space-between' }}>
          <Title level={5}>My saved pets list</Title>
         <SearchWrapper>
         <DropDown items={combinedMenuItems} onClick={handleMenuClick} />
          <StyledInputs
           type='borderless'
           value={query}
           onChange={(e) => setQuery(e.target.value)}
           onPressEnter={handleSearch}
           />
           <Search />
         </SearchWrapper>
        </Space>
       <PetLists petsdata={petsdata} loading={loading}/>
      </Wrapper> 
    </Container>
  );
};

export default CategorySelector;
