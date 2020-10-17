import React from 'react';
import styled from 'styled-components';
import T from 'prop-types';

const accentColor = 'rgb(29, 161, 242)';

const Button = styled.button`
  align-items: center;
  background-color: ${props => (props.$accent ? accentColor : 'white')};
  border-radius: 9999px;
  border-style: solid;
  border-width: 1px;
  border-color: ${accentColor};
  color: ${props => (props.$accent ? 'white' : accentColor)};
  cursor: pointer;
  display: inline-flex;
  font: inherit;
  font-weight: bold;
  min-height: 36px;
  justify-content: center;
  min-width: 72px;
  outline-style: none;
  padding: 0 30px;
  text-decoration: none;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${props =>
      props.$accent ? 'rgb(26, 145, 218)' : 'rgba(29, 161, 242, 0.1)'};
  }
`;
export default Button;
