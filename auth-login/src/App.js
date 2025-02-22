import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login';
import Home from './Home'
export default class App extends Component {
constructor(props){
  super(props)
  this.state=({
    name:'',
    email:'',
    IMage:'',
    token:''
  })
}
componentDidMount= () =>{
  if(localStorage.getItem("token")){
    this.setState({name: localStorage.getItem("name")})
    this.setState({email: localStorage.getItem("email")})
    this.setState({IMage: localStorage.getItem("IMage")})
    this.setState({token: localStorage.getItem("token")})
  }
}

componentDidUpdate= ()=>{
if(this.state.token){
  localStorage.setItem("name",this.state.name)
  localStorage.setItem("email",this.state.email)
  localStorage.setItem("IMage",this.state.IMage)
  localStorage.setItem("token",this.state.token)
}
}

   responseFacebook = (response) => {
    console.log(response);
    this.setState({
      name:response.name,
      email:response.email,
      IMage:response.picture.data.url,
      token:response.accessToken
    })
  }

  render() {
    return (
      <center>
        {this.state.token ? <Home></Home> :<FacebookLogin
          appId="321137749523098"
          autoLoad={false}
          fields="name,email,picture"
          callback={this.responseFacebook} />}

    {/* {this.state.token ? <div> 
      <img src={this.state.IMage} />
       <h1>welcome {this.state.name}</h1> </div>  :null
    } */}
      </center>
    )
  }
}
