import React, { Component } from 'react'

class Items extends Component{


    render(){
        return(
            <div className='lists'>
                    <p>Michael</p>
                    <p>Megan</p>
                    <p>Josh</p>
                    <p>Carl</p>
                    <p>Michelle</p>
                    <p onClick={this.props.clickHandler}>Back</p>
        </div>
        )
    }
}

export default Items
