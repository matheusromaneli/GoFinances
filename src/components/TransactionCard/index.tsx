import React from 'react';
import {
    Container,
    Title,
    Value,
    Footer,
    Category,
    CategoryIcon,
    CategoryName,
    Date
} from './styles';

export interface TransactionCardProps{
    
    title: string;
    amount: string;
    type: "Income" | "Outcome";
    category: "Casa" | "Carro" | "Alimentação" | "Venda";
    date: string;
    
}

interface Props{
    data: TransactionCardProps;
}

const icon = {
    Casa: "home",
    Carro: "tool",
    Alimentação: "coffee",
    Venda: 'dollar-sign'
}

export function TransactionCard({data}:Props){
    return (
        <Container>
            <Title>{data.title}</Title>
            <Value type={data.type}>{`${data.type === "Income"? "R$ ":"-R$ "}${data.amount}`}</Value>
            <Footer>
                <Category>
                    <CategoryIcon name = {icon[data.category]}/>
                    <CategoryName>{data.category}</CategoryName>
                </Category>
                
                <Date>{data.date}</Date>
            </Footer>
        </Container>
    )
}