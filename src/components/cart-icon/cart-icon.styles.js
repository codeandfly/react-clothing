import styled from 'styled-components';

import { ReactComponent as ShoppingIconSVG } from '../../assets/shopping-bag.svg';

export const CartContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 90px;
  left: 3px;
  bottom: 3px;
`;

export const ShoppingIcon = styled(ShoppingIconSVG)`
  width: 30px;
  height: 30px;
`;

export const ItemCountContainer = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 5px;
`;
