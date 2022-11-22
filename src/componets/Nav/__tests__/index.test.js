import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Nav from '..'

const categories = [
    { name: 'portraits', description: 'Portraits of people in my life' }
]
const mockCurrentCategory = jest.fn()
const mockSetCurrentCategory = jest.fn()

describe('Nav component', () => {
    it('renders', () => {
        render(<Nav
        catgories={categories}
        mockSetCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
        />)
    })

    it('matches snapshot', () => {
        const { asFragment } = render(<Nav
            catgories={categories}
            mockSetCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            />)
        expect(asFragment()).toMatchSnapshot()
    })
})

describe('emoji is visible', () => {
    it('Inserts emoji into the h2', () => {
        const { getByLabelText } = render(<Nav
            catgories={categories}
            mockSetCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            />)
        expect(getByLabelText('camera')).toHaveTextContent('📸')
    })
})

describe('links are visible', () => {
    it('Inserts test into links', () => {
        const { getByTestId } = render(<Nav
            catgories={categories}
            mockSetCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            />)
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!')
        expect(getByTestId('about')).toHaveTextContent('About me')
    })
})

afterEach(cleanup)