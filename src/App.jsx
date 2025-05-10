import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <textarea className="logo">
        <li>version textarea</li>
        <li>message</li>
        <span className="logo">
          "2025-05-10 15:36:55.179 [info] git blame --root --incremental
          bbcc82af8df08376193cd0db08aa51cec5be0a7b -- .git/COMMIT_EDITMSG [65ms]
          2025-05-10 15:36:55.179 [info] fatal: no such path .git/COMMIT_EDITMSG
          in bbcc82af8df08376193cd0db08aa51cec5be0a7b 2025-05-10 15:38:04.240
          [info] git ls-tree -l 99ff755d69f22ffbb661b5c90a920dc18faf60f2 --
          src/redux/slice.js [76ms] 2025-05-10 15:38:04.241 [info] git ls-tree
          -l 99ff755d69f22ffbb661b5c90a920dc18faf60f2 -- src/redux/store.js
          [70ms]"
        </span>
      </textarea>
    </div>
  );
}

export default App;
