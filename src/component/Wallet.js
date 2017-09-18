import React from 'react'
import PropTypes from 'prop-types'
export default class Wallet extends React.Component {
    static contextTypes = {
        web3: PropTypes.object,
    };
    render() {
        const { web3 } = this.context
        return <div style={{border:'1px solid black', background:'#9bde97', textAlign:'center', width:'30%', margin:'0 auto'}}>
            {
                web3.status
                    ?
                    <div>
                        <div>{web3.account}</div>
                        <div style={{fontWeight:'bolder'}}>{web3.balance + ' ETH'}</div>
                    </div>
                     :
                    <span>Loading web3</span>

            }
        </div>
    }
}