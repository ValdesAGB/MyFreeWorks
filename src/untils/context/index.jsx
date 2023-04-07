import { createContext, useState } from 'react'

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
        setSignConfirmPassword,
        signup,
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

  const newProduct = {
    name,
    description,
    price,
    cover,
    isSold,
    soldPrice,
    categorie,
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
        isSold,
        soldPrice,
        cover,
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

  return (
    <LoadingContext.Provider value={{ isDataLoading, toggleIsDataLoading }}>
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
  const [user, setUser] = useState(null)
  const toggleUser = (use) => {
    setUser(use)
  }
  return (
    <UserContext.Provider value={{ user, toggleUser }}>
      {children}
    </UserContext.Provider>
  )
}
