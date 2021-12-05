//Import react vào trong dự án
import React from "react";

class Welcome extends React.Component {
    constructor(props) {
        super(props);
        //Chỉ định một state
        this.state = {
            index: 0,
            show: true
        };
    }

    toggleMSG() {
        this.setState({
            isShow: !this.state.isShow
        });
    }

    render() {
        return (
            <div>
                <div>
                    <h1>{ this.state.isShow ? "" : "Welcome ! I am a functional component"}</h1>
                    <p>Giá trị {this.state.index}</p>
                </div>

                <button
                    onClick={() => {
                        this.setState({
                            index: this.state.index + 1
                        })
                    }}
                >
                    Tăng
                </button>
                <button
                    onClick={() => {
                        this.setState({
                            index: this.state.index - 1
                        })
                    }}
                >
                    Giảm
                </button>
                <button
                    onClick={() => {
                        this.toggleMSG()
                    }}
                >
                    {this.state.isShow ? "SHOW" : "HIDE"}
                </button>
            </div>
        );
    }
};

export default Welcome;