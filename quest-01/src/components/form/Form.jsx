import "./form.css"
import {useRef} from "react"

function Form(){

  const nameRef = useRef()
  const ageRef = useRef()
  const careerRef = useRef()
  const emailRef = useRef()
  const phoneRef = useRef()
  const successMsg = useRef()


  function handleSubmit(e){
    e.preventDefault()

    
    const name = nameRef.current
    const age = ageRef.current
    const career = careerRef.current
    const email = emailRef.current
    const phone = phoneRef.current

    let ok = true
    function validate(item,state){
      ok =  true
     if(state) return item.style.outline = "none"
      item.style.outline = "red 3px solid"
      ok = false
    }


    name.value.length <= 6 ? validate(name,false) :  validate(name,true) 
    age.value < 18 ? validate(age,false) :  validate(age,true) 
    career.value.length <= 4 ? validate(career,false) :  validate(career,true) 
    !email.value.match(/([a-z]{3,})@([a-z]{3,}).com/gi) ? validate(email,false) :  validate(email,true) 
    phone.value.length < 9 ? validate(phone,false) :  validate(phone,true) 

    if(!ok) return

    const date = new Date().toLocaleDateString("pt-BR",{month:"2-digit", day:"2-digit",year:"numeric"})
    let json = {
      name: name.value,
      age: age.value,
      career: career.value,
      email: email.value,
      phone: phone.value,
      date
    }

    json = JSON.stringify(json)

    name.value = ""
    age.value = ""
    career.value = ""
    email.value =""
    phone.value = ""

    try{
      fetch('detran.com/', {
        method: 'POST',
        body: JSON.stringify(json),
        headers: {
          'Content-Type': 'application/json'
        },
      })
    }catch(err){
      console.log(err)
    }

    successMsg.current.style.display = "block"
    setTimeout(() => {
      successMsg.current.style.display = "none"
    }, 5000);


  }

  return(
    <form  className="container_form" onSubmit={(e) => handleSubmit(e)}>
      <h2>Cadastro de usuários</h2>
      <fieldset className="fieldset">

        <p>
          <label htmlFor="name_input">Nome</label>
          <input ref={nameRef} id="name_input" placeholder="digite seu nome" name="user_name" type="text" />
        </p>

        <p>
          <label htmlFor="age_input">Idade</label>
          <input ref={ageRef} id="age_input" placeholder="digite sua idade" name="user_age" type="number" />
        </p>

        <p>
          <label htmlFor="career_input">Profissão</label>
          <input ref={careerRef} id="career_input" placeholder="digite sua profissão" name="user_career" type="text"/>
        </p>

        <p>
          <label htmlFor="email_input">Email</label>
          <input ref={emailRef} id="email_input" placeholder="digite seu email" name="user_email" type="email" />
        </p>

        <p>
          <label htmlFor="phone_input">Celular</label>
          <input ref={phoneRef} id="phone_input" placeholder="digite seu celular" name="user_phone" type="tel" />
        </p>

        <p ref={successMsg} className="success_msg">Cadastro efetuado com sucesso</p>
      </fieldset>

      <button type="submit">Cadastrar</button>
    </form>
  )
}

export default Form