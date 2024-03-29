import React, {Component} from 'react'
import axios from 'axios'
import TodoForm from './TodoForm'

const initialState = {
  taskName: '',
  assignee: '',
  errorMessage: ''
}

export default class CreateTodo extends Component {
  constructor(props){
    super(props);
    this.state = initialState
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  async handleSubmit(event){
    event.preventDefault()
    try{
      const res = await axios.post('/api/todos', this.state);
      this.props.addTodo(res.data)
      this.setState(initialState)
    }catch (error){
      this.setState({
        errorMessage: 'Network Eroor!!!!!!!!!!!! ' + error.message
      })
      console.log(error)
    }
    
    
  }

  render () {
    return (
      <TodoForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} {...this.state}/>
    )
  }
}

