import { CORE_CONCEPTS, EXAMPLES } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import TabButton from "./components/TabButton.jsx";
import { useState } from "react";

function App() {
  // useState 훅의 argument는 state의 초기값
  // const [state, setState] = useState(initialValue);
  // state: 현재 상태값
  // setState: 상태를 갱신하는 함수
  const [selectedTopic, setSelectedTopic] = useState("components");

  function handleClick(selectedButton) {
    // selectedButton: "components", "jsx", "props", "state"
    console.log(selectedButton);
    setSelectedTopic(selectedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* props 받는 방법은 아래처럼 두가지가 있음 */}
            {/* spread syntax를 쓰려면 key와 props 이름이 같아야 가능 */}
            <CoreConcepts {...CORE_CONCEPTS[0]} />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
              image={CORE_CONCEPTS[3].image}
            />
          </ul>
        </section>
        <section id="examples">
          <h2>EXAMPLES</h2>
          <menu>
            <TabButton onSelect={() => handleClick("components")}>
              COMPONENTS
            </TabButton>
            <TabButton onSelect={() => handleClick("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => handleClick("props")}>PROPS</TabButton>
            <TabButton onSelect={() => handleClick("state")}>STATE</TabButton>
            {/* <TabButton label="LABEL" /> */}
          </menu>
          {/* {selectedTopic} */}
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
