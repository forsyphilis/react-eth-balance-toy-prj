import React from 'react'
import {Provider} from 'react-redux'
import Web3Provider from "./component/Web3Provider";
import Wallet from './component/Wallet'


const Root = ({store}) => (
    <Provider store={store}>
        <Web3Provider>
            <div>
                <Wallet/>
            </div>
        </Web3Provider>
    </Provider>
)

export default Root