import { useState, useEffect } from "react";

export default function Flags({country}) {
    const [flags, setFlags] = useState([]);
    console.log(country.name)
    return (
        <>
            <h1>flags ahoy!</h1>
        </>
    );
};