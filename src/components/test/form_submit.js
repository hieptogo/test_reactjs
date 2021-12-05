//Import react vào trong dự án
import React from "react";

class FormSubmit extends React.Component {
    constructor(props) {
        super(props);
        //Chỉ định một state
        this.state = {
            email: "",
            password: ""
        };
    }

    changeInputValue(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    validationForm() {
        let returnData = {
            error: false,
            msg: ''
        }
        const { email, password } = this.state
        //Kiểm tra email
        const re = /^[a-zA-Z0-9.\-_$@*!]{3,30}$/;  // kiểm tra định dạng username
        // const re = /\S+@\S+\.\S+/;  // kiểm tra định dạng email
        if (!re.test(email)) {
            returnData = {
                error: true,
                msg: 'Không đúng định dạng email'
            }
        }
        //Kiểm tra password
        // const pass = /^[a-zA-Z0-9.\-_$@*!]{3,30}$/;
        // const pass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
        // if (!pass.test(password)) {
        if (password.length < 8) {
            returnData = {
                error: true,
                msg: password + 'Mật khẩu phải lớn hơn 8 ký tự'
            }
        }
        return returnData;
    }

    submitForm(e) {
        //Chặn các event mặc định của form
        e.preventDefault();

        //Gọi hàm validationForm() dùng để kiểm tra form
        const validation = this.validationForm()

        //Kiểm tra lỗi của input trong form và hiển thị
        if (validation.error) {
            alert(validation.msg)
        } else {
            const { password } = this.state
            alert("Submit form success")
        }
    }

    render() {
        return (
            <div className="container" style={{ paddingTop: "5%" }}>
                <form
                    onSubmit={e => {
                        this.submitForm(e);
                    }}
                >
                    <div className="form-group">
                        <label htmlFor="text">Email:</label>
                        <input
                            type="text"
                            className="form-control"
                            name="email"
                            placeholder="Enter email"
                            onChange={e => this.changeInputValue(e)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pwd">Password:</label>
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            placeholder="Enter password"
                            onChange={e => this.changeInputValue(e)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        );
    }
};

export default FormSubmit;