
import {Component}  from 'react'
import {Link} from 'react-router-dom'

class Register extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            name:'',
            mobile:'',
            email: '',
            password: ''
        }         
    }
    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }
    submit(){
        console.log('state',this.state);
        let userlist= localStorage.getItem('userlist');
        var list=[];
        if(userlist)
        {
            list= JSON.parse(userlist);

        }
        

        list.push(this.state);

        localStorage.setItem('userlist',JSON.stringify(list));

        alert("Registraion successful")


    }

    render() {
        return (
            <div style={{width:'300px'}}>
                <h3 className="title">Register!</h3>


                <div className="form-group">
                    <label>Name</label>
                    <input name="name" onChange={this.handleChange.bind(this)} type="text" value={this.state.name} className="form-control" placeholder="Enter full name" />
                </div>

                <div className="form-group">
                    <label>Mobile</label>
                    <input name="mobile" onChange={this.handleChange.bind(this)} type="number" value={this.state.mobile} className="form-control" placeholder="Enter mobile" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input name="email" onChange={this.handleChange.bind(this)} type="email" value={this.state.email} className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input name="password" onChange={this.handleChange.bind(this)} type="password" value={this.state.password} className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                <div className="form-group">
                <button type="button" onClick={this.submit.bind(this)} className="btn btn-info  btn-block submitButton">Submit</button>
                <p className="forgot-password text-right">
                <Link to="/">Login here</Link>
                </p>
                <p className="forgot-password text-right">
                <Link to="/userlist">Go to users list</Link>
                </p>
                </div>
            </div>
        );
    }
}

export default Register;