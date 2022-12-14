import React from 'react';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

interface CardProjectProps {
    img: string;
    title: string;
    text: string;
    tech?: string;
    link: string;
}

export default function CardProject({ img, title, text, link, tech }: CardProjectProps) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} alt={title} style={{ height: '15rem' }} />
            <Card.Body>
                <div className='d-flex align-items-center gap-2 border-top border-primary pt-2'>
                    <Card.Title className='mb-0'>{title}</Card.Title>
                    <Badge bg="secondary"  >{tech}</Badge>
                </div>

                <Card.Text>
                    {text}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Card.Link href={link} target="_blank" rel="noopener noreferrer">Github</Card.Link>
            </Card.Footer>
        </Card>
    );
};