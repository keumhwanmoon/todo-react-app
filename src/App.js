import React from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo';
import {call} from './FetchUtils';
import { Paper, List, Container } from "@material-ui/core";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    console.log("App Component is Mounted!");

    this.reload();    
  }

  reload = () => {
    call("/todo")
      .then((response) => {
        console.log("response :", response);
        this.setState({ items: response.result });
      });
  }

  add = (item) => {
    call("/todo", "POST", item)
      .then(() => {
        this.reload();
      });
  }

  delete = (item) => {
    const thisItems = this.state.items;
    const updatedItems = thisItems.filter(e => e.id !== item.id);
    this.setState({items: updatedItems}, () => {
      console.log("Updated Items : ", this.state.items);
    });
  }

  render() {
    let todoItems = this.state.items.length > 0 && (
      <Paper style={{ margin: 16 }}>
        <List>
          {this.state.items.map((item, idx) => (
            <Todo item={item} key={item.id} delete={this.delete}/>
          ))}
        </List>
      </Paper>
    )

    return (
      <div className="App">
        <Container maxWidth="md">
          <AddTodo add={this.add}/>
          {todoItems}
        </Container>
      </div>
    )}  
}

export default App;