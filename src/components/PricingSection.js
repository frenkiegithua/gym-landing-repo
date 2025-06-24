import React from 'react';
import { Container, Row, Col, Card, Button} from 'react-bootstrap';

const pricingPlans =  [
    {
        title: 'Starter Plan',
        price: '$49/mo',
        features: ['2 sessions/week', 'Access to gym equipment', 'Basic meal guide'],
    },
    {
        title: 'Pro Plan',
        price: '$89/mo',
        features: ['4 sessions/week', 'Custom workout plan', 'Advanced nutrition coaching'],
    },
    {
        title: 'Elite Plan',
        price: '$129/mo',
        features: ['Unlimited Sessions', '1-on-1 coaching', 'Personalized meal delivery plan'],
    },
];

function PricingSection(){
    return(
        <div className='py-5'>
            <Container>
                <h2 className='text-center mb-4'>Pricing plans</h2>
                <Row>
                    {pricingPlans.map((plan, index) => 
                    (
                        <Col md={4} key={index} className='mb-4'>
                            <Card className='h-100 shadow-sm'>
                                <Card.Body>
                                    <Card.Title className='text-center'>{plan.title}</Card.Title>
                                    <h3 className='text-center text-primary'>{plan.price}</h3>
                                    <ul className='list-unstyled mt-3 mb-4'>
                                        {plan.features.map((feature, i) => 
                                        (
                                            <li key={i}>✔{feature}</li>
                                        ))}
                                    </ul>
                                    <div className='text-center'>
                                        <Button variant='primary'>Choose Plan</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default PricingSection;