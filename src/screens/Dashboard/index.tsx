import React from 'react';

import { 
	Container,
	Header, 
	UserWrapper,
	UserContent, 
	UserImage, 
	UserGrettings, 
	Grettings, 
	UserName,
	Icon 
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
		</Container>
	)
}