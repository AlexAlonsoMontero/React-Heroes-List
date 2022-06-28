import { Routes, Route, Navigate } from 'react-router-dom';
import { NavBar } from '../../ui';
import { MarvelPages, DcPages, SearchPages, HeroPage } from '../index'

export const HeroesRoutes = () => {
    return (
        <>
            <NavBar />
            <div className='container'>
                <Routes>
                    <Route path="marvel" element={<MarvelPages />} />
                    <Route path="dc" element={<DcPages />} />

                    <Route path="/search" element={<SearchPages />} />
                    <Route path='/hero/:id' element={<HeroPage />} />

                    <Route path='/' element={ <Navigate to="/marvel"/> } />
                </Routes>
            </div>

        </>
    )
}
