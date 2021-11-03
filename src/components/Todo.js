import { Row, Button, FormGroup, CardBody, Card, Col } from "reactstrap";
import { getTodo, addTodo, deleteTodo, editTodo } from "../redux/todo/actions";
import { connect } from "react-redux";
import React, { useEffect, useState } from "react";

const Todo = ({
  todo,
  getTodoAction,
  addTodoAction,
  deleteTodoAction,
  editTodoAction,
}) => {
  const [todos, setTodos] = useState({ title: "", status: "active", id: 0});
  const [todoId, setId] = useState(0);
  const [type, setType] = useState("Add Todo")

  useEffect(() => {
    getTodoAction();
  }, [getTodoAction]);

  return (
    <div className="w-75  mx-auto justify-content-center mt-5">
      <Card className="p-5">
          <Row className="mb-4">
            <Col>
              <Button
                color="success"
                onClick={() => {
                  getTodoAction();
                }}
              >
                Show All tasks
              </Button>
            </Col>
            <Col>
              <Button
                color="success"
                onClick={() => {
                  getTodoAction({ filter: "active" });
                }}
              >
                Show Active tasks
              </Button>
            </Col>
            <Col>
              <Button
                color="success"
                onClick={() => {
                  getTodoAction({ filter: "completed" });
                }}
              >
                Show Completed tasks
              </Button>
            </Col>
          </Row>
        <Row>
          <Col>
            <input
              className="form-control"
              onChange={(e) => setTodos({ title: e.target.value, status: "active" })}
              placeholder="Add todo"
              value={todos.title}
            />
          </Col>
          <Col>
            <Button
              type="submit"
              color="primary"
              onClick={async () => {
                type === "Add Todo" ? await addTodoAction({ title: todos.title, status: todos.status }) : await editTodoAction({ title: todos.title, status: todos.status, id: todoId });
                setTimeout(() => {
                  getTodoAction();
                  setType("Add Todo")
                  setTodos({ title: "", status: "active", id: 0 })
                }, 1000);
              }}
            >
              {type}
            </Button>
          </Col>
        </Row>

        <Row className="mt-5">
          {todo?.todos?.length > 0 &&
            todo?.todos?.map((todo) => {
              return (
                <Card className="mb-2">
                  <CardBody>
                    <Row>
                      <Col>
                        <label className="text-gray-500 font-bold">
                          <input
                            checked={todo.status === "completed" ? true : false}
                            className="mr-2 leading-tight"
                            type="checkbox"
                            onChange={(event) => {
                              editTodoAction({
                                id: todo.id,
                                title: todo.title,
                                status: event.target.checked
                                  ? "completed"
                                  : "active",
                              });
                              getTodoAction();
                            }}
                          />{" "}
                          <span className="text-sm"></span>
                        </label>
                      </Col>
                      <Col>
                        <span>{todo.title}</span>
                      </Col>
                      <Col>
                        <span>{todo.status}</span>
                      </Col>
                      <Col>
                        <Button
                          color="danger"
                          type="submit"
                          onClick={() => {
                            deleteTodoAction(todo);
                            setTimeout(() => {
                              getTodoAction();
                            }, 1000); 
                          }}
                        >
                          Delete
                        </Button>{" "}
                        <Button
                          type="submit"
                          color="primary"
                          onClick={() => {
                            setId(todo.id)
                            setTodos(todo);
                            setType("Edit Todo")
                          }}
                        >
                          Edit
                        </Button>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              );
            })}
        </Row>
      </Card>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { todo } = state;
  return {
    todo,
  };
};

export default connect(mapStateToProps, {
  getTodoAction: getTodo,
  addTodoAction: addTodo,
  deleteTodoAction: deleteTodo,
  editTodoAction: editTodo,
})(Todo);
