import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  text-align: center;
  margin: 0 auto;
  gap: 3rem;
  width: 50%;

  .course {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    width: 100%;

    select {
      padding: 0.5rem 1rem;
      width: 100%;
    }
    .error {
      border: 1px red solid;
    }
  }
  svg,
  path {
    font-size: 5rem;
    background: -webkit-linear-gradient(120deg, #ffffff, #0066ff);
    color: #f8f8f8;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
export const Result = styled.div`
  position: absolute;
  background-color: white;
  font-size: 20px;
  text-shadow: 3px;
  padding: 20px 30px;
  top: 50%;
  left: 50%;
  border-radius: 10px;
  color: black;
  transform: translate(-50%, -50%);
`;
