import React from 'react';
import {
  Navbar,
  NavbarBrand} from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <Navbar color="success" light expand="md">
          <NavbarBrand href="/">GO-FOOD</NavbarBrand>
          <input class="form-control mr-sm-4" type="search" placeholder="Search" aria-label="Search"></input>
          <button class="btn btn-danger my-2 my-sm-0" type="submit">Search</button>
        </Navbar>
      </div>
    );
  }
}