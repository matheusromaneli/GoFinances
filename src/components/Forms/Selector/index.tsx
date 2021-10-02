import React from 'react';

import {
    Category,
    Container,
    Icon
} from './styles';

interface Props{
    placeholder:string;
    data: string[];
    onSelect: (content:string) => void;
}

export function Selector({placeholder, data, onSelect}: Props){
    return(
        <Container
            data = {data}
            defaultButtonText={ placeholder }
            onSelect={(item,index) => {onSelect(item)}}
            buttonTextAfterSelection={(selectedItem, index) => {return selectedItem}}
            rowTextForSelection={(item, index) => {return item}}
            renderCustomizedRowChild = {(selectedItem, index) => {return <Category>{ selectedItem }</Category>}}
            renderDropdownIcon = {(selectedItem, index) => {return <Icon name= "chevron-down"/>}}
        />
    )
}
