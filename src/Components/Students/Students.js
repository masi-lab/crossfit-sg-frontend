import React from 'react';
import { Input, Pagination, Table, Avatar, Button, Modal } from 'antd';
import useStyles from '../Common/styles'

const { Search } = Input;

const columns = [
  {
    title: 'Avatar',
    dataIndex: 'avatar',
    key: 'avatar',
    render: (asd) => <Avatar icon="user" />,
  },
  {
    title: 'Nombre y Apellido',
    dataIndex: 'name',
    key: 'name',
    //render: text => <a>{text}</a>,
  },
  {
    title: 'Dni',
    dataIndex: 'dni',
    key: 'dni',
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Button type="link" icon="more" />
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    dni: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    dni: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    dni: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
]


const Students = () => {

  console.log('Estoy cargando los datos')


  return (
    <div style={useStyles.StudentsList}>

      <Search placeholder="Buscar" onSearch={value => console.log(value)} enterButton />
      <Table style={{ height: '100%' }} columns={columns} dataSource={data} pagination={false} />
      <div style={{
        display: 'grid', width: '100%', height: '100%',
        gridTemplateColumns: '200px minmax(0, 1fr) 200px',
        gridTemplateRows: 'minmax(0, 1fr)', gridGap: '15px'
      }}>

        <div />

        <Pagination total={10000} defaultCurrent={1} pageSize={25} onChange={(asd, qwe) => (console.log('cambie de pagina! ', asd, qwe))} />

        <Button type="primary" icon="user-add">
          Agregar Alumno
        </Button>
      </div>

      


    </div>)
}





export default Students;


/*

<Modal
        title="Basic Modal"
        
        visible={true}
        //onOk={this.handleOk}
        //mask={false}
        maskClosable={false}
        centered
      //onCancel={this.handleCancel}
      //okButtonProps={{ disabled: true }}
      //cancelButtonProps={{ disabled: true }}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <Modal
          width = '200'
          title="recharge Modal"
          visible={true}
          //onOk={this.handleOk}
          mask={false}
          maskClosable={false}
          centered
        //onCancel={this.handleCancel}
        //okButtonProps={{ disabled: true }}
        //cancelButtonProps={{ disabled: true }}
        >
          <p style ={{ width:'1200px' }}>The intasdasdasdasdasdasdasdasdintasdasdasdasdasdasdasdasdintasdasdasdasdasdasdasdasdintasdasdasdasdasdasdasdasdintasdasdasdasdasdasdasdasderior counts</p>
        

        </Modal>

      </Modal>

*/