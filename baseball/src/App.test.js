import { render, fireEvent } from '@testing-library/react'
import '@testing-library/react/cleanup-after-each'
import 'jest-dom/extend-expect'
import React from 'react'
import Dashboard from './components/Dashboard/Dashboard'
import { CountContext } from './contexts/CountContext'
import App from './App'
import Display from './components/Display/Display';


it('renders without crashing', () => {
    render(<App />)
    render(
        <CountContext.Provider value={{}}>
            <Dashboard />
            <Display />
        </CountContext.Provider>
    )
})

it('displays title on screen', () => {
    const { getByText } = render(
        <CountContext.Provider value={{}}>
            <Dashboard />
        </CountContext.Provider>
    )
    getByText(/Dashboard/i)
})

it('displays buttons on screen', () => {
    const { getByText } = render(
        <CountContext.Provider value={{}}>
            <Display />
        </CountContext.Provider>
    )
    getByText(/add ball/i)
    getByText(/add strike/i)
    getByText(/add hit/i)
})

it('fires click event on buttons', () => {
    const { getByText } = render(
        <CountContext.Provider value={{}}>
            <Display />
        </CountContext.Provider>
    )
    const balls = getByText(/add ball/i)
    const strikes = getByText(/add strike/i)
    const hits = getByText(/add hit/i)

    fireEvent.click(balls)
    fireEvent.click(strikes)
    fireEvent.click(hits)
    }
)