import React from 'react'
import { Motion, spring } from 'react-motion'

const BestbuyInfo = (props) => {

    return(

                    <Motion 
                    defaultStyle={{x : 90, opacity : 0}} 
                    style={{x : spring(1),
                        opacity : spring(1)}}
                >
                        {(style) => (
                            <div style={{ 
                                transform : `translateX(${style.x}px)`,
                                opacity : style.opacity
                            }}>
                                <div>
                                    <h1>Best Buy, Denver, CO</h1>
                                    <h2> Associate, October 2010 - November, 2011</h2>
                                    <h3>+ Provided sales and support solutions for retail clients.</h3> 
                                    <h3>+ Installed and configured Windows environments and security solutions.</h3> 
                                    <h3>  + Troubleshoot Windows applications.</h3> 

                                </div>
                        </div>
                        )}
                        </Motion>

        )
}

export default BestbuyInfo

