import React from "react";
import {Avatar , Icon , PageHeader, Button, Descriptions } from "antd";


export default function Pageheader(props) {
  return (
    <div>
      <PageHeader
        ghost={false}
        onBack={() => window.history.back()}
        title="Title"
        subTitle="This is a subtitle"
        
      >
        <Icon type="search" />
            <Icon type="question-circle" />
            <Icon type="bell" />
            <Avatar>USER</Avatar>
      </PageHeader>
    </div>
  );
}
