import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { List, Avatar, Space, Card, PageHeader } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";

export const Ecomerce = () => {
  const listData = [];

  useEffect(() => {
    for (let i = 0; i < 23; i++) {
      listData.push({
        href: "https://ant.design",
        title: `ant design part ${i}`,
        avatar:
          "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        description:
          "Ant Design, a design language for background applications, is refined by Ant UED Team.",
        content:
          "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
      });
    }
  }, []);

  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

  return (
    <>
      <PageHeader
        className="site-page-header"
        title="E-Comerce InfSoft"
        subTitle="This is a subtitle"
        avatar={<ShoppingCartOutlined/>}
      />
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 6,
          xxl: 3,
        }}
        size="large"
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 7,
        }}
        dataSource={listData}
        footer={
          <div>
            <b>eComerce InfSoft</b> Yasniel
          </div>
        }
        renderItem={(item) => (
          <Card style={{ margin: 20 }}>
            <List.Item
              key={item.title}
              actions={[
                <IconText
                  icon={ShoppingCartOutlined}
                  text="1"
                  key="list-vertical-message"
                />,
              ]}
              extra={
                <img
                  width={272}
                  alt="logo"
                  src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                />
              }
            >
              <List.Item.Meta
                //   avatar={<Avatar src={item.avatar} />}
                title={<a href={item.href}>{item.title}</a>}
                description={item.description}
              />
              {item.content}
            </List.Item>
          </Card>
        )}
      />
    </>
  );
};

ReactDOM.render(<Ecomerce />, document.getElementById("component-ecomerce"));
