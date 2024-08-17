import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function CharacterDetail() {
    const {id} = useParams();
    const [hero, setHero] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchHero = async () => {
            try{
                const response = await axios.get(`https://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=cd3758db63d0e257c2737c7ff29c38cb&hash=6aeb0dda7fe5eb5c9ffb820d485ac396`)

                console.log(response.data);
                setHero(response.data.data.results[0]);
                setLoading(false);
            } catch (error) {
                console.log("Error fetching heroes", error);
            }

        }

        fetchHero();
    }, [id])

    if(loading){
        return <h3>Loading Hero....</h3>
    }

    return (
        <div>
            <br/>
            <Link to={'/characters'}>Go Back to Characters</Link>

            <div>
                <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} width="250" alt={hero.name} />
                
                <h3>{hero.name}</h3>

                {hero.description &&
                    <div>
                        <h4>Description</h4>
                        <p>{hero.description}</p>
                    </div>
                }

                <h4>Comics:</h4>
                {hero.comics.items.map(comic => (
                    <div key={comic.resourceURI}>
                        {comic.name}
                    </div>
                ))}

            </div>
        </div>
    )
}

export default CharacterDetail;