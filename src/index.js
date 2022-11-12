import * as React from "react";
import { createRoot } from "react-dom/client";
import * as ReactDOM from "react-dom";

const root = createRoot(document.getElementById('root'));
function App(){
    return <div>app</div>
};
root.render(<App></App>);