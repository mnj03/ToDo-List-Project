import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Add(props) {

  const [state, changeState] = useState({
    id: 0,
    description: "",
    completed: false

  })

  const submitHandler =(event)=>{
    event.preventDefault();
    props.addTodo(state.id, state.description, state.completed);
    changeState({
      id: 0,
      description: "",
      completed: false
    })
    console.log(state)
  }

  const handleChange = (event) => {
    const newState = {...state};

    if (event.target.name === "completed") {
      newState[event.target.name] = !state.completed;
    } else {
      newState[event.target.name] = event.target.value;
    }
    changeState(newState);
  }

  return (
      <div className="container">
        <Form onSubmit = {(event) => submitHandler(event)}>
          <Form.Group controlId="taskID">
            <Form.Label>Task ID</Form.Label>
            <Form.Control 
              name="id" 
              type="number"
              onChange={(e)=> handleChange(e)}
            />
          </Form.Group>

          <Form.Group controlId="taskDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control 
              name="description" 
              type="text"
              onChange={(e)=> handleChange(e)}
            />
          </Form.Group>

          <Form.Group controlId="complete">
            <Form.Control 
              name="completed" 
              type="checkbox" 
              onChange={(e)=> handleChange(e)}  
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>

        </Form>
      </div>
  );

}

export default Add;