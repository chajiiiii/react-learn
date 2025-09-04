import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
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
            <TabButton>BUTTON</TabButton>
            <TabButton>JSX</TabButton>
            <TabButton>PROPS</TabButton>
            <TabButton>STATE</TabButton>
            {/* <TabButton label="LABEL" /> */}
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
