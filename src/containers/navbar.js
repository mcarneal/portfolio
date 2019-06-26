import React, { Component } from 'react'

class Navbar extends Component{


    render(){

        let styles = {
            display : 'inline-block',
            padding : '30px',
            color : 'white'
        }
        
        return(
              <div className='content'>
                    <h1 
                        style={styles}>Resume</h1>
                    <h1 
                        style={styles}
                        onClick={this.props.clickHandler}>Projects</h1>
                    <h1
                        style={styles}>About</h1>
                    <h1
                        style={styles}>Contact</h1>
        </div>
        )
    }
}


export default Navbar
