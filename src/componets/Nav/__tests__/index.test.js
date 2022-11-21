import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Nav from '..'

describe('Nav component', () => {
    it('renders', () => {
        render(<Nav/>)
    })

    it('matches snapshot', () => {
        const { asFragment } = render(<Nav/>)
        expect(asFragment()).toMatchSnapshot()
    })
})

describe('emoji is visible', () => {
    it('Inserts emoji into the h2', () => {
        const { getByLabelText } = render(<Nav/>)
        expect(getByLabelText('camera')).toHaveTextContent('📸')
    })
})

describe('links are visible', () => {
    it('Inserts test into links', () => {
        const { getByTestId } = render(<Nav/>)
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!')
        expect(getByTestId('about')).toHaveTextContent('About me')
    })
})

afterEach(cleanup)