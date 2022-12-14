import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AiFillLinkedin, AiFillGithub, AiOutlineWhatsApp } from 'react-icons/ai';

export default function Contato() {
    return (
        <Container id='contato'>
            <Row style={{ minHeight: '20vh' }} className='my-4 border-primary border-bottom'>
                <Col>
                    <h1 className='text-start pb-4 mt-4'>Contato:</h1>
                    <div className='d-flex justify-content-center align-items-center gap-4'>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/luis-fernando-da-silva-1a24a2189/"><AiFillLinkedin size={35} /></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/lusferr"><AiFillGithub size={35} /></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://wa.me/5515981449343"><AiOutlineWhatsApp size={35} /></a>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};