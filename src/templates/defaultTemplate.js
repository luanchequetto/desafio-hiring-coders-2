import React from 'react';
import Header from '../components/Header/header';
import PropTypes from 'prop-types'
import './styles.css'

function DefaultTemplate({ children }) {
    return (
        <div className='content'>
                <Header />
                {children}    
        </div>
    )
}

DefaultTemplate.propTypes = {
    children: PropTypes.object,
}

export default DefaultTemplate;