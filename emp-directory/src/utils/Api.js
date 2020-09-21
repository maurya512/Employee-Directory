import axios from "axios";

const url = "https://randomuser.me/api/?inc=name,picture,gender,age,email";

export default {
    getEmp: function(){
        return axios.get(url);
    }
};

