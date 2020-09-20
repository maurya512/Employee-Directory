import axios from "axios";

// export an object containing methods we'll use for accessing the Random employee api

export default{
    // a function that returns the api call for an employee randomly
    getRandomEmployee: function() {
        return axios.get("https://randomuser.me/api/");
    },
    // a function that returns the api call for an employee searched by nationality
    getEmployeeByNat: function(nat) {
        return axios.get("https://randomuser.me/api/?nat=" + nat);
    },
    // a function that returns the api call for an employee searched by gender
    getEmployeeByGender: function (gender) {
        return axios.get("https://randomuser.me/api/?gender=" + gender);
    },
    
};

