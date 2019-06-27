import React from 'react'
import { Motion, spring } from 'react-motion'

const AppleInfo = (props) => {

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
                                    <h1>Apple Inc, New York, New York</h1>
                                    <h2>Apple Certified Technician Tier 1, December, 2011 - February 2013</h2>
                                    <h2>Apple Certified Technician Tier 2, February, 2013 - August 2016</h2>
                                    <h2>Apple Certified Technician Tier 4, August 2016 - January 2019</h2>
                                    <h3>+ Increased Macintosh and Ios repairs by 10% over two fiscal quarters by following corporate repair best practices.</h3>
                                    <h3> + Maintained active network communications by troubling shooting and deploying Cisco routers and switches.</h3> 
                                    <h3>+ Designed training documentation and troubleshooting techniques for active Apple product line.</h3> 
                                    <h3> + Invited to Cupertino California to assist in corporate events such as Worldwide Developers Conference.</h3>
                                </div>
                            </div>
                        )}
                        </Motion>

        )
}

export default AppleInfo
