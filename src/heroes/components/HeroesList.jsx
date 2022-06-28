import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../helpers'
import { HeroCard } from './HeroCard';


export const HeroesList = ({ publisher }) => {
    const heroes = useMemo( ()=> getHeroesByPublisher({ publisher: publisher }));
    

    return (
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3  g-3' >
                {heroes.map((hero) => {
                    return (
                        <HeroCard 
                            key={ hero.id }
                            { ...hero }
                        />
                    )
                })}
        </div>
    )
}
