import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import LowerToUpper from './LowerToUpper';

function CartDeatils() {
    const [name, setName] = useState(0)


    return (

        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title> IOT Based </Card.Title>
                    <Card.Text>
                        This includes controlling of things <br></br>  from any where in the world
                    </Card.Text>

                    <Button variant="primary" style={{ marginLeft: "10px" }}
                        onClick={() => setName(name => name + 1)}
                    >Add</Button>
                    <Button variant="primary" style={{ marginLeft: "10px" }}
                        onClick={() => setName(name => name - 1)}

                    >Remove</Button>
                    <Button variant="danger" style={{ marginLeft: "10px" }}
                        onClick={() => setName(name => 0)}
                    >clear</Button>
                    <p>{name}</p>
                </Card.Body>
            </Card>
            {/* <LowerToUpper image={Card.Img} title={Card.Title}  */}
        </div>

    );

}

export default CartDeatils;