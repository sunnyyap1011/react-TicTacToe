import styled, { keyframes } from 'styled-components'

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 1em;
`

export const Title = styled.h1`
  color: white;
  font-family: ZCOOL KuaiLe;
  font-size: 2.5em;
`

export const Main = styled.div`
  display: ${props => (props.toggled ? 'none' : 'flex')};
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const SquareContainer = styled.div`
  display: grid;
  grid-template-columns: 33% 33% 33%;
  grid-template-rows: 33% 33% 33%;
  height: 300px;
  width: 300px;
  padding: 1em;
  `

export const Square = styled.div`
  ${props => props.winner && 'pointer-events: none' };          /* this is the same as ${props => props.winner ? 'pointer-events: none' : ''} */
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: darkgray;
  font-size: 3em;

  :hover {
    background-color: powderblue;
  }
`
export const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const shake = keyframes`
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
`
export const wiggle = keyframes`
  0% {transform: rotate(5deg);}
  25% {transform: rotate(-5deg);}
  50% {transform: rotate(10deg);}
  75% {transform: rotate(-5deg);}
  100% {transform: rotate(0deg);}
`

export const Annouce = styled.div`
  text-align: center;
  color: ${props => (props.toggled ? 'lightgreen' : 'red')};
  text-shadow: 2px 2px 8px ${props => (props.toggled ? 'green' : 'red')};
  font-size: 1.5em;
  font-weight: bold;
  margin: 1em;
  margin-top: 0;
  animation: ${shake} 1000ms linear infinite;
  `

export const ButtonContainer = styled.div`
  display: flex;
`

export const RestartButton = styled.button`
background-color: initial;
color: white;
font-size: 1.1em;
font-weight: bold;
font-family: ZCOOL KuaiLe;
padding: 1em;
border-radius: 50px;

:hover {
  background-color: skyblue;
  color: black;
  animation: ${wiggle} 1000ms ease-in-out;
}
`

export const PlayerMode = styled(RestartButton)`
  display: ${props => (props.toggled ? 'block' : 'none')};
  position: absolute;
  width: 30%;
  height: 15%;
  top: 25%;
  left: 37%;
  border-radius: 50px;

  :hover {
    cursor: pointer;
    background-color: initial;
    color: white;
  }
  `

export const CompMode = styled(RestartButton)`
  display: ${props => (props.toggled ? 'block' : 'none')};
  position: absolute;
  width: 30%;
  height: 15%;
  top: 45%;
  left: 37%;
  border-radius: 50px;

  :hover {
    cursor: pointer;
    background-color: initial;
    color: white;
  }
  `
