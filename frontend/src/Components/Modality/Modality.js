import React from "react";
import { Title, Card, Image, Media, Content } from "rbx";

import ImgsMatPilates from '../imgs/mat-pilates.jpg';
import ImgPilatesAcrobatico from '../imgs/pilates-acrobatico.jpg';
import ImgPilatesParaGestante from '../imgs/pilates-para-gestante.jpg';
import ImgsPilatesSuspenso from '../imgs/pilates-suspenso.jpg';

export default function Modality(){
    return(
        <section class="section">
            <div class="container has-text-centered">
            <Title>Modalidades</Title>
            <div class="columns is-centered">
            <div class="column">
                        <div class="card">
                            <div class="card-image">
                                <figure class="image is-2by1">
                                    <img src={ImgsMatPilates} alt="Placeholder image"/>
                                </figure>
                            </div>
                            <div class="card-content">
                                <div class="media">
                                    <div class="media-content">
                                        <p class="title is-4">Mat Pilates</p>
                                    </div>
                                </div>

                                <div class="content">
                                    É uma formação clássica, no qual é abordado todos os exercícios originais desenvolvidos pelo Joseph Pilates no solo. Esses exercícios são o resultado da construção de ganho de força, flexibilidade e equilíbrio muscular.
                                </div>
                            </div>
                        </div>
                </div>
                <div class="column">
                        <div class="card">
                            <div class="card-image">
                                <figure class="image is-2by1">
                                    <img src={ImgsPilatesSuspenso} alt="Placeholder image"/>
                                </figure>
                            </div>
                            <div class="card-content">
                                <div class="media">
                                    <div class="media-content">
                                        <p class="title is-4">Pilates suspenso</p>
                                    </div>
                                </div>

                                <div class="content">
                                É uma modalidade usando como base os exercícios originais do Mat Pilates, mas usando a fita de suspensão, no qual diminui a descarga do peso no solo. Essa é uma modalidade que gera muita instabilidade, por isso treina a força, o equilíbrio.
                                </div>
                            </div>
                        </div>
                </div>
                <div class="column">
                        <div class="card">
                            <div class="card-image">
                                <figure class="image is-2by1">
                                    <img src={ImgPilatesAcrobatico} alt="Placeholder image"/>
                                </figure>
                            </div>
                            <div class="card-content">
                                <div class="media">
                                    <div class="media-content">
                                        <p class="title is-4">Pilates Acrobático</p>
                                    </div>
                                </div>

                                <div class="content">
                                É uma modalidade de exercícios realizada nos equipamentos originais desenvolvido por Joseph Pilates, usando como base a suspensão de forma a diminuir a área de apoio gerando assim, maior ganho de força aos alunos.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="card">
                            <div class="card-image">
                                <figure class="image is-2by1">
                                    <img src={ImgPilatesParaGestante} alt="Placeholder image"/>
                                </figure>
                            </div>
                            <div class="card-content">
                                <div class="media">
                                    <div class="media-content">
                                        <p class="title is-4">Pilates na gestação</p>
                                    </div>
                                </div>

                                <div class="content">
                                Essa é uma formação que vai agregar conhecimento para quem já trabalha com Pilates e quer aumentar o seu público de forma personalizada com base e conhecimento específico sobre todas as alterações que vão acontecer durante a gestação e a pós-gestação
                                </div>
                            </div>
                        </div>
                    </div>
            </div>   
        </div> 
        </section>
                   
    )
}