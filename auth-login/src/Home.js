import React, { Component } from 'react'
import axios from 'axios'
import {Link} from "react-router-dom";
import Post from './Post'
import Popup from './Popup'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';

export default class Home extends Component {
    constructor(props){
        super(props)
        this.state=({
          name:'',
          email:'',
          IMage:'',
          images:[]
        })
      }

      logout= () =>{
        localStorage.clear()
      }
    componentDidMount=()=>{
        this.setState({name:localStorage.getItem('name')})
        this.setState({email:localStorage.getItem('email')})
        this.setState({IMage:localStorage.getItem('IMage')})
        axios.get('https://dog.ceo/api/breeds/image/random/7')
        .then(res =>{
            
            this.setState({images:res.data.message})
        })
    }

    render() {
        return (
            <div>

            <Nav fill variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
                    <Link to='/' >Home </Link>
            </Nav.Item>
            <Nav.Item>
            <Link to='/contact' >Contact </Link>
            </Nav.Item>
            <Nav.Item>
            <Link to='/logout' onClick={this.logout}> logout </Link>
            </Nav.Item>
            
            </Nav>
                <Popup></Popup>
                {this.state.images.map(img=>{
                    return <Post title="this is a dog" img={img}></Post>
                })}
            </div>
        )
    }
}
