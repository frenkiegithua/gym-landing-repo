import React from 'react';
import { Container, Row, Col, Card} from 'react-bootstrap';

const testimonials = [
    {
        name: 'Sarah K.',
        text: 'I have lost 15kg in 4 months! The training is intense, but the results speak for themselves.',
    },
    {
        name: 'Brian M.',
        text: 'As a beginner, I felt supported every step. Now I lift more than I ever thought I could',
    },
    {
        name: 'Linda W.',
        text: 'Best experience ever. The meal plan plus workouts changed my body and energy level.',
    },
];

function TestimonialsSection(){
    return(
        <div className='py-5 bg-light'>
            <Container>
                <h2 className='text-center mb-4'>What Clients Say</h2>
                <Row>
                    {testimonials.map((t, index) => 
                    (
                        <Col md={4} key={index}>
                            <Card className='h-100 shadow-sm'>
                                <Card.Body>
                                    <Card.Text>"{t.text}"</Card.Text>
                                    <Card.Footer className='text-muted text-end'>-{t.name}</Card.Footer>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default TestimonialsSection;
