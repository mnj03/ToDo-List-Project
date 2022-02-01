import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import './App.css';
import View from './View'
import Add from './Add';

function App() {
  const [todos, changeTodos] = useState([
    { id: 1, task: "make static data", complete: false }
    ,
    { id: 2, task: "make dynamic data", complete: false }
    ]);

    const updateList = (id, task, complete) => {
      const listItem = {id, task, complete}
      changeTodos((state) => [...state, listItem])
    };

    return (
        <Container>
          <Add />
          <View 
            todos={todos}
            addTodo={(id, description, completed) =>
              updateList(id, description, completed)
            }
          />
        </Container>
    );

}
export default App;
