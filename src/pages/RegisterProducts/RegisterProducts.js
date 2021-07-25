import React, { useState } from 'react';
import FormInput from '../../components/FormInput/formInput';
import DefaultTemplate from '../../templates/defaultTemplate';

function RegisterProducts(){

    const [product, setProduct] = useState('')
    const [price, setPrice] = useState('')
    const [quantity, setQuantity] = useState(0)
    const [description, setDescription] = useState('')

    function clearInputs(){
        setProduct(''),
        setPrice(''),
        setQuantity(0),
        setDescription('')
      }
    
    function handleSubmit(e){
      e.preventDefault()
      const localProducts = JSON.parse(localStorage.getItem('products')) ?? []
      const products = [...localProducts, {
        product,
        price,
        quantity,
        description,
        id: localProducts.length+1
      }]
      localStorage.setItem('products', JSON.stringify(products))
      alert('Produto Cadastrado com sucesso!')
      clearInputs()
    }

    return(
        <DefaultTemplate>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <h1>Cadastrar Produto</h1>
            <FormInput
          type='text'
          placeholder='Nome do produto'
          value={product}
          setFunc={setProduct}
          title='Produto'
        />
        <FormInput
          type='number'
          placeholder='Preco'
          value={price}
          setFunc={setPrice}
          title='Preço'
        />
        <FormInput
          type='number'
          placeholder='Quantidade'
          value={quantity}
          setFunc={setQuantity}
          title='Quantidade'
        />
        <FormInput
          type='text-area'
          placeholder='Descrição'
          value={description}
          setFunc={setDescription}
          title='Descrição'
        />
        <button type='submit'>Cadastrar Produto</button>
            </form>
        </DefaultTemplate>
    )
}
export default RegisterProducts