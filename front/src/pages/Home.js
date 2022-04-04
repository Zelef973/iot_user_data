import React, { useEffect, useState } from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Table,
} from 'reactstrap';
import Footer from '../components/footer';
import Headers from '../components/navbar';

import api from '../services/api';

// import { useParams, useNavigate } from 'react-router-dom';

export function Home() {
  // const navigate = useNavigate();

  return (
    <div>
      <Headers />
      <Card>
        <CardBody className="text-justify">
          <CardTitle tag="h5" style={{margin:'10px'}}>
            <strong>I - Présentation général du projet</strong>
          </CardTitle>
          <CardText style={{margin:'20px'}}>
          Durant ce cours de sécurité IoT, nous devons réaliser un projet parmi 3 possibles. Nous avons donc choisi le projet 3 qui s’intitule : «Un système de visualisation de la collecte et du traitement de renseignements personnels». <br/><br/>
Nous avons décidé de traiter ce sujet car nous avons pu voir lors des séances théoriques mais aussi des lectures, que la protection des données est un des enjeux les plus importants pour le domaine de l’IoT.  En effet, de nombreux objets connectés subissent des pertes ou vol de données, et les utilisateurs ont du mal à voir concrètement quelles données sont collectées par l’objet mais aussi la circulation de ces données. Il est donc très intéressant de créer un système qui permettrait de visualiser la collecte et le traitement de ces données afin que les utilisateurs soient sensibilisés sur ce point crucial de l’internet des objets. <br/><br/>
L'objectif principal du système sera donc d’éduquer et de sensibiliser les utilisateurs de ces objets connectés, aux enjeux liés à la protection des renseignements personnels. Pour ce faire, nous allons réaliser une interface visuelle de sensibilisation sur les risques de cybersécurité de l’Internet des Objets. Notre travail portera donc sur deux tâches à réaliser : <br/><br/>
     <strong>Tâche 1</strong> : Réaliser un catalogue qui résume les différents types d'objets connectés, et pour chacun d’eux, les vulnérabilités existantes ainsi que les menaces pour les données sensibles.<br/>
     <strong>Tâche 2</strong> : Nous allons réaliser une interface de visualisation afin de sensibiliser les personnes qui utilisent ces objets connectés. Nous allons pour cela faire une page web qui énumère des objets connectés, l’utilisateur choisit celui qu’il veut utiliser en cliquant dessus, alors une description des cyberattaques possibles,  et des menaces probables s’affichera.<br/>          </CardText>
        </CardBody>
      </Card>
      <Card>
        <CardBody className="text-justify">
          <CardTitle tag="h5" style={{margin:'10px'}}>
            <strong>II - Présentation de l'équipe projet</strong><br/><br/>
          </CardTitle>
          <Table>
            <thead style={{backgroundColor:'#d1e2ff'}}>
              <tr>
                <th>
                  Nom et prénom
                </th>
                <th>
                  Étude
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Basile TALMON LARODERIE
                </td>
                <td>
                  Éleve-ingénieur à l'ESIGELEC em double diplôme à l'UQAC en maîtrise
                  informatique professionel
                </td>
              </tr>
              <tr>
                <td>
                  Igor MARTINS
                </td>
                <td>
                  Étudiant en maîtrise informatique volet recherche
                </td>
              </tr>
              <tr>
                <td>
                  Mamadou DIALLO
                </td>
                <td>
                  Étudiant en maîtrise informatique volet professionel
                </td>
              </tr>
              <tr>
                <td>
                  Vincent DOLLO
                </td>
                <td>
                  Éleve-ingénieur à l'ESIR em double diplôme à l'UQAC en maîtrise
                  informatique professionel
                </td>
              </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>
      <Footer />
    </div>
    // <div>
    //   <Headers />
    //   <h1>Home
    //     <button onClick={()=> navigate('/')}>Change page</button>
    //   </h1>
    //   <Button color='danger'>Danger</Button>
    // </div>
  )
}


