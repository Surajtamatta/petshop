import React from 'react'
import { Card } from 'antd'
const StyledCard = ({children,title,width,extra,cover}) => {
  

  return (
    <Card
    title={title}
    extra={extra}
    cover={cover}
    style={{width:width}}
    bordered={false}
    >
      {children}
    </Card>
  )
}

export default StyledCard
