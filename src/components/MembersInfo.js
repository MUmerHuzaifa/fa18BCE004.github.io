import React, { Component } from 'react';
import { getdata } from './MembersDetails';
import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import './H_style.css';
class MembersInfo extends Component {
    state = { 
        info: getdata(),
     } 
    render() { 
        return (
            <div>
                <h1 className='text-center py-4'>Our Members</h1>
            
            <div className='col-md-6' id='memberDataCard'>
            <div className="cards">
                {
                    this.state.info.map(i=>(
              <Card style={{ width: '18rem', marginLeft:"50px" }}>
                <Card.Img className='images_member' style={{height:"300px"}} variant="top" src="https://xp.io/storage/15pewlWA.jpg" />
                    <Card.Body>
                        <Card.Title> {i.Name}</Card.Title>
                            <Card.Text>
                            {i.Designation}
                            </Card.Text>
                      <Button id="button1" variant="primary" >See Profile</Button>
                     </Card.Body>
                </Card>
                    ))
                }
            </div>
            </div>
            </div>
        );
    }
}
 
export default MembersInfo;