import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../data";

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {/* spread syntax를 쓰려면 key와 props 이름이 같아야 가능 */}
        {CORE_CONCEPTS.map((item) => (
          <CoreConcept key={item.title} {...item} />
        ))}

        {/* props 받는 방법은 아래처럼 두가지가 있음 */}
        {/* spread syntax를 쓰려면 key와 props 이름이 같아야 가능 */}
        {/* <CoreConcepts {...CORE_CONCEPTS[0]} />
                <CoreConcepts {...CORE_CONCEPTS[1]} />
                <CoreConcepts {...CORE_CONCEPTS[2]} />
                <CoreConcepts
                  title={CORE_CONCEPTS[3].title}
                  description={CORE_CONCEPTS[3].description}
                  image={CORE_CONCEPTS[3].image}
                /> */}
      </ul>
    </section>
  );
}
