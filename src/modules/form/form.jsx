import React from 'react';
// import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { FormContainer, Input, TextArea, Button,StyledHr } from './formStyle';
import styled from 'styled-components';

const Text = styled.div`
    padding: 10px;
    margin-bottom: 20px;
`

const Form = (props) => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
    };

    return (
        <div>
            <FormContainer>
                <Text>
                    <h2>{props.text}</h2>
                    <div>
                        <StyledHr />
                    </div>
                    <p>{props.about}</p>
                </Text>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <Input type="text" {...register("firstName")} placeholder="First Name" />
                        <Input type="text" {...register("lastName")} placeholder="Last Name" />
                    </div>
                    <Input type="email" {...register("email")} placeholder="Email" />
                    <Input type="text" {...register("number")} placeholder="Phone Number" />
                    <Input type="text" {...register("subject")} placeholder="Subject" />
                    <TextArea placeholder="Tell Us Something..." {...register("about")} />
                    <Button type="submit">{props.btn}</Button>
                </form>
        </FormContainer>
        </div>
    );
};


export default Form;
