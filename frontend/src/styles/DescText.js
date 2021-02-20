import styled from 'styled-components';

const DescText = styled.span`
  color: ${({theme}) => theme.colors.darkGray};
  font-weight: ${({theme}) => theme.fontWeights.regular};
  font-size: 24px;
  line-height: 36px;

  @media ${({theme}) => theme.devices.md} {
    font-size: 14px;
    line-height: 21px;
  }
`;

export default DescText;
