import React from 'react';
import ReactDOM from 'react-dom';
import {Tabs, Tab} from 'react-bootstrap';

import EmbarkJS from 'Embark/EmbarkJS';
import Blockchain from './components/blockchain';
import Whisper from './components/whisper';
import Storage from './components/storage';
import ENS from './components/ens';
import Prescriptions from './views/prescriptions';
import Init from './views/init';
import Profile from './views/profile';
import Orders from './views/orders';
import Call from './views/call';
import Empty from './views/empty';
import OrderConfirmation from './views/orderconfirmation';
import Navbar from './components/navbar';
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
      shoppingCart: new Set([34235345]),
      show: true,
      section: "profile",
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

      EmbarkJS.Storage.isAvailable().then((result) => {
        this.setState({storageEnabled: result});
      }).catch(() => {
        this.setState({storageEnabled: false});
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
   /* return (<div>
      <h3>Embark - Usage Example</h3>
      <Tabs onSelect={this.handleSelect} activeKey={this.state.activeKey} id="uncontrolled-tab-example">
        <Tab eventKey={1} title={this._renderStatus('Blockchain', this.state.blockchainEnabled)}>
          <Blockchain/>
        </Tab>
        <Tab eventKey={2} title={this._renderStatus('Decentralized Storage', this.state.storageEnabled)}>
          <Storage enabled={this.state.storageEnabled}/>
        </Tab>
        <Tab eventKey={3} title={this._renderStatus('P2P communication (Whisper)', this.state.whisperEnabled)}>
          <Whisper enabled={this.state.whisperEnabled}/>
        </Tab>
        <Tab eventKey={4} title={this._renderStatus('Naming (ENS)', ensEnabled)}>
          <ENS enabled={ensEnabled}/>
        </Tab>
        <Tab eventKey={5} title={this._renderStatus('Prescriptions', true)}>
          
      </Tab>
      </Tabs>
    </div>);*/
   return this.state.show ?  <Init show={this.state.show}/> :
    <div className="layout">
   <Prescriptions show={this.state.section === "prescriptions"}
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
   <OrderConfirmation show={this.state.section === "orderconfirmation"}/>
   <Empty show={[ "settings"].indexOf(this.state.section) !== -1} />
   <Navbar onSectionSelected={(section)=>{this.setState({section})}} selectedSection={this.state.section} /></div>
  }

  componentDidMount(){
    let elem = document.body;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
      elem.msRequestFullscreen();
    }
    setTimeout(() => {
      this.setState({show: false});
    }, 1)
  }
}

ReactDOM.render(<App></App>, document.getElementById('app'));
