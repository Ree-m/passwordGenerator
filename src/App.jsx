import { useState } from 'react'
import { set } from 'react-hook-form'
import './App.css'
import {numbersChar,upperCaseChar,lowerCaseChar,symbolsChar} from './Characters'


function App() {
  const [password, setPassword] = useState("")
  const [length, setLength] = useState("")
  const [includeLowerCase, setIncludeLowerCase] = useState(false)
  const [includeUpperCase, setIncludeUpperCase] = useState(false)
  const [includeNumbers, setIncludeNumbers] = useState(false)
  const [includeSymbols, setIncludeSymbols] = useState(false)

  const onClick = (e) => {
    console.log("length:", length, includeNumbers)
    let passList =""  //if checked,passList includes all characters,from here,it needs to be randomized

    if(includeLowerCase){
      passList=passList+lowerCaseChar
    }

    if(includeUpperCase){
      passList=passList+upperCaseChar
    }

    if(includeNumbers){
      passList=passList+numbersChar
    }

    if(includeSymbols){
      passList=passList+symbolsChar
    }
    setPassword(createPassword(passList))

    
  }

  const createPassword=(passList)=>{
   let password= ""
   const passListLength= passList.length
   console.log(passList) //this is a list of the characters i want to include in my password
  //  it needs to loopfor as long as length is
   for(let i=0;i<length;i++){
    password=password+ passList.charAt(Math.round(Math.random() * passListLength))
   }
   console.log(password,password.length)
   return password
  }

  return (
    <div className="App">


      <div className="box">

        <h1>Password Generator</h1>
        <div className="passwordContainer">
         <span className="password">{password}</span>
        </div>
        

        <div className="password-req">

          <div className="flex">
            <h3>Password length</h3>
            <input className="numberBar" type="number" onChange={(e) => setLength(e.target.value)} />
          </div>

          <div className="flex">
            <h3>Include uppercase letters</h3>
            <input type="checkbox" value={includeUpperCase} checked={includeUpperCase} onChange={(e) => setIncludeUpperCase(e.currentTarget.checked) } />
          </div>

          <div className="flex">
            <h3>Include lowercase letters</h3>
            <input type="checkbox" value={includeLowerCase} checked={includeLowerCase} onChange={(e) => setIncludeLowerCase(e.currentTarget.checked)} />
          </div>

          <div className="flex">
            <h3>Include numbers</h3>
            <input type="checkbox" value={includeNumbers} checked={includeNumbers} onChange={(e) => setIncludeNumbers(e.currentTarget.checked)} />
          </div>

          <div className="flex">
            <h3>Include symbols</h3>
            <input type="checkbox" value={includeSymbols} checked={includeSymbols} onChange={(e) => setIncludeSymbols(e.currentTarget.checked)} />
          </div>

          <div className="input-btn">
            <input className="btn" type="submit" value="Generate Password" onClick={onClick} />
          </div>

        </div>
      </div>
    </div>



  )
}

export default App
