import React from "react"
import { Motion, spring } from 'react-motion'
import Navbar from './navbar.js'
import Landing from './landing.js'
import Resume from './Resume.js'

class Home extends React.Component{


    state = {
        view : 'landing'
    }

    clickHandler = (props) => {
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
                    defaultStyle={{opacity : 0}} 
                    style={{opacity : spring(this.state.view === 'landing' ? 1 : 0)}}
                >
                        {(style) => (
                            <div style={{
                                opacity : style.opacity
                            }}>
                            <h3 className='view work'
                                onClick={()=> this.clickHandler('about')}
                            >View My Work</h3>
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
                    style={{x : spring(this.state.view === 'resume' ? 0 : -100),
                        opacity : spring(this.state.view === 'resume' ? 1 : 0)}}
                >
                        {(style) => (
                            <div className='res' style={{ 
                                transform : `translateX(${style.x}px)`,
                                opacity : style.opacity
                            }}>
                                {this.state.view === 'resume' ? <Resume clickHandler={this.clickHandler} /> : null}
                            </div>

                        )}
                        </Motion>
            </div>
        )
    }
}

export default Home

