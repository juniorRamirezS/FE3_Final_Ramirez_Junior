import axios from 'axios';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [char, setChar] = useState({});
  const params = useParams();
  const url = "https://jsonplaceholder.typicode.com/users/" + params.id;

  useEffect(() => {
    axios(url).then((res) => {
      setChar(res.data);
    });
  }, []);
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <>
      <h1>{`Detail Dentist ${params.id} `}</h1>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
          <tr>
            <td>{char.name}</td>
            <td>{char.email}</td>
            <td>{char.phone}</td>
            <td>{char.website}</td>
          </tr>
        </tbody>
      </table>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail