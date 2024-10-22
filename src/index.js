import React from 'react';
import ReactDOM from "react-dom/client";

function App() {

  var number =100;
  var number2=200;
    return(
      <React.Fragment>
       <h1>სულ შეძენილია {number + number2} ავტომობილი.</h1>

      </React.Fragment>
    )
}

var root = document.getElementById('root');
ReactDOM.createRoot(root).render(<App />);