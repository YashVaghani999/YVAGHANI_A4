
/*********************************************************************************
*  WEB422 – Assignment 4
*  I declare that this assignment is my own work in accordance with Seneca Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: ___Riddhi Bharatkumar Patel___________________ Student ID: ____151212214______________ Date: ____3 Nov, 2023_______________
*   Github Link : https://github.com/RiddhiPatel25/Assignment4-Web422
Because of deployemnt issues, i have made the github repository public and have given the link above so that you can view my code. 
There was a build error when deploying the project for some reason althought it is working perfectly fine on my pc. Hope you understand.
********************************************************************************/ 


import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

export default function Home () {
  return (
    <div>
      <Row>
        <Col md={6}>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/3/30/Metropolitan_Museum_of_Art_%28The_Met%29_-_Central_Park%2C_NYC.jpg"
            fluid
            rounded
          />
        </Col>
        <Col md={6}>
          <p>
            The Metropolitan Museum of Art is one of the world's largest and most prestigious art museums. It is located in New York City, in the Central Park area.
          </p>
          <p>
            For more information, visit {' '}
            <a
              href="https://en.wikipedia.org/wiki/Metropolitan_Museum_of_Art"
              target="_blank"
              rel="noreferrer"
            >
              Metropolitan Museum of Art Wikipedia page
            </a>
          </p>
        </Col>
      </Row>
    </div>
  );
};


