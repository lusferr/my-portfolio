import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardTech from '../../components/cardTech';

export default function Conhecimentos() {
    return (
        <Container id='conhecimentos'>
            <Row style={{ minHeight: '65vh' }} className='my-4 border-primary border-bottom'>
                <Col>
                    <h1 className='text-center pb-4' style={{ marginTop: '6rem' }}>Conhecimentos</h1>
                    <div className='d-flex justify-content-center gap-4 flex-wrap mb-4'>
                        <CardTech name='HTML5' icon='https://i.imgur.com/mZNVzJ9.png'/>
                        <CardTech name='CSS' icon='https://i.imgur.com/XTAvw43.png'/>
                        <CardTech name='Javascript' icon='https://i.imgur.com/m5SQxSs.png'/>
                        <CardTech name='Java' icon='https://i.imgur.com/3gnxY1i.png'/>
                        <CardTech name='React' icon='https://i.imgur.com/QlYqSgr.png'/>
                        <CardTech name='Git' icon='https://i.imgur.com/gv5XIJX.png'/>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};