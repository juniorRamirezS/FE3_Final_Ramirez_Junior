import Card from '../Components/Card'
import { useCharStates } from '../Contex/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const { state: { chars } } = useCharStates();


  console.log(chars);
  //console.log(chars.id);
  //console.log(chars.name);
  //console.log(chars.username);

  return (
    <main className="light" >
      <h1>Home</h1>
      <div className='card-grid'>
        {chars.map((char) => (
          <Card key={char.id} char={char} />
        ))}
        {/* Aqui deberias renderizar las cards */}
      </div>
    </main>
  )
}

export default Home