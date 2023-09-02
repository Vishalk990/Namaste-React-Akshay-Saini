// ReactElement(Object) => HTMLAllCollection(Browser Understands)


const parent = React.createElement(
    "div", { id: "parent" },
    [React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "I am an h1 Tag."), React.createElement("h2", {}, "I am an h2 Tag."),
    ]),
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "I am an h1 Tag."), React.createElement("h2", {}, "I am an h2 Tag."),
    ])
    ]);

//JSX

console.log(parent);  //object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);