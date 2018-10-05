import EmbarkJS from 'Embark/EmbarkJS';
import DrugOn from 'Embark/contracts/DrugOn';

import React from 'react';
import { Form, FormGroup, FormControl, HelpBlock, Button } from 'react-bootstrap';

class Drugon extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      valueSet: 10,
      valueGet: "",
      logs: []
    }
  }


  setValue(e) {
    e.preventDefault();

    var value = parseInt(this.state.valueSet, 10);

    SimpleStorage.methods.set(value).send();
    this._addToLog("SimpleStorage.methods.set(value).send()");
  }

  getValue(e) {
    e.preventDefault();

    SimpleStorage.methods.get().call().then(_value => this.setState({ valueGet: _value }));
    this._addToLog("SimpleStorage.methods.get(console.log)");
  }

  _addToLog(txt) {
    this.state.logs.push(txt);
    this.setState({ logs: this.state.logs });
  }

  render() {
    return ( //<React.Fragment>
    // 	<div style={{backgroundColor: 'white'}}>
    //     <h3> 1. Set the value in the blockchain</h3>
    //     <Form inline onKeyDown={(e) => this.checkEnter(e, this.setValue)}>
    //       <FormGroup>
    //         <FormControl
    //           type="text"
    //           defaultValue={this.state.valueSet}
    //           onChange={(e) => this.handleChange(e)}/>
    //         <Button bsStyle="primary" onClick={(e) => this.setValue(e)}>Set Value</Button>
    //         <HelpBlock>Once you set the value, the transaction will need to be mined and then the value will be updated
    //           on the blockchain.</HelpBlock>
    //       </FormGroup>
    //     </Form>

    //     <h3> 2. Get the current value</h3>
    //     <Form inline>
    //       <FormGroup>
    //         <HelpBlock>current value is <span className="value">{this.state.valueGet}</span></HelpBlock>
    //         <Button bsStyle="primary" onClick={(e) => this.getValue(e)}>Get Value</Button>
    //         <HelpBlock>Click the button to get the current value. The initial value is 100.</HelpBlock>
    //       </FormGroup>
    //     </Form>

    //     <h3> 3. Contract Calls </h3>
    //     <p>Javascript calls being made: </p>
    //     <div className="logs">
    //       {
    //         this.state.logs.map((item, i) => <p key={i}>{item}</p>)
    //       }
    //     </div>
    //     </div>
    //   </React.Fragment>
    null
    );
  }
  componentDidMount(){
  	const FIRST_TIME = true
  	if (FIRST_TIME) {
  		 web3.eth.getAccounts().then(accs=>{
  		 let acc = "0x670304063b1a5c3edE4b46d361CE61Ae2560b334" || accs[0];
 			// this.createPatient(acc);
 			let pc = this.getPrescritionsCount(acc) ;
 			// let prescs = this.getPrescriptionById(acc);
  		 });
  		
  	}
  }

  async createPatient(acc) {
	 var address = acc;
	 // set up our contract method with the input values from the form
	 const createPatient = DrugOn.methods.createPatient();
	 const gasEstimate = await createPatient.estimateGas({ from: address, gas: 100000 });
	 const result = await createPatient.send({ from: address,  gas: gasEstimate + 1000 });

	 console.log(result)
  }

  async getPrescritionsCount(acc)  {

   var addressPatient = acc;

   // set up our contract method with the input values from the form
   const getPrescritionsCounts = await DrugOn.methods.getPrescritionsCount(addressPatient).call();
   console.log(getPrescritionsCounts)
  }

  async getPrescriptionById (acc) {

   var addressPatient = acc;
   var index = 0;

   // set up our contract method with the input values from the form
   const getPrescritionsByIdS = await DrugOn.methods.getPrescritionsById(addressPatient, index).call();
   console.log(getPrescritionsByIdS)
  }

  handleChange(e) {
    this.setState({ valueSet: e.target.value });
  }

  checkEnter(e, func) {
    if (e.key !== 'Enter') {
      return;
    }
    e.preventDefault();
    func.apply(this, [e]);
  }
}

export default Drugon;
