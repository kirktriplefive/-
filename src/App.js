import './App.css';
import React from 'react';
import Playlists from './Playlists'
import ErrorApp from './ErrorApp'
import { BrowserRouter as Router, Switch, Route, Link,  } from "react-router-dom";
import { Layout, Menu, Image, Avatar } from 'antd';
import MenuApp from './MenuApp'
import {
  ProjectOutlined,
  PlaySquareOutlined,
  PictureOutlined,
  ClusterOutlined,
  LineChartOutlined,
  RightOutlined,
  LeftOutlined,
  BellOutlined, 
  UserOutlined,
  ExportOutlined
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

class App extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    const { collapsed } = this.state;
    return (

      <Layout style={{ minHeight: '100vh' }}>
        <>
          <Router>
            <Sider width={256} className="site-layout-background-menu" trigger={null} collapsible collapsed={this.state.collapsed}>
              <div>
                <span className="image"><Image width={28} preview={false} src="https://sun9-71.userapi.com/impg/vhm3TBjrEPZNY64ZWF-2PyADUZk1qGPlSe6iTA/93cFLTTebs4.jpg?size=236x232&quality=96&sign=3337f8d44eb0126a8400e2516ac034af&type=album"/></span>
              <span>
              {React.createElement(this.state.collapsed ? RightOutlined : LeftOutlined, {
                  className: 'trigger',
                  onClick: this.toggle,
                })}
              </span>
              </div>
              <Menu theme="light" className="site-layout-background-menu" style={{ color: 'B8E127' }} defaultSelectedKeys={['0']}>
                <Menu.Item className="site-layout-background-text" key="1" icon={<LineChartOutlined />} >
                  Dashboard
                  <Link to="/err"  />
                </Menu.Item>
                <Menu.Item className="site-layout-background-text" key="2" icon={<ClusterOutlined />} >
                  Устройства
                  <Link to="/err" />
                </Menu.Item>
                <Menu.Item className="site-layout-background-text" key="3" icon={<PictureOutlined />} >
                  Медиа
                  <Link to="/err" />
                </Menu.Item>
                <Menu.Item className="site-layout-background-text" key="4" icon={<PlaySquareOutlined />} >
                  <span>Плейлисты</span>
                  <Link to="/playlists" />
                </Menu.Item>
                <Menu.Item className="site-layout-background-text" key="5" icon={<ProjectOutlined />} >
                  Статистика
                  <Link to="/err" />
                </Menu.Item>
              </Menu>
            </Sider>




            <Layout className="site-layout">
              <Header className="site-layout-background-head" style={{ padding: 0 }}>
                <div className="header-right">
              <BellOutlined className="bell"/>
              <Avatar size={36} style={{ backgroundColor: '#B8E127' }} className="AvatarUser" icon={<UserOutlined className="UserAvatar"/>} />
              <a className="NameOfUser">Василий Иванов</a>
              <ExportOutlined className="export"/>
              </div>
              </Header>
              <Content>
                <Switch>
                  <Route path="/playlists" component={Playlists} />
                  <Route path="/err" component={ErrorApp} />
                </Switch>
              </Content>
            </Layout>
          </Router>
        </>
      </Layout>
    );
  }
}

export default App;
