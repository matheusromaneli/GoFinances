import styled from 'styled-components/native';
import {Feather} from '@expo/vector-icons';
import { RFValue } from "react-native-responsive-fontsize";

interface TypeProps{
    type: "Income" | "Outcome";
}

export const Container = styled.View`
    background-color: ${({theme}) => theme.colors.shape};
    font-family: ${({theme}) => theme.fonts.regular};
    padding: 19px;
    margin-bottom: 16px;
    border-radius: 5px;
`;

export const Title = styled.Text`
    color: ${({theme}) => theme.colors.title};
    font-size: ${RFValue(14)}px;
    margin-bottom: 2px;
`;

export const Value = styled.Text<TypeProps>`
    color: ${({theme, type}) => type === "Income"? theme.colors.success : theme.colors.attention};
    font-size: ${RFValue(20)}px;
    margin-bottom: 19px;
`;

export const Footer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    height: 20px;
`;
export const Category = styled.View`
    flex-direction: row;
    height: auto;
`;

export const CategoryIcon = styled(Feather)`
    color: ${({theme}) => theme.colors.text};
    font-size: ${RFValue(17)}px;
`;

export const CategoryName = styled.Text`
    color: ${({theme}) => theme.colors.text};
    font-size: ${RFValue(14)}px;
    margin-left: 10px;
`;

export const Date = styled.Text`
    color: ${({theme}) => theme.colors.text};
`;
