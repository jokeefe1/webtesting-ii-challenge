import React from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import { CountContext } from './contexts/CountContext';

function App() {
    const [ count, setCount ] = React.useState({
        balls: 0,
        strikes: 0,
        hits: 0
    })

    const { balls, strikes, hits } = count
    const maxCount = balls === 4 || strikes === 3
   
    const incBalls = () => {
        if (balls < 4) {
            setCount( prevState => ({
                ...prevState,
                balls: balls + 1
            }))
        }
    }
  
    const incStrikes = () => {
        if (strikes < 3) {
            setCount(prevState => ({
                ...prevState,
                strikes: strikes + 1
            }))
        }
    }

    const incFouls = () => {
        if (strikes < 2) {
            setCount(prevState => ({
                ...prevState,
                strikes: strikes + 1
            }))
        }
    }


    const incHits = () => {
            setCount(prevState => ({
                balls: 0,
                strikes: 0,
                fouls: 0,
                hits: hits + 1
        }))
    }

    const resetCount = () => {
        setCount(prevState => ({
            balls: 0,
            strikes: 0,
            fouls: 0,
            hits
        }))
    }

    return (
        <CountContext.Provider
            value={{
                balls,
                strikes,
                hits,
                incBalls,
                incStrikes,
                incFouls,
                incHits,
                resetCount,
                maxCount
            }}
        >
            <Dashboard />
        </CountContext.Provider>
    )
}

export default App
