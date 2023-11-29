import { useEffect, useState } from "react";
import Flags from "./Flags";

export default function FlagApplication() {
    const [continent, setContinent] = useState("");
    const [countries, setCountries] = useState([]);
    const [showFlag, setShowFlag] = useState(false)

    useEffect(() => {
      const fetchCountries = async() => {
        try {
            let response = await fetch(` https://restcountries.com/v3.1/region/${continent}`);
            let flagData = await response.json();
            setCountries(flagData)
        } catch (error) {
            console.error("Error spying flags:", error)
        }
      };

      if (continent) {
        fetchCountries();
      }

    }, [continent])
    
    return (
        <>
            <div className="optionContainer" id="optionContainer" style={{display:"flex", gap:"10px", marginBottom:"10px"}}>
                <fieldset className="radioContainer">
                    <legend>Choose your continent</legend>
                        <label><input type="radio" value="africa" id="anyContinent" checked={continent === "africa"} onChange={()=>setContinent("africa")}  />Afrika</label>
                        <label><input type="radio" value="asia" id="anyContinent" checked={continent === "asia"} onChange={() => setContinent("asia")} />Asia</label>
                        <label><input type="radio" value="europe" id="anyContinent" checked={continent === "europe"} onChange={() => setContinent("europe")} />Europe</label>
                </fieldset>
                <fieldset>
                    <legend>Choose your country</legend>
                    <select>
                        <option value="">Choose your country</option>
                        {countries.map((country) => (
                            <option value={country.name.common}>{country.name.common}</option>
                        ))}
                    </select>
                </fieldset>
            </div>
            <button onClick={() => setShowFlag(!showFlag)}>Fetch ye flag, matey</button>
            {showFlag && <Flags country={countries}/>}

        </>
    );
};