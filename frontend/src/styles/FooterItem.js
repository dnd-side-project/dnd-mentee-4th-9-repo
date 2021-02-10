import styled from 'styled-components';
import {getVW} from '../lib/calculate';

/*
marginRight: number
*/
const FooterItem = styled.li`
  margin-right: ${({marginRight}) => marginRight}px;

  @media ${({theme}) => theme.devices.lg} {
    margin-right: ${({theme, marginRight}) => getVW(marginRight - 20, theme.size.lg)};
  }

  @media ${({theme}) => theme.devices.footer} {
    margin-right: 0;
  }
`;

FooterItem.defaultProps = {
  marginRight: 0,
};

export default FooterItem;
