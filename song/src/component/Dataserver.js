import axios from 'axios';
import React, { Component } from 'react'
import Profile from './Profile';

 class Dataserver  {
    constructor(){
        this.userurl="http://localhost:4000/user";
    }
addstudent(profile){
    return axios.post(this.userurl+"/signup",profile);
}

addlogin(log){
    return axios.get(this.userurl+"/signin/"+log.email+"/"+log.pass);
}
}
export default new Dataserver();
