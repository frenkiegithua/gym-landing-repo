import React from 'react';
import { Container, Row, Col, Image} from 'react-bootstrap';

function AboutSection(){
    return(
        <div className='py-5 bg-light'>
            <Container>
                <Row className='align-items-center'>
                    <Col md={6}>
                    <Image 
                    src='https://images.unsplash.com/photo-1605296867304-46d5465a13f1'
                    alt='Trainer'
                    fluid
                    rounded/></Col>
                    <Col md={6}>
                    <h2>About Your Trainer</h2>
                    <p>I'm Alex, a certified fitness coach with 8+ years of experience helping people transform their bodies and lifestyles. Whether you're a beginner or advanced, I offer customized training to fit your goals - weight loss, strength, or endurance.</p>
                    <p>Join now and get a free 1-on-1 fitness assessment!</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default AboutSection;