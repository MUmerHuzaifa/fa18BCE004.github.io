import { Button } from 'bootstrap';
import React, { Component } from 'react'

export default class Blocks extends Component {

    state = [];
    render() {
        return (
            <div className='row-md-12' id='parent_blocks'>
                <div className='col-md-3 block_css1' >
                      <p>Our Projects</p>
                </div>
                <div className='col-md-3 block_css2'>
                    <p>Hi i am 2nd</p>

                </div>
                <div className='col-md-3 block_css3'>
                    <p>Hi i am 3rd</p>

                </div>
            </div>
        )
    }
}
