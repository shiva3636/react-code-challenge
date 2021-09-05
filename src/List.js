
import {Component}  from 'react'
import {Link} from 'react-router-dom'

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userlist:[]
          };
    }


    componentDidMount(){
        var users=localStorage.getItem('userlist');
        if(users)
        this.setState({
            userlist: JSON.parse(users)
        })
    }
   

   

    render() {
        return (
            <div style={{width:'300px'}}>
                <h3 className="title">User list!</h3>
                <ul class="list-group">
                    {
                        this.state.userlist.map(user=><li className="list-group-item ">Name: {user.name},  Email: {user.email}</li>)
                    }

<p className="forgot-password text-right">
                <Link to="/">Back to login</Link>
                </p>

  
</ul>
                
            </div>
        );
    }
}

export default List;