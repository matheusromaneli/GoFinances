import React from 'react';

import {
	Container,
	Header,
	Title,
	Icon,
	Content,
	Amount,
	LastTransaction
} from './styles';

interface HighlightCardProps{
	title: string;
	amount: string;
	lastTransaction: string;
	type: 'up' | 'down' | 'total';
}

const icon = {
	up: 'arrow-up-circle',
	down: 'arrow-down-circle',
	total: 'dollar-sign'
}

export function HighlightCard({title, amount, lastTransaction, type}:HighlightCardProps){
	return(
		<Container type = {type}>
			<Header>
				<Title type = {type}>{title}</Title>
				<Icon name = {icon[type]} type = {type}/>
			</Header>
			<Content>
				<Amount type = {type}>{amount}</Amount>
				<LastTransaction type = {type}>Ultima em {lastTransaction}</LastTransaction>
			</Content>
		</Container>
	)
}