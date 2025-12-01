// 1. Using props - children
// export default function TabButton(props) {
//   return (
//     <li>
//       <button>{props.children}</button>
//     </li>
//   );
// }

// 2. Using Destructuring
export default function TabButton({ children, isSelected, ...props }) {
  return (
    <li>
      {/* onClick에 오는 값은 함수. 호출되면 안됨(괄호 붙이면 안됨) */}
      {/* 내가 호출하는게 아니라 React가 버튼클릭되면 호출할거라서 */}
      {/* 괄호를 붙이게 되면 해당 라인의 코드가 render될 때 호출되게 됨 */}
      <button className={isSelected ? "active" : ""} {...props}>
        {children}
      </button>
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
