import TabButton from "./TabButton";
import { useState } from "react";
import { EXAMPLES } from "../data";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();
  // useState 훅의 argument는 state의 초기값
  // const [state, setState] = useState(initialValue);
  // state: 현재 상태값
  // setState: 상태를 갱신하는 함수

  function handleClick(selectedButton) {
    // selectedButton: "components", "jsx", "props", "state"
    console.log(selectedButton);
    setSelectedTopic(selectedButton);
  }

  return (
    <section id="examples">
      <h2>EXAMPLES</h2>
      <menu>
        <TabButton
          isSelected={selectedTopic === "components"}
          onSelect={() => handleClick("components")}
        >
          COMPONENTS
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "jsx"}
          onSelect={() => handleClick("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "props"}
          onSelect={() => handleClick("props")}
        >
          PROPS
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "state"}
          onSelect={() => handleClick("state")}
        >
          STATE
        </TabButton>
        {/* <TabButton label="LABEL" /> */}
      </menu>
      {/* {selectedTopic} */}
      {!selectedTopic ? (
        <p>Please select a topic</p>
      ) : (
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
      )}
    </section>
  );
}
