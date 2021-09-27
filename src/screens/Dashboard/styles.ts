import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.background};
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(42)}px;
    background-color: ${({ theme }) => theme.colors.primary};
    align-items: center;
    flex-direction: row;
`;

export const UserWrapper = styled.View`
    flex: 1;
    width: 100%;
    flex-direction: row;
`;

export const UserImage = styled.Image`
    height: ${RFValue(48)}px;
    width: ${RFValue(48)}px;
    border-radius: 10px;
    margin-left: 13px;
`;

export const UserGrettings = styled.View`
    margin-left: 13px;
`;

export const Grettings = styled.Text`
    color: ${({theme}) => theme.colors.shape};
    font-family: ${({theme}) => theme.fonts.regular};
`;

export const UserName = styled.Text`
    color: ${({theme}) => theme.colors.shape};
    font-family: ${({theme}) => theme.fonts.bold};
`;
