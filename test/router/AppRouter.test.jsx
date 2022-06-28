import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../src/auth/context";
import { AppRouter } from "../../src/router/AppRouter";

describe('pruebas en <AppRouter />',()=>{
    test('debe de mostrar el login si no está autenticado', () => {
        const contextValue = { logged: false };
        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={ contextValue }>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );
        expect( screen.getAllByText('Login').length).toBeGreaterThanOrEqual(1);
    })

    test('debe de mostrar el componente de MArvel si esta autenticado',()=>{
        const contextValue = {
            logged: true,
            user: {
                name: 'Iago',
                id:'123'
            }
        }
        render(
            <MemoryRouter initialEntries={['/marvel']} >
                <AuthContext.Provider value={contextValue}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        )
        expect(screen.getByText('Marvel Comics')).toBeTruthy()
    })
})