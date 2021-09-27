import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';

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
	Cards
} from './styles';

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
					amount={`R$ ${12345.32}`} 
					lastTransaction={`${13} de ${'abril'}`}
					type = 'up'
				/>
				<HighlightCard 
					title = 'Saídas'
					amount={`R$ ${1259.21}`} 
					lastTransaction={`${3} de ${'abril'}`}
					type = 'down'
				/>
				<HighlightCard 
					title = 'Total'
					amount={`R$ ${12345.00}`} 
					lastTransaction={`${1} a ${13} de ${'abril'}`}
					type = 'total'
				/>
			</Cards>
		</Container>
	)
}