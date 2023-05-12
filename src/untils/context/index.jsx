import { createContext, useEffect, useState } from 'react'
import { decoded } from '../../data'
import Cookies from 'js-cookie'

export const cookie = Cookies.get('userInfos')
const myfreeworksCart = localStorage.getItem('myfreeworksShop')

export const CheckPasswordContext = createContext()
export const CheckPasswordProvider = ({ children }) => {
  const [iconeState, setIconeState] = useState(null)
  const toggleIconeState = (state) => {
    setIconeState(state)
  }
  return (
    <CheckPasswordContext.Provider value={{ iconeState, toggleIconeState }}>
      {children}
    </CheckPasswordContext.Provider>
  )
}

export const AuthContext = createContext()
export const AuthProvider = ({ children }) => {
  const [logMail, setLogMail] = useState(null)
  const [logPaswword, setLogPaswword] = useState(null)
  const login = {
    logMail,
    logPaswword,
  }
  const [signLastName, setSignLastName] = useState(null)
  const [signFirstName, setSignFirstName] = useState(null)
  const [signBirthDate, setSignBirthDate] = useState(null)
  const [signSex, setSignSex] = useState(null)
  const [signMail, setSignMail] = useState(null)
  const [signPassword, setSignPassword] = useState(null)
  const [signConfirmPassword, setSignConfirmPassword] = useState(null)
  const signup = {
    signLastName,
    signFirstName,
    signBirthDate,
    signSex,
    signMail,
    signPassword,
    signConfirmPassword,
  }

  const [updateLastName, setupdateLastName] = useState(null)
  const [updateFirstName, setupdateFirstName] = useState(null)
  const [updateBirthDate, setupdateBirthDate] = useState(null)
  const [updateMail, setupdateMail] = useState(null)
  const [updateOldPassword, setupdateOldPassword] = useState(null)
  const [newPassword, setnewPassword] = useState(null)
  const udpateUser = {
    updateLastName,
    updateFirstName,
    updateBirthDate,
    updateMail,
    updateOldPassword,
    newPassword,
  }

  return (
    <AuthContext.Provider
      value={{
        setLogMail,
        setLogPaswword,
        login,
        setSignLastName,
        setSignFirstName,
        setSignBirthDate,
        setSignSex,
        setSignMail,
        setSignPassword,
        signPassword,
        setSignConfirmPassword,
        signConfirmPassword,
        signup,
        setupdateLastName,
        setupdateFirstName,
        setupdateBirthDate,
        setupdateMail,
        setupdateOldPassword,
        setnewPassword,
        udpateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const ProductContext = createContext()
export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState(null)
  const toggleProduct = (prod) => {
    setProduct(prod)
  }

  const [allProducts, setAllProducts] = useState(null)
  const toggleAllProducts = (all) => {
    setAllProducts(all)
  }

  return (
    <ProductContext.Provider
      value={{ product, toggleProduct, allProducts, toggleAllProducts }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export const NewProductContext = createContext()
export const NewProductProvider = ({ children }) => {
  const [name, setName] = useState(null)
  const [description, setDescription] = useState(null)
  const [price, setPrice] = useState(null)
  const [cover, setCover] = useState(null)
  const [isSold, setIsSold] = useState(false)
  const [soldPrice, setSoldPrice] = useState(0)
  const [categorie, setCategorie] = useState('autres')
  const [userId, setUserId] = useState(cookie && decoded('userInfos'))

  useEffect(() => {
    const decodedUserInfos = decoded('userInfos')
    if (decodedUserInfos) {
      setUserId(decodedUserInfos.userId)
    }
  }, [])

  const newProduct = {
    name,
    description,
    price,
    cover,
    isSold,
    soldPrice,
    categorie,
    userId,
  }

  return (
    <NewProductContext.Provider
      value={{
        setName,
        setDescription,
        setPrice,
        setCover,
        setIsSold,
        setSoldPrice,
        setCategorie,
        name,
        description,
        price,
        cover,
        isSold,
        soldPrice,
        categorie,
        newProduct,
      }}
    >
      {children}
    </NewProductContext.Provider>
  )
}

export const LoadingContext = createContext()
export const LoadingProvider = ({ children }) => {
  const [isDataLoading, setIsDataLoading] = useState(false)
  const toggleIsDataLoading = (load) => {
    setIsDataLoading(load)
  }

  const [isSignComplete, setIsSignComplete] = useState(false)
  const [isLoginComplete, setIsLoginComplete] = useState(false)
  return (
    <LoadingContext.Provider
      value={{
        isDataLoading,
        toggleIsDataLoading,
        isSignComplete,
        setIsSignComplete,
        isLoginComplete,
        setIsLoginComplete,
      }}
    >
      {children}
    </LoadingContext.Provider>
  )
}

export const MessageContext = createContext()
export const MessageProvider = ({ children }) => {
  const [message, setMessage] = useState(null)
  const [errorMes, setErrorMes] = useState(null)
  const [codeErr, setCodeErr] = useState(null)

  const toggleMessage = (mes) => {
    setMessage(mes)
  }

  const toggleErrorMes = (err) => {
    setErrorMes(err)
  }

  const toggleCodeErr = (err) => {
    setCodeErr(err)
  }

  return (
    <MessageContext.Provider
      value={{
        message,
        errorMes,
        codeErr,
        toggleMessage,
        toggleErrorMes,
        toggleCodeErr,
      }}
    >
      {children}
    </MessageContext.Provider>
  )
}

export const UserContext = createContext()
export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState(cookie ? decoded('userInfos') : null)
  useEffect(() => {
    const decodedUserInfos = decoded('userInfos')
    if (decodedUserInfos) {
      setUserId(decodedUserInfos)
    }
  }, [])
  const [userInfos, setUserInfos] = useState(null)
  const toggleUserInfos = (infos) => {
    setUserInfos(infos)
  }
  return (
    <UserContext.Provider value={{ userId, userInfos, toggleUserInfos }}>
      {children}
    </UserContext.Provider>
  )
}

export const CartContext = createContext()
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    myfreeworksCart ? JSON.parse(myfreeworksCart) : []
  )
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const SupprimedContext = createContext()
export const SupprimedProvider = ({ children }) => {
  const [sup, setSup] = useState(false)
  const toggleSup = (supp) => {
    setSup(supp)
  }
  return (
    <SupprimedContext.Provider value={{ sup, toggleSup }}>
      {children}
    </SupprimedContext.Provider>
  )
}

export const ConfirmAccountContext = createContext()
export const ConfirmAccountProvider = ({ children }) => {
  const [code, setCode] = useState(null)
  const [checkInfos, setChekInfos] = useState(null)
  const confirm = {
    code,
    checkInfos,
  }

  return (
    <ConfirmAccountContext.Provider value={{ confirm, setCode, setChekInfos }}>
      {children}
    </ConfirmAccountContext.Provider>
  )
}
