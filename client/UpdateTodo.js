import React, {Component} from 'react'
import TodoForm from './TodoForm'
import axios from 'axios';

const initialState = {
  taskName: '',
  assignee: '',
  warningMessage: ''
}

export default class UpdateTodo extends Component {
  constructor(props){
    super(props);
    this.state = initialState
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      taskName: nextProps.todo.taskName,
      assignee: nextProps.todo.assignee,
      warningMessage: 'Field is required'
    })
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  async handleSubmit(event){
    event.preventDefault();
    const todoId = this.props.todo.id
    try{
      const res = await axios.put(`/api/todos/${todoId}`, this.state)
      this.props.updateTodo(res.data)
      this.setState(initialState)
      //console.log(res.data)
    }catch (error){
      console.log(error)
    }
    
  }

  render () {
    return (
      <TodoForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} {...this.state}/>
    )
  }
}

