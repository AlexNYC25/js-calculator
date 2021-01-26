import React from 'react'
import './App.css';

function App() {
  const [displayFormula, setDisplayFormula] = React.useState("")
  const [displayValue, setDisplayValue] = React.useState("")

  let dispatcher = (action) => {

    if(action === "+") {
      if(displayFormula.charAt(displayFormula.length -1) !== "+"){
        setDisplayFormula(displayFormula + "+");
      }

    }
    else if(action === "-"){
      if(displayFormula.charAt(displayFormula.length -2) !== "-"){
        setDisplayFormula(displayFormula + "-");
      }

    }
    else if(action === "/"){
      if(displayFormula.charAt(displayFormula.length -1) !== "/"){
        setDisplayFormula(displayFormula + "/");
      }

    }
    else if(action === "*"){
      if(displayFormula.charAt(displayFormula.length -1) !== "*"){
        setDisplayFormula(displayFormula + "*");
        setDisplayValue(displayValue + "*")
      }

    }
    else if(action === "."){
      if(displayFormula.charAt(displayFormula.length -1) !== "."){
        setDisplayFormula(displayFormula + ".");
      }

    }
    else if(action === "="){
      setDisplayFormula(displayValue);
      //alert(eval(displayFormula))
      setDisplayValue(eval(displayFormula))

      
    }
    else if(action === "AC"){
      setDisplayFormula("");
      setDisplayValue(0);
    }
    else if(!isNaN(action)){
      setDisplayFormula(displayFormula + action)
      setDisplayValue(displayFormula+ action)
    }

  }
  return (
    <div className="App container">
      <div class="row justify-content-center">
        <div id="calculator" class="col-5 ">
          <div id="display" class="row">
            <div class="col-12 text-end">
              <p className="h2">{displayValue}</p>
              <p className="h2">{displayFormula}</p>
            </div>
            
          </div>
          <div class="row">
              <div 
                class="col-6 calculator-button"
                onClick={()=>{dispatcher("AC")}}
              >
                AC
              </div>
              <div 
                class="col-3 calculator-button"
                onClick={()=>dispatcher("/")}
              >
                /
              </div>
              <div 
                className="col-3 calculator-button"
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
              class="col-3 calculator-button"
              onClick={()=>{dispatcher("-")}}
            >
              -
            </div>
          </div>
          <div class="row">
            <div 
              class="btn col-3 calculator-button"
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
              class="col-3 calculator-button"
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
                    style={{"background-color": "#aba"}}
                  >
                      0
                  </div>
                  <div 
                    class="col-3 calculator-button" 
                    onClick={()=>{dispatcher(".")}}
                    style={{"background-color": "#abc"}}
                  >
                      .
                  </div>      
                </div>
              </div>
            </div>
            <div 
              class="col-3 " 
              onClick={()=>{dispatcher("=")}}
              style={{"background-color": "#aba"}}
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
