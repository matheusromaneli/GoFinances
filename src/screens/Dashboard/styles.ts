import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import {Feather} from '@expo/vector-icons';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { FlatList } from "react-native";
import { DataListProps } from ".";

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.background};
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(42)}px;
    background-color: ${({ theme }) => theme.colors.primary};
    flex-direction: row;
    align-items: flex-start;
`;

export const UserWrapper = styled.View`
    flex: 1;
    width: 100%;
    padding: 0 24px;
    margin-top: ${getStatusBarHeight() + RFValue(28)}px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const UserContent = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const UserImage = styled.Image`
    height: ${RFValue(48)}px;
    width: ${RFValue(48)}px;
    border-radius: 10px;
`;

export const UserGrettings = styled.View`
    margin-left: 13px;
`;

export const Grettings = styled.Text`
    color: ${({theme}) => theme.colors.shape};
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(18)}px;
`;

export const UserName = styled.Text`
    color: ${({theme}) => theme.colors.shape};
    font-family: ${({theme}) => theme.fonts.bold};
    font-size: ${RFValue(18)}px;
`;

export const Icon = styled(Feather)`
    font-size: ${RFValue(24)}px;
    color: ${({theme}) => theme.colors.secundary};
`;

export const Cards = styled.ScrollView.attrs({    
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: {paddingLeft: 24}
})`
    width:100%;
    position: absolute;
    margin-top: ${RFPercentage(20)}px;
`;

export const Transactions = styled.View`
    margin: 0 24px;
    margin-top: ${RFValue(60)}px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(18)}px;
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme}) => theme.colors.text_dark};
    margin-bottom: ${RFValue(16)}px;
`;

export const TransactionList = styled(
    FlatList as new() => FlatList<DataListProps>
).attrs({
    showsVerticalScrollIndicator: false,
})`
    /* flex: 1; */
`;