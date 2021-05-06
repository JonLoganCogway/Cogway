import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';
import {
  mainColorLight,
  navIconColor,
  navSelectedIconColor,
  navIconBackColor,
  navSelectedIconBackColor
} from '../../resources/colors';
import { CwText } from '../cw-text'; 

const TouchableHighlight = styled.TouchableHighlight`
  align-items: center;
  justify-content: center;
  background-color: ${props => props.isSelected ? navSelectedIconBackColor : navIconBackColor};
  border-radius: 20px;
  height: 40px;
  width: 40px;
`;

const Container = styled.View`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Label = styled(CwText)`
  font-size: 10px;
`;

const NavigationItem = (props) => {
  return (
    <Container>
        <TouchableHighlight
          isSelected={props.isSelected}
          underlayColor={mainColorLight}
          onPress={props.onPress}
          onLongPress={props.onLongPress}
        >
          <Icon
            name={props.iconName}
            size={28} 
            color={props.isSelected ? navSelectedIconColor : navIconColor}
          />
        </TouchableHighlight>
        <Label>{props.title}</Label>
    </Container>
  )
}

NavigationItem.propTypes = {
  title: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  onPress: PropTypes.func,
  onLongPress: PropTypes.func
}

NavigationItem.defaultProps = {
  isSelected: false
}

export default NavigationItem;