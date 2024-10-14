export default function Destructing() {
    const person = { name: "John", age: 25 };
    const { name, age } = person;
    // const name = person.name
    // const age = person.age
    const numbers = ["one", "two", "three"];
    const [ first, second, third ] = numbers;
    return (
      <div id="wd-destructing">
        <h2><strong>Destructing</strong></h2>
        <h3><strong>Object Destructing</strong></h3>
        const &#123; name, age &#125; =
              &#123; name: "John", age: 25 &#125;<br /><br />
        name = {name}<br />
        age = {age}
        <h3><strong>Array Destructing</strong></h3>
        const [first, second, third] = ["one","two","three"]<br/><br/>
        first = {first}<br />
        second = {second}<br />
        third = {third}<hr />
      </div>
    );
   }
   