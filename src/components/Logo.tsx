import React from 'react';
import styled from 'styled-components';

const title = process.env.REACT_APP_TITLE || '';

const H1 = styled.h1`
  font-size: 1rem;
  margin: 0;
`;

export const Logo = () => <H1>{title}</H1>;
