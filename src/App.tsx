import { useState } from "react";
import "./App.css";

function App() {
    const [name, setName] = useState("Cuong");
    const [age, setAge] = useState(13);
    const todos = ["todo1", "todo2", "todo3", "todo4"];

    return (
        <>
            <ul>
                {todos.map((todo, index) => {
                    return <li key={index}>{todo}</li>;
                })}
            </ul>
        </>
    );
}

export default App;
