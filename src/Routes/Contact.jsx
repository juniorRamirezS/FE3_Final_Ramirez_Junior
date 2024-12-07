import Form from '../Components/Form'
import { useCharStates } from '../Contex/global.context';


const Contact = () => {

  const { state: { theme }, dispatch } = useCharStates();

  return (
    <div className={`contact-page ${theme}`}  >
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form />
    </div>
  )
}

export default Contact