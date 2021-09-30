import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardProps} from '../../components/TransactionCard';

import { 
	Container,
	Header, 
	UserWrapper,
	UserContent, 
	UserImage, 
	UserGrettings, 
	Grettings, 
	UserName,
	Icon,
	Cards,
	Transactions,
	Title,
	TransactionList
} from './styles';

export interface DataListProps extends TransactionCardProps{
	id: number;
}

const response: DataListProps[] = [
	{
		id: 1,
		title:"Desenvolvimento de site",
		amount: "12.000,00",
		type: "Income",
		category: "Venda",
		date:"30/09/2021"
	},
	{
		id: 2,
		title:"Hamburgueria Pizzy",
		amount: "59,00",
		type: "Outcome",
		category: "Alimentação",
		date:"29/09/2021"
	},
	{
		id: 3,
		title:"Motor do carro",
		amount: "1.000,00",
		type: "Outcome",
		category: "Carro",
		date:"28/09/2021"
	}
]

export function Dashboard(){
	return(
		<Container>
			<Header>
				<UserWrapper>
					<UserContent>
						<UserImage source={{uri: 'https://avatars.githubusercontent.com/u/78664028?v=4'}} />
						<UserGrettings>
							<Grettings>Olá,</Grettings>
							<UserName>Matheus</UserName>
						</UserGrettings>
					</UserContent>
					<Icon name= 'power'/>
				</UserWrapper>
			</Header>
			<Cards>
				<HighlightCard 
					title = 'Entradas'
					amount={`R$ 12.345,32`} 
					lastTransaction={`Última entrada dia ${13} de ${'abril'}`}
					type = 'up'
				/>
				<HighlightCard 
					title = 'Saídas'
					amount={`R$ 1.259,21`} 
					lastTransaction={`Última saída dia ${3} de ${'abril'}`}
					type = 'down'
				/>
				<HighlightCard 
					title = 'Total'
					amount={`R$ 12.345,00`} 
					lastTransaction={`${1} à ${13} de ${'abril'}`}
					type = 'total'
				/>
			</Cards>
			<Transactions>
				<Title>Listagem</Title>
				<TransactionList
					data = {response}
					keyExtractor={ (item) => `${item.id}`}
					renderItem={({ item }) => <TransactionCard data = {item}/>}
					
				/>
			</Transactions>
		</Container>
	)
}