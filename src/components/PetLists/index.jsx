import React,{useState, useEffect, useContext } from "react";
import { List, Avatar, Spin } from 'antd';
import { CategoryList, CustomButton, Paragraph } from 'styles/pages/categories';
import StyledModal from 'components/Modal';
import { ShowModal } from 'utils/context/Modal';
import SelectedPets from 'components/SelectedPets'

const PetLists = ({ petsdata, loading }) => {

const [selectedPet, setSelectedPet] = useState(null);
 const {  setModalOpen } = useContext(ShowModal);
 const handleShowDetails = (pet) => {
    setSelectedPet(pet); 
    setModalOpen(true); 
  };
  return (
    <>
    <CategoryList>
      {loading ? (
        <Spin size="large" />
      ) : (
        <List
          pagination={{ pageSize: 4 }}
          style={{ width: '100%' }}
          itemLayout="horizontal"
          dataSource={petsdata}
          renderItem={(item) => (
            <List.Item key={item.id}>
              <List.Item.Meta
                avatar={<Avatar src={item.images[0]} style={{ width: '80px', height: '80px' }} />}
                title={<a href="#">{item.name}</a>}
                description={
                  <Paragraph
                    ellipsis={{
                      rows: 1,
                      expandable: false,
                      suffix: ' ',
                    }}
                  >
                    {item.description}
                  </Paragraph>
                }
              />
              <CustomButton onClick={() => handleShowDetails(item)}>Details</CustomButton>
            </List.Item>
          )}
        />
      )}
    </CategoryList>
    <StyledModal
    centered
    bordered ={false}
    width={800}
  >
    <SelectedPets data={selectedPet}/>
  </StyledModal> 
    </>
  );
};

export default PetLists;
