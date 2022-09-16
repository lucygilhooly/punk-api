import {render, screen} from "@testing-library/react"
import Card from './Card'

it("Should render the Card", () => {

    render (<Card name='Rob' tagline='coach' percentage='100' image='google.com' />)

    const name = screen.queryByText('Rob')

    expect(name).toBeInTheDocument()
})

it("Should render the Card", () => {
    
    render (<Card name='Rob' tagline='coach' percentage='100' image='google.com' />)
    
    const image = screen.getByRole('img')
    
    expect(image).toBeInTheDocument()
})