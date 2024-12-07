import axios from 'axios';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useCharStates } from '../Contex/global.context';


const Detail = () => {
  const [char, setChar] = useState({});
  const params = useParams();
  const url = "https://jsonplaceholder.typicode.com/users/" + params.id;

  useEffect(() => {
    axios(url).then((res) => {
      setChar(res.data);
    });
  }, []);

  const { state: { theme }, dispatch } = useCharStates();

  return (
    <div className={`${theme}`}>
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
    </div>
  )
}

export default Detail