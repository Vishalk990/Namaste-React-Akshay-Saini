import React from "react";
import ReactDOM from "react-dom/client";
import user from '../Coding/user.png';
import logo from '../Coding/logo.png';

// Q. Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class “title”)


// const header = React.createElement("div", { className: "title"},
//     [React.createElement("h1", {}, "This is h1 tag"), React.createElement("h2", {}, "This is h2 tag"), React.createElement("h3", {}, "This is h3 tag")]
// );


// Q.Create the same element using JSX
// const header = (<div className="title">
//     <h1>This is a h1 tag.</h1>
//     <h2>This is a h2 tag.</h2>
//     <h3>This is a h3 tag.</h3>
// </div>);

// Q. Create a functional component of the same with JSX
// const Header = () => {
//     return (<div className="title">
//         <h1>This is a h1 tag.</h1>
//         <h2>This is a h3 tag.</h2>
//         <h3>This is a h3 tag.</h3>
//     </div>)
// };


// Q: Pass attribute into the tag in JSX
// const Header = () => {
//     return (
//         <div className="title">
//             <h1 style={{ color: "blue" }}>This is a h1 tag.</h1>
//             <h2 style={{ color: "red" }}>This is a h3 tag.</h2>
//             <h3 style={{ color: "green" }}>This is a h3 tag.</h3>
//         </div>
//     );
// };

// Q. Composition of Component (Add a component inside another)
// const AnotherComponent = () => {
//     return <h2> This is Another Component</h2>
// }

// const Header = () => {
//     return (
//         <div className="title">
//             <h1 style={{ color: "blue" }}>This is a h1 tag.</h1>
//             <h2 style={{ color: "red" }}>This is a h3 tag.</h2>
//             <h3 style={{ color: "green" }}>This is a h3 tag.</h3>
//             <AnotherComponent/>
//         </div>
//     );
// };

//Q. `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX.

// const element = <h1>This is a react element</h1>;  //This is React element or {TitleComponent}


// const TitleComponent = () => {
//     return <h2 style={{ color: "blue" }}>This is Title Component</h2>
// };      //This is {<TitleComponent/>}

// const Header = () => {
//     return (
//         <div className="Title">
//             {/* This is {TitleComponent} */}
//             {element}
//             {/* This is {<TitleComponent/>} */}
//             <TitleComponent />
//             {/* This is {<TitleComponent></TitleComponent>} */}
//             <TitleComponent></TitleComponent>
//         </div>
//     );
// };

/*
Q: Create a Header Component from scratch using Functional Component with JSX
- Add a Logo on Left
- Add a search bar in middle
- Add User icon on right
- Add CSS to make it look nice
*/

const Header = () => {
    return (
        <>
            <header className="header">
                <div className="left">
                    <img src={logo} alt="logo"></img>
                </div>
                <div className="center">
                    <input
                        className="input"
                        type="text"
                        placeholder="Search text..."
                    />
                    <button type="submit">
                        <i className="fa fa-search"></i>
                    </button>
                </div>
                <div className="right">
                    <img src={user} alt="User icon"></img>
                </div>
            </header>
        </>
    );
}




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Header />);