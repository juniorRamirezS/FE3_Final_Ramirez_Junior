import { useState } from 'react';


const Form = () => {
  const [user, setUser] = useState({
    nombre: "",
    email: ""
  });

  const [mostrar, setMostrar] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (
      user.nombre.length >= 3 &&
      regex.test(user.email)) {
      setMostrar(true)
      setError(false)
    } else {
      setError(true);
      setMostrar(false)
    }
  }
  return (
    <div className='contact-form'>
      <form onSubmit={handleSubmit}  >
        <label>Nombre Completo</label>
        <input
          type="text"
          onChange={(event) => setUser({ ...user, nombre: event.target.value })} />
        <label >Email</label>
        <input
          type="text"
          onChange={(event) => setUser({ ...user, email: event.target.value })} />
        <button className='favButton' >Enviar</button>
        {error ?
          <h4 className='error-message' style={{ color: "red" }}>
            “Por favor ingrese la información correctamente”.
          </h4> : null}
        {mostrar ?
          <div className='success-message'>
            <p className='' >{`Gracias ${user.nombre}, te contactaremos pronto`}</p>
            <p className='' >{`a tu correo registrado: ${user.email}`}</p>
          </div> : null}
      </form>
    </div>
  );
};

export default Form; 
