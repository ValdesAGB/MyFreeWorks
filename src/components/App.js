import React from 'react'
import NotFound from '../pages/404'
import Graphisme from '../pages/Graphisme'
import Home from '../pages/Home'
import Peinture from '../pages/Peinture'
import Photographie from '../pages/Photographie'
import Poterie from '../pages/Poterie'
import Footer from './Footer'
import Header from './Header'
import Menu from './Menu'
import { Route, Routes } from 'react-router-dom'
import {
  AuthProvider,
  CartProvider,
  CheckPasswordProvider,
  ConfirmAccountProvider,
  LoadingProvider,
  MessageProvider,
  NewProductProvider,
  ProductProvider,
  SupprimedProvider,
  UserProvider,
} from '../untils/context'
import ViewMore from './ViewMore'
import AddProduct from '../pages/AddProduct'
import { createGlobalStyle } from 'styled-components'
import { police } from '../untils'
import Others from '../pages/Others'
import Dashboard from '../pages/Dashboard'
import Owner from '../pages/Owner Product'
import Modify from '../pages/Modify'
import UpdateUserInfos from '../pages/Update UserInfos'
import ConfirmAccount from '../pages/Confirm Account'
import StateAccount from './StateAccount'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${police.ff1};
  }
`

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <UserProvider>
        <LoadingProvider>
          <MessageProvider>
            <CheckPasswordProvider>
              <AuthProvider>
                <NewProductProvider>
                  <CartProvider>
                    <ProductProvider>
                      <SupprimedProvider>
                        <ConfirmAccountProvider>
                          <>
                            <Header />
                            <Menu />
                            <StateAccount />
                            <Routes>
                              <Route path="/" element={<Home />} />
                              <Route
                                path="/newproduct"
                                element={<AddProduct />}
                              />
                              <Route
                                path="/graphisme"
                                element={<Graphisme />}
                              />
                              <Route path="/peinture" element={<Peinture />} />
                              <Route path="/poterie" element={<Poterie />} />
                              <Route path="/autres" element={<Others />} />
                              <Route
                                path="/photographie"
                                element={<Photographie />}
                              />
                              <Route
                                path="/view/product/:id"
                                element={<Owner />}
                              />
                              <Route
                                path="/viewmore/:id"
                                element={<ViewMore />}
                              />
                              <Route
                                path="/update/product/:id"
                                element={<Modify />}
                              />
                              <Route
                                path="/user/update/:id"
                                element={<UpdateUserInfos />}
                              />
                              <Route
                                path="/dashboard/:id"
                                element={<Dashboard />}
                              />
                              <Route path="/*" element={<NotFound />} />
                              <Route
                                path="/confirmaccount/:id"
                                element={<ConfirmAccount />}
                              />
                            </Routes>
                            <Footer />
                          </>
                        </ConfirmAccountProvider>
                      </SupprimedProvider>
                    </ProductProvider>
                  </CartProvider>
                </NewProductProvider>
              </AuthProvider>
            </CheckPasswordProvider>
          </MessageProvider>
        </LoadingProvider>
      </UserProvider>
    </React.Fragment>
  )
}

export default App
