import React from 'react'
import { BrowserRouter, Link, Switch } from 'react-router-dom'
import HomePage from '../pages/HomePage/homePage'
import ListClients from '../pages/ListClients/listClients'
import ListProducts from '../pages/ListProducts/listProducts'
import RegisterClients from '../pages/RegisterClients/RegisterClients'
import RegisterProducts from '../pages/RegisterProducts/RegisterProducts'

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Link exact path='/' component={HomePage} />
                <Link exact path='/add/client' component={RegisterClients} />
                <Link exact path='/add/products' component={RegisterProducts} />
                <Link exact path='/list/clients' component={ListClients} />
                <Link exact path='/list/products' component={ListProducts} />

            </Switch>
        </BrowserRouter>
    )
}

export default Router