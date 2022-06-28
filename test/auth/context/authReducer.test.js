import { authReducer } from "../../../src/auth/context/authReducer"
import { types } from "../../../src/auth/types/types";


/*debe retornar un estado por defecto
debde de login autenticar  y establecer user
de de logout  borrar el name de usuario y logged en false
*/
describe('pruebas en authReducer', () => {
    test('Debe retornar estado por defecto',()=>{
        const state = authReducer({logged:false}, {});
        expect(state).toEqual({logged:false});
        
    })

    test('debe de autenticar y establecer user desde login',()=>{
        const action = {
            type: types.login,
            payload: {
                name: 'Juan',
                id: '123'
            }
        }
        const state = authReducer({ logged: false }, action);
        
        expect ( state ).toEqual({
            logged:true,
            user: action.payload
        })
    })

    test ('de de logout  borrar el name de usuario y logged en false',()=>{
        const state = {
            logged: true,
            user: {name: 'Juan', id:'123'}
        }
        const action = {
            type:types.logout
        }
        const newState = authReducer(state,action);
        expect(newState).not.toEqual(state);
        expect(newState.logged).toBe(false);
    })
}) 