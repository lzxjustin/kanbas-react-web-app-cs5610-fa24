const ConditionalOutputInline = () => {
    const loggedIn = false;
    return (
      <div id="wd-conditional-output-inline">
        { loggedIn && <h2><strong>Welcome Inline</strong></h2>      }
        {!loggedIn && <h2><strong>Please login Inline</strong></h2> }
      </div>
   );};
export default ConditionalOutputInline;