import React from "react";
import styled from "styled-components";

import TodoContainer from "./components/TodoContainer";
import "./App.css";

const AppContainer = styled.div`
    text-align: center;
`;

function App() {
    return (
        <AppContainer>
            <h1>My Todo List</h1>
            <TodoContainer />
        </AppContainer>
    );
}

export default App;
