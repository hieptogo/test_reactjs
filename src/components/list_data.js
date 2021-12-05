import React from "react";
import { Row, Col, Card, Badge, Button, Form } from 'react-bootstrap';
import Datapizzas from './../data';
import MyPagination from './../components/my_pagination';
import ModalNotfication from './../components/layout/modal_notfication';



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
                        onClick={() => this.props.showModal(this.props.data.name)}
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
        this.onPageChanged = this.onPageChanged.bind(this);

        this.state = {
            showModal: false,
            dataName: null,
            currentPage: 1,
            pageLimit: 3,
            totalPages: null,
            newData: [],
        };
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
        this.setState({ currentPage, pageLimit, totalPages, newData });
    }

    render() {
        // show or hide modal
        const hideModal = () => this.setState({showModal: false});
        const showModal = (name) => {
            const dataName = name ? name : null;
            this.setState({showModal: true, dataName});
        }

        return (
            <div>
                <ModalNotfication show={this.state.showModal} dataName={this.state.dataName} hideModal={hideModal} />
                <Row className="mb-3">
                    <MyPagination totalRecords={Datapizzas.pizza.length} pageLimit={this.state.pageLimit} onPageChanged={this.onPageChanged} />
                </Row>
                <Row>
                    {this.state.newData.map(data => (
                        <Col xs={4} className="mb-5" key={`${data.id}`}>
                            <PizzaCard data={data} showModal={showModal} />
                        </Col>
                    ))}
                </Row>
            </div >
        );
    }
}
export default ListPizza;