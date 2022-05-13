import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import getAllBikes from "../api/api";

const HomeView = () => {
    // const [error, setError] = useState(null);
    // const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        console.info("Realizamos una llamada...");
        getAllBikes.then((result) => {
            // setIsLoaded(true);
            setItems(result.bikes);
            // console.info(result.bikes, 'result')
            },
            (error) => {
                // setIsLoaded(true);
                // setError(error);
                // console.warn(error);
            }
        );
    }, []);
    
    return (
        <>
            This is the Home
            {/* <button onClick={() => callData()}>
                hacer llamada
            </button> */}
            <ul>
                {items.map(item => {
                    return (
                    <li key={item.id}>
                        <Link to={"/detail/"+item.id}>
                            {item.frame_model} {item.manufacturer_name}
                        </Link>
                    </li>
                    )
                })}
            </ul>
            
        </>
    );
}

export default HomeView;