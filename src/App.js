import React, { Component } from 'react';
import axios from 'axios';
import Time from './components/Time/Time';
import UserInput from './components/UserInput/UserInput';
import ToDo from './components/ToDo/ToDo';
import DoneTasks from './components/DoneTasks/DoneTasks';
import Modal from './components/Modal/Modal';
import Switch from './components/Switch/Switch';
import './App.scss';

export default class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      items: [],
      userinput: '',
      done: [],
      isOpen: false
    }
  }


  async fetchData() {
    await axios.get('https://baconipsum.com/api/?type=meat-and-filler')
    .then(result => this.setState({
      items: result.data
    }))
    .catch(function (error) {
      console.log(error);
    })
  }
  
  componentDidMount() {
    this.fetchData();
  }

  changingInput = (input) => {
    this.setState({
      userinput: input
    })
  };

  addToList = (input) => {
    if (this.state.userinput === '') {
      alert('empty input')
    }
    else{
      const newitems = this.state.items;
      newitems.unshift(input);
      this.setState({
        items: newitems,
        userinput: ''
      })
    }
  }

  delete = (indexp) => {
    const newarray = this.state.items.filter((item, index)=> index !== indexp);
    this.setState({
      items: newarray
    })
  }

  deleteDone = (indexp) => {
    const newarray = this.state.done.filter((item, index)=> index !== indexp);
    this.setState({
      done: newarray
    });
  }

  addToDone = (e) => {
    const donelist = this.state.done;
    donelist.push(e)
    this.setState({
      done: donelist
    });

    if (this.state.items.length === 1) {
      this.setState({
        isOpen: true
      })
    }
  }

  handleKeyPress = (event, ) => {
    if (event.key === 'Enter'){
      this.addToList(this.state.userinput);
    }
  }

  handleModalClose = () => {
    this.setState({
      isOpen: false
    })
  }

  render() {
    return( 
      <div className='App'>
        <div className='container'>
          <Switch />
          <Time />
          <UserInput 
            addToList={this.addToList} 
            handleKeyPress={this.handleKeyPress} 
            changingInput={this.changingInput} 
            userinput={this.state.userinput} 
          />
          <ToDo 
            items={this.state.items} 
            delete={this.delete} 
            addToDone={this.addToDone} 
          />
          <DoneTasks 
            done={this.state.done} 
            deleteDone={this.deleteDone} 
          />
          <Modal open={this.state.isOpen} onClose={this.handleModalClose}>
            Good job!
          </Modal>
        </div>
      </div>
    )
  }
}
