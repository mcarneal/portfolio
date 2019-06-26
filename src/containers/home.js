import React from "react"
import Items from './items.js'
import { Motion, spring } from 'react-motion'
import Navbar from './navbar.js'
import Landing from './landing.js'

class Home extends React.Component{


    state = {
        view : 'landing'
    }

    clickHandler = (props) => {
        console.log('clickin')
        this.setState({view : props})
    }
    render(){
        return(
            <div className='home'>
                    <Motion 
                    defaultStyle={{y : -100, opacity : 0}} 
                    style={{y : spring(this.state.view === 'landing' ? 10 : -100),
                        opacity : spring(this.state.view === 'landing' ? 1 : 0)}}
                >
                        {(style) => (
                            <div style={{ 
                                transform : `translateY(${style.y}px)`,
                                opacity : style.opacity
                            }}>
                            <Landing clickHandler={this.clickHandler} />
                            </div>

                        )}
                        </Motion>
                    <Motion 
                    defaultStyle={{y : -100, opacity : 0}} 
                    style={{y : spring(this.state.view === 'about' ? 10 : -100),
                        opacity : spring(this.state.view === 'about' ? 1 : 0)}}
                >
                        {(style) => (
                            <div style={{ 
                                transform : `translateY(${style.y}px)`,
                                opacity : style.opacity
                            }}>
                            <Navbar clickHandler={this.clickHandler}/>
                            </div>

                        )}
                        </Motion>

                    <Motion 
                    defaultStyle={{x : -100, opacity : 0}} 
                    style={{x : spring(this.state.clicked ? 500 : -100),
                        opacity : spring(this.state.clicked ? 1 : 0)}}
                >
                        {(style) => (
                            <div style={{ 
                                transform : `translateX(${style.x}px)`,
                                opacity : style.opacity
                            }}>
                            <Items clickHandler={this.clickHandler}/>
                            </div>

                        )}
                        </Motion>
            </div>
        )
    }
}

export default Home

