import React from 'react';
import 'rbx/index.css';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import Iframe from 'react-iframe';
import {
    Container,
    Message,
    Delete,
    Title,
    Column
} from "rbx";

import { ColumnGroup } from 'rbx/grid/columns/column-group';


const images = [
    {
        original: '/imgs/original/banner1.jpg',
        thumbnail: '/imgs/thumb/banner1.jpg',
    },
    {
        original: '/imgs/original/banner2.png',
        thumbnail: '/imgs/thumb/banner2.png',
    },
    {
        original: '/imgs/original/banner3.png',
        thumbnail: '/imgs/thumb/banner3.png',
    },
    {
        original: '/imgs/original/banner6.jpg',
        thumbnail: '/imgs/thumb/banner6.jpg',
    }
]

export default function Home(){

    return(
        <Container>
            <ColumnGroup>
                <Column>
                    <Title className="title">Pilates</Title>
                    <Container>
                        <ColumnGroup>
                            <Column size="full">
                                <ImageGallery className="image-gallery image-gallery-icon" items={images} autoPlay={true}/> 
                            </Column>
                        </ColumnGroup>
                    </Container>
                    <Title className="title">Principais Notícias</Title>
                    <Container>
                        <ColumnGroup>
                            <Column>
                                <Message color="link">
                                    <Message.Header>
                                        <p>Hello world</p>
                                        <Delete as="button" />
                                    </Message.Header>
                                    <Message.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
                                        <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec
                                        nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus
                                        diam, et dictum <a href="#felis">felis venenatis</a> efficitur. Aenean ac{' '}
                                        <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et
                                        sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a
                                        neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
                                    </Message.Body>
                                </Message>
                            </Column>
                            <Column>
                                <Message color="link">
                                    <Message.Header>
                                        <p>Hello world</p>
                                        <Delete as="button" />
                                    </Message.Header>
                                    <Message.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
                                        <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec
                                        nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus
                                        diam, et dictum <a href="#felis">felis venenatis</a> efficitur. Aenean ac{' '}
                                        <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et
                                        sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a
                                        neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
                                    </Message.Body>
                                </Message>
                            </Column>
                            <Column>
                                <Message color="link">
                                    <Message.Header>
                                        <p>Hello world</p>
                                        <Delete as="button" />
                                    </Message.Header>
                                    <Message.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
                                        <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec
                                        nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus
                                        diam, et dictum <a href="#felis">felis venenatis</a> efficitur. Aenean ac{' '}
                                        <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et
                                        sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a
                                        neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
                                    </Message.Body>
                                </Message>
                            </Column>
                        </ColumnGroup>
                    </Container>
                    <Title className="title">Onde Estamos</Title>
                    <Container>
                        <ColumnGroup>
                            <Column>
                                <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.292347932305!2d-38.470137485240954!3d-3.7463676972743887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74639eab37425%3A0x4f0c6d6d3245b42d!2sRua%20Dr.%20Ribamar%20Lobo%20-%20Fortaleza%2C%20CE!5e0!3m2!1spt-BR!2sbr!4v1635984074216!5m2!1spt-BR!2sbr" width="1176" height="600" style="border:0;" allowfullscreen="" loading="lazy"/>
                            </Column>
                        </ColumnGroup>
                    </Container>
                </Column>
            </ColumnGroup>
        </Container>
    )
}