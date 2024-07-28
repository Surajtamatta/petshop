import styled from "styled-components";

export const ModalChildren = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 640px) {
    padding: 10px;
  }
`;
