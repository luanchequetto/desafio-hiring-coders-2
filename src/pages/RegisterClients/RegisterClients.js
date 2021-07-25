import React, { useState } from 'react';
import FormInput from '../../components/FormInput/formInput';
import DefaultTemplate from '../../templates/defaultTemplate';
import './styles.css'



function RegisterClients() {

  const [nome, setNome] = useState('')
  const [sobrenome, setSobrenome] = useState('')
  const [email, setEmail] = useState('')
  const [contato, setContato] = useState('')
  const [rua, setRua] = useState('')
  const [numero, setNumero] = useState('')
  const [complemento, setComplemento] = useState('')
  const [bairro, setBairro] = useState('')
  const [cidade, setCidade] = useState('')
  const [estado, setEstado] = useState('')

  function clearInputs(){
    setNome(''),
    setSobrenome(''),
    setEmail(''),
    setContato(''),
    setRua(''),
    setNumero(''),
    setComplemento(''),
    setBairro(''),
    setCidade(''),
    setEstado('')
  }

function handleSubmit(e){
  e.preventDefault()
  const localClients = JSON.parse(localStorage.getItem('clients')) ?? []
  const clients = [...localClients, {
    id: localClients.length +1 ,
    nome,
    sobrenome,
    email,
    contato,
    rua,
    numero,
    complemento,
    bairro,
    cidade,
    estado
  }]
  localStorage.setItem('clients', JSON.stringify(clients))
  alert('Cliente Cadastrado com sucesso!')
  clearInputs()
}


  return (
    <DefaultTemplate>
      <form onSubmit={(e)=>handleSubmit(e)}>
      <h1>Cadastrar Cliente</h1>
        <FormInput
          type='text'
          placeholder='Digite seu nome'
          value={nome}
          setFunc={setNome}
          title='Nome'
        />
        <FormInput
          type='text'
          placeholder='Digite seu sobrenome'
          value={sobrenome}
          setFunc={setSobrenome}
          title='Sobrenome'
        />
        <FormInput
          type='text'
          placeholder='Digite seu email'
          value={email}
          setFunc={setEmail}
          title='E-mail'
        />
        <FormInput
          type='number'
          placeholder='Digite seu contato'
          value={contato}
          setFunc={setContato}
          title='Contato'
        />
        <h3>Endereço</h3>
        <FormInput
          type='text'
          placeholder='Digite sua rua'
          value={rua}
          setFunc={setRua}
          title='Rua'
        />
        <FormInput
          type='number'
          placeholder='Digite o número'
          value={numero}
          setFunc={setNumero}
          title='Número'
        />
        <FormInput
          type='text'
          placeholder='Digite um complemento/referência'
          value={complemento}
          setFunc={setComplemento}
          title='Complemento'
        />
        <FormInput
          type='text'
          placeholder='Digite o bairro'
          value={bairro}
          setFunc={setBairro}
          title='Bairro'
        />
        <FormInput
          type='text'
          placeholder='Digite sua cidade'
          value={cidade}
          setFunc={setCidade}
          title='Cidade'
        />
        <FormInput
          type='text'
          placeholder='Digite seu estado'
          value={estado}
          setFunc={setEstado}
          title='Estado'
        />
        <button type='submit'> Cadastrar Cliente</button>


      </form>

    </DefaultTemplate>
  );
}

export default RegisterClients;