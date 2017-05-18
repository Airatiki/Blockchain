import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Session } from 'meteor/session'

import './main.html';
if (typeof web3 !== 'undefined') {

  web3 = new Web3(web3.currentProvider);
} else {

  // set the provider you want from Web3.providers
 // web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

var contract_address_info = '';





Template.assignInformation.events({
  'click #divorce': function(event, template){

//let address = template.find('#cont_address').value;
var MyContract = web3.eth.contract([{"constant":true,"inputs":[],"name":"budjet","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"Wunwed","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"hdenied","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"name","type":"string"},{"name":"surname","type":"string"},{"name":"id","type":"string"},{"name":"country","type":"string"},{"name":"city","type":"string"}],"name":"setHusbend","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"amunt","type":"uint256"}],"name":"wPermisionForBuySomething","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"hid","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"waddress","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"amount","type":"uint256"}],"name":"sendTest","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"wsurname","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"hsurname","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"Hunwed","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"putMoneyInBudget","outputs":[],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"amunt","type":"uint256"}],"name":"hPermisionForBuySomething","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"hcountry","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"haddress","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"wcountry","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"wname","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"wcity","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"name","type":"string"},{"name":"surname","type":"string"},{"name":"id","type":"string"},{"name":"country","type":"string"},{"name":"city","type":"string"}],"name":"setWife","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"hname","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"wid","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"hcity","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"wdenied","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"}]);
var contractInstance = MyContract.at(contract_address_info);
let male = template.find('#Male').checked;


if(male){
contractInstance.Hunwed( function(err, res){
  console.log(res);
})

}

else{
  contractInstance.Wunwed( function(err, res){
    console.log(res);
  })
}
  }
});



Template.assignInformation.events({
  'click #donate_money': function(event, template){

    let amount = template.find('#amount').value;
    var MyContract = web3.eth.contract([{"constant":true,"inputs":[],"name":"budjet","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"Wunwed","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"hdenied","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"name","type":"string"},{"name":"surname","type":"string"},{"name":"id","type":"string"},{"name":"country","type":"string"},{"name":"city","type":"string"}],"name":"setHusbend","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"amunt","type":"uint256"}],"name":"wPermisionForBuySomething","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"hid","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"waddress","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"amount","type":"uint256"}],"name":"sendTest","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"wsurname","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"hsurname","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"Hunwed","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"putMoneyInBudget","outputs":[],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"amunt","type":"uint256"}],"name":"hPermisionForBuySomething","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"hcountry","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"haddress","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"wcountry","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"wname","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"wcity","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"name","type":"string"},{"name":"surname","type":"string"},{"name":"id","type":"string"},{"name":"country","type":"string"},{"name":"city","type":"string"}],"name":"setWife","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"hname","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"wid","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"hcity","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"wdenied","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"}]);
    var contractInstance = MyContract.at(contract_address_info);
   
    contractInstance.putMoneyInBudget.sendTransaction({from: web3.eth.coinbase, to:contract_address_info, value:web3.toWei(amount,'ether')}, function(err,res){
    console.log(err);
});

  }
})



Template.assignInformation.events({
  'click #send_money': function(event, template){

let address = template.find('#money').value;
let amount = template.find('#amount').value;
let male = template.find('#Male').checked;
amount = amount * 1000000000000000000;

var MyContract = web3.eth.contract([{"constant":true,"inputs":[],"name":"budjet","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"Wunwed","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"hdenied","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"name","type":"string"},{"name":"surname","type":"string"},{"name":"id","type":"string"},{"name":"country","type":"string"},{"name":"city","type":"string"}],"name":"setHusbend","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"amunt","type":"uint256"}],"name":"wPermisionForBuySomething","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"hid","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"waddress","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"amount","type":"uint256"}],"name":"sendTest","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"wsurname","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"hsurname","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"Hunwed","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"putMoneyInBudget","outputs":[],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"amunt","type":"uint256"}],"name":"hPermisionForBuySomething","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"hcountry","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"haddress","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"wcountry","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"wname","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"wcity","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"name","type":"string"},{"name":"surname","type":"string"},{"name":"id","type":"string"},{"name":"country","type":"string"},{"name":"city","type":"string"}],"name":"setWife","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"hname","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"wid","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"hcity","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"wdenied","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"}]);
var contractInstance = MyContract.at(contract_address_info);


  if(male){
    contractInstance.hPermisionForBuySomething(address, amount, function(err, res){
    console.log(err);
  })
}
  else{
    contractInstance.wPermisionForBuySomething(address, amount, function(err, res){
    console.log(res);
  })
}

  }
});


Template.assignInformation.helpers({
  getHusband_name(){
    return Session.get('hus_name');
  },

  getHusband_surname(){
    return Session.get('hus_surname');
  },

  getHusband_country(){
    return Session.get('hus_country');
  },

  getHusband_city(){
    return Session.get('hus_city');
  },

  getHusband_id(){
    return Session.get('hus_passID');
  },

  getWife_name(){
    return Session.get('wife_name');
  },

  getWife_surname(){
    return Session.get('wife_surname');
  },

  getWife_country(){
    return Session.get('wife_country');
  },

  getWife_city(){
    return Session.get('wife_city');
  },

  getWife_id(){
    return Session.get('wife_passID');
  }

});



Template.assign.events({
  'click #show_info':function (event, template) {
    let address = template.find('#enter_address').value;
    contract_address_info = address;

    var MyContract = web3.eth.contract([{"constant":true,"inputs":[],"name":"budjet","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"Wunwed","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"hdenied","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"name","type":"string"},{"name":"surname","type":"string"},{"name":"id","type":"string"},{"name":"country","type":"string"},{"name":"city","type":"string"}],"name":"setHusbend","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"amunt","type":"uint256"}],"name":"wPermisionForBuySomething","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"hid","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"waddress","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"amount","type":"uint256"}],"name":"sendTest","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"wsurname","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"hsurname","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"Hunwed","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"putMoneyInBudget","outputs":[],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"amunt","type":"uint256"}],"name":"hPermisionForBuySomething","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"hcountry","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"haddress","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"wcountry","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"wname","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"wcity","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"name","type":"string"},{"name":"surname","type":"string"},{"name":"id","type":"string"},{"name":"country","type":"string"},{"name":"city","type":"string"}],"name":"setWife","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"hname","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"wid","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"hcity","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"wdenied","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"}]);

    var contractInstance = MyContract.at(address);


    contractInstance.hname( function (err, res) {
        Session.set('hus_name', res);
        console.log(res);});
    
    contractInstance.wname( function (err, res) {
        Session.set('wife_name', res);
        console.log(res);});

    contractInstance.hsurname( function (err, res) {
        Session.set('hus_surname', res);
        console.log(res);});
    
    contractInstance.wsurname( function (err, res) {
        Session.set('wife_surname', res);
        console.log(res);});

    contractInstance.hcountry( function (err, res) {
        Session.set('hus_country', res);
        console.log(res);});
    
    contractInstance.wcountry( function (err, res) {
        Session.set('wife_country', res);
        console.log(res);});

    contractInstance.hcity( function (err, res) {
        Session.set('hus_city', res);
        console.log(res);});
    
    contractInstance.wcity( function (err, res) {
        Session.set('wife_city', res);
        console.log(res);});

    contractInstance.hid( function (err, res) {
        Session.set('hus_passID', res);
        console.log(res);});
    
    contractInstance.wid( function (err, res) {
        Session.set('wife_passID', res);
        console.log(res);});

  }

});

Template.registration.events({
  'click #create_cont':function(event, template){
    var address = '';
    var wait = 'Please, wait, while your contract deploying';
    var template = Template.instance();
    TemplateVar.set(template, "wait", wait);
   var untitled9_weddingcontract3Contract = web3.eth.contract([{"constant":true,"inputs":[],"name":"budjet","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"Wunwed","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"hdenied","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"name","type":"string"},{"name":"surname","type":"string"},{"name":"id","type":"string"},{"name":"country","type":"string"},{"name":"city","type":"string"}],"name":"setHusbend","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"amunt","type":"uint256"}],"name":"wPermisionForBuySomething","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"hid","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"waddress","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"amount","type":"uint256"}],"name":"sendTest","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"wsurname","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"hsurname","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"Hunwed","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"putMoneyInBudget","outputs":[],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"amunt","type":"uint256"}],"name":"hPermisionForBuySomething","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"hcountry","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"haddress","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"wcountry","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"wname","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"wcity","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"name","type":"string"},{"name":"surname","type":"string"},{"name":"id","type":"string"},{"name":"country","type":"string"},{"name":"city","type":"string"}],"name":"setWife","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"hname","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"wid","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"hcity","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"wdenied","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"}]);
var untitled9_weddingcontract3 = untitled9_weddingcontract3Contract.new(
   {
     from: web3.eth.accounts[0], 
     data: '0x6060604052341561000c57fe5b5b611c158061001c6000396000f3006060604052361561013c576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063034a49561461013e578063068491d414610164578063079f7deb146101765780630c0f8829146101a05780631002e40a146103065780631adea6cf146103455780631ed9999a146103de5780632940818d14610430578063328338231461046f57806346f5eb6c1461050857806350ee72fb146105a15780635bb4dec7146105b3578063759610d1146105bd5780637689caba146105fc5780638399143d146106955780638da5cb5b146106e757806390e7a692146107395780639d3c3dd2146107d2578063ad43341b1461086b578063b4bc6c6014610904578063b73e7f8b14610a6a578063b89158d814610b03578063c0d49f6614610b9c578063c6e328cb14610c35575bfe5b341561014657fe5b61014e610c5f565b6040518082815260200191505060405180910390f35b341561016c57fe5b610174610c65565b005b341561017e57fe5b610186610cfd565b604051808215151515815260200191505060405180910390f35b34156101a857fe5b610304600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050610d10565b005b341561030e57fe5b610343600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610e2f565b005b341561034d57fe5b610355610f7d565b60405180806020018281038252838181518152602001915080519060200190808383600083146103a4575b8051825260208311156103a457602082019150602081019050602083039250610380565b505050905090810190601f1680156103d05780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156103e657fe5b6103ee61101b565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561043857fe5b61046d600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050611041565b005b341561047757fe5b61047f61107f565b60405180806020018281038252838181518152602001915080519060200190808383600083146104ce575b8051825260208311156104ce576020820191506020810190506020830392506104aa565b505050905090810190601f1680156104fa5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561051057fe5b61051861111d565b6040518080602001828103825283818151815260200191508051906020019080838360008314610567575b80518252602083111561056757602082019150602081019050602083039250610543565b505050905090810190601f1680156105935780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156105a957fe5b6105b16111bb565b005b6105bb611253565b005b34156105c557fe5b6105fa600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050611266565b005b341561060457fe5b61060c6113b4565b604051808060200182810382528381815181526020019150805190602001908083836000831461065b575b80518252602083111561065b57602082019150602081019050602083039250610637565b505050905090810190601f1680156106875780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561069d57fe5b6106a5611452565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156106ef57fe5b6106f7611478565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561074157fe5b61074961149e565b6040518080602001828103825283818151815260200191508051906020019080838360008314610798575b80518252602083111561079857602082019150602081019050602083039250610774565b505050905090810190601f1680156107c45780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156107da57fe5b6107e261153c565b6040518080602001828103825283818151815260200191508051906020019080838360008314610831575b8051825260208311156108315760208201915060208101905060208303925061080d565b505050905090810190601f16801561085d5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561087357fe5b61087b6115da565b60405180806020018281038252838181518152602001915080519060200190808383600083146108ca575b8051825260208311156108ca576020820191506020810190506020830392506108a6565b505050905090810190601f1680156108f65780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561090c57fe5b610a68600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050611678565b005b3415610a7257fe5b610a7a611797565b6040518080602001828103825283818151815260200191508051906020019080838360008314610ac9575b805182526020831115610ac957602082019150602081019050602083039250610aa5565b505050905090810190601f168015610af55780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3415610b0b57fe5b610b13611835565b6040518080602001828103825283818151815260200191508051906020019080838360008314610b62575b805182526020831115610b6257602082019150602081019050602083039250610b3e565b505050905090810190601f168015610b8e5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3415610ba457fe5b610bac6118d3565b6040518080602001828103825283818151815260200191508051906020019080838360008314610bfb575b805182526020831115610bfb57602082019150602081019050602083039250610bd7565b505050905090810190601f168015610c275780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3415610c3d57fe5b610c45611971565b604051808215151515815260200191505060405180910390f35b600d5481565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610cc157610cfb565b6001601060016101000a81548160ff021916908315150217905550601060029054906101000a900460ff1615610cfa57610cf9611984565b5b5b565b601060029054906101000a900460ff1681565b600060149054906101000a900460ff161515610e275733600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508460089080519060200190610d7d929190611b44565b508360099080519060200190610d94929190611b44565b5082600a9080519060200190610dab929190611b44565b5081600b9080519060200190610dc2929190611b44565b5080600c9080519060200190610dd9929190611b44565b506001600060166101000a81548160ff021916908315150217905550600060159054906101000a900460ff1615610e26576001600060146101000a81548160ff0219169083151502179055505b5b5b5050505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610e8b57610f79565b601060009054906101000a900460ff161515610f09576001600e60006101000a81548160ff02191690831515021790555081600e60016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600f81905550610f78565b600f5481148015610f675750600e60019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16145b15610f7757610f768282611ae0565b5b5b5b5050565b600a8054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156110135780601f10610fe857610100808354040283529160200191611013565b820191906000526020600020905b815481529060010190602001808311610ff657829003601f168201915b505050505081565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b8173ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051809050600060405180830381858888f19350505050505b5050565b60038054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156111155780601f106110ea57610100808354040283529160200191611115565b820191906000526020600020905b8154815290600101906020018083116110f857829003601f168201915b505050505081565b60098054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156111b35780601f10611188576101008083540402835291602001916111b3565b820191906000526020600020905b81548152906001019060200180831161119657829003601f168201915b505050505081565b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561121757611251565b6001601060026101000a81548160ff021916908315150217905550601060019054906101000a900460ff16156112505761124f611984565b5b5b565b34600d600082825401925050819055505b565b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156112c2576113b0565b600e60009054906101000a900460ff161515611340576001601060006101000a81548160ff02191690831515021790555081600e60016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600f819055506113af565b600f548114801561139e5750600e60019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16145b156113ae576113ad8282611ae0565b5b5b5b5050565b600b8054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561144a5780601f1061141f5761010080835404028352916020019161144a565b820191906000526020600020905b81548152906001019060200180831161142d57829003601f168201915b505050505081565b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60058054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156115345780601f1061150957610100808354040283529160200191611534565b820191906000526020600020905b81548152906001019060200180831161151757829003601f168201915b505050505081565b60028054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156115d25780601f106115a7576101008083540402835291602001916115d2565b820191906000526020600020905b8154815290600101906020018083116115b557829003601f168201915b505050505081565b60068054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156116705780601f1061164557610100808354040283529160200191611670565b820191906000526020600020905b81548152906001019060200180831161165357829003601f168201915b505050505081565b600060149054906101000a900460ff16151561178f5733600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555084600290805190602001906116e5929190611b44565b5083600390805190602001906116fc929190611b44565b508260049080519060200190611713929190611b44565b50816005908051906020019061172a929190611b44565b508060069080519060200190611741929190611b44565b506001600060156101000a81548160ff021916908315150217905550600060169054906101000a900460ff161561178e576001600060146101000a81548160ff0219169083151502179055505b5b5b5050505050565b60088054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561182d5780601f106118025761010080835404028352916020019161182d565b820191906000526020600020905b81548152906001019060200180831161181057829003601f168201915b505050505081565b60048054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156118cb5780601f106118a0576101008083540402835291602001916118cb565b820191906000526020600020905b8154815290600101906020018083116118ae57829003601f168201915b505050505081565b600c8054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156119695780601f1061193e57610100808354040283529160200191611969565b820191906000526020600020905b81548152906001019060200180831161194c57829003601f168201915b505050505081565b601060019054906101000a900460ff1681565b60006002600d5481151561199457fe5b049050600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051809050600060405180830381858888f1935050505050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051809050600060405180830381858888f19350505050506000600d819055506000600060146101000a81548160ff0219169083151502179055506000601060016101000a81548160ff0219169083151502179055506000601060026101000a81548160ff0219169083151502179055506000600060156101000a81548160ff0219169083151502179055506000600060166101000a81548160ff0219169083151502179055505b50565b80600d600082825403925050819055508173ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051809050600060405180830381858888f193505050501515611b3f5780600d600082825401925050819055505b5b5050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10611b8557805160ff1916838001178555611bb3565b82800160010185558215611bb3579182015b82811115611bb2578251825591602001919060010190611b97565b5b509050611bc09190611bc4565b5090565b611be691905b80821115611be2576000816000905550600101611bca565b5090565b905600a165627a7a72305820708c855d6905cf62d90fd8b293aa6b79530f19d6cde932ea4eac725d8c4758880029', 
     gas: '4700000'
   }, function (e, contract){
    console.log(e, contract);
    if (typeof contract.address !== 'undefined') {
         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
         TemplateVar.set(template, "address", contract.address);
    }
 })
  }

});

Template.registration.events({
'click #send_cont': function (event, template) {
let name = template.find('#name').value;
let surname = template.find('#surname') .value;
let password = template.find('#idNumber').value;
let country = template.find('#country').value;
let city = template.find('#city').value;
let address = template.find('#code').value;
let male = template.find('#male').checked;

var MyContract = web3.eth.contract([{"constant":true,"inputs":[],"name":"budjet","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"Wunwed","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"hdenied","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"name","type":"string"},{"name":"surname","type":"string"},{"name":"id","type":"string"},{"name":"country","type":"string"},{"name":"city","type":"string"}],"name":"setHusbend","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"amunt","type":"uint256"}],"name":"wPermisionForBuySomething","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"hid","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"waddress","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"amount","type":"uint256"}],"name":"sendTest","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"wsurname","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"hsurname","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"Hunwed","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"putMoneyInBudget","outputs":[],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"amunt","type":"uint256"}],"name":"hPermisionForBuySomething","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"hcountry","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"haddress","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"wcountry","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"wname","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"wcity","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"name","type":"string"},{"name":"surname","type":"string"},{"name":"id","type":"string"},{"name":"country","type":"string"},{"name":"city","type":"string"}],"name":"setWife","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"hname","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"wid","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"hcity","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"wdenied","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"}]);
var contractInstance = MyContract.at(address);
if(male)
{
console.log(address);
contractInstance.setHusbend(name, surname, password, country, city, function (err, res) {
        console.log(res);
    });
}
else{

contractInstance.setWife(name, surname, password, country, city, function (err, res) {
        console.log(res);
    });

}
}
});

