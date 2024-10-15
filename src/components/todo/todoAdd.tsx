import * as React from "react";
import { Button, Input, Grid } from "@chakra-ui/react";

// others
import store from "../../mobx/store";
import { observer } from "mobx-react";

function TodoAdd() {
  return (
    <Grid pt={2} templateColumns="5fr 1fr" columnGap="3">
      <Input
        value={store.newTodo}
        placeholder="New todo"
        onChange={({ nativeEvent }: any) =>
          (store.newTodo = nativeEvent.target.value)
        }
      />
      <Button onClick={() => store.addTodo()}>Add Todo</Button>
    </Grid>
  );
}

export default observer(TodoAdd);
