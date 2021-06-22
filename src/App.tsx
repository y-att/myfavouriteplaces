import { greet } from "./utils/greet";

function App(): JSX.Element {
  return <h1>{greet("World One (change made here for ci/cd")}</h1>;
}

export default App;
