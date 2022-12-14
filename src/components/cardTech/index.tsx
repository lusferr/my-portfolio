import Card from 'react-bootstrap/Card';

interface CardTechProps{
    name?: string;
    icon?: string;
}

export default function CardTech({name, icon}: CardTechProps) {
    return (
        <Card className='p-2 shadow' style={{ width: '10rem', height: '12rem' }}>
            <Card.Img  variant="top" src={icon} alt={name}/>
            <Card.Body >
                <Card.Title className='text-center'>{name}</Card.Title>
            </Card.Body>
        </Card>
    );
};