import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DetailView = () => {
    const [bike, setBike] = useState({});
    const [loaded, setload] = useState(false);
    const [error, setError] = useState(null);
    const { id } = useParams();

    const fetchDetails = useCallback(
        () => {
               fetch("https://bikeindex.org/api/v3/bikes/"+id)
                .then(res => res.json())
                .then((result) => {
                    setload(true);
                    setBike(result.bike);
                    // console.info(result.bike, 'result')
                    },
                    (error) => {
                        console.info("error?")
                        setload(true);
                        setError(error);
                    }
                );
        },
        [id],
      );

    useEffect(() => {
        fetchDetails();
    }, [fetchDetails]);

    if(error) {
        return (
            <>
              {error}  
            </>
        )
    } else if(!loaded) {
        return  (
            <>
                Estamos cargando la data...
            </>
        )
    }

    
    return (
        <>
            It's Detail bike
            <section className=''>

            </section>
            {/* {bike.large_img} */}
            {Object.keys(bike).length === 0 ? "Ocultar" : "Mostrar"}
        </>
    )
};

export default DetailView;