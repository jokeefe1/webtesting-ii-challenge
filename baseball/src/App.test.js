import { render } from '@testing-library/react'
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

it('displays buttons on screen', () => {
    
})