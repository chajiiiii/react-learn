export default function Tabs({ children, buttons, ButtonsContainer }) {
  // const ButtonsContainer = buttonsContainer;
  // 변수에 컴포넌트처럼 대문자로 저장을 해야 쓸 수 있음

  // 또는 인수에서부터 프롭을 커스텀 컴포넌트처럼 대문자로 설정하여 받으면
  // 변수에 따로 저장하지 않고 사용 가능

  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
