import React from 'react';
import { Input, Pagination, Table, Avatar, Button, Modal } from 'antd';
import useStyles from '../Common/styles'

import ModalStudentForm from './ModalStudentForm'

import { getAllStudents } from '../../dataFetcher'

const { Search } = Input;

const columns = [
  {
    title: 'Avatar',
    dataIndex: 'avatar',
    key: 'avatar',
    render: (asd) => <Avatar icon="user" />,
  },
  {
    title: 'Nombre',
    dataIndex: 'firstName',
    key: 'firstName',
    //render: text => <a>{text}</a>,
  },
  {
    title: 'Apellido',
    dataIndex: 'lastName',
    key: 'lastName',
    //render: text => <a>{text}</a>,
  },
  {
    title: 'Dni',
    dataIndex: 'DNI',
    key: 'DNI',
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
// timer para delay de busqueda
let timer = null

const Students = () => {

  const [data, setData] = React.useState([])
  const [visibleAddModal, setVisibleAddModal] = React.useState(true)
  console.log('Estoy cargando los datos')

  React.useEffect(() => {
    const fetchData = async () => {
      let result = await getAllStudents({pag:1,limit:10})
      console.log(result)
      setData(result.data.getAllUser)

    };

    //DELAY para evitar catastrofe de que lleguen datos mientras pediste otros
    //75 es suficiente para buscar por palabra
    clearTimeout(timer)
    timer = setTimeout(fetchData, 35)

  }, []);


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

        <Button type="primary" 
        icon="user-add"
        onClick={(e)=>(setVisibleAddModal(true))}
        >
          Agregar Alumno
        </Button>
      </div>

      
      <ModalStudentForm visible={visibleAddModal} setVisible={setVisibleAddModal}/>



    </div>)
}


//<ModalStudentForm/>


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