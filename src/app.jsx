console.log('hello webpack')

let fn = () => {
    console.log('hello webpack')
}
fn()

import React from 'react'
import ReactDOM from 'react-dom'

import 'font-awesome/css/font-awesome.min.css'
import './index.css'
import './index.scss'

ReactDOM.render(
    <div>
        <i className="fa fa-address-book"></i>
        <h1>Hello,world!</h1>
    </div>,
    document.getElementById('app')
)