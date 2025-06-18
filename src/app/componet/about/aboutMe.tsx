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
    <Grid className="w-full max-w-5xl  py-2">
      <Box />
      <Box />
      <Box />
    </Grid>
  );
};
