const subtract = (a: number, b: number) => {
    return a - b;
  };
  export default function ArrowFunctions() {
    const threeMinusOne = subtract(3, 1);
    console.log(threeMinusOne);
    return (
      <div id="wd-arrow-functions">
        <h4><strong>New ES6 arrow functions</strong></h4>
        threeMinusOne = {threeMinusOne}   <br />
        subtract(3, 1) = {subtract(3, 1)} <hr />
      </div>
  );}
  