import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ContactForm from '..'

afterEach(cleanup)

describe('Contact form is rendering', () => {
    it('renders', () => {
        render(<ContactForm/>)
    })

    it('matches snapshot', () => {
        const { asFragment } = render(<ContactForm/>)
        expect(asFragment()).toMatchSnapshot()
    })

    it('renders', () => {
        const { getByTestId } = render(<ContactForm/>)
        expect(getByTestId('h1')).toHaveTextContent('Contact me')
    }) 
})