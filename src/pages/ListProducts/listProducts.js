import React from 'react'
import { useHistory } from 'react-router-dom';
import DefaultTemplate from '../../templates/defaultTemplate';

function ListProducts() {

    const products = JSON.parse(localStorage.getItem('products')) ?? []
    const history = useHistory();

    function handleRemove(item) {
        for (let i = 0; i < products.length; i++) {
            if (products[i].id === item.id) {
                products.splice(i)
            }
        }
        localStorage.setItem('products', JSON.stringify(products))
        history.push('/list/products')
    }

    return (
        <DefaultTemplate>
            <div>
                <ul>
                    {products.length ? products.map((item) => {
                        return (
                            <li key={item.id}>
                                <section>
                                    <div className='name'>
                                        <p><span>{item.product}</span></p>
                                        <p>R$ {item.price}</p>
                                    </div>
                                    <div className='content'>
                                        <div>
                                            <p>Quantidade</p>
                                            <p>{item.quantity}</p>
                                        </div>
                                        <div>
                                            <p>Descrição</p>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                    <button id='remove-btn' onClick={() => handleRemove(item)}>Remover Produto</button>
                                </section>

                            </li>
                        )
                    }) : 'Não há produtos cadastrados'}
                </ul>


            </div>
        </DefaultTemplate>
    )
}
export default ListProducts