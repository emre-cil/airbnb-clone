import React from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
// react icons
import { BiGlobe } from 'react-icons/bi';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
import { flexCenter } from 'themes/commonStyles';

const ProfileSettings = () => {
  return (
    <Box sx={flexCenter}>
      <LinkWrapper href="#"> Become A Host</LinkWrapper>
      <Stack sx={flexCenter}>
        <IconWrapper>
          <BiGlobe />
        </IconWrapper>

        <ProfileIcons>
          <AiOutlineMenu size={16} />
          <FaUserCircle size={30} />
        </ProfileIcons>
      </Stack>
    </Box>
  );
};

const LinkWrapper = styled.a`
  text-decoration: none;
  color: var(--black);
  font-size: 14px;
  font-weight: 500;
  border-radius: 40px;
  padding: 12px 16px;
  &:hover {
    background-color: var(--lightGrey);
  }
`;
const IconWrapper = styled.div`
  cursor: pointer;
  width: 46px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  svg {
    font-size: 1rem;
  }
  &:hover {
    background-color: var(--lightGrey);
  }
`;
const ProfileIcons = styled.div`
  height: 42px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 40px;
  border: 1px solid var(--medGrey);
  svg {
    margin: 5px;
    color: var(--grey);
    &:first-child {
      color: var(--black);
      margin: 0 6px 0 12px;
    }
  }
  &:hover {
    background-color: var(--lightGrey);
  }
`;
export default ProfileSettings;
