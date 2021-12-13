import React, { useEffect } from 'react';

import './css/menu.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col, Button } from 'react-bootstrap';

import Header from './components/layout/header';
import Title from './components/layout/title';
import Footer from './components/layout/footer';
import ListData from './components/list_data';
import News from './components/sidebar/news';
import ImageList from './components/sidebar/image_list';
import ImgAnimation from './components/body/img_animation';
import ShowModal from './components/body/submit_show_modal';

function App() {
  return (
    <div className="App" >
      <Header />
      <Container className="mt-3 mb-5 pb-3">
        <Row>
          <Col xs={9}>
            <Title />
            <ListData />
            <ImgAnimation />
            <ShowModal />
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

