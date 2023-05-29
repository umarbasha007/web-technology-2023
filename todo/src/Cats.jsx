import { useEffect, useState } from "react";


export default function CatsList (){

    const [cats, setCats] = useState([]);

    useEffect(()=> {
        getCats();
    }, [])

    const getCats = async() => {
        const res = await fetch("https://cat-fact.herokuapp.com/facts/random?amount=10")
        const catRes = res.json();
        setCats(catRes)
    }

    return <>
        Cats list
        {
            cats.map(({text}) => text)
        }
    </>
}