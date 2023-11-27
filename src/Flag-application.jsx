import { useEffect, useState } from "react";
import Flags from "./Flags";

export default function FlagApplication() {
    const [continent, setContinent] = useState("");
    const [countries, setCountries] = useState([]);
    const [flags, setFlags] = useState([]);
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
                        <label><input type="radio" value="africa" checked={continent === "africa"} onChange={()=>setContinent("africa")} id="anyContinent" />Afrika</label>
                        <label><input type="radio" value="asia" checked={continent === "asia"} onChange={() => setContinent("asia")} id="anyContinent" />Asia</label>
                        <label><input type="radio" value="europe" checked={continent === "europe"} onChange={() => setContinent("europe")} id="anyContinent" />Europe</label>
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
            <button onClick={() => setShowFlag(!showFlag)}>Show me your flag</button>
            {showFlag && <Flags flags={flags} setFlags={setFlags}/>}

        </>
    );
};