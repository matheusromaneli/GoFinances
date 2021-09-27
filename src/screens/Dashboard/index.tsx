import React from 'react';

import { 
	Container,
	Header, 
	UserWrapper, 
	UserImage, 
	UserGrettings, 
	Grettings, 
	UserName 
} from './styles';

export function Dashboard(){
	return(
		<Container>
			<Header>
				<UserWrapper>
					<UserImage source={{uri: 'https://avatars.githubusercontent.com/u/78664028?v=4'}} />
					<UserGrettings>
						<Grettings>Olá,</Grettings>
						<UserName>Matheus</UserName>
					</UserGrettings>
				</UserWrapper>
			</Header>
		</Container>
	)
}