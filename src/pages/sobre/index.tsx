import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

export default function Sobre() {
    return (
        <Container id='sobre'>
            <Row style={{ minHeight: '90vh' }} className='mb-4 border-primary border-bottom'>
                <Col></Col>
                <Col md={12} className='mb-4'>
                    <Row >
                        <Col className='d-flex justify-content-center align-items-center flex-wrap'>
                            <div className='w-75 border-primary border-bottom' style={{ minWidth: '200px' }}>
                                <h2>Sobre mim</h2>
                                <p>Desenvolvedor Front-end com experiência em React, JavaScript, TypeScript, Bootstrap e consumo de APIs REST. Sou apaixonado por desenvolvimento front-end. Cursando o ultimo ano de administração na UFSCar e cursando Ánalise e Desenvolvimento de Sistemas na FACENS.</p>
                            </div>
                        </Col>
                        <Col>
                            <div className='d-flex justify-content-center mt-2'>
                                <Image roundedCircle src='https://i.imgur.com/RTX3TqC.jpg' style={{ width: '18rem' }} />
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    );
};