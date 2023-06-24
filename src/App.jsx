import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";

import "./App.css";
import { SinglePost } from "./pages/SinglePost";


function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/post/:id" element={<SinglePost />} />
            </Routes>
        </>
    );
}

export default App;
