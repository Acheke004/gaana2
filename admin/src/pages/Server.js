import React, { Component } from 'react'
import axios from 'axios';
 class Server  {
    constructor(){
        this.baseurl="http://localhost:4000"
    }
  getartist() {
    return (
      axios.get(this.baseurl+"/artist/")
    )
  }
  addartist(art) {
    return (
      axios.post(this.baseurl+"/artist/",art)
    )
  }
  getalbum() {
    return (
      axios.get(this.baseurl+"/album/")
    )
  }
  addalbum(art) {
    return (
      
      axios.post(this.baseurl+"/album/",art)
    )
  }
  addsong(art) {
    return (
      
      axios.post(this.baseurl+"/song/",art)
    )
  }
}
export default new Server();
