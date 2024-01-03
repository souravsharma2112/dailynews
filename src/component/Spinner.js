import React, { Component } from 'react'
import loading from './ballsLine.gif'
export class Spinner extends Component {
    render() {
        return (
            <div className='container text-center my-4'>
                <img src={loading} alt="" />
            </div>
        )
    }
}

export default Spinner
