import React, { Component } from "react";
import TodoListTemplate from "./component/TodoListTemplate";
import Form from './component/Form'

class App extends Component {
  render() {
    return <TodoListTemplate form={<Form/>}>Template Complete</TodoListTemplate>;
  }
}

export default App;
