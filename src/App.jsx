import { useState } from 'react'
import { set } from 'react-hook-form' 
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [password, setPassword] = useState("")
  const [checked,setChecked]=useState(false)
  const [length,setLength]=useState("")

  const onClick = (length) => {
    console.log(length)
    const allCharacters= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const lowercase ="abcdefghijklmnopqrstuvwxyz"
    const number ="0123456789"
    const symbols ="~!@#$%^&*()_+={}|/.,?-"
    
    let newPass = ""
    for(let i=0;i<length;i++){
      newPass=newPass + allCharacters.charAt(Math.floor(Math.random() * length))

    }




    setPassword(newPass)
    console.log("click",newPass.toString().length)

  }

  return (
    <div className="App">
      
      
        <div className="box">

           <h1>Password Generator</h1>
          <div className="password">
            {password}
          </div>

          <div className="password-req">

            <div className="flex">
              <h3>Password length</h3>
              <input className="numberBar" type="number" onChange={(e)=> setLength(e.target.value)} />
            </div>

            <div className="flex">
              <h3>Include uppercase letters</h3>
              <input type="checkbox" value={checked}/>
            </div>

            <div className="flex">
              <h3>Include lowercase letters</h3>
              <input type="checkbox" value={checked} />
            </div>

            <div className="flex">
              <h3>Include numbers</h3>
              <input type="checkbox" value={checked}/>
            </div>

            <div className="flex">
              <h3>Include symbols</h3>
              <input type="checkbox"value={checked} />
            </div>

            <div className="center">
              <input className="btn" type="submit" value="Generate Password" onClick={onClick} />
            </div>

          </div>
        </div> 
      </div>


    
  )
}

export default App
