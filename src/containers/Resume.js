import React, { Component } from 'react'
import Apple from '../apple.png'
import Bestbuy from '../bestbuy.png'
import Microcenter from '../microcenter7.png'
import AppleInfo from '../components/appleinfo.js'
import BestbuyInfo from '../components/bestbuyinfo.js'
import MicrocenterInfo from '../components/microcenterinfo.js'

class Resume extends Component {

    state = {
        job : null
    }


    jobInfoRender = () => {
        switch(this.state.job){
            case "apple":
                return <AppleInfo />;
            case "microcenter":
                return <MicrocenterInfo />;
            case 'bestbuy':
                return <BestbuyInfo />;
             default:
                return null;
        }
    }

    jobInfoHandler = (props) => {
        this.setState({ job : props })
    }

    render(){

        const style = {
            position : 'absolute',
            display : 'inline-block',
            width : 'auto',
            marginLeft : '50px',
            fontWeight : 'bold'
        }
        return(
            <div className='resume'>
                <div className='banner'>
                    <h1>Work Experience</h1>
                </div>
                <div className='jobs'>   
                <div className='apple'>
                    <img src={Apple} alt='apple log' width='100px' />
                    <p style={style}>Apple inc. 2011-2019   <span className='job details' style={style} onClick={()=> this.jobInfoHandler('apple')}>See Details...</span></p>
                </div>
                <div className='bestbuy'>
                    <img src={Bestbuy} alt='best buy logo' width='100px' />
                    <p style={style}>Best Buy. 2010-2011   <span className='job details' style={style} onClick={()=> this.jobInfoHandler('bestbuy')}>See Details...</span></p>
                </div>
                <div className='microcenter'>
                    <img src={Microcenter} alt='microcenter logo' width='100px' />
                    <p style={style}>Micro Center. 2009-2010   <span className='job details' style={style} onClick={()=> this.jobInfoHandler('microcenter')} >See Details...</span></p>
                </div>
                <button className='resumebackbuton' onClick={()=> this.props.clickHandler('about')}>Back</button>

        </div>
                <div className='details container'>
                        {this.jobInfoRender()}
                </div>
            </div>
        )
    }
}

export default Resume

