import * as React from "react";
import { Button, Input, Flex, Checkbox, Heading } from "@chakra-ui/react";

// others
import { observer } from "mobx-react";
import store, { Todo } from "../../mobx/store";

function TodoListItems() {
  return (
    <>
      {store.todos.map((todo: Todo) => (
        <Flex pt={2} key={todo.id}>
          <Checkbox onClick={() => (todo.done = !todo.done)} />
          <Input
            mx={2}
            value={todo.text}
            onChange={({ nativeEvent }: any) => {
              todo.text = nativeEvent.target.value;
            }}
          />
          <Button onClick={() => store.removeTodo(todo.id)}>Delete</Button>
        </Flex>
      ))}
    </>
  );
}

const TodoListItemsObserver = observer(TodoListItems);

function TodoList() {
  return (
    <>
      <Heading>Todo List</Heading>
      <TodoListItemsObserver />
    </>
  );
}

export default TodoList;
