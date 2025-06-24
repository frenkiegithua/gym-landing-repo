import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const services = [
    {
    title: '1-on-1 Personal Training',
    desc: 'Cutom workout plans tailored to your goals with direct coaching.',
},
{
    title: 'Group Fitness Classes',
    desc: 'Fun and intense group sessions for motivation and results.',
},
{
    title: 'Meal Planning', 
    desc: 'Personalized nutrition guidance to match your training',
},];

function ServicesSection(){
    return(
        <div className='py-5'>
            <Container>
                <h2 className='text-center mb-4'>Our Services</h2>
                <Row>{services.map((service, index) => (
                    <Col md={4} key={index} className='mb-4'>
                        <Card className='h-100 shadow-sm'>
                            <Card.Body>
                                <Card.Title>{service.title}</Card.Title>
                                <Card.Text>{service.desc}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>))}</Row>
            </Container>
        </div>
    );
}

export default ServicesSection;