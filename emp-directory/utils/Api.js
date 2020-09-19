import axios from "axios";

// export an object containing methods we'll use for accessing the Random employee api

export default{
    // a function that returns the api call for an employee randomly
    getRandomEmployee: function() {
        return axios.get("");
    },
    // a function that returns the api call for an employee searched by name
    getEmployeeByName: function() {
        return axios.get("");
    },
    // a function that returns the api call for an employee searched by city
    getEmployeeByCity: function () {
        return axios.get("");
    },
    // a function that returns the api call for an employee by age
    getEmployeeByAge: function () {
        return axios.get("");
    }
};

