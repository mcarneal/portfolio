import React from 'react'
import { Motion, spring } from 'react-motion'

const MicrocenterInfo = (props) => {

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
                                <h1>Micro Center, Denver, CO</h1>
                                <h2>Associate</h2>
                                <h3>Drove sales solutions above 20% of target gross profit</h3>
                                <h3>Communicate and listen to clients while offering custom to order desktop machines.</h3>
                                <h3>Configure, build, and install hardware plus software for custom purchase desktop configurations</h3>

                                </div>
                        </div>
                        )}
                        </Motion>

        )
}

export default MicrocenterInfo

