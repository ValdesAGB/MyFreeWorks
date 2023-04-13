import { Link } from 'react-router-dom'
import CryptoJS from 'crypto-js'
import Cookies from 'js-cookie'

export const siteName = 'MyFreeWorks'

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
]

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
]

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
    divClass: 'd-none',
  },
  {
    id: 'categorieProd',
    divClass: 'mb-3',
    title: 'Sélectionner la catégorie de votre produit :',
    selectClass: 'form-select my-2',
    option: '---',
    value: 'autres',
    option1: 'graphisme',
    option2: 'peinture',
    option3: 'poterie',
    option4: 'photographie',
    option5: 'autres',
  },
]

export const menuElement = [
  {
    id: 'acceuil',
    to: '/MyFreeWorks',
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

  {
    id: 'others',
    to: '/autres',
    name: 'Autres',
  },
]

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
]

export const date = new Date()

export const messageAlert =
  "Vous serez rediriger vers le profil ComeUp du concepteur de ce site où vous pourrez discuter avec lui de vos besoins ou projets. Ne vous en faite pas, c'est totalement gratuit 😁."

export const comeUpLink = 'https://comeup.com/profil/valdesagb'

export const apiProductLink = 'http://localhost:3001/api/product'

export const apiUserLink = 'http://localhost:3001/api/auth'

export const passwordAdvice = [
  {
    id: '0',
    title: '6 caractères',
  },
  {
    id: '1',
    title: 'Une lettre majuscule',
  },
  {
    id: '2',
    title: 'Un chiffre',
  },
  {
    id: '3',
    title: 'Un caractère spécial',
  },
]

export const userIcone = {
  disconnect_connect: (
    <i
      className={`navbar-toggler text-white fs-3 align-items-center text-center border border-0 bi bi-person-fill`}
      data-bs-toggle="collapse"
      data-bs-target="#navbar"
      aria-controls="navbar"
      aria-expanded="false"
      aria-label="Toggle navigation"
    ></i>
  ),
}

export const emptyCategorie = (
  <div className="text-center my-5">
    Aucun produit n'est disponible actuellement. Soyez le premier à{' '}
    <Link to="/newproduct">en créer</Link> dans cette catégorie.
  </div>
)

export const homeEmpty = (
  <div className="text-center my-5">
    Aucun produit n'est disponible pour le moment. Soyez le premier à{' '}
    <Link to="/newproduct">en créer</Link> .
  </div>
)

export const emptyDashboard = (
  <td className="text-center my-5">
    Vous n'avez aucun produit actuellement.{' '}
    <Link to="/newproduct">Ajoutez-en</Link> un dès maintenant
  </td>
)

export const dashboard_md_header = [
  {
    id: 'id',
    name: '#',
  },

  {
    id: 'name',
    name: 'Nom',
  },

  {
    id: 'description',
    name: 'Descrip..',
    title: 'Description',
  },

  {
    id: 'cover',
    name: 'Image',
  },

  {
    id: 'price',
    name: 'Prix(€)',
  },

  {
    id: 'inSold',
    name: 'Solde ?',
  },

  {
    id: 'soldPrice',
    name: 'PdS(€)',
    title: 'Prix de solde',
  },

  {
    id: 'categorie',
    name: 'Catégorie',
  },

  {
    id: 'created_At',
    name: 'Ajouté le :',
  },

  {
    id: 'updated_At',
    name: 'MàJ',
    title: 'Mise à jour le :',
  },

  {
    id: 'action',
    name: 'Actions',
  },
]

export const dashboard_header = [
  {
    id: 'name',
    title: 'Nom',
  },

  {
    id: 'price',
    title: 'Prix(€)',
  },

  {
    id: 'inSold',
    title: 'Solde ?',
  },

  {
    id: 'action',
    title: 'Actions',
  },
]

export const check = (product, keyIndex) => {
  if (product) {
    const firstKey = Object.keys(product)[keyIndex]
    if (firstKey) {
      return product[firstKey]
    }
  }
  return 'Error'
}

export const encoded = (data) => {
  return CryptoJS.AES.encrypt(JSON.stringify(data), 'clef').toString()
}

export const decoded = (cookiesName) => {
  // cookiesNames doit être un le nom de la cookies à décoder et de type string
  const cookies = Cookies.get(cookiesName)
  if (cookies) {
    // Vérifier si les données des cookies existent
    const decryptedData = CryptoJS.AES.decrypt(cookies, 'clef').toString(
      CryptoJS.enc.Utf8
    ) // Décoder les données avec la clé 'clef'

    const decodedData = JSON.parse(decryptedData) // Parser les données JSON
    return decodedData // Afficher les données décodées dans la console
  }
}

export const updateUserElements = [
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

  /* {
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
  },*/

  {
    id: 'mail',
    title: 'Adresse mail :',
    inputType: 'email',
    labelClass: 'form-label',
    inputClass: 'form-control',
    divClass: 'mb-3',
  },

  {
    id: 'oldPassword',
    title: 'Ancien mot  de passe :',
    inputType: 'password',
    labelClass: 'form-label',
    inputClass: 'form-control',
    placeholder: 'Entrez votre ancien mot de passe',
    divClass: 'mb-3',
  },

  {
    id: 'newPassword',
    title: 'Nouveau mot de passe :',
    inputType: 'password',
    labelClass: 'form-label',
    inputClass: 'form-control',
    placeholder: 'Entrez votre le nouveau mot de passe',
    divClass: 'mb-3',
  },
]
