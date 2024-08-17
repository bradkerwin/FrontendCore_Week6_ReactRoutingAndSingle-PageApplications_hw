import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const BrowseCharacter = () => {
    const [heroes, setHeroes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchHeroes = async () => {
            try{
                const response = await axios.get("https://gateway.marvel.com/v1/public/characters?limit=5&ts=1&apikey=cd3758db63d0e257c2737c7ff29c38cb&hash=6aeb0dda7fe5eb5c9ffb820d485ac396");
                console.log(response.data.data.results);
                setHeroes(response.data.data.results);
                setLoading(false);
            } catch (error) {
                console.log("Error fetching heroes", error);
            }

        }
        fetchHeroes();

    }, []) 

    if(loading){
        return <h3>Loading Heroes...</h3>
    }

    return (
        <div>
            <h3>Heroes</h3>
            {heroes.map(hero => (
                <div key={hero.id} className="character">
                    <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} width="250" alt={hero.name} />
                    <br/>
                        <Link to={`/characters/${hero.id}`}>{hero.name}</Link>
                </div>
            ))};
        </div>
    )
}


export default BrowseCharacter;