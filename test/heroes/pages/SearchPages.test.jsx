import { fireEvent, getAllByRole, getByRole, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { SearchPages } from "../../../src/heroes";
const mockNavigate = jest.fn();

jest.mock('react-router-dom', ()=>({
    ...jest.requireActual('react-router-dom'),
    useNavigate: ()=>mockNavigate
}));
describe('Pruebas en <SearchPage />',()=>{
    test('debe de mostrarse corretamtne con valores por defecto', ()=>{
        const { container } = render(
            <MemoryRouter>
                <SearchPages />
            </MemoryRouter>
        )
        
        expect( container ).toMatchSnapshot();
    })
    test('debe de mostrarsa Batman y el input con el valor del query string', ()=>{
        render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPages />
            </MemoryRouter>
        )
        
        const input = screen.getByRole('textbox');
        expect ( input.value.toString() ).toBe('batman');
        const img =  screen.getByRole('img');
        expect( img.src ).toContain('batman');
        const div = screen.getByLabelText('container');

    })

    test('debe de mostrar un error si no se encuentra el heroe',()=>{
        render(
            <MemoryRouter initialEntries={['/search?q=asdfafdaf']}>
                <SearchPages />
            </MemoryRouter>
        )
        expect( screen.getByText('There is not a hero')).toBeTruthy();


    })

    test('debe de llamar a la pantalla nueva el navigate', ()=>{
        const inputValue = 'superman'
        render (
            <MemoryRouter initialEntries={['/search']}>
                <SearchPages />
            </MemoryRouter>
        )
        const input = screen.getByRole('textbox');
        fireEvent.change(input,{target:{name: 'searchText', value: inputValue}});
        const form = screen.getByLabelText("form");
        fireEvent.submit(form)
        expect(mockNavigate).toHaveBeenCalledWith(`?q=${inputValue}`)

    })
})