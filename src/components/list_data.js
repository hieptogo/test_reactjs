import React from "react";
import { Row, Col, Card, Badge, Button } from 'react-bootstrap';

import Datapizzas from './../data';

import MyPagination from './../components/layout/my_pagination';
import ModalNotfication from './../components/layout/modal_notfication';
import SearchPage from './../components/layout/input_search';

class PizzaCard extends React.Component {
    constructor() {
        super();
    }
    currencyFormat = function (num) {
        return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    };

    render() {
        return (
            <Card className="h-100 shadow-sm bg-white rounded">
                <Card.Img variant="top" src={this.props.data.image} height={150} />
                <Card.Body className="d-flex flex-column">
                    <div className="mb-2 justify-content-between">
                        <Card.Title className="mb-2 font-weight-bold">{this.props.data.name}</Card.Title>
                        <Row>
                            <Badge pill className="mb-1" variant="warning">
                                {this.currencyFormat(this.props.data.price)} VNĐ
                            </Badge>
                        </Row>
                    </div>
                    <Card.Text className="text-secondary">{this.props.data.desc}</Card.Text>
                    <Button
                        onClick={() => this.props.showModal(this.props.data)}
                        className="mt-auto font-weight-bold"
                        variant="success"
                        block
                    >
                        Order Pizza 🍕
                    </Button>
                </Card.Body>
            </Card>
        );
    }
}

class ListPizza extends React.Component {
    constructor() {
        super();
        this.state = {
            showModal: false,
            dataPizza: null,
            currentPage: 1,
            pageLimit: 3,
            totalPages: null,
            newData: [],
        };
        this.onPageChanged = this.onPageChanged.bind(this);
        this.setUpdateData = this.setUpdateData.bind(this);
    }
    componentDidMount() {
        this.setState({
            newData: Datapizzas.pizza.slice(0, this.state.pageLimit)
        })
    }

    onPageChanged = (data) => {
        
        const { currentPage, pageLimit, totalPages } = data;
        const offset = (currentPage - 1) * pageLimit;
        const newData = Datapizzas.pizza.slice(offset, offset + pageLimit);
        console.log(newData)
        this.setState({ currentPage, pageLimit, totalPages, newData });
    }

    setUpdateData = (data) => {
        const { dataNew } = data;
        this.setState({ newData: dataNew });
    }

    render() {
        // show or hide modal
        const hideModal = () => this.setState({showModal: false});
        const showModal = (data) => {
            const dataPizza = data ? data : null;
            this.setState({showModal: true, dataPizza});
        }

        return (
            <>
                <ModalNotfication show={this.state.showModal} data={this.state.dataPizza} hideModal={hideModal} />
                <Row className="mb-3">
                    <Col xs={8}>
                        <MyPagination totalRecords={Datapizzas.pizza.length} pageLimit={this.state.pageLimit} onPageChanged={this.onPageChanged} />
                    </Col>
                    <Col xs={4}>
                        <SearchPage data={Datapizzas.pizza} setUpdateData={this.setUpdateData}/>
                    </Col>
                </Row>
                <Row>
                    {this.state.newData.map(data => (
                        <Col xs={4} className="mb-5" key={`${data.id}`}>
                            <PizzaCard data={data} showModal={showModal} />
                        </Col>
                    ))}
                </Row>
            </>
        );
    }
}
export default ListPizza;