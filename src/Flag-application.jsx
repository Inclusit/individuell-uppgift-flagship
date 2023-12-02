import { useEffect, useState } from "react";
import Flags from "./Flags";

export default function FlagApplication() {
    const [region, setRegion] = useState("");
    const [countries, setCountries] = useState([]);
    const [showFlags, setShowFlags] = useState(false)

    useEffect(() => {
      const fetchCountries = async() => {
        try {
            let response = await fetch(` https://restcountries.com/v3.1/region/${region}`);
            let flagData = await response.json();
            setCountries(flagData)
        } catch (error) {
            console.error("Error spying flags:", error)
        }
      };

      if (region) {
        fetchCountries();
      }

    }, [region])
    
    return (
        <>
            <div className="optionContainer" id="optionContainer" style={{display:"flex", gap:"10px", marginBottom:"10px"}}>
                <fieldset className="radioContainer">
                    <legend>Choose your region</legend>
                        <label><input type="radio" value="africa" id="anyContinent" checked={region === "africa"} onChange={()=>setRegion("africa")}  />Afrika</label>
                        <label><input type="radio" value="asia" id="anyContinent" checked={region === "asia"} onChange={() => setRegion("asia")} />Asia</label>
                        <label><input type="radio" value="europe" id="anyContinent" checked={region === "europe"} onChange={() => setRegion("europe")} />Europe</label>
                </fieldset>

                    
{/*                 <fieldset>
                    <legend>Choose your country</legend>
                    <select>
                        <option value="">Choose your country</option>
                        {countries.map((country) => (
                            <option value={country.name.common}>{country.name.common}</option>
                        ))}
                    </select>
                </fieldset> */}
            </div>
            <button onClick={() => setShowFlags(!showFlags)}>Fetch ye flags, matey</button>
            <div><ul>{showFlags && <Flags countries={countries}/>}</ul></div>

        </>
    );
};