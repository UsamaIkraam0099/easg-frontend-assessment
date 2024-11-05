// others
import ProtectedRoute from "./protectedRoute";
import { SignUp, SignIn, Home } from "./views";
import { Route, Routes } from "react-router-dom";
import { TopBar, TodoAdd, TodoList } from "./components/todo";
import { Box, theme, ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    // <ChakraProvider theme={theme}>
    //   <Box maxWidth="8xl" margin="auto" p={5}>
    //     <TopBar />
    //     <TodoList />
    //     <TodoAdd />
    //   </Box>
    // </ChakraProvider>
    <div>
      <Routes>
        {/* <Route path="/" element={<TodoList />} /> */}
        <Route path="/" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
