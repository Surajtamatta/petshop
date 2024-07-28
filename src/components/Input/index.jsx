import React from 'react';
import { StyledInput, StyledPasswordInput, StyledOtpInput,InputBorderless } from '../../styles/components/Input';

const StyledInputs = ({ type, ...props }) => {
  switch (type) {
    case 'password':
      return <StyledPasswordInput {...props} />;
    case 'OTP':
      return <StyledOtpInput {...props} />;
    case 'borderless':
      return <InputBorderless {...props} />;
    default:
      return <StyledInput {...props} />;
  }
};

export default StyledInputs;
