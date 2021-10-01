import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import {
    Container,
    Icon,
    Title
} from './styles';

interface Props extends TouchableOpacityProps{
    type: 'up' | 'down';
    title: string;
    isActive: boolean;
}

export function TransactionTypeButton({type, title, isActive, ...rest}: Props){
    return(
        <Container {...rest} type={type} isActive={isActive}>
            <Icon name={`arrow-${type}-circle`} type={type}/>
            <Title>{title}</Title>
        </Container>
    )
}