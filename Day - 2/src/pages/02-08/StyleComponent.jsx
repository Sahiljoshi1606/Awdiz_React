// import React from 'react';
import styled from 'styled-components';
function MyFunction() {
  const Wrapper = styled.div`
    background-color: lightblue;
    padding: 20px;
    border-radius: 5px;
    width: 100%;
    margin: auto;
  `;
  const Title = styled.h1`
    color: red;
    font-size: 100px;
  `;
  return (
    <Wrapper>
      <Title>hy</Title>
    </Wrapper>
  );
}

export default MyFunction;