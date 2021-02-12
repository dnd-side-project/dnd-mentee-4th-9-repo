import styled from 'styled-components';

const SubHead = styled.h2`
  color: ${({theme, color}) => theme.colors[color]};
  font-size: ${({theme}) => theme.fontSizes['40'].lg}px;
  font-weight: ${({theme}) => theme.fontWeights.medium};

  @media ${({theme}) => theme.devices.md} {
    font-size: ${({theme}) => theme.fontSizes['40'].md}px;
  }
`;

SubHead.defaultProps = {
  color: 'darkGray',
};

export default SubHead;
