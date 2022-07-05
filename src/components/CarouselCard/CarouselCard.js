import React, { useState } from 'react';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Typography from '@mui/material/Typography';

import styled from 'styled-components';
// mui icons
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
// 3rd party
import SwipeableViews from 'react-swipeable-views';

// react icons
import { AiFillStar } from 'react-icons/ai';
import { FaRegHeart } from 'react-icons/fa';
import { flexBetween, dFlex } from 'themes/commonStyles';

const CarouselCard = ({ location }) => {
  const [activeStep, setActiveStep] = useState(0);

  const maxSteps = location.locationImages.length; // so that we know how many dots

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1); // jumps when we click the next arrow
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1); // when we click the back arrow
  };

  const handleStepChange = (step) => {
    setActiveStep(step); // handle swipe change
  };
  return (
    <Wrapper>
      <FaRegHeart className="heartIcon" size={24} color="#fff" />

      {location.locationImages.length && (
        <SwipeableViews
          axis={'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {location.locationImages.map((step) => {
            return (
              <Image
                key={step.id}
                draggable="false"
                src={step.url}
                alt={step.id}
              />
            );
          })}
        </SwipeableViews>
      )}
      <SlideButtons>
        {activeStep !== 0 ? (
          <KeyboardArrowLeft onClick={handleBack} />
        ) : (
          <div></div>
        )}
        {activeStep !== maxSteps - 1 && (
          <KeyboardArrowRight onClick={handleNext} />
        )}
      </SlideButtons>
      <Box
        sx={{
          position: 'absolute',
          bottom: 100,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <MobileStepper
          sx={{ backgroundColor: 'transparent' }}
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
        />
      </Box>

      <Box sx={flexBetween}>
        <Box sx={{ mt: 2 }}>
          <Typography component="h3"> {location.location}</Typography>
          <Typography component="h4"> {location.days}</Typography>
          <Typography component="h5"> {location.price}</Typography>
        </Box>
        <Box sx={{ mt: 2 }}>
          <Box sx={dFlex}>
            {location.isNew ? (
              <>
                <Typography component="h5">New</Typography>
                <AiFillStar size={18} />
              </>
            ) : (
              <>
                <Typography component="h5"> {location.rating}</Typography>
                <AiFillStar size={18} />
              </>
            )}
          </Box>
        </Box>
      </Box>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  cursor: pointer;

  &:hover {
    svg {
      display: block;
    }
  }
  position: relative;
  flex-grow: 1;
  .MuiMobileStepper-root {
    opacity: 0;
    transition: all ease 1000ms;
  }

  .MuiMobileStepper-root {
    opacity: 1;
  }

  .MuiMobileStepper-dotActive {
    background-color: #fff;
  }

  .heartIcon {
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 10;
  }
`;
const Image = styled.img`
  user-select: none;
  height: 270px;
  width: 100%;
  border-radius: 14px;
  display: block;
  object-fit: cover;

  @media screen and (max-width: 599px) {
    height: 85vw;
  }
`;

const SlideButtons = styled.div`
  position: absolute;
  width: 100%;
  padding: 0 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 130px;
  @media screen and (max-width: 599px) {
    top: calc(85vw / 2);
  }

  svg {
    display: none;
    padding: 0.33rem;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    border-color: rgba(0, 0, 0, 0.08);
    background-color: rgba(255, 255, 255, 0.9);

    color: rgb(0, 0, 0);
    box-shadow: transparent 0px 0px 0px 1px, transparent 0px 0px 0px 4px,
      rgb(0 0 0 / 12%) 0px 6px 16px;
    &:hover {
      background-color: rgb(255, 255, 255);
      transform: scale(1.04);
    }
  }
`;
export default CarouselCard;
