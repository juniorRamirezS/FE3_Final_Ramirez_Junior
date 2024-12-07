import { useEffect, useState } from 'react'
import Card from '../Components/Card'
import axios from 'axios'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const [chars, setChars] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios(url).then((res) => {
      console.log(res.data);
      setChars(res.data)

    });
  }, []);
  console.log(chars);
  console.log(chars.id);
  console.log(chars.name);
  console.log(chars.username);

  return (
    <main className="light" >
      <h1>Home</h1>
      <div className='card-grid'>
        {chars.map((chars) => (
          <Card key={chars.id} char={chars} />
        ))}
        {/* Aqui deberias renderizar las cards */}
      </div>
    </main>
  )
}

export default Home