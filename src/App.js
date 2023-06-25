import logo from "./logo.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Logsection } from "./components/login";
import { BodySection } from "./components/body";
import { Home } from "./components/Home";
function App() {
    return (
        <>
            <div className="body">
                <Logsection />
            </div>
        </>
    );
}

export default App;
