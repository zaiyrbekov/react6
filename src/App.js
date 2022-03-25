function App() {
  const veggies = ["Carrot", "Potato", "Apple"];

  const veggiesList = veggies.map((veggie) => {
    return <li>{veggie}</li>;
  });

  const fruts = ["Carrot", "Potato", "Apple"];

  const frutsList = fruts.map((frut) => {
    return <li>{frut}</li>;
  });

  const fruits = [
    { name: "mango", color: "Yellow" },
    { name: "mango", color: "Yellow" },
    { name: "mango", color: "Yellow" },
  ];
  const fruitsList = fruits.map((fruit) => {
    <li>
      {fruit.name}: {fruit.color}
    </li>;
  });
  return (
    <div className="App">
      <h1>hello world</h1>
      <ul>{veggiesList}</ul>
      <ol>{frutsList}</ol>
      <ul>{fruitsList}</ul>
    </div>
  );
}

export default App;
