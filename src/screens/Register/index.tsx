import React, {useState} from 'react';
import {TouchableWithoutFeedback, Keyboard} from 'react-native';
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
    const [name,setName] = useState('');
    const [amount, setAmount] = useState('');
    const [content, setContent] = useState('');


    function handleTransactionCardSelected(type:string){
        setTypeSelect(type);
    }

    function handleSubmitForm(){
        if ((typeSelect ==='up' || typeSelect ==='down')
            && name && amount && content){
            const type = typeSelect === 'up'? 'Income' : 'Outcome';
            const data ={
                type: type,
                name: name,
                amount: amount,
                content: content
            }
            console.log(data);
            setTypeSelect('');
            setName('');
            setAmount('');
        }
    }

    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Container>
                <Header> 
                    <Title>
                        Cadastro
                    </Title> 
                </Header>
                <Form>
                    <Fields>
                        <Input 
                            placeholder= "Nome"
                            value= {name}
                            onChangeText= {setName}
                            autoCapitalize = 'sentences'
                        />
                        <Input 
                            placeholder= "Preço"
                            value= {amount}
                            onChangeText= {setAmount}
                            keyboardType= "number-pad"

                        />
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
                        <Selector 
                            placeholder = "Categoria"
                            data={["Casa", "Carro", "Alimentação", "Venda"]}
                            onSelect= {setContent}
                        />
                    </Fields>
                    <Button 
                        title = "Enviar"
                        onPress = {handleSubmitForm}
                    />
                </Form>
            </Container>
        </TouchableWithoutFeedback>
    )
}