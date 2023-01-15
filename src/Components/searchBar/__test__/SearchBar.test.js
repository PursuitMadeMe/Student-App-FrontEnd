// Component Testing 

import { render, screen } from '@testing-library/react';
import SearchBar from '../SearchBar';


// searchBar component must have a placeholder
describe('Search bar component',() => {
    it('has a placeholder set to "Search By name', () => {
        render(<SearchBar/>);
        const placeholderText = screen.queryByPlaceholderText(/Search By Name/)

        expect(placeholderText).toBeInTheDocument()
    })

    // searchBar component must have a search term (search box)
    it('Shows the search term when it is provided',() => {
            render(<SearchBar searchTerm='Test Search term'/>);
            const searchBarText = screen.getByDisplayValue(/Test Search term/i)
    
            expect(searchBarText).toBeInTheDocument()
        })
})