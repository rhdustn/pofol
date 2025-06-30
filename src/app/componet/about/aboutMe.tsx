import styled from "styled-components";
import { Box } from "./Box";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 2rem;

  div:nth-of-type(even) {
    position: relative;
    top: 5rem;
  }
     @media (max-width: 768px) {
    display: flex;
    flex-direction: column;

    div:nth-of-type(even) {
      top: 0; /* 지그재그 효과 제거 */
    }
`;

export const AboutMe = () => {
  return (
    <Grid className="w-full   py-2">
      <Box
        title="침착하게 문제를 해결하는 데 노력하는 개발자"
        content="        예기치 못한 오류가 발생해도 당황하지 않고 로그를 활용해 원인을 분석하고,
        타입 및 구문 오류도 하나하나 추적하며 해결해왔습니다.
        문제의 본질을 파악하고 효율적인 해결책을 찾는 데 집중합니다.
"
      />
      <Box
        title="소통을 통해 성장하는 개발자"
        content="새로운 기술 스택을 빠르게 익히고, 팀원들과의 협업과 실무자와의 소통을 통해 설명력의 중요성을 배웠습니다. 개발자는 기술뿐만 아니라 소통 능력도 갖춰야 성장하는 것을 깨달았습니다."
      />
      <Box
        title="사용자를 생각하는 개발자"
        content="단순히 동작하는 기능을 만드는 것을 넘어서, 사용자 입장에서 더 편리하고 직관적인 경험을 제공하기 위해 고민합니다. 디자인, 동선, 반응성까지 고려하며 완성도 높은 화면을 구현하려 노력합니다."
      />
    </Grid>
  );
};
