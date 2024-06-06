import React from "react";


class UserClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userInfo: {
                name: "",
                location: "Default",
            }
        }

        // console.log(this.props.name + " Child Constructor");
    }

    async componentDidMount() {
        // console.log(this.props.name + " Child Component Did Mount");
        //API call

        const data = await fetch("https://api.github.com/users/vishalk990");
        const json = await data.json();
        console.log(json);

        this.setState({
            userInfo: json,
        })
    }

    componentDidUpdate() {
        console.log("Component did update");
    }

    componentWillUnmount() {
        console.log("Component will unmount");
    }

    render() {

        const { name, location, avatar_url } = this.state.userInfo;

        return (
            <div className="user-card">
                <img src={avatar_url} />
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: vishal@gmail.com</h4>
            </div>
        );
    }
}

export default UserClass;