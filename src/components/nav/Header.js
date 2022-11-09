import {  HomeOutlined, UserAddOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';
import {Link} from "react-router-dom";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem(<Link to="/">Home</Link>, 'sub1', <HomeOutlined/>,),
  
  getItem(<Link to="/login">Login</Link>, 'sub2', <UserOutlined />), 
  
  getItem(<Link to="/register">Register</Link>,'sub3', <UserAddOutlined  />),

  getItem('UserName','sub4', <SettingOutlined />),


  
];
const App = () => {
  const onClick = (e) => {
    console.log('click ', e);
  };
  return (
    <Menu
      onClick={onClick}
      style={{
        width: 300,
       
      }}
      defaultSelectedKeys={['current']}
      
      mode="horizontal"
      items={items}
      
    />
  );
};
export default App;