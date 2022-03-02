import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 400px;
  width: 100%;
  padding: 5px 10px;
`;

export const WrapperIcon = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 350px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const IconWhatsApp = styled.img`
  max-width: 100px;
`;

export const Title = styled.h1``;

export const Body = styled.div`
  padding: 15px;
  width: 100%;
  border-radius: 3px;
  box-shadow: 0px 0px 20px 6px #095e54;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ButtonIr = styled.a`
  padding: 10px;
  border-radius: 5px;
  background-color: #20ad54;
  border: 1px solid #20994c;
  display: block;
  width: 100%;
  font-size: 16px;
  color: #fafafa;
  font-weight: 600;
  text-align: center;
`;

export const Details = styled.div`
  font-size: 14px;
  color: #ddd;
  margin-top: 5px;
  text-align: end;
`;
