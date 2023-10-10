const TITLE_CLASS = "text-2xl font-bold text-gray-800 my-2";

export default function About() {
  return (
    <section className="bg-gray-100 shadow-lg m-8 p-8 rounded-md text-center">
      <h2 className={TITLE_CLASS}>Who Am I?</h2>
      <p>
        제품을 사용하는 고객을 생각하며 개발하는 프론트엔드 개발자 김영서입니다.{" "}
        <br />
        끊임없이 제품에 대해 고민하며 더 나은 방향으로 제품을 개선하기 위해
        노력합니다. 렌더링 시간을 최적화하고 E2E 테스트를 통해 사용자 경험을
        향상시킵니다.
      </p>
      <h2 className={TITLE_CLASS}>Career</h2>
      <p>주식회사 액스 (2022.07 ~ 2023.08)</p>
      <h2 className={TITLE_CLASS}>Skills</h2>
      <p>
        React, Next, Node, TypeScript <br />
        Git, VS code
      </p>
    </section>
  );
}
