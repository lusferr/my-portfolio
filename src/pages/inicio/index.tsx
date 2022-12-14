import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AiFillLinkedin, AiFillGithub, AiOutlineWhatsApp } from 'react-icons/ai';
import { BiDevices } from 'react-icons/bi';

export default function Inicio() {
    return (
        <Container id='inicio'>
            <Row style={{ minHeight: '90vh' }} className='mb-4 border-primary border-bottom'>
                <Col></Col>
                <Col md={12} className='mb-4'>
                    <Row >
                        <Col md={6}>
                            <div className='d-flex justify-content-center' >
                                <BiDevices className='pb-2' size={350} />
                            </div>
                        </Col>
                        <Col md={6} className='p-4 mt-2'>
                            <h1 >Olá, me chamo Luis e sou desenvolvedor front-end</h1>
                            <div style={{ maxWidth: '450px' }}>
                                <small>I love build things for the web. |</small>
                            </div>
                            <div className='pt-4 d-flex gap-4'>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/luis-fernando-da-silva-1a24a2189/"><AiFillLinkedin size={35} /></a>
                                <a target="_blank" rel="noopener noreferrer" href="https://github.com/lusferr"><AiFillGithub size={35} /></a>
                                <a target="_blank" rel="noopener noreferrer" href="https://wa.me/5515981449343"><AiOutlineWhatsApp size={35} /></a>     
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col ></Col>
            </Row>
        </Container>
    );
};