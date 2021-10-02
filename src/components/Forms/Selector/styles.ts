import styled from 'styled-components/native';
import {Feather} from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import SelectDropdown from 'react-native-select-dropdown';
import theme from '../../../global/styles/theme';

export const Container = styled(SelectDropdown).attrs({
    buttonStyle: {
        width: '100%',
        height: RFValue(56),
        paddingVertical: 16,
        paddingHorizontal: 18,
        backgroundColor: "#FFF",
        borderRadius: 5
    },
    buttonTextStyle:{
        fontFamily: theme.fonts.regular,
        fontSize: RFValue(14),
        color: theme.colors.text,
        textAlign: 'left'
    },
    rowStyle: {
    },
    rowTextStyle: {
        fontFamily: theme.fonts.regular,
        fontSize: RFValue(14),
        color: theme.colors.text,
        textAlign: "center"
    },
    dropdownStyle:{
        backgroundColor: theme.colors.shape
    },
    dropdownIconPosition: "right"
})`

`;

export const Category = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.text};
    padding-left: 18px;
`;

export const Icon = styled(Feather)`
    font-size: ${RFValue(20)}px;
    color: ${({ theme }) => theme.colors.text};
`;
