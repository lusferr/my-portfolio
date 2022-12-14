import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function MyFooter() {
    return (
        <Container>
            <Row>
                <Col className='mb-4 pb-4 text-center'>
                    © 2022 
                </Col>
            </Row>
        </Container>
    );
};