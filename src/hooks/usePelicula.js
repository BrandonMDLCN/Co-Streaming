import mockPeliculas from "../data/peliculas.json"
import { useEffect, useState } from "react";

const DELAY_TIME = 2000;

const usePeliculas = () => {
    const [peliculas, setPeliculas] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() =>{
        const fetchPeliculas = () => {
            setIsLoading(true);
            setError(null);

            const timer = setTimeout(() => {
                try {
                    setPeliculas(mockPeliculas);
                    setIsLoading(false);
                } catch(err){
                    setError('Error al cargar las peliculas.');
                    setIsLoading(false);
                }
            }, DELAY_TIME);
            return () => clearTimeout(timer);
        };
        fetchPeliculas();
    }, []);

    return {peliculas, isLoading, error};
};

export default usePeliculas;