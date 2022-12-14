import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardExp from '../../components/cardExp';

export default function Experiencia(){
    return(
        <Container id='experiencia'>
            <Row style={{ minHeight: '65vh' }} className='my-4 border-primary border-bottom'>
                <Col>
                    <h1 className='text-center pb-4' style={{ marginTop: '11vh' }}>Experiências</h1>
                        <CardExp/>
                </Col>
            </Row>
        </Container>
    )
}