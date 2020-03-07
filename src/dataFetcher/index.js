import { Pagination } from "antd";

const gqlReqParser = (query, variables) => ({
  method: "post",
  headers: {
    "Content-Type": "application/json",
    'Accept': 'application/json'
  },
  body: JSON.stringify({
    query, variables
  })
})

const createStudentGQL = `
mutation($student: newUser! ) {
  addUser(user:$student){
    DNI,
    firstName,
    lastName,
    id
  }
}`

const getAllStudentsGQL = `
query($pagination: pagination! ) {
  getAllUser(pagination:$pagination){
    DNI,
    firstName,
    lastName,
    id
  }
}`




const createStudent = async (student) => {
  let response = await fetch(`http://localhost:4002`,
  gqlReqParser(createStudentGQL, {student:student}));
  let data = await response.json()
  return data;
}

const getAllStudents = async(pagination) =>{
  let response = await fetch(`http://localhost:4002`,
  gqlReqParser(getAllStudentsGQL, {pagination}));
  let data = await response.json()
  return data;
}

export { createStudent, getAllStudents }