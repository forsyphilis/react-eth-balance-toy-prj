
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import configureStore from './config/configurationStore'
import Root from "./Root";
import expect from "expect";
import Web3Provider from './component/Web3Provider'

const store = configureStore()



ReactDOM.render(
    <Root store={store}/>,
    document.getElementById('root'));



