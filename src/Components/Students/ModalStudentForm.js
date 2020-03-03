import React from 'react';
import { Input, Pagination, Table, Avatar, Button, Modal } from 'antd';
import useStyles from '../Common/styles'

import StudentForm from './StudentForm'


const ModalStudentForm = () => {

  console.log('Estoy cargando los datos')


  return (

    <Modal
      width='700px'
      title="Agregar Nuevo Alumno"
      visible={true}
      //onOk={this.handleOk}
      //mask={false}
      maskClosable={false}
      centered
      cancelText={'Cancelar'}
      okText={'Guardar'}
    //onCancel={this.handleCancel}
    //okButtonProps={{ disabled: true }}
    //cancelButtonProps={{ disabled: true }}
    >
      <StudentForm />


    </Modal>
  )
}


export default ModalStudentForm;