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
import B4 from './components/b4/b4';

function App() {
  const dataMenu = [
    {
      path: "/",
      exact: true,
      component: "B1",
      name: "Home"
    },
    {
      path: "/thuc-hanh-b2",
      exact: true,
      component: "B2",
      name: "Thực hành b2"
    },
    {
      path: "/thuc-hanh-b3",
      exact: true,
      component: "B2",
      name: "Thực hành b3"
    },
    {
      path: "/thuc-hanh-b4",
      exact: true,
      component: "B4",
      name: "Thực hành b4"
    },
  ]

  // const listRoute = dataMenu.map((item) =>
  //   <Route key={item.component} exact path={item.path} component={`${item.component}`} />
  // );

  return (
    <div className="App" >
      <BrowserRouter>
        <Header dataMenu={dataMenu} />
        <Container className="mt-3 mb-15 pb-3">
          <Row>
            <Col xs={9}>
              <Switch>
                <Route exact path="/" component={B1} />
                <Route exact path="/thuc-hanh-b2" component={B2} />
                <Route exact path="/thuc-hanh-b3" component={B3} />
                <Route exact path="/thuc-hanh-b4" component={B4} />
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

