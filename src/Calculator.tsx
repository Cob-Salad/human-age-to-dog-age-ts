import React, { useState } from "react";


const Calculator: React.FC = () =>{
    const [humanAge, setHumanAge] = useState<number>()
    const [dogAge, setDogAge] = useState<number>()

    const handleHumanAgeChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setHumanAge(event.target.valueAsNumber);
    }

    const calcDogAge: React.FormEventHandler<HTMLFormElement> = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (Number.isFinite(humanAge)){
            setDogAge((16 * Math.log(Number(humanAge))) + 31)
        }
    }

    return(
        <div>
            <form onSubmit={calcDogAge}>
                <div>
                    <label htmlFor="humanAge">Human Age</label>
                    <input
                    type="number"
                    id="humanAge"
                    value={humanAge}
                    placeholder="0"
                    onChange={handleHumanAgeChange}/>
                    <button type="submit">Submit Me</button>
                </div>
                <div>
                    <label htmlFor="dogAge">Dog Age</label>
                    {dogAge && <h3>You are {dogAge} years old in Dog Years</h3>}

                </div>
            </form>
        </div>
    )

}



export default Calculator;
