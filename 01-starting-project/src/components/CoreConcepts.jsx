// 1. Using props
export default function CoreConcepts(props) {
  return (
    <li>
      <img src={props.image} alt="" />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

// 2. Using Destructuring
// function CoreConcepts({image, title, description}) {
//   return (
//     <li>
//       <img src={image} alt="" />
//       <h3>{title}</h3>
//       <p>{description}</p>
//     </li>
//   );
// }
