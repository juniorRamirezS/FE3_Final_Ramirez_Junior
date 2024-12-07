import Card from "../Components/Card";
import { useCharStates } from "../Contex/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {
    state: { favs },
  } = useCharStates();

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favs.map((char) => (
          <Card key={char.id} char={char} />
        ))}
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </>
  );
};

export default Favs;
