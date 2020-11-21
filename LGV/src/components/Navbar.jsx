import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
export default class Navbar extends Component{

	render(){
		return (
      <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand"> </a>
      <form class="form-inline">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </nav>
    
    );
}
}
