import React from 'react';
import { Input,Typography , Pagination, Table, Avatar, Button, Modal, DatePicker  } from 'antd';
import useStyles from '../Common/styles'
import moment from 'moment';

const { Text  } = Typography
const { TextArea } = Input;

const newUser = {
  firstName: '',
  lastName:  '',
  birthday:  '',
  DNI:  '',
  address:  '',
  comment:  '',
  email:  '',
  phone:  '',
  }

const StudentForm = () => {
  const dateFormat = 'DD/MM/YYYY'

  function onChange(date, dateString) {
    console.log(date, dateString);
  }
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
}
export default StudentForm;

//onChange={onChange}
//justify-self: end

//autoSize={{ minRows: 4, maxRows: 4}}