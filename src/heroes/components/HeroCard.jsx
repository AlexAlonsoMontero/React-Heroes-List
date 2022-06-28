import { Link } from "react-router-dom"
export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {

   
    const CharacterByHero = (alter_ego, characters)=>{
        if( alter_ego === characters )return(<></>)
        return <p>{ characters }</p>
    }

    const heroImageUrl = `../../../assets/${id}.jpg`
    return (
        <div className='col animate__animated animate__fadeInLeft animate__slow'  >
            <div className='card mt-2' >
                <div className='row' style={{ minHeight:'300px'}}>
                    <div className='col-4' >
                        <img src={heroImageUrl} className="card-img" alt={superhero} style={{minHeight:"100%", objectFit:'cover'}}/>
                    </div>
                    <div className='col-8'>
                        <div className='card-body'>
                            <h5 className='card-title '> {superhero} </h5>
                            <p className='card-text'> { alter_ego }</p>
                            {
                                CharacterByHero(alter_ego, characters)
                            }
                            <p className='card-text'>
                                <small className='text-muted'> {first_appearance} </small>
                            </p>

                            <Link to={`/hero/${id}`}>
                                Más info
                            </Link>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
