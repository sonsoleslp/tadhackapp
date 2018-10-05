import React from 'react';
import ReactDOM from 'react-dom';
import {Tabs, Tab} from 'react-bootstrap';

import EmbarkJS from 'Embark/EmbarkJS';
import Blockchain from './components/blockchain';
import Whisper from './components/whisper';
import ENS from './components/ens';
import Prescriptions from './views/prescriptions';
import Init from './views/init';
import Profile from './views/profile';
import Orders from './views/orders';
import FAK from './views/firstaidkit';
import Call from './views/call';
import Empty from './views/empty';
import OrderConfirmation from './views/orderconfirmation';
import Navbar from './components/navbar';
import Drugon from './components/drugon';
import {prescriptions} from './constants/constants';
import './bootstrap.min.css';
import './dapp.css';

class App extends React.Component {

  constructor(props) { 
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
    this.state = {
      error: null,
      activeKey: 1,
      whisperEnabled: false,
      storageEnabled: false,
      blockchainEnabled: false,
      shoppingCart: new Set([ ]),
      show: true,
      section: "profile",
      prescriptions
    };
  }

  componentDidMount() {
    EmbarkJS.onReady((err) => {
      this.setState({blockchainEnabled: true});
      if (err) {
        // If err is not null then it means something went wrong connecting to ethereum
        // you can use this to ask the user to enable metamask for e.g
        return this.setState({error: err.message || err});
      }

      EmbarkJS.Messages.Providers.whisper.getWhisperVersion((err, _version) => {
        if (err) {
          return console.log(err);
        }
        this.setState({whisperEnabled: true});
      });
 
    });
  }

  _renderStatus(title, available) {
    let className = available ? 'pull-right status-online' : 'pull-right status-offline';
    return <React.Fragment>
      {title}
      <span className={className}></span>
    </React.Fragment>;
  }

  handleSelect(key) {
    this.setState({ activeKey: key });
  }

  render() {
    const ensEnabled = EmbarkJS.Names.currentNameSystems && EmbarkJS.Names.isAvailable();
    if (this.state.error) {
      return (<div>
        <div>Something went wrong connecting to ethereum. Please make sure you have a node running or are using metamask to connect to the ethereum network:</div>
        <div>{this.state.error}</div>
      </div>);
    }
   return this.state.show ?  <Init show={this.state.show}/> :
    <div className="layout">
    {(this.state.section !== "profile" && this.state.section !== "call") ?<img className="profile-shortcut"  src="images/268x268-hombre-de-brazos-cruzados.png"/>:null}

   <Prescriptions show={this.state.section === "prescriptions"} prescriptions={this.state.prescriptions}
      shoppingCart={this.state.shoppingCart} 
      orderConfirmation={()=>{
        this.setState({section: "orderconfirmation"});
      }}
      onPrescriptionSelected={ (id)=>{ 
        let shoppingCart = new Set(this.state.shoppingCart);
        shoppingCart.has(id) ? shoppingCart.delete(id) : shoppingCart.add(id)
        this.setState({shoppingCart})}
   } />
   <Profile onSectionSelected={(section)=>{this.setState({section})}} show={this.state.section === "profile"} />
   <Call show={this.state.section === "call"}/>
   <Orders show={this.state.section === "orders"}
      shoppingCart={this.state.shoppingCart} 
      onPrescriptionSelected={ (id)=>{ 
        let shoppingCart = new Set(this.state.shoppingCart);
        shoppingCart.has(id) ? shoppingCart.delete(id) : shoppingCart.add(id)
        this.setState({shoppingCart})}
   } />
   <FAK show={this.state.section === "fak"}
      shoppingCart={this.state.shoppingCart} 
      orderConfirmation={()=>{
        this.setState({shoppingCart: new Set()});
      }}
      onPrescriptionSelected={ (id)=>{ 
        let shoppingCart = new Set(this.state.shoppingCart);
        shoppingCart.has(id) ? shoppingCart.delete(id) : shoppingCart.add(id)
        this.setState({shoppingCart})}
   } />
   <OrderConfirmation show={this.state.section === "orderconfirmation"}/>
   <Empty show={[ "settings"].indexOf(this.state.section) !== -1} />
   <Drugon setRecipes={(prescriptions)=>{this.setState({prescriptions})}}/>
   <Navbar orders={this.state.shoppingCart.size} onSectionSelected={(section)=>{this.setState({section})}} selectedSection={this.state.section} /></div>
  }

  componentDidMount(){
   
    setTimeout(() => {
      this.setState({show: false});
    }, 2000)




  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
