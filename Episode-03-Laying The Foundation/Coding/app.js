import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement --> creates an object --> after rendering this object it becomes html

// const heading = React.createElement(
//     "h1", 
//     {id: "heading"}, 
//     "Namaste React"
//     );

// console.log(heading);



// JSX --is not HMTL in JS. Its syntax is like HTML or XML like

// JSX code is transpiled before it reaches JS Engine and Transpiling is done by Parcel which in turn uses Babel.

// JSX => Babel transpiles it to React.createElement => React.createElement -> JS object => HTMLelement(render)

// React Element
const heading = (
    <h1 className="head" tabIndex="1">
        Namaste React using JSX
    </h1>
);

const elem = <span>React Element!!!</span>

// React Component
// Class Based Component - OLD
// Functional Component - NEW

// React Functional Components

// const HeadingComponent = ()=> {
//     return <h1 className="heading">Namaste React Functional Components</h1>;
// };

const Title = ()=> (
    <h1 className="head" tabIndex="5">
        {elem}
        Namaste React using JSX 🚀
    </h1>
);

const HeadingComponent = ()=> (
    <div id="container">
        {Title()}
        <Title/>
        <Title></Title>
        <h1 className="heading">Namaste React Functional Components</h1>
    </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);
