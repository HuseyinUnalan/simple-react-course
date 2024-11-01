function Button() {

  let count = 0;

  const handleClick = (name) => {
    if (count < 3) {
      count++;
      console.log(`${name} you clicked me ${count} time/s`);
    } else {
      console.log(`${name} stop cliking me!`);
    }
  }

  return (
    <button onClick={() => handleClick("Bro")}>Click Me 😊</button>
  );

}

export default Button;