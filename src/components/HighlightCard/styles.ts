import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";
import { Feather } from '@expo/vector-icons';

interface TypeProps{
    type: 'up' | 'down' | 'total';
}

export const Container = styled.View<TypeProps>`
    width: ${RFValue(300)}px;
    padding: 19px 24px;
    padding-bottom: 42px;
    border-radius: 5px;
    background-color: ${({theme , type}) => type === 'total'? theme.colors.secundary : theme.colors.shape};
    margin-right: ${RFValue(16)}px;
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: ${RFValue(30)}px;
`;

export const Title = styled.Text<TypeProps>`
    font-size: ${RFValue(14)}px;
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme,type}) => type === 'total'? theme.colors.shape : theme.colors.title}
`;

export const Icon = styled(Feather)<TypeProps>`
    font-size: ${RFValue(33)}px;

    ${(props) => props.type === 'up' && css`
    color: ${({ theme }) => theme.colors.success};
    `};

    ${(props) => props.type === 'down' && css`
    color: ${({ theme }) => theme.colors.attention};
    `};

    ${(props) => props.type === 'total' && css`
    color: ${({ theme }) => theme.colors.shape};
    `};
`;

export const Content = styled.View``;

export const Amount = styled.Text<TypeProps>`
    font-size: ${RFValue(32)}px;
    font-family: ${({theme}) => theme.fonts.medium};
    color: ${({theme,type}) => type === 'total'? theme.colors.shape : theme.colors.text_dark}
`;

export const LastTransaction = styled.Text<TypeProps>`
    font-size: ${RFValue(14)}px;
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme,type}) => type === 'total'? theme.colors.shape : theme.colors.text}
`;
