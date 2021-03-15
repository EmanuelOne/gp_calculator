import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 80vh;
  text-align: center;
  margin: 0 auto;
  gap: 3rem;
  width: 50%;
  @media (max-width: 600px) {
    width: 80%;
  }

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
  .top-text {
    background: -webkit-linear-gradient(180deg, var(--text), var(--sec));

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    padding: 20px 0px 0px 0px;
    margin-bottom: -10px;
  }
  svg,
  path {
    font-size: 5rem;
    color: var(--sec);
  }
`;
export const Result = styled.div`
  position: absolute;
  background-color: var(--sec);
  font-size: 16px;
  text-shadow: 3px;
  padding: 20px 30px;
  top: 50%;
  text-align: center;

  left: 50%;
  border-radius: 10px;
  color: var(--text);
  transform: translate(-50%, -50%);
  width: 70%;
  .congrat,
  span {
    text-align: center;
    font-size: 2rem;
    font-variant: small-caps;
    text-transform: capitalize;
    font-family: "Nunito" sans-serif;
  }
  span:last-of-type {
    color: ${({ state }) => (state >= 2 ? "var(--primary)" : "var(--danger)")};
    font-weight: 600;
  }
`;
