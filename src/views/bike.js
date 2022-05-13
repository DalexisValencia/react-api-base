import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

const DetailView = () => {
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        console.log('i fire once');
        setLoaded(true);
        // fetchDetails();
    }, [loaded]);

    return (
        <>
            dddd
        </>
    );
};

export default DetailView;