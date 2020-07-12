import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import Header from './Header'

describe('Header Component', () => {

    test('should have a button with inner text of "Click"', () => {
        const { getByText } = render(<Header />)
        const btn = getByText(/click/i)
        expect(btn).toHaveTextContent('Click')
    })

    test('should have class "btn-test"', () => {
        const { getByText } = render(<Header />)
        const btn = getByText(/click/i)
        expect(btn).toHaveClass('btn-test')
    })

    test('shouldn\'t have title', () => {
        const component = render(<Header />)
        userEvent.click(component.getByText(/click/i))
        const title = component.getByTestId('title')
        expect(title).toBeInTheDocument()
        userEvent.click(component.getByText(/click/i))
        expect(title).not.toBeInTheDocument()
    })
})