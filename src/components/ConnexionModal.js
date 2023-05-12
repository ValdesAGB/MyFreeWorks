import React, { useContext, useEffect } from 'react'
import { colors } from '../untils'
import ConnexionForm from './ConnexionForm'
import {
  CheckPasswordContext,
  LoadingContext,
  MessageContext,
} from '../untils/context'

function ConnexionModal({ titleName, mapValeur }) {
  const { toggleIconeState } = useContext(CheckPasswordContext)
  const { setIsLoginComplete } = useContext(LoadingContext)
  const {
    message,
    errorMes,
    codeErr,
    toggleMessage,
    toggleErrorMes,
    toggleCodeErr,
  } = useContext(MessageContext)

  const handleHideModal = () => {
    toggleIconeState(false)
    toggleIconeState(false)
    toggleMessage(null)
    toggleErrorMes(null)
    setIsLoginComplete(false)
  }

  useEffect(() => {
    const modalEl = document.querySelector('#connexionModal')

    modalEl.addEventListener('hidden.bs.modal', handleHideModal)

    return () => {
      modalEl.removeEventListener('hidden.bs.modal', handleHideModal)
    }
  }, [])
  return (
    <div className="col-lg-7 col-6">
      <button
        style={{
          backgroundColor: colors.headerBackground,
          border: colors.headerBackground,
        }}
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#connexionModal"
      >
        {titleName}
      </button>
      <div
        className="modal fade text-black"
        id="connexionModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                {titleName}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <ConnexionForm mapElement={mapValeur} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConnexionModal
