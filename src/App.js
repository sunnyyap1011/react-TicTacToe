import React from 'react';
import { Content, Title, Main, SquareContainer, Square, ButtonContainer, RestartButton, PlayerMode, CompMode, Annouce } from './styled';
import './App.css';

const winCombo2 = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [0, 4, 8]
]


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      board: [
        '', '', '',
        '', '', '',
        '', '', '',
      ],
      turn: 0,
      toggle: true,
      compMode: false
    }
  }


  handleClick = event => {
    const { id } = event.target
    const { board, turn, compMode } = this.state
    if (board[id]) {
      return
    } else {
      const newBoard = [...board]
      newBoard[id] = this.mark()
      this.setState({
        board: newBoard,
        turn: turn + 1
      }, () => {
        if (compMode && turn < 8 && !this.checkWin2()) this.compMove()
      })
    }
  }

  mark = () => {
    const { turn } = this.state
    if (turn % 2) {
      return 'O'
    } else {
      return 'X'
    }
  }

  compMove = () => {
    const { board, turn } = this.state
    let randomNum = Math.floor(Math.random() * board.length)
    while (board[randomNum]) {
      randomNum = Math.floor(Math.random() * board.length)
    }
    this.setState({
      board: board.map((sq, i) => i === randomNum ? this.mark() : sq),
      turn: turn + 1
    })
  }

  checkWin1 = () => {
    const { board, compMode } = this.state
    const winCombo = [
      (board[0] + board[1] + board[2]),
      (board[3] + board[4] + board[5]),
      (board[6] + board[7] + board[8]),
      (board[0] + board[3] + board[6]),
      (board[1] + board[4] + board[7]),
      (board[2] + board[5] + board[8]),
      (board[2] + board[4] + board[6]),
      (board[0] + board[4] + board[8])
    ]
    for (let i = 0; i < winCombo.length; i++) {
      if (winCombo[i] === 'XXX') {
        return 'Player X win !!!'
      } else if (winCombo[i] === 'OOO') {
        if (compMode) {
          return 'Computer Win !!!'
        } 
        return 'Player O win !!!'
      }
    }
    return false
  }

  checkWin2 = () => {
    const { board, compMode } = this.state
    for (let i = 0; i < winCombo2.length; i++) {
      const joined = winCombo2[i].map(idx => board[idx]).join('')
      if (joined === 'XXX') {
        return 'Player X win !!!'
      } else if (joined === 'OOO') {
        if (compMode) {
          return 'Computer Win !!!'
        } 
        return 'Player O win !!!'
      }
    }
    return false
  }


  checkTie = () => {
    const { turn } = this.state
    if (turn === 9) {
      return "IT's a TIE !!!"
    }
  }

  restart = () => {
    this.setState({
      turn: 0,
      board: [
        '', '', '',
        '', '', '',
        '', '', '',
      ],
      toggle: true,
      compMode: false
    })
  }

  players = () => {
    this.setState({
      toggle: false
    })
  }

  computer = () => {
    this.setState({
      toggle: false,
      compMode: true
    })
  }

  render() {
    const winner = this.checkWin2()
    this.checkTie()
    return (
      <Content>
        <Title>TIC-TAC-TOE</Title>
        <PlayerMode onClick={this.players} toggled={this.state.toggle}><span>Players Mode</span></PlayerMode>
        <CompMode onClick={this.computer} toggled={this.state.toggle}><span>Computer Mode</span></CompMode>
        <Main toggled={this.state.toggle}>
          <SquareContainer>
            {
              this.state.board.map((value, index) => {
                return (
                  <Square winner={winner} key={index} id={index} onClick={this.handleClick}>{value}</Square>
                )
              })
            }
          </SquareContainer>
          <Annouce id="id" toggled={this.checkWin2()}>{this.checkWin2() ? this.checkWin2() : this.checkTie()}</Annouce>
          <ButtonContainer>
            <RestartButton name="playAgain" onClick={this.restart}><span>RESTART</span></RestartButton>
          </ButtonContainer>
        </Main>
      </Content >
    )
  }
}

export default App;
