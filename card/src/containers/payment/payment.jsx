import React, { Component } from 'react'
import Navbar from '../../component/navbar';
import { Card, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Payment extends Component {
    componentDidMount() {
        var x = sessionStorage.total;
        console.log(x);
        document.getElementById("totalHarga").innerHTML = x;
    }

  render() {
    return (
      <div>
        <Navbar nama='payment' />
        <br></br>
            <Card body outline color="danger">
            <h1 style={{textAlign:"center"}} >CekOut Pembayaran</h1>
            <hr></hr>
            <h3 style={{textAlign:"right"}} >Total Harga :</h3>
            {/* <h4 style={{textAlign:"right"}} id="totalHarga" /> */}
            <Button tag={Link} to="/" className="btn btn-success float-right">Bayar Sekarang</Button>
            </Card>
      </div>
    )
  }
}
