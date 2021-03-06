import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import logo from '../../iwoka.jpg';
import SubMenu from 'antd/lib/menu/SubMenu';

// minimum keys needed
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
        key: 'item3',
        
      },
      {
        name: 'ItemInSub2',
        icon: 'radar-chart',
        key: 'item4'
      },
    ]
  },
]



const AppMenu = ({ items = itemsDefault, setSelected }) => { //= s =>{console.log(s)} }

  return (
    <div>

      <div style={{ height: '200px' }}>
        <img style={{ width: '100%' }} src={logo} alt="asd">
        </img>
      </div>

      <Menu theme="dark" mode="inline" defaultSelectedKeys={[items[1].key]}>
        {
          items.map((item) => (item.hasOwnProperty('subMenu') ?
            <SubMenu key={item.key} title={
              <span>
                <Icon type={item.icon} />
                <span className="nav-text">{item.name}</span>
              </span>
            }>
              {
                item.subMenu.map((subItem) => (
                  <Menu.Item key={subItem.key} onClick = {e =>setSelected(subItem.key)}>
                    <Icon type={subItem.icon} />
                    <span className="nav-text">{subItem.name}</span>
                  </Menu.Item>
                ))
              }
            </SubMenu>
            :
            <Menu.Item key={item.key} onClick = {e =>setSelected(item.key)}>
              <Icon type={item.icon} />
              <span className="nav-text">{item.name}</span>
            </Menu.Item>
          )

          )
        }
      </Menu>


    </div>
  )
}

export default AppMenu
