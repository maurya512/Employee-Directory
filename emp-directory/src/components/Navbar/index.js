import React from "react";
import "./style.css";
import ListHeader from "../ListHeader";

class Navbar extends React.Component {
    state = {
        search: "",
        filteredEmp: []
    };

    componentDidMount() {
        if(this.state.filteredEmp.length < 1) {
            this.setState({
                filteredEmp: this.props.employees
            })
        }
    }

    handleInputChange = event => {
        this.setState({
            search: event.target.value
        });
        let userSearch = event.target.value;
        const filteredList = this.props.employees.filter((item) => {
            let values = item.name.title + item.name.first + item.name.last + item.gender + item.dob.age + item.email;
            return values.indexOf(userSearch) !== -1;
        });

        this.setState({
            filteredEmp: filteredList
        });
    }

    render() {
        return (
            <div>
                <form className="form">
                    <input
                        value={this.state.search}
                        name="search"
                        onChange={event => this.handleInputChange(event)}
                        type="text"
                        placeholder="Search"
                    ></input>
                </form>
                {this.state.filteredEmp.length > 0 && 
                <ListHeader empList={this.state.filteredEmp}/>}
            </div>
        );
    }
}

export default Navbar;