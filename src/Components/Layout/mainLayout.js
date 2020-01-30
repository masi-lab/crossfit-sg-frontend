import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import useStyles from '../Common/styles'
import AppMenu from '../Common/AppMenu'
const { Header, Content, Footer, Sider } = Layout;

const itemsDefault = [
  {
    name: 'SingleItem',
    icon: 'mail',
    key: 'item1'
  },
  {
    name: 'ItemWithSubmenu',
    icon: 'bar-chart',
    key: 'item2',
    subMenu: [
      {
        name: 'ItemInSub',
        icon: 'fund',
        key: 'item3'
      },
      {
        name: 'ItemInSub2',
        icon: 'radar-chart',
        key: 'item4'
      },
    ]
  },
]

const MainLayout = () => {
  return(
    <Layout style={useStyles.root}>

      <Sider style={useStyles.sider}>

        
        <AppMenu/>

      </Sider>

      <Layout style={useStyles.workSpace}>

        <Header style={useStyles.header}>
          aca el titulo
        </Header>

        <Content style={useStyles.content}>
          <div style={{ padding: 24, background: '#fff', textAlign: 'center',height: '100%' }}>
            aca el contenido
          </div>
        </Content>

      </Layout>

    </Layout>

  )
}

export default MainLayout

/*
<div style={{background: '#f22', padding: 10, height: '100%'}}>
          aca el menu
        </div>
        */