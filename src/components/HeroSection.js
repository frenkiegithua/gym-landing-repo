import React from 'react';
import { Container, Button } from 'react-bootstrap'

function HeroSection() {
    return (
        <div className='bg-dark text-white text-center py-5'>
            <Container>
                <h1 className='display-4'>Train with Power</h1>
                <p className='lead'>Join our gym and get fit with expert trainers.</p>
                <Button variant='primary' size='lg'>Join Now</Button>
            </Container>
        </div>
    )
}

export default HeroSection;