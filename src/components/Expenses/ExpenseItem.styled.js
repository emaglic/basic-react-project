import styled from "styled-components";
import tw from "twin.macro";
const S = {};

S.ExpenseItem = styled.div`
  ${tw`
  flex 
  items-center 
  justify-between 
  shadow-lg 
  rounded-lg
  p-2`}
`;

export default S;
