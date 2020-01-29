import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import useStyles from '../Common/styles'
const { Header, Content, Footer, Sider } = Layout;

const MainLayout = () => {
  return(
    <Layout style={useStyles.root}>
      <Sider style={useStyles.sider}>
        <div style={{background: '#f22', padding: 10, height: '100%'}}>
          aca el menu
        </div>
      </Sider>
      <Layout style={useStyles.workSpace}>
        <Header style={{ background: '#fdf', padding: 10 }}>
          aca el titulo
        </Header>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <div style={{ padding: 24, background: '#fff', textAlign: 'center',height: '100%' }}>
            aca el contenido
          </div>
        </Content>
      </Layout>
    </Layout>

  )
}

export default MainLayout