// import Article from "./components/ArticleList/ArtcleList";
// import List from "./components/List/List";
// import ProgressBar from "./components/ProgressBar/ProgressBar";
// import Table from "./components/Table/Table";

// function App() {
//   const table = [
//     { example: "Example", example: "Example", example: "Example" },
//     { example: "Example", example: "Example", example: "Example" },
//     { example: "Example", example: "Example", example: "Example" },
//   ];
//   const veggies = ["Carrot", "Potato", "Strawberry"];

//   const fruits = [
//     { name: "Mango", color: "Yellow" },
//     { name: "Apple", color: "Green" },
//     { name: "Cherry", color: "Red" },
//   ];



//   const fruitsList = fruits.map((fruit) => (
//     <li>
//       {fruit.name}: {fruit.color}
//     </li>
//   ));

//   const articles = [
//     { title: "This is an example article", url: "#", teaser: "lorem" },
//     { title: "Another article as an example", url: "#", teaser: "lorem" },
//     { title: "Last example article", url: "#", teaser: "lorem" },
//   ];

//   return (
//     <div className="App">
//       <ProgressBar progress={25} />
//       <ProgressBar progress={50} color="orange" />
//       <ProgressBar progress={30} />
//       <ProgressBar progress={60} />
//       <ProgressBar progress={90} />

//       <h1>Hello world</h1>
//       <Table src={table} />
//       <ul>
//         {fruitsList}
//       </ul>

//       <List src={veggies} />

//       <Article src={articles} />
//     </div>
//   );
// }

// export default App;
