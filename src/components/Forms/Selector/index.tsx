import React, {useState} from 'react';

import {
    Category,
    Container,
    Icon
} from './styles';

interface Props{
    title: string;
    data: string[];
}

export function Selector({title, data}: Props){
    const [content, setContent] = useState(title);
    return(
        <Container
            data = {data}
            defaultButtonText={ content }
            onSelect={(item,index) => {() => setContent(item)}}
            buttonTextAfterSelection={(selectedItem, index) => {return selectedItem}}
            rowTextForSelection={(item, index) => {return item}}
            renderCustomizedRowChild = {(selectedItem, index) => {return <Category>{ selectedItem }</Category>}}
            renderDropdownIcon = {(selectedItem, index) => {return <Icon name= "chevron-down"/>}}
        />
    )
}
