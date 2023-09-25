import { useParams, useNavigate } from "react-router-dom"

const ContactDetails = () => {
    const { id } = useParams();

    const navigate =  useNavigate();

    const hadleContact = () => {
        console.log("Contato enviado!")
        return navigate("/");
    }
    //6 - redirect ith logic way
  return (
    <div>
       <h1> Exibindo mais informações do contato: { id } </h1>
       <button onClick={hadleContact}>Enviar mensagem</button>
    </div>
  )
}

export default ContactDetails