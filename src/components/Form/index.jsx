import React, { useState } from "react";
import './style.css'
function Form() {
	const [name,setName]=useState('')
	const [email,setEmail]=useState('')
	const [password,setPassword]=useState('')

	const handleName=(e)=>{
		setName(e.target.value)
	}

	const handleEmail=(e)=>{
		setEmail(e.target.value)
	}

	const handlePassword=(e)=>{
		setPassword(e.target.value)
	}

	const submitForm=(e)=>{
		e.preventDefault()
		if (name === '') {
			alert('Nome deve ser informado')
			return
		}
		if (email === '') {
			alert('Email deve ser informado')
			return
		}
		if (password === '') {
			alert('Senha deve ser informada')
			return
		}
		alert(`Olá, ${name}! Seus dados são \n Email: ${email} e Senha: ${password}`)

	}
  return <div className="form-body">
	<label htmlFor="name">Nome</label>
	<input type="text" name="name" placeholder="Digite seu nome..." value={name} onChange={handleName}/>
	<label htmlFor="email">Email</label>
	<input type="email" name="email" placeholder="Digite seu email..." value={email} onChange={handleEmail}/>
	<label htmlFor="password">Senha</label>
	<input type="password" name="password" placeholder="Digite sua senha..." value={password} onChange={handlePassword}/><br/>
	<button onClick={submitForm}>Enviar</button>
  </div>;
}

export default Form;
