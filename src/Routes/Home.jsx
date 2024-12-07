import Card from '../Components/Card'
import { useCharStates } from '../Contex/global.context';


const Home = () => {

  const { state: { chars } } = useCharStates();
  const { state: { theme }, dispatch } = useCharStates();

  return (
    <main className={`${theme}`} >
      <h1>Home</h1>
      <div className='card-grid'>
        {chars.map((char) => (
          <Card key={char.id} char={char} />
        ))}
      </div>
    </main>
  )
}

export default Home