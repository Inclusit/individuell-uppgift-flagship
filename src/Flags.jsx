import { useState} from "react";

export default function Flags({countries}) {

    const [countryInfo, setCountryInfo] = useState(null)
    
    return (
        <>
            <h1>flags ahoy!</h1>
            <div className="flag-container-wrapper">
                <div className="flag-container" >{countries.map((country) => {
                    return (
                        <>
                            <div >
                              <p><div><img src={country.flags.png} alt={country.name.common} onClick={() => { setCountryInfo(country)
                            }}/></div></p>
                            {countryInfo === country && (
                                <>
                                    <p><span>{country.name.common}</span></p>
                                    <p><span>Capital:</span> {country.capital[0]}</p>
                                    <p><span>Population:</span> {country.population.toLocaleString()}</p>
                                </>
                            )}
                            
                            </div>
                            
                            
                        </>
                    )
                })}</div>
            </div>
        </>
    );
};