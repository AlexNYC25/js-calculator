import React from 'react'
import {evaluate} from 'mathjs'
import './App.css';

function App() {
  const [displayFormula, setDisplayFormula] = React.useState("");
  const [displayValue, setDisplayValue] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");

  let dispatcher = (action) => {
    if(action === "+") {
      if(displayFormula.charAt(displayFormula.length -1) !== "+"){
        setDisplayFormula(displayFormula + "+");
        setDisplayValue("+")
      }

    }
    else if(action === "-"){
      if(displayFormula.charAt(displayFormula.length -2) !== "-"){
        setDisplayFormula(displayFormula + "-");
        setDisplayValue("-")
      }

    }
    else if(action === "/"){
      if(displayFormula.charAt(displayFormula.length -1) !== "/"){
        setDisplayFormula(displayFormula + "/");
        setDisplayValue("/")
      }

    }
    else if(action === "*"){
      if(displayFormula.charAt(displayFormula.length -1) !== "*"){
        setDisplayFormula(displayFormula + "*");
        setDisplayValue("*")
      }

    }
    else if(action === "."){
      if(
        displayFormula.charAt(displayFormula.length -1) !== "." ||
        displayFormula.charAt(displayFormula.length -1) !== "+" ||
        displayFormula.charAt(displayFormula.length -1) !== "-" ||
        displayFormula.charAt(displayFormula.length -1) !== "*" ||
        displayFormula.charAt(displayFormula.length -1) !== "/" 
        ){
        setDisplayFormula(displayFormula + ".");
        setDisplayValue(displayValue + ".")
      }

    }
    else if(action === "="){
      
      try {
        
        setDisplayValue(evaluate(displayFormula))
      } catch (err) {
        alert("there was an error")
        setErrorMessage("There was a problem with the expression added")
      }
        

      
    }
    else if(action === "AC"){
      setDisplayFormula("");
      setDisplayValue("");
    }
    else if(!isNaN(action)){
      setDisplayFormula(displayFormula + action)
      if(isNaN(displayValue)){
        setDisplayValue(action)
      }
      else {
        setDisplayValue(displayValue + action)
      }
      
    
    }

  }
  return (
    <div className="App container pt-4">
      <div class="row">
        <p class="h1">
          Javascript Calculator
        </p>

      </div>
      <br />
      <div class="row justify-content-center">
        <div>
          {errorMessage}
        </div>
        <div id="calculator" class="col-5 ">
          <div id="display" class="row">
            <div class="col-12 text-end text-break">
              {displayFormula === "" ? <br /> : <p className="h2 text-wrap">{displayFormula}</p>}
              {displayValue === "" ? <br/> : <p className="h2 text-wrap">{displayValue}</p>}
              
            </div>
            
          </div>
          <div class="row">
              <div 
                class="col-6 calculator-button calculator-button-operation"
                onClick={()=>{dispatcher("AC")}}
              >
                AC
              </div>
              <div 
                class="col-3 calculator-button calculator-button-operation"
                onClick={()=>dispatcher("/")}
              >
                /
              </div>
              <div 
                className="col-3 calculator-button calculator-button-operation"
                onClick={()=>{dispatcher("*")}}
              >
                *
              </div>
            </div>
          <div class="row">
            <div 
              class="col-3 calculator-button"
              onClick={()=>{dispatcher("7")}}
            >
              7
            </div>
            <div 
              class="col-3 calculator-button"
              onClick={()=>{dispatcher("8")}}
            >
              8
            </div>
            <div 
              class="col-3 calculator-button"
              onClick={()=>{dispatcher("9")}}
            >
              9
            </div>
            <div 
              class="col-3 calculator-button calculator-button-operation"
              onClick={()=>{dispatcher("-")}}
            >
              -
            </div>
          </div>
          <div class="row">
            <div 
              class="col-3 calculator-button"
              onClick={()=>{dispatcher("4")}}
            >
              4
            </div>
            <div 
              class="col-3 calculator-button"
              onClick={()=>{dispatcher("5")}}
            >
              5
            </div>
            <div 
              class="col-3 calculator-button"
              onClick={()=>{dispatcher("6")}}
            >
              6
            </div>
            <div 
              class="col-3 calculator-button calculator-button-operation"
              onClick={()=>{dispatcher("+")}}
            >
              +
            </div>
          </div>
          <div class="row">
            <div class="col-9">
              <div class="">
                <div className="row">
                  <div 
                    class="col-4 calculator-button"
                    onClick={()=>{dispatcher("1")}}
                  >
                    1
                  </div>
                  <div 
                    class="col-4 calculator-button"
                    onClick={()=>{dispatcher("2")}}
                  >
                    2
                  </div>
                  <div 
                    class="col-4 calculator-button"
                    onClick={()=>{dispatcher("3")}}
                  >
                    3
                  </div>
                </div>
                <div class="row">
                  <div 
                    class="col-9 calculator-button" 
                    onClick={()=>{dispatcher("0")}}
                  >
                      0
                  </div>
                  <div 
                    class="col-3 calculator-button" 
                    onClick={()=>{dispatcher(".")}}
                  >
                      .
                  </div>      
                </div>
              </div>
            </div>
            <div 
              class="col-3 calculator-button calculator-button-operation" 
              onClick={()=>{dispatcher("=")}}
            >
              =
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
