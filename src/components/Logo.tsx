import React from 'react';
import styled from 'styled-components';

const title = process.env.REACT_APP_TITLE || '';

const H1 = styled.h1`
  font-size: 1.2rem;
  margin: 0;
  font-weight: 400;
`;

export const Logo = () => <H1>{title}</H1>;
