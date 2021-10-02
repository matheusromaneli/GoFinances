import React, {useState} from 'react';
import { Button } from '../../components/Forms/Button';
import { Input } from '../../components/Forms/Input';
import { Selector } from '../../components/Forms/Selector';
import { TransactionTypeButton } from '../../components/Forms/TransactionTypeButton';
import { 
    Container,
    Header,
    Title,
    Form,
    Fields,
    TypeField
} from './styles';

export function Register(){
    const [typeSelect, setTypeSelect] = useState('');

    function handleTransactionCardSelected(type:string){
        setTypeSelect(type);
    }

    return(
        <Container>
            <Header> 
                <Title>
                    Cadastro
                </Title> 
            </Header>
            <Form>
                <Fields>
                    <Input placeholder= "Nome"/>
                    <Input placeholder= "Preço"/>
                    <TypeField>
                        <TransactionTypeButton 
                            type = "up" 
                            title = "Income" 
                            isActive = {typeSelect === 'up'}
                            onPress = {() => handleTransactionCardSelected('up')}
                        />
                        <TransactionTypeButton 
                            type = "down" 
                            title = "Outcome" 
                            isActive = {typeSelect === 'down'}
                            onPress = {() => handleTransactionCardSelected('down')}
                        />
                    </TypeField>
                    <Selector title = "Categoria" data={["Casa", "Carro", "Alimentação", "Venda"]}/>
                </Fields>
                <Button title = "Enviar"/>
            </Form>
        </Container>
    )
}