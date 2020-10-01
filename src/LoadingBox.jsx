import React from 'react';
import styled from "@emotion/styled";
import {keyframes} from "@emotion/core";

const resize = keyframes`
  0%, 50% {
     height: 0;
  }

  25% {
      height: 100%;
  }
`;

export const Loader = styled.div`
  display: flex;
  flex: 1 1 0;
  margin: 0 .125rem;
  transform: skew(-27deg);
  height: 100%;

  &:after {
    position: absolute;
    content: "";
    width: 100%;
    background: #f44336;
    left: 50%;
    top: 50%;
    animation: ${resize} 1s infinite linear;
    transform: translateX(-50%) translateY(-50%);
  }
`;

const LoadersWrapper = styled.div`
  background: black;
  display: flex;
  align-items: center;
  position: relative;
  width: 100px;
  height: 100px;
`;

export const LoadingBox = () => (
  <LoadersWrapper>
    <Loader />
    <Loader />
    <Loader />
    <Loader />
    <Loader />
    {/* <Loader />
    <Loader />
    <Loader /> */}
  </LoadersWrapper>
);
