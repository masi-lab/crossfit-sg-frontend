import React from 'react';
import { Input, Pagination, Table, Avatar, Button, Modal, message } from 'antd';
import useStyles from '../Common/styles'

import StudentForm from './StudentForm'
import { createStudent } from '../../dataFetcher'

const ModalStudentForm = (props) => {
  const { visible, setVisible } = props

  //console.log('Estoy cargando los datos')
  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const [birthday, setBirthday] = React.useState('')
  const [DNI, setDNI] = React.useState('')
  const [address, setAddress] = React.useState('')
  const [comment, setComment] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [phone, setPhone] = React.useState('')

  const clearStudent = () =>{
    setFirstName('')
    setLastName('')
    setBirthday('')
    setDNI('')
    setAddress('')
    setComment('')
    setEmail('')
    setPhone('')
  }

  const student = {
    firstName, setFirstName,
    lastName, setLastName,
    birthday, setBirthday,
    DNI, setDNI,
    address, setAddress,
    comment, setComment,
    email, setEmail,
    phone, setPhone
  }

  const cancelHandler = (e) => {
    clearStudent()
    setVisible(false)
  }

  const okHandler = async (e) => {
    console.log('asd')
    let result = await createStudent({ DNI, firstName, lastName })

    if (result.errors) {
      result.errors.forEach((e) => e.extensions.exception.details.forEach((m) => (
        message.error(m.message)
      )
      )
      )
    }
    //message.error(e.message)
    try {
      console.log(result.errors[0].extensions.exception.details[0].message)
    }
    catch{

    }
  }



  return (

    <Modal
      width='700px'
      title="Agregar Nuevo Alumno"
      visible={visible}
      //onOk={this.handleOk}
      //mask={false}
      maskClosable={false}
      centered
      cancelText={'Cancelar'}
      okText={'Guardar'}
      onCancel={e => cancelHandler(e)}
      onOk={e => okHandler(e)}
    //okButtonProps={{ disabled: true }}
    //cancelButtonProps={{ disabled: true }}
    >
      <StudentForm student={student} />


    </Modal>
  )
}


export default ModalStudentForm;