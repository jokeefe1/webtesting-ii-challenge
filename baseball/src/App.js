import React from 'react'
import './App.css'
import Dashboard from './components/Dashboard/Dashboard'
import { CountContext } from './contexts/CountContext'

function App() {
    const [balls, setBalls] = React.useState(0)
    const [strikes, setStrikes] = React.useState(0)
    const [hits, setHits] = React.useState(0)

    const incBall = () => balls < 4 && setBalls(prevState => prevState + 1)
    const incStrike = () => strikes < 3 && setStrikes(prevState => prevState + 1)
    
    const incHits = () => {
        setHits(prevState => prevState + 1)
        setBalls(0)
        setStrikes(0)
    }

    const resetCount = () => {
        setBalls(0)
        setStrikes(0)
    }

    const fullCount = balls === 4 || strikes === 3

    return (
        <CountContext.Provider
            value={{
                balls,
                setBalls,
                strikes,
                setStrikes,
                hits,
                incHits,
                incBall,
                incStrike,
                resetCount,
                fullCount
            }}
        >
            <Dashboard />
        </CountContext.Provider>
    )
}

export default App
