import Header from "./components/Header/Header";
import TabButton from "./components/TabButton";
import CoreConcepts from "./components/CoreConcepts";
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import { useState } from "react";

function App() {
  const [tabTitle, setTabTitle] = useState();

  function handleClick(clickedTab) {
    console.log(clickedTab);
    setTabTitle(clickedTab);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <ul>
            {CORE_CONCEPTS.map((item) => (
              <CoreConcepts key={item.title} {...item} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>EXAMPLES</h2>
          <menu>
            <TabButton
              isClicked={tabTitle === "components"}
              onClick={() => handleClick("components")}
            >
              COMPONENTS
            </TabButton>
            <TabButton
              isClicked={tabTitle === "jsx"}
              onClick={() => handleClick("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isClicked={tabTitle === "props"}
              onClick={() => handleClick("props")}
            >
              PROPS
            </TabButton>
            <TabButton
              isClicked={tabTitle === "state"}
              onClick={() => handleClick("state")}
            >
              STATE
            </TabButton>
          </menu>

          {tabTitle ? (
            <div id="tab-content">
              <h3>{EXAMPLES[tabTitle].title}</h3>
              <p>{EXAMPLES[tabTitle].description}</p>
              <pre>
                <code>{EXAMPLES[tabTitle].code}</code>
              </pre>
            </div>
          ) : (
            <p>Click an example</p>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
