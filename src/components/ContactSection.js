import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
function ContactSection(){
    return(
        <div className='py-5 bg-light'>
            <Container>
                <h2 className='text-center mb-4'>Get In Touch</h2>
                <Row>
                    <Col md={6}>
                      <Form>
                        <Form.Group className='mb-3' controlId='formName'>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type='text' placeholder='Enter your name'/>
                        </Form.Group>
                        <Form.Group className='mb-3' controlId='formEmail'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='email' placeholder='Enter your email' />
                        </Form.Group>
                        <Form.Group className='mb-3' controlId='formMessage'>
                            <Form.Label>Message</Form.Label>
                            <Form.Control as='textarea' rows={4} placeholder='Your message'/>
                        </Form.Group>
                        <Button variant='primary' type='submit'>Send Message</Button>
                      </Form>
                    </Col>
                    <Col md={6}>
                      <h5 className='mb-3'>Address:</h5>
                      <p>123 Fitness lane, Muscle City</p>

                      <h5 className='mb-3'>Phone:</h5>
                      <p>+254712 345 678</p>

                      <h5 className='mb-3'>Map:</h5>
                      <div className='ratio ratio-4x3'>
                        <iframe
                        title='Gym Location'
                        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.282040162106!2d36.8116439!3d-1.292065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d98e5e9bcf%3A0x5f57a87b5605df46!2sNairobi!5e0!3m2!1sen!2ske!4v1718920839990!5m2!1sen!2ske'
                        allowFullScreen
                        loading='lazy'></iframe>
                      </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ContactSection;