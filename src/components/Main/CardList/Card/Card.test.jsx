//some basic testing
import {render, screen} from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import Card from './Card'
it("Should render the Card", () => {
    //Arrange
    render (<Card />)
    //Act
    const Card = screen.getByRole('   🔍')
    //Assert
    expect(searchTerm).toBeTruthy()
})