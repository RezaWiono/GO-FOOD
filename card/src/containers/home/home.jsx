import React, { Component } from 'react';
import Navbar from '../../component/navbar';
import Jumbo from '../../component/jumbotron';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar name="Home" />
        <Jumbo title="Go-food" judul="Pesan Makanan Sekarang" />
      </div>
    )
  }
};
