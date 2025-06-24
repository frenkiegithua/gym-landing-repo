import React from 'react';
import { Container } from 'react-bootstrap'

function FooterSection(){
    return(
        <footer className='bg-dark text-white py-4'>
            <Container className='text-center'>
                <p className='mb-1'>&copy;{new Date().getFullYear()} FitZone. All rights reserved</p>
                <p className='mb-0'>Designed by Francis | <a href='mailto:info@fitzone.com' className='text-white text-decoration-underline'>Contact Us</a></p>
            </Container>
        </footer>
    );
}

export default FooterSection;