// import './App.css';
import './css/menu.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Header from './components/layout/header';
import Title from './components/layout/title';
import Footer from './components/layout/footer';
import ListData from './components/list_data';
import News from './components/sidebar/news';
import ImageList from './components/sidebar/image_list';

function App() {
  // show or hide modal
  const [show, setShow] = useState(false);
  const hideModal = () => setShow(false);
  const showModal = () => setShow(true);

  return (
    <div className="App" >
      <Header />
      <Container className="mt-3 mb-5 pb-3">
        <Row>
          <Col xs={9}>
            <Title />
            <ListData showModal={showModal} />
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

