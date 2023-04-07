import React, { useContext } from 'react'
import { MessageContext } from '../untils/context'

function Feedback({ button }) {
  const {
    message,
    errorMes,
    codeErr,
    toggleMessage,
    toggleErrorMes,
    toggleCodeErr,
  } = useContext(MessageContext)

  return (
    <React.Fragment>
      <div className="row justify-content-center mt-5">
        <span className="col-12 col-md-6 row  rounded align-items-center">
          <hr />
          <div className=" text-center">
            {message ? <h4 className="">{message.message}</h4> : null}
            {errorMes ? <h4 className="">{errorMes}</h4> : null}
            {button ? button : null}
          </div>
        </span>
      </div>
    </React.Fragment>
  )
}

export default Feedback
