import React from 'react';
import { Container, Row, Col, Form, Pagination } from 'react-bootstrap';

class MyPagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            pageLimit: 10,
            totalPages: null
        };
        const { totalRecords = null, pageLimit } = this.props;
        this.pageLimit = typeof pageLimit === 'number' ? pageLimit : 10;
        this.totalRecords = typeof totalRecords === 'number' ? totalRecords : 0;
        this.totalPages = Math.ceil(this.totalRecords / this.pageLimit);
    }

    componentDidMount(){
        this.setState({
            pageLimit: this.pageLimit
        })
    }

    chosePage = (page) => e => {
        e.preventDefault();
        const { onPageChanged = f => f } = this.props;
        const currentPage = Math.max(0, Math.min(page, this.totalPages));
        const paginationData = {
            currentPage,
            totalPages: this.totalPages,
            pageLimit: this.state.pageLimit,
            totalRecords: this.totalRecords
        };
        this.setState({ currentPage }, () => onPageChanged(paginationData));
    }

    nextPage = (page) => e => {
        e.preventDefault();
        const { onPageChanged = f => f } = this.props;
        const currentPage = Math.max(0, Math.min((page + 1), this.state.totalPages));
        console.log(this.state);
        const paginationData = {
            currentPage,
            totalPages: this.totalPages,
            pageLimit: this.state.pageLimit,
            totalRecords: this.totalRecords
        };
        this.setState({ currentPage }, () => onPageChanged(paginationData));
    }

    nextLastPage =  e => {
        e.preventDefault();
        const { onPageChanged = f => f } = this.props;
        const currentPage = Math.max(0, this.state.totalPages);
        const paginationData = {
            currentPage,
            totalPages: this.totalPages,
            pageLimit: this.state.pageLimit,
            totalRecords: this.totalRecords
        };
        this.setState({ currentPage }, () => onPageChanged(paginationData));
    }

    prevPage = (page) => e => {
        e.preventDefault();
        const { onPageChanged = f => f } = this.props;
        const currentPage = Math.max((page - 1), 1);
        const paginationData = {
            currentPage,
            totalPages: this.totalPages,
            pageLimit: this.state.pageLimit,
            totalRecords: this.totalRecords
        };
        this.setState({ currentPage }, () => onPageChanged(paginationData));
    }

    prevFirstPage = e => {
        e.preventDefault();
        const { onPageChanged = f => f } = this.props;
        const currentPage = Math.max(0, Math.min(1, this.state.totalPages));
        const paginationData = {
            currentPage,
            totalPages: this.totalPages,
            pageLimit: this.state.pageLimit,
            totalRecords: this.totalRecords
        };
        this.setState({ currentPage }, () => onPageChanged(paginationData));
    }

    select = e => {
        e.preventDefault();
        const { onPageChanged = f => f } = this.props;
        const pageLimit = Math.max(0, Math.min(e.target.value, this.totalRecords));
        const totalPages = Math.ceil(this.totalRecords / pageLimit);
        const currentPage = this.state.currentPage > totalPages ? totalPages : this.state.currentPage;
        const paginationData = {
            pageLimit,
            totalPages,
            currentPage,
            totalRecords: this.totalRecords
        };

        this.setState({ pageLimit, totalPages, currentPage }, () => onPageChanged(paginationData));
        
    }

    render() {
        const totalPages = this.state.totalPages ? this.state.totalPages : this.totalPages;
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(i);
        }

        return (
            <Container>
                <Row>
                    <Col xs={2}>
                        <div className="news-per-page">
                            <Form.Select size="sm" width={100} defaultValue="3" onChange={this.select}>
                                <option value="1">1</option>
                                <option value="3">3</option>
                                <option value="5">5</option>
                                <option value="7">7</option>
                                <option value="10">10</option>
                            </Form.Select>
                        </div>
                    </Col>
                    <Col xs={10}>
                        <div className="pagination-custom">
                            <Pagination>
                                <Pagination.First onClick={this.prevFirstPage}/>
                                <Pagination.Prev onClick={this.prevPage(this.state.currentPage)}/>
                                {
                                    pageNumbers.map((page, index) => (
                                        <Pagination.Item key={page} className={`${this.state.currentPage === page  ? "active" : ""}`} onClick={this.chosePage(page)}>{page}</Pagination.Item>
                                    ))
                                }
                                <Pagination.Next onClick={this.nextPage(this.state.currentPage)}/>
                                <Pagination.Last onClick={this.nextLastPage}/>
                            </Pagination>

                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }

}
export default MyPagination;
