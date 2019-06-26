import React, { Component } from 'react'


class Landing extends Component {


    render(){
        return(
            <div className='landing'>
                <h1 style={{marginLeft : '1.5vw'}}> Hello, I'm <span style={{color : 'maroon', fontWeight : 'bold'}}>Michael Carneal</span></h1>
                <h1 onClick={()=> this.props.clickHandler('about')}>I'm a full-stack web developer.</h1>
                <h4 className='view work'>View My Work</h4>
        </div>
        )
    }
}

export default Landing
