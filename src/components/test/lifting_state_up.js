import React from "react";

const USDtoVND = (props) => {
    const convert = function (usd) {
        return usd * 25000;
    };
    return (
        <div>
            <span>USD </span>
            <input
                onChange={(e) => {
                    const usd = e.target.value;
                    const vnd = convert(usd);
                    props.onHandleChange({
                        vnd,
                        usd,
                    });
                }}
                value={props.value}
            />
        </div>
    );
};

const VNDtoUSD = (props) => {
    const convert = function (vnd) {
        return vnd / 25000;
    };
    return (
        <div>
            <span>VND </span>
            <input
                onChange={(e) => {
                    const vnd = e.target.value;
                    const usd = convert(vnd);
                    props.onHandleChange({
                        vnd,
                        usd,
                    });
                }}
                value={props.value}
            />
        </div>
    );
};

class LiftingStateUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usd: '',
            vnd: ''
        };
    }

    handleChange = (data) => {
        this.setState(data);
    }

    render() {
        return (
            <div style={{ margin: "3%" }}>
                <USDtoVND onHandleChange={this.handleChange} value={this.state.usd} />
                <VNDtoUSD onHandleChange={this.handleChange} value={this.state.vnd} />
                <hr />
                <h1><code>Hiệp togo</code></h1>
            </div>
        );
    }
}

export default LiftingStateUp;     