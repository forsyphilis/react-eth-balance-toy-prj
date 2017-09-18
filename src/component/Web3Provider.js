import React, {Children} from 'react'
import PropTypes from 'prop-types'



export default class Web3Provider extends React.Component {
    static childContextTypes = {
        web3: PropTypes.object
    }
    getChildContext(){
        return {
            web3:{
                account: this.state.account,
                balance: this.state.balance,
                status: this.state.status
            }
        }
    }
    componentDidMount() {
        setTimeout(() => {
            if (typeof web3 !== 'undefined') {
                // console.log('a')
                // Use Mist/MetaMask's provider
                window.web3 = new Web3(web3.currentProvider);
                this.setStatus(true)
            } else {
                console.log('No web3? You should consider trying MetaMask!')
                // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)\

                // window.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

            }
            this.getBalance()
        },1500)

    }
    constructor(props){
        super(props)

        // this.getBalance = this.getBalance.bind(this)
        let t = window.web3 ? setInterval(() => this.getBalance(), 1000) : null
        this.state = {
            balanceTimer: t,
            account: '',
            balance: 0,
            status:false
        }


    }
    setStatus(status){
        this.setState((prevState, props) => {
            return {
                ...prevState,
                status: status
            }
        })
    }
    getBalance() {
        web3.eth.getCoinbase((e, address) => {

            web3.eth.getBalance(address, (e, balances) => {

                this.setAccount(address)
                this.setBalance(Number(web3.fromWei(Number(balances), 'ether')))

            });

        })
    }
    setBalance(balance){
        this.setState((prevState, props) => {
            return {
                ...prevState,
                balance: balance
            }
        })
    }
    setAccount(account){
        this.setState((prevState, props) => {
            return {
                ...prevState,
                account: account
            }
        })
    }

    render() {
        return Children.only(this.props.children)
    }
}
