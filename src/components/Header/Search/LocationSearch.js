import React from 'react';
import styled from 'styled-components';

// react icons
import { IoSearchCircle } from 'react-icons/io5';

const choices = [
  { id: 1, text: 'Anywhere' },
  { id: 2, text: 'Any week' },
  { id: 3, text: 'Add guest', withIcon: true },
];

const LocationSearch = () => {
  return (
    <Wrapper>
      {choices.map((choice) => {
        return (
          <Choice key={choice.id} id={choice.id}>
            <ChoiceText id={choice.id}>{choice.text}</ChoiceText>
            {!choice.withIcon && <Divider></Divider>}
            {choice.withIcon && <IoSearchCircle color="#FF385C" size={43} />}
          </Choice>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  cursor: pointer;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 40px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 10px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  svg {
    margin-right: 2px;
  }
`;
const Choice = styled.div`
  display: flex;
  align-items: center;
  padding-left: ${(props) => (props.id === 1 ? '8px' : '0px')};
`;
const ChoiceText = styled.div`
  padding: 0 1rem;
  font-size: 14px;
  padding-right: ${(props) => props.id === 3 && '11px'};
  font-weight: ${(props) => (props.id === 3 ? 'normal' : `bold`)};
  color: ${(props) => (props.id === 3 ? '#717171' : '#222222')};
`;
const Divider = styled.span`
  border-left: 1px solid var(--medGrey);

  height: 24px;
`;
export default LocationSearch;
