import React from 'react'
import { useParams } from 'react-router-dom'
import BoardHeader from './BoardHeader'
import Tableau from './Tableau'

function Board() {
  const { id } = useParams()
  return (
    <React.Fragment>
      <BoardHeader />
      <Tableau />
    </React.Fragment>
  )
}

export default Board
