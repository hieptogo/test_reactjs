// import './App.css';
import './css/menu.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Header from './components/layout/header';
import Title from './components/layout/title';
import Footer from './components/layout/footer';
import ListData from './components/list_data';
import News from './components/sidebar/news';
import ImageList from './components/sidebar/image_list';
import Datapizzas from './data';


function App() {
  return (
    <div className="App" >
      <Header data={Datapizzas.pizza}/>
      <Container className="mt-3 mb-5 pb-3">
        <Row>
          <Col xs={9}>
            <Title />
            <ListData />
          </Col>
          <Col xs={3}>
            <News />
            <ImageList />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default App;

