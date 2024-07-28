
import React, { useState, useEffect, useContext } from 'react';
import {Typography,Space} from 'antd';
import { Text,RowWrapper,ColWrapper,ImageCarousel} from 'styles/pages/categories';
import StyledCard from 'components/Card';
import Image from 'next/image';

const { Title } = Typography;
const Pets = ({data}) => {
  console.log(data.images);
  
  return(
    
        <StyledCard
         >
          <RowWrapper >
            <ColWrapper >
              <ImageCarousel >
                {data.images.map((image, index) => (
                  <div key={index}>
                    <Image 
                    src={image} 
                    alt={`Pet ${index + 1}`} 
                    width={350}
                    height={350}
                    />
                  </div>
                ))}
              </ImageCarousel>
            </ColWrapper>
            <ColWrapper >
              <Title level={2}>{data.name}</Title>
              <Space direction='vertical' style={{width:'100%'}}>
              <Text><strong>Categories:</strong> {data.animal}</Text>
              <Text><strong>Breed:</strong> {data.breed}</Text>
              <Text><strong>Location:</strong> {data.city}, {data.state}</Text>
              </Space>
              <Text>{data.description}</Text>
            </ColWrapper>
          </RowWrapper>
        </StyledCard>
      
  );
};

export default Pets;
