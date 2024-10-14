export default function TernaryOperator() {
    let loggedIn = true;
    return(
       <div id="wd-ternary-operator">
          <h4><strong>Logged In</strong></h4>
          { loggedIn ? <p>Welcome</p> : <p>Please login</p> } <hr/>
       </div> )
;}
    