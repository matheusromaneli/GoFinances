import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    font-family: ${({theme}) => theme.fonts.regular};
    flex: 1;
    background-color: ${({theme}) => theme.colors.background};
`;

export const Header = styled.View`
    height: 113px;
    background-color: ${({ theme }) => theme.colors.primary};
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(18)}px;
    margin-top: 37px;
    font-family: ${({theme}) => theme.fonts.regular};
`;

export const Form = styled.View`
    margin: 24px;
    flex: 1;
    justify-content: space-between;
`;

export const Fields = styled.View``;

export const TypeField = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 8px;
    margin-bottom: 16px;
`;