import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';

export default function CardExp() {
    return (
        <Card body className='mt-4'>
            <div className='d-flex align-items-center gap-2'>
                <h2>Stairs Digital</h2>
                <Badge bg="secondary"  >06/2022 - atualmente</Badge>
            </div>
            <p>Estagiário em desenvolvimento front-end</p>
            <ListGroup>
                <ListGroup.Item>Desenvolvimento de aplicações utilizando react</ListGroup.Item>
                <ListGroup.Item>Participação de reuniões com clientes</ListGroup.Item>
                <ListGroup.Item>Conexão com APIs REST</ListGroup.Item>
            </ListGroup>
        </Card>
    );
};