import styled from 'styled-components';

const SubHead = styled.h2`
  font-family: 'Iropke Batang', Batang, Serif;
  font-size: 36px;
  font-weight: ${({theme}) => theme.fontWeights.medium};
  color: ${({theme, color}) => theme.colors[color]};

  span {
    font-family: 'Iropke Batang', Batang, Serif;
  }

  @media ${({theme}) => theme.devices.md} {
    font-size: 20px;
  }
`;

SubHead.defaultProps = {
  color: 'darkGray',
};

export default SubHead;
