import React,{useState} from 'react'
import { CountryDropdown, RegionDropdown} from 'react-country-region-selector';


  
const RegisterFormFirst = ({ setForm, formData, navigation }) => {
    const { firstName, lastName } = formData;
    const { next } = navigation;
    console.log("Hello"+next);
    const [country,setCountry] = useState('');
    const [region, setRegion] =useState('');
    const [role,setRole] = useState('');
    return (
        <div className="register">
            <h1>Welcome</h1> 
            <h4>Please help us fill in your basic information</h4>
            <form>
                <div>
                    <span>
                        <input type="text" required value={firstName}
                        onChange={setForm}></input>
                    </span>
                    <span>
                        <input type="text" required value={lastName}
                        onChange={setForm}></input>
                    </span>
                </div>
                <div>
                    <span>
                        <input type="date"  name="birth-date"
                            placeholder="Birth Date *"
                         />
                    </span>
                    <span>
                        <CountryDropdown
                        value={country}
                        onChange={(val) => setCountry(val)} />
                    </span>
                </div>
                <div>
                    <span>
                        <input type="text" required placeholder="City Name *"></input>
                    </span>
                    <span>
                        <select name="roles" >
                            <option value="">--Please choose a role--</option>
                            <option value="Student">Student</option>
                            <option value="Contributer">Contributer</option>
                        </select>
                    </span>
                </div>
                <div>
                    <input type="checkbox"  name="privacy-policy" id="privacy-policy" />
                    <label htmlFor="privacy-policy">I have read and agree the terms and condition, as well as the Privacy Policy of FuelUp Education</label>
                </div>
                <div class="g-recaptcha" data-sitekey="6LdhZD4aAAAAAEcswluGYxNzYGf-D5wlacm2-iFQ"></div>
                <button onClick={next}>Continue</button>
            </form>
        </div>
    )
}

export default RegisterFormFirst
