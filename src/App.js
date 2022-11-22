import './App.css';
import React from 'react'
import {Table} from 'react-bootstrap'
function App() {
  const users = [
    { name: 'Basant', email: 'basnat@gmail.com', contact: '111' },
    { name: 'Manish', email: 'manish@gmail.com', contact: '333' },
    { name: 'Viakash', email: 'viaksh@gmail.com', contact: '444' },
    { name: 'Mantu', email: 'mantu@gmail.com', contact: '555' },
  ]
  return (
    <div className="App">
      <h1>List With Bootstrap Table</h1>
      <Table striped variant="dark" >
        <tbody>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Contacts</td>
        </tr>
        {
          users.map((item,i)=>
        
          <tr key={i}>
          <td>{item.name}</td>
          <td>{item.email}</td>
        <td>{item.contact}</td>
        </tr>
          )
        }
        </tbody>
      </Table>
    </div>
  );
}

export default App;
