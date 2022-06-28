import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../src/auth/context";
import { NavBar } from "../../../src/ui";

const mockedUSeNavigate = jest.fn();

jest.mock('react-router-dom', ()=>({
    ...jest.requireActual('react-router-dom'),
    useNavigate: ()=>mockedUSeNavigate
}));

describe('Pruebas en <NavBar />', () => {

    const contextValue = {
        logged: true,
        user: {
            name: 'Alex',
            id: '124'
        },
        logout: jest.fn()
    }

    beforeEach(() => jest.clearAllMocks)


    test('debe aparecer el nombre de usuario, cuando esté logado', () => {
        const contextValue = {
            logged: true,
            user: {
                name: 'Alex',
                id: '124'
            }
        }

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={contextValue}>
                    <NavBar />
                </AuthContext.Provider>
            </MemoryRouter>
        )

        expect(screen.getAllByText('Usuario:Alex')).toBeTruthy()
    })
    test('debe llamarseal navigate cuando pulsemos logaut, debe hacer logout', () => {


        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={contextValue}>
                    <NavBar />
                </AuthContext.Provider>
            </MemoryRouter>
        )
        const logoutBtn = screen.getByText('Logout')
        fireEvent.click(logoutBtn);
        expect( contextValue.logout ).toHaveBeenCalled();
        expect( mockedUSeNavigate ).lastCalledWith('/login', {replace: true})

    })
})