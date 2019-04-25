import React, { Component } from 'react';
import Counter from './counter';
import { Row, Col, Button, Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
  state = {
    makanan:[
      {
      id:1,
      number:0,
      price:17000,
      nama:"Lumpia",
      gambar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMIjiS4W3KE-1SmfpcPjZJxxvRW19Xp8XFOtCR7Di8QpLy5LV1"
    },
    {
      id:2,
      number:0,
      price:10000,
      nama:"Tahu gimbal",
      gambar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvK9ZnAV3Mdp97uyluNl_YOnhd_GCjHDbAY091aCj84g272ARCXQ"
    },
    {
      id:3,
      number:0,
      price:30000,
      nama:"Sate",
      gambar:"http://1.bp.blogspot.com/-rAzLFcbTXV8/Ve5eSxkRgRI/AAAAAAAABJg/4f9j73vt_4Y/s1600/Resep%2BSate%2BSapi%2BUngaran%2BKhas%2BSemarang.JPG"
    },
    {
      id:4,
      number:0,
      price:25000,
      nama:"Gulai kambing",
      gambar:"https://panganansemarang.files.wordpress.com/2015/01/gulai-kambing-khas-semarang.jpg"
    },
    {
      id:5,
      number:0,
      price:15000,
      nama:"Wingko Babat",
      gambar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFF8CCd7_X8V7L81XSBuCyoQvRDLoLVvmuA6qf-WC9hXO4jsIj6A"
    },
    {
      id:6,
      number:0,
      price:20000,
      nama:"Bandeng Presto",
      gambar:"https://phinemo.com/wp-content/uploads/2016/04/Makanan-Khas-Semarang-bandeng.jpg"
    },
    {
      id:7,
      number:0,
      price:10000,
      nama:"Soto Bangkong",
      gambar:"https://cdn.idntimes.com/content-images/post/20190308/23416864-125955761407965-6784223443320569856-n-afd593737b89af52168cd7c2122b6520_600x400.jpg"
    }
  ],
    total: 0
};
   tambahTotalHarga= harga =>{
      this.setState({
        total: this.state.total + harga
      });
      sessionStorage.total = this.state.total + harga
   };

   kurangTotalHarga= harga =>{
    this.setState({
      total: this.state.total - harga
    });
    sessionStorage.total = this.state.total - harga
 };
  render() {
    return (
      <div>
      
      <p style={{textAlign:"center", fontSize:"42px"}}>Menu Makanan</p>
      <Row>
          {this.state.makanan.map(item=>(
        <Col xs="3">
        <Counter gambar={item.gambar} menu={item.nama}
          nomor={item.number}
          tambahTotalHarga={this.tambahTotalHarga}
          kurangTotalHarga={this.kurangTotalHarga}
          harga={item.price}/>
        </Col>
      ))}
      </Row>
      <Card>
        <CardBody>
          <h2>Total Harga : </h2>
        <ul>
          <li>Rp: {this.state.total}</li>
        </ul>
        <div className="bg-transparant clearfix" style={{ padding: '.5rem' }}>
        <Button tag={Link} to="/" className="btn btn-danger float-left">Kembali</Button>
        
        <Button tag={Link} to="/payment" className="btn btn-success float-right">Lanjutkan Transaksi</Button>
        </div>
        </CardBody>
      </Card>
      </div>
    );
  }
}

export default Dashboard;
