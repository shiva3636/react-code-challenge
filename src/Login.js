
import {Component}  from 'react'
import {Link} from 'react-router-dom'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
          };
    }
    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    login(){
        let email=this.state.email;
        let password=this.state.password;

        var userlist=localStorage.getItem('userlist');
        if(userlist){
            userlist=JSON.parse(userlist);
            var index= userlist.findIndex(x=>x.email==email && x.password==password);

            if(index>-1){
                alert("login successfull");

            }
            else{
                alert("email or password is not correct!")
            }

        }

    }

    render() {
        return (
            <div style={{width:'300px'}}>
                <h3 className="title">Welcome back!</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input name="email" value={this.state.email} onChange={this.handleChange.bind(this)}  type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input  name="password" value={this.state.password} onChange={this.handleChange.bind(this)} type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                <div className="form-group">
                <button onClick={this.login.bind(this)} type="button" className="btn btn-info  btn-block submitButton">Submit</button>
                <p className="forgot-password text-right">
                <Link to="/register">Register here</Link>
                </p>

                <p className="forgot-password text-right">
                <Link to="/userlist">Go to users list</Link>
                </p>
               
                </div>
            </div>
        );
    }
}

export default Login;