import React from 'react';
import { Jumbotron, Container , Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import './css/jumbotron.css';


const Jumbo = (props) => {
  return (
    <div>
      <Jumbotron class="jumbotron" fluid >
        <Container fluid>
          <h1><img src="https://lelogama.go-jek.com/ramadhan2018_page_icon/go-food3x.png" width="600" height="150" alt="/"></img></h1>
          <p className="lead">
          <Button tag={Link} to="/dashboard" color="primary" className="tombol1" >pesan sekarang</Button>
        </p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Jumbo;