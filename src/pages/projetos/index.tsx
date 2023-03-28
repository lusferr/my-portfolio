import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardProject from "../../components/cardProject";

export default function Projetos() {
    return (
        <Container id='projetos' >
            <Row style={{ minHeight: '65vh' }} className='my-4 border-primary border-bottom'>
                <Col >
                    <h1 className='text-center pb-4' style={{ marginTop: '6rem' }}>Projetos</h1>
                    <div className='d-flex justify-content-center gap-4 flex-wrap mb-4'>
                        <CardProject
                            link='https://github.com/lusferr/habits'
                            img='https://i.imgur.com/GLZQGKt.png'
                            title='Habits'
                            tech='React'
                            techMobile='React Native'
                            text='Projeto para monitoração de novos hábitos e acompanhamento dos mesmos. Projeto desenvolvido na NLW da Rocktseat'
                        />

                        <CardProject
                            link='https://github.com/lusferr/projeto-pokedex-mapadev-week'
                            img='https://i.imgur.com/6DrdlW1.jpg'
                            title='Pokédex'
                            tech='React'
                            text='Criação de uma pokédex aonde pudessemos selecionar um pokemon e ver as suas informações e características.'
                        />
                        <CardProject
                            link='https://github.com/lusferr/fomik-yup'
                            img='https://i.imgur.com/iU7I7wy.png'
                            title='Formik + Yup'
                            tech='React'
                            text='Validação de um formulario simples utilizando Formik + Yup.'
                        />
                        <CardProject
                            link='https://github.com/lusferr/todoList'
                            img='https://i.imgur.com/F4zkB2M.png'
                            title='To Do List'
                            tech='React'
                            text='Uma lista de tarefas aonde é possível adicionar tarefas e marca-las como concluídas.'
                        />
                        <CardProject
                            link='https://github.com/conectaGeneration'
                            img='https://i.imgur.com/GpwH6yL.png'
                            title='Conecta'
                            tech='Angular'
                            text='Projeto final desenvolvido no Bootcamp da Generation Brasil em grupos de 5. Trata-se de uma rede social para conectar trabalhadores a serviços'
                        />

                        <CardProject
                            link='https://github.com/lusferr/evogym-tailwind'
                            img='https://i.imgur.com/crSyUBE.png'
                            title='Evogym'
                            tech='React'
                            text='Projeto desenvolvido para praticar o uso de tailwind e typescript, é uma landing page para uma academia.'
                        />

                    </div>
                </Col>
            </Row>
        </Container>
    );
};