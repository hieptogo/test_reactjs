import React, { useEffect } from 'react';

import './css/menu.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/layout/header';
import Footer from './components/layout/footer';

import News from './components/sidebar/news';
import ImageList from './components/sidebar/image_list';

import B1 from './components/b1/b1';
import B2 from './components/b2/b2';
import B3 from './components/b3/b3';

function App() {
  return (
    <div className="App" >
      <BrowserRouter>
        <Header />
        <Container className="mt-3 mb-15 pb-3">
          <Row>
            <Col xs={9}>
              <Switch>
                <Route exact path="/" component={B1} />
                <Route exact path="/thuc-hanh-b2" component={B2} />
                <Route exact path="/thuc-hanh-b3" component={B3} />
              </Switch>
            </Col>
            <Col xs={3}>
              <News />
              <ImageList />
            </Col>
          </Row>
        </Container>
        <Footer />
      </BrowserRouter>
    </div >
  );
}

export default App;

