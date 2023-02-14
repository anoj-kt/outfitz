import styled from "styled-components";
import Button from '../../components/button/button.component';
import { theme } from '../../styles/theme.styles';

export const PaymentFormContainer = styled.div`
    /* min-height: calc(100vh - 10rem - ${theme.navbarHeight}); */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
`;

export const FormContainer = styled.form`
    min-width: 500px;
`;  

export const PaymentButton = styled(Button)`
    margin-left: auto;
    margin-top: 30px;
`;