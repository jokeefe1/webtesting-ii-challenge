import { render } from '@testing-library/react'
import '@testing-library/react/cleanup-after-each'
import 'jest-dom/extend-expect'
import React from 'react'
import App from './App'
import Display from './components/Display/Display';
import Dashboard from './components/Dashboard/Dashboard'


it('renders without crashing', () => {
    render(<App />)
    render(<Display />)
    render(<Dashboard />)
})

