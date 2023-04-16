// import Alert from "./components/Alert";
import { useState } from "react";
import Button from "./components/Button";
import Alert from "./components/Alert";
// import ListGroup from "./components/ListGroup";

function App() {
  // let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };
  const [alertVisible, setAlerVisibility] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlerVisibility(false)}>My alert</Alert>
      )}
      <Button color="primary" onClick={() => setAlerVisibility(true)}>
        children
      </Button>

      {/* <Alert>
        Hello <span>Word</span>
      </Alert> */}

      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      /> */}
    </div>
  );
}

export default App;
