import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {

    constructor(props) {
        super(props);

        // console.log("Parent Constructor");
    }

    componentDidMount() {
        // console.log("Parent Component Did Mount");
    }

    render() {
        // console.log("Parent render");

        return (
            <div>
                <h1>About Class Component</h1>
                <h2>This is Namaste React Web Series</h2>
                <UserClass name={"1st"} location={"Bangalore"} />
    
            </div>
        );
    }
};


export default About;