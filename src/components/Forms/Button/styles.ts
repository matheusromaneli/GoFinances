import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    /* display: absolute; */
    justify-content: center;
    align-items: center;
    padding: 17px 141px;
    background-color: ${({ theme }) => theme.colors.secundary};
    border-radius: 5px;
    `;

export const Title = styled.Text`
    align-items: center;
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.shape};
    font-family: ${({ theme }) => theme.fonts.medium};
`;