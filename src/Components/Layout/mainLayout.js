import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import useStyles from '../Common/styles'
import AppMenu from '../Common/AppMenu'
import Students from '../Students/Students'
const { Header, Content, Footer, Sider } = Layout;

/*
hoy
alumnos
turnos
estadisticas
pantalla

config
*/

const items = [
  {
    name: 'Hoy',
    icon: 'carry-out',
    key: 'today',
    content:<div>hoy</div>
  },
  {
    name: 'Alumnos',
    icon: 'team',
    key: 'students',
    content:<Students/>
  },
  {
    name: 'Turnos',
    icon: 'calendar',
    key: 'shifts',
    content:<div>turnos</div>
  },
  {
    name: 'Estadisticas',
    icon: 'line-chart',
    key: 'statics',
    content:<div>estadisticas</div>
  },
  {
    name: 'Pantalla',
    icon: 'desktop',
    key: 'screen',
    content:<div>pantalla</div>
  },
  {
    name: 'Configuracion',
    icon: 'setting',
    key: 'settings',
    content:<div>config</div>
  },
]

const MainLayout = () => {

  let [content, setContent] = React.useState('students')

  return (
    <Layout style={useStyles.root}>

      <Sider style={useStyles.sider}>

        <AppMenu items={items} setSelected={setContent}/>

      </Sider>

      <Layout style={useStyles.workSpace}>

        <Header style={useStyles.header}>
          {content}
        </Header>

        <Content style={useStyles.content}>
          <div style={{padding:'10px',background: '#fff', textAlign: 'center', height: '100%' }}>
            {items.find(item => item.key === content).content}
          </div>
        </Content>

      </Layout>

    </Layout>

  )
}

export default MainLayout
