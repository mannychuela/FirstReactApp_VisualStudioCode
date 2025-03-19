import ListGroup from "./components/ListGroup";

function App() {
  let items = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix",
    "Philadelphia",
  ];

  const handleSelect = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup items={items} heading="Cities" onItemSelect={handleSelect} />
    </div>
  );
}

export default App;
