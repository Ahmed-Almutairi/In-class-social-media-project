import React, { Component } from 'react'
import { Card,CardGroup} from 'react-bootstrap';
export default class  extends Component {
    constructor(props){
        super(props)
        this.state={
            isPressed: false
        }
    }
    heartPressed=()=>{
        this.setState({isPressed: !this.state.isPressed})
    }
    render() {
        return (
           

                <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={this.props.img} height= '300rem' />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <img 
                        className="heart"
                        height='100xp'
                        alt="heart"
                        src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Heart_coraz%C3%B3n.svg"
                        style={this.state.isPressed ? {opacity: 1}: {opacity:0.5}}
                        onClick={this.heartPressed}
                    />
                </Card.Body>
               
                    
                
                </Card>

                
           
        )
    }
}