import React from 'react';
import styled from 'styled-components';
import { baseUrl } from '../../../config/config';

interface UserImageUseProps {
  image: string;
  type?: 'large'|'normal'|'small';
}

export default ({ image, type }: UserImageUseProps) => {
  const imageSize = {
    large: '50px',
    normal: '40px',
    small: '20px',
  }
  return (
    <UserImage 
      imageSize={type ? imageSize[type] : imageSize.normal} 
      src={image ? baseUrl + image : ''} 
    />
  )
}

interface StyledUseProps {
  imageSize: string;
}
const UserImage = styled.img<StyledUseProps>`
  width: ${props => props.imageSize};
  height: ${props => props.imageSize};

  border-radius: 50%;
  background: ${props => props.theme.color.borderGray};
`;