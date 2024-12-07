import Card from "../Components/Card";
import { useCharStates } from "../Contex/global.context";

const Favs = () => {
  const {
    state: { favs },
  } = useCharStates();
  const { state: { theme }, dispatch } = useCharStates();

  return (
    <div className={`${theme}`} >
      <h1>Dentists Favs</h1>
      {favs.length > 0 ? (
        <div className="card-grid">
          {favs.map((char) => (
            <Card key={char.id} char={char} />
          ))}
        </div>)
        : (<h3 className="favVoid">No tienes favoritos aún</h3>)}
    </div>
  );
};

export default Favs;
