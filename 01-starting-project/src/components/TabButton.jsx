// 1. Using props - children
// export default function TabButton(props) {
//   return (
//     <li>
//       <button>{props.children}</button>
//     </li>
//   );
// }

// 2. Using Destructuring
export default function TabButton({ children }) {
  return (
    <li>
      <button>{children}</button>
    </li>
  );
}

// 3. Using Descturcturing with different prop name
// export default function TabButton({label}) {
//   return (
//     <li>
//       <button>{label}</button>
//     </li>
//   );
// }
