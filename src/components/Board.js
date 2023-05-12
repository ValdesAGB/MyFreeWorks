import React from 'react'
import BoardHeader from './BoardHeader'
import Tableau from './Tableau'
import BoardFooter from './BoardFooter'

function Board() {
  return (
    <React.Fragment>
      <BoardHeader />
      <Tableau />
      <BoardFooter />
    </React.Fragment>
  )
}

export default Board
