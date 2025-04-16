import Column from "./components/Column";

const App = () => {
  return (
    <div className="App">
      <Column state="PLANNED" />
      <Column state="ONGOING" />
    </div>
  );
};

export default App;
