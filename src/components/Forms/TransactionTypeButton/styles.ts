import styled from "styled-components/native";
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

interface TypeProps{
    type: 'up' | 'down';
}

interface ContainerProps{
    type: 'up' | 'down';
    isActive: boolean;
}

export const Container = styled(TouchableOpacity)<ContainerProps>`
    border-width: ${({isActive}) => isActive? 0 : 1.5}px;
    background-color: ${({theme, isActive, type}) => 
        isActive? 
            type === 'up'? 
                theme.colors.success_light 
            : 
                theme.colors.attention_light 
        : 
            theme.colors.background};
    padding: 18px 0px;
    width: 48%;
    justify-content: center;
    flex-direction: row;
    border-radius: 5px;
    border-color: ${({ theme }) => theme.colors.text};
`;

export const Icon = styled(Feather)<TypeProps>`
    color: ${({ theme, type }) => type === 'up'? theme.colors.success: theme.colors.attention};
    font-size: ${RFValue(20)}px;
    margin-right: 14px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.title};
`;
