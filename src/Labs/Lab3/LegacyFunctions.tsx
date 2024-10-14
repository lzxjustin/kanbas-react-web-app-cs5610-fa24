function add(a: number, b: number) {
    return a + b;
  }
  export default function LegacyFunctions() {
    const twoPlusFour = add(2, 4);
    console.log(twoPlusFour);
    return (
      <div id="wd-legacy-functions">
        <hr/>
        <h4><strong>Functions</strong></h4>
        <h5><strong>Legacy ES5 functions</strong></h5>
        twoPlusFour = {twoPlusFour}    <br />
        add(2, 4) = {add(2, 4)}        <hr />
      </div>
  );}
  