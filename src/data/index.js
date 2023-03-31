import graphisme1 from '../assets/graphisme/graphisme1.jpg';
import graphisme2 from '../assets/graphisme/graphisme2.jpg';
import graphisme3 from '../assets/graphisme/graphisme3.jpg';
import graphisme4 from '../assets/graphisme/graphisme4.png';
import graphisme5 from '../assets/graphisme/graphisme5.jpg';
import graphisme6 from '../assets/graphisme/graphisme6.jpeg';
import graphisme7 from '../assets/graphisme/graphisme7.jpg';
import graphisme8 from '../assets/graphisme/graphisme8.jpg';
import graphisme9 from '../assets/graphisme/graphisme9.jpg';
import graphisme10 from '../assets/graphisme/graphisme10.jpg';
import graphisme11 from '../assets/graphisme/graphisme11.jpg';
import graphisme12 from '../assets/graphisme/graphisme12.jpg';
import peinture1 from '../assets/peinture/peinture1.jpg';
import peinture2 from '../assets/peinture/peinture2.jpg';
import peinture3 from '../assets/peinture/peinture3.jpg';
import peinture4 from '../assets/peinture/peinture4.jpg';
import peinture5 from '../assets/peinture/peinture5.jpg';
import peinture6 from '../assets/peinture/peinture6.jpg';
import peinture7 from '../assets/peinture/peinture7.jpg';
import peinture8 from '../assets/peinture/peinture8.jpg';
import photographie1 from '../assets/photographie/photographie1.jpg';
import photographie2 from '../assets/photographie/photographie2.jpeg';
import photographie3 from '../assets/photographie/photographie3.jpg';
import photographie4 from '../assets/photographie/photographie4.jpg';
import photographie5 from '../assets/photographie/photographie5.jpg';
import photographie6 from '../assets/photographie/photographie6.jpg';
import photographie7 from '../assets/photographie/photographie7.jpg';
import photographie8 from '../assets/photographie/photographie8.jpg';
import photographie9 from '../assets/photographie/photographie9.jpg';
import photographie10 from '../assets/photographie/photographie10.jpg';
import poterie1 from '../assets/poterie/poterie1.jpg';
import poterie2 from '../assets/poterie/poterie2.jpg';
import poterie3 from '../assets/poterie/poterie3.jpg';
import poterie4 from '../assets/poterie/poterie4.jpg';
import poterie5 from '../assets/poterie/poterie5.jpg';
/*import Home from '../pages/Home';
import NotFound from '../pages/404';
import Graphisme from '../pages/Graphisme';
import Peinture from '../pages/Peinture';
import Photographie from '../pages/Photographie';
import Poterie from '../pages/Poterie';*/

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

/*function getDifferentRamdonInt(){
  if (!getRandomInt ){
    let randomInt = getRandomInt

  }else{
    let randomInt !== getRandomInt 
  }
}

export const routeElement = [
  {
    element: Home,
    path: '/',
  },

  {
    element: Graphisme,
    path: '/graphisme',
  },

  {
    element: Peinture,
    path: '/peinture',
  },

  {
    element: Poterie,
    path: '/poterie',
  },

  {
    element: Photographie,
    path: '/photographie',
  },

  {
    element: NotFound,
    path: '/*',
  },
];*/

export const siteName = 'MyFreeWorks';

export const registrationElement = [
  {
    id: 'lastName',
    title: 'Nom :',
    inputType: 'text',
    labelClass: 'form-label',
    inputClass: 'form-control',
    divClass: 'mb-3',
  },

  {
    id: 'firstName',
    title: 'Prénom(s) :',
    inputType: 'text',
    labelClass: 'form-label',
    inputClass: 'form-control',
    divClass: 'mb-3',
  },

  {
    id: 'dateOfBirth',
    title: 'Date de naissance :',
    inputType: 'date',
    labelClass: 'form-label',
    inputClass: 'form-control',
    divClass: 'mb-3',
  },

  {
    id: 'Sex',
    title: 'Sexe :',
    inputType: '',
    labelClass: 'form-label',
    inputClass: '',
    divClass: 'mb-1',
  },

  {
    id: 'man',
    title: 'Masculin',
    value: 'Masculin',
    name: 'checkitem',
    inputType: 'radio',
    labelClass: 'form-check-label',
    inputClass: 'form-check-input',
    divClass: 'form-check',
  },

  {
    id: 'woman',
    title: 'Féminin',
    value: 'Féminin',
    name: 'checkitem',
    inputType: 'radio',
    labelClass: 'form-check-label',
    inputClass: 'form-check-input',
    divClass: 'form-check',
  },

  {
    id: 'nobinary',
    title: 'Non binaire',
    value: 'Non binaire',
    name: 'checkitem',
    inputType: 'radio',
    labelClass: 'form-check-label',
    inputClass: 'form-check-input',
    divClass: 'mb-3 form-check',
  },

  {
    id: 'mail',
    title: 'Adresse mail :',
    inputType: 'email',
    labelClass: 'form-label',
    inputClass: 'form-control',
    divClass: 'mb-3',
  },

  {
    id: 'passwordRegistration',
    title: 'Mot de passe :',
    inputType: 'password',
    labelClass: 'form-label',
    inputClass: 'form-control',
    divClass: 'mb-3',
  },

  {
    id: 'checkPasswordRegistration',
    title: 'Confirmer mot de passe :',
    inputType: 'password',
    labelClass: 'form-label',
    inputClass: 'form-control',
    divClass: 'mb-3',
  },
];

export const connexionElement = [
  {
    dropdownElement: [
      {
        id: 'adressMailDrop',
        title: 'Adresse Mail :',
        labelClass: 'form-label',
        inputClass: 'form-control',
        inputType: 'email',
        divClass: 'm-2',
      },

      {
        id: 'passwordConnexionDrop',
        title: 'Mot de passe',
        labelClass: 'form-label',
        inputClass: 'form-control',
        inputType: 'password',
        divClass: 'm-2',
      },

      {
        id: 'rememberMeDrop',
        title: ' Se souvenir de moi',
        labelClass: 'form-check-label',
        inputClass: 'form-check-input',
        inputType: 'checkbox',
        divClass: 'm-2 form-check',
      },
    ],
  },

  {
    modalElement: [
      {
        id: 'adressMailModal',
        title: 'Adresse Mail :',
        inputType: 'email',
        labelClass: 'form-label',
        inputClass: 'form-control',
        divClass: 'mb-3',
      },

      {
        id: 'passwordConnexionModal',
        title: 'Mot de passe :',
        inputType: 'password',
        labelClass: 'form-label',
        inputClass: 'form-control',
        divClass: 'mb-3',
      },

      /* {
        id: 'rememberMeModal',
        title: ' Se souvenir de moi',
        labelClass: 'form-check-label',
        inputClass: 'form-check-input',
        inputType: 'checkbox',
        divClass: 'm-2 form-check',
      },*/
    ],
  },
];

export const addProductElement = [
  {
    id: 'nameProd',
    title: 'Nom :',
    inputType: 'text',
    labelClass: 'form-label',
    inputClass: 'form-control',
    divClass: 'mb-3',
  },
  {
    id: 'descriptionProd',
    title: 'Description :',
    inputType: '',
    labelClass: 'form-label',
    inputClass: 'form-control',
    divClass: 'mb-3',
  },
  {
    id: 'priceProd',
    title: 'Prix :',
    inputType: 'number',
    labelClass: 'form-label',
    inputClass: 'form-control',
    divClass: 'mb-3',
  },
  {
    id: 'coverProd',
    title: 'Image :',
    placeholder: 'https://...',
    inputType: 'text',
    labelClass: 'form-label',
    inputClass: 'form-control',
    divClass: 'mb-3',
  },
  {
    id: 'isSold',
    title: 'En solde .?',
    name: 'checkitem',
    inputType: 'checkbox',
    role: 'switch',
    labelClass: 'form-check-label',
    inputClass: 'form-check-input',
    divClass: 'mb-3 form-check form-switch',
  },
  {
    id: 'soldPriceProd',
    title: 'Prix de solde :',
    inputType: 'number',
    labelClass: 'form-label',
    inputClass: 'form-control',
    divClass: 'mb-3 d-none',
  },
];

export const menuElement = [
  {
    id: 'acceuil',
    to: '/',
    name: 'Acceuil',
    icone: 'fa-solid fa-house',
  },

  {
    id: 'graphisme',
    to: '/graphisme',
    name: 'Graphisme',
  },

  {
    id: 'peinture',
    to: '/peinture',
    name: 'Peinture',
  },

  {
    id: 'poterie',
    to: '/poterie',
    name: 'Poterie',
  },

  {
    id: 'photographie',
    to: '/photographie',
    name: 'Photographie',
  },
];

export const networks = [
  {
    id: 'Facebook',
    icone: 'fs-4 text-white fa-brands fa-facebook-f',
  },

  {
    id: 'Twitter',
    icone: 'fs-4 text-white fa-brands fa-twitter',
  },

  {
    id: 'LinkedIn',
    icone: 'fs-4 text-white fa-brands fa-linkedin',
  },
];

export const graphismeElement = [
  {
    id: 'affiche-0',
    name: 'Affiche',
    cover: graphisme1,
    price: 20.99,
    isSold: false,
    soldPrice: 0,
    to: '/graphisme',
  },

  {
    id: 'logo-2',
    name: 'Logo',
    cover: graphisme12,
    price: 79.99,
    isSold: false,
    soldPrice: 0,
    to: '/graphisme',
  },

  {
    id: 'design-0',
    name: 'Design',
    cover: graphisme2,
    price: 399.99,
    isSold: false,
    soldPrice: 0,
    to: '/graphisme',
  },

  {
    id: 'dessin-0',
    name: 'Dessin',
    cover: graphisme5,
    price: 739.99,
    isSold: true,
    soldPrice: 649.99,
    to: '/graphisme',
  },

  {
    id: 'dessin-1',
    name: 'Proclamation',
    cover: graphisme6,
    price: 123.99,
    isSold: false,
    soldPrice: 0,
    to: '/graphisme',
  },

  {
    id: 'page-0',
    name: 'Cover de page',
    cover: graphisme7,
    price: 569.99,
    isSold: false,
    soldPrice: 0,
    to: '/graphisme',
  },

  {
    id: 'logo-1',
    name: '3D',
    cover: graphisme8,
    price: 102.99,
    isSold: false,
    soldPrice: 0,
    to: '/graphisme',
  },

  {
    id: 'visage-0',
    name: 'Visage',
    cover: graphisme9,
    price: 569.99,
    isSold: false,
    soldPrice: 0,
    to: '/graphisme',
  },

  {
    id: 'graphisme-0',
    name: 'Graphic',
    cover: graphisme3,
    price: 129.99,
    isSold: true,
    soldPrice: 15,
    to: '/graphisme',
  },

  {
    id: 'papierpeint-0',
    name: 'Papier peint',
    cover: graphisme10,
    price: 98.99,
    isSold: false,
    soldPrice: 0,
    to: '/graphisme',
  },

  {
    id: 'société-0',
    name: 'Société',
    cover: graphisme11,
    price: 649.99,
    isSold: false,
    soldPrice: 0,
    to: '/graphisme',
  },

  {
    id: 'logo-0',
    name: 'logo',
    cover: graphisme4,
    price: 99.99,
    isSold: false,
    soldPrice: 0,
    to: '/graphisme',
  },
];

export const peintureElement = [
  {
    id: 'peinture1-0',
    name: 'Tableau de fleurs',
    cover: peinture1,
    price: 741.99,
    isSold: false,
    soldPrice: 0,
    to: '/peinture',
  },

  {
    id: 'peinture2-0',
    name: 'Tableau',
    cover: peinture2,
    price: 299.99,
    isSold: false,
    soldPrice: 0,
    to: '/peinture',
  },

  {
    id: 'peinture3-0',
    name: 'Tableau de fleurs rosées',
    cover: peinture3,
    price: 4036.99,
    isSold: false,
    soldPrice: 0,
    to: '/peinture',
  },

  {
    id: 'peinture4-0',
    name: 'Paysage africain',
    cover: peinture4,
    price: 899.99,
    isSold: false,
    soldPrice: 0,
    to: '/peinture',
  },

  {
    id: 'peinture5-0',
    name: 'Forêt',
    cover: peinture5,
    price: 199.99,
    isSold: false,
    soldPrice: 0,
    to: '/peinture',
  },

  {
    id: 'peinture6-0',
    name: 'Savane',
    cover: peinture6,
    price: 275.99,
    isSold: false,
    soldPrice: 0,
    to: '/peinture',
  },

  {
    id: 'peinture7-0',
    name: 'Femme',
    cover: peinture7,
    price: 829.99,
    isSold: false,
    soldPrice: 0,
    to: '/peinture',
  },

  {
    id: 'peinture8-0',
    name: 'Beauté féminine',
    cover: peinture8,
    price: 1099.99,
    isSold: false,
    soldPrice: 0,
    to: '/peinture',
  },
];

export const poterieElement = [
  {
    id: 'poterie1-0',
    name: 'Culture hawaienne',
    cover: poterie1,
    price: 700.99,
    isSold: false,
    soldPrice: 0,
    to: '/poterie',
  },

  {
    id: 'poterie2-0',
    name: 'Culture africaine',
    cover: poterie2,
    price: 9789.99,
    isSold: false,
    soldPrice: 0,
    to: '/poterie',
  },

  {
    id: 'poterie3-0',
    name: 'Carafe',
    cover: poterie3,
    price: 875.99,
    isSold: false,
    soldPrice: 0,
    to: '/poterie',
  },

  {
    id: 'poterie4-0',
    name: 'Jare',
    cover: poterie4,
    price: 230.99,
    isSold: false,
    soldPrice: 0,
    to: '/poterie',
  },

  {
    id: 'poterie5-0',
    name: 'Vase',
    cover: poterie5,
    price: 940.99,
    isSold: false,
    soldPrice: 0,
    to: '/poterie',
  },
];

export const photographieElement = [
  {
    id: 'photographie1-0',
    name: 'Ecureil',
    cover: photographie1,
    price: 500.99,
    isSold: false,
    to: '/photographie',
  },

  {
    id: 'photographie2-0',
    name: 'Loup',
    cover: photographie2,
    price: 480.99,
    isSold: false,
    to: '/photographie',
  },

  {
    id: 'photographie3-0',
    name: 'Guépard rugissant',
    cover: photographie3,
    price: 740.99,
    isSold: false,
    to: '/photographie',
  },

  {
    id: 'photographie4-0',
    name: 'Canard',
    cover: photographie4,
    price: 896.99,
    isSold: false,
    to: '/photographie',
  },

  {
    id: 'photographie5-0',
    name: 'Champion',
    cover: photographie5,
    price: 964.99,
    isSold: false,
    to: '/photographie',
  },

  {
    id: 'photographie6-0',
    name: 'Paysage vue de haut',
    cover: photographie6,
    price: 520.99,
    isSold: false,
    to: '/photographie',
  },

  {
    id: 'photographie7-0',
    name: 'Lac',
    cover: photographie7,
    price: 2504.99,
    isSold: false,
    to: '/photographie',
  },
  {
    id: 'photographie8-0',
    name: 'Montagne',
    cover: photographie8,
    price: 400.99,
    isSold: false,
    to: '/photographie',
  },

  {
    id: 'photographie9-0',
    name: 'Lac et montagne',
    cover: photographie9,
    price: 208.99,
    isSold: true,
    to: '/photographie',
    soldPrice: 120,
  },

  {
    id: 'photographie10-0',
    name: 'Paysage lac et montagne',
    cover: photographie10,
    price: 785.99,
    isSold: false,
    to: '/photographie',
  },
];

export const homeElement = [
  peintureElement[getRandomInt(0, peintureElement.length)],
  graphismeElement[getRandomInt(0, graphismeElement.length)],
  photographieElement[getRandomInt(0, photographieElement.length)],
  poterieElement[getRandomInt(0, poterieElement.length)],
];

export const date = new Date();

export const messageAlert =
  "Vous serez rediriger vers le profil ComeUp du concepteur de ce site où vous pourrez discuter avec lui de vos besoins ou projets. Ne vous en faite pas, c'est totalement gratuit 😁.";

export const comeUpLink = 'https://comeup.com/profil/valdesagb';
