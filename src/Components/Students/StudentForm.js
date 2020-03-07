import React from 'react';
import { Input, Typography, Pagination, Table, Avatar, Button, Modal, DatePicker } from 'antd';
import useStyles from '../Common/styles'
import moment from 'moment';

const { Text } = Typography
const { TextArea } = Input;
//const createStudent


const newStudent = {
  firstName: '',
  lastName: '',
  birthday: '',
  DNI: '',
  address: '',
  comment: '',
  email: '',
  phone: '',
}

const StudentForm = (props) => {
  const dateFormat = 'DD/MM/YYYY'

  const {
    firstName, setFirstName,
    lastName, setLastName,
    birthday, setBirthday,
    DNI, setDNI,
    address, setAddress,
    comment, setComment,
    email, setEmail,
    phone, setPhone,
  } = props.student


  return (
    <div style={{
      height: '100%', width: '100%',
      display: 'grid',
      gridTemplateColumns: 'repeat(6,1fr)',// almost equals to '50% 50%',
      //gridTemplateRows: '40px 40px 40px', // almost equal to '100%',
      gridGap: '7px',
      padding: '10px',
      gridTemplateAreas: `
      "l1 l1 l1 l2 l2 l2" 
      "i1 i1 i1 i2 i2 i2"
      "l3 l3 l4 l4 l5 l5"
      "i3 i3 i4 i4 i5 i5"
      "l6 l6 l6 l7 l7 l7" 
      "i6 i6 i6 i7 i7 i7"
      "l8 l8 l8 l8 l8 l8" 
      "i8 i8 i8 i8 i8 i8"
      `


    }}>

      <Text strong style={{ gridArea: 'l1' }}>Nombre:</Text>
      <Input
        style={{ gridArea: 'i1' }}
        placeholder="Roman / Valeria"
        value={firstName}
        onChange={e => { setFirstName(e.target.value) }}
      />

      <Text strong style={{ gridArea: 'l2' }}>Apellido:</Text>
      <Input style={{ gridArea: 'i2' }}
        placeholder="Perez / Hernandez"
        value={lastName}
        onChange={e => { setLastName(e.target.value) }}
      />

      <Text strong style={{ gridArea: 'l3' }}>DNI:</Text>
      <Input strong style={{ gridArea: 'i3' }}
        placeholder="33444555"
        value={DNI}
        onChange={e => { setDNI(e.target.value) }}
      />

      <Text strong style={{ gridArea: 'l4' }}>Telefono / Celular:</Text>
      <Input style={{ gridArea: 'i4' }}
        placeholder="0340215665103"
        value={phone}
        onChange={e => { setPhone(e.target.value) }}
      />

      <Text strong style={{ gridArea: 'l5' }}>Fecha de Nacimiento:</Text>
      <DatePicker style={{ gridArea: 'i5' }}
        defaultPickerValue={moment('01/01/1990', dateFormat)}
        placeholder="Ej: 01/01/1990"
        format={dateFormat}
        //value={firstName}
        onChange={(d, ds) => { setBirthday(ds) }}
      />


      <Text strong style={{ gridArea: 'l6' }}>Direccion:</Text>
      <Input style={{ gridArea: 'i6' }}
        placeholder="Alberdi 1780"
        value={address}
        onChange={e => { setAddress(e.target.value) }}
      />

      <Text strong style={{ gridArea: 'l7' }}>Email:</Text>
      <Input style={{ gridArea: 'i7' }}
        placeholder="Ej. alguien123@gmail.com"
        value={email}
        onChange={e => { setEmail(e.target.value) }}
      />

      <Text strong style={{ gridArea: 'l8' }}>Notas:</Text>
      <TextArea style={{ gridArea: 'i8' }}
        rows={3} placeholder="Ej: Falta traer fotocopia DNI"
        autoSize={{ minRows: 3, maxRows: 3 }}
        value={comment}
        onChange={e => { setComment(e.target.value) }}
      />

    </div>
  )
}
export default StudentForm;

//onChange={onChange}
//justify-self: end

//autoSize={{ minRows: 4, maxRows: 4}}

/*
<=$$$$@@@@//
return (
    <div style={{
      height: '100%', width: '100%',
      display: 'grid',
      gridTemplateColumns: '1fr 2fr',// almost equals to '50% 50%',
      //gridTemplateRows: '40px 40px 40px', // almost equal to '100%',
      gridGap: '20px',

      padding:'20px'


    }}>

      <Text style={useStyles.itemFormLabel}>Nombre:</Text>
      <div  style={useStyles.itemFormInput} ><Input placeholder="Roman / Valeria" /></div>

      <Text strong style={useStyles.itemFormLabel}>Apellido:</Text>
      <div  style={useStyles.itemFormInput} ><Input placeholder="Perez / Hernandez" /></div>

      <Text strong style={useStyles.itemFormLabel}>DNI:</Text>
      <div style={useStyles.itemFormInput} ><Input  placeholder="33444555" /></div>

      <Text strong style={useStyles.itemFormLabel}>Direccion:</Text>
      <div  style={useStyles.itemFormInput} ><Input placeholder="Alberdi 1780" /></div>

      <Text strong style={useStyles.itemFormLabel}>Telefono / Celular:</Text>
      <div  style={useStyles.itemFormInput} ><Input placeholder="0340215665103" /></div>

      <Text strong style={useStyles.itemFormLabel}>Fecha de Nacimiento:</Text>
      <div  style={useStyles.itemFormInput} ><DatePicker defaultPickerValue={moment('01/01/1990', dateFormat)} placeholder="Ej: 01/01/1990" format={dateFormat}/></div>

      <Text strong style={useStyles.itemFormLabel}>Notas:</Text>
      <TextArea rows={3} placeholder="Ej: Falta traer fotocopia DNI" autoSize={{ minRows: 3, maxRows: 3}} />

    </div>
  )

  */