import React, { Component } from 'react'
import axios from 'axios';
class Songserver  {

 constructor(){
    this.songurl="http://localhost:4000/song"
 }
 getsong(){
   return axios.get(this.songurl+'/')

 }
    

}
export default new Songserver();
