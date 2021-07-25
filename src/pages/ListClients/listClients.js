import React from 'react'
import { useHistory } from 'react-router-dom'
import DefaultTemplate from '../../templates/defaultTemplate'
import './styles.css'

function ListClients() {

    const clients = JSON.parse(localStorage.getItem('clients')) ?? []
    const history = useHistory();

    function handleRemove(client) {
        for (let i = 0; i < clients.length; i++) {
            if (clients[i].id === client.id) {
                clients.splice(i)
            }
        }
        localStorage.setItem('clients', JSON.stringify(clients))
        history.push('/list/clients')
    }

    return (
        <DefaultTemplate>
            <div>
                <ul>
                    {clients.length ? clients.map((client) => {
                        return (
                            <li key={client.id}>
                                <section>
                                    <div className='name'>
                                        <p><span>{client.nome} {client.sobrenome}</span></p>
                                        <p>{client.email}</p>
                                    </div>
                                    <div className='content'>
                                        <div>
                                            <p>Telefone</p>
                                            <p>{client.contato}</p>
                                        </div>
                                        <div>
                                            <p>{client.cidade}</p>
                                            <p>{client.estado}</p>
                                        </div>
                                        <div>
                                            <p>Rua: {client.rua}</p>
                                            <p>Bairro: {client.bairro}</p>
                                        </div>
                                        <div>
                                            <p>Complemento: </p>
                                            <p>{client.complemento}</p>
                                        </div>

                                    </div>
                                    <button id='remove-btn' onClick={() => handleRemove(client)}>Remover Cliente</button>
                                </section>

                            </li>
                        )
                    }) : 'Não há clientes cadastrados'}
                </ul>


            </div>
        </DefaultTemplate>
    )
}
export default ListClients