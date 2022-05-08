import styled from "styled-components"


export const App = styled.div`
font-family: sans-serif;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 20px;
height: 100vh;
font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
background-color: #f8f9fd;
`

export const InputText = styled.input`
height: 25px;
border: 1px solid rgba(0, 0, 0, 0.2);
`

export const InputPassword = styled.input`
height: 25px;
border: 1px solid rgba(0, 0, 0, 0.2);
`
export const SubmitBtn = styled.button`
 margin-top: 10px;
  cursor: pointer;
  font-size: 15px;
  background: #01d28e;
  border: 1px solid #01d28e;
  color: #fff;
  padding: 10px 20px;

//   &:hover ${SubmitBtn} {
//     background: #6cf0c2;
  }
 `

export const ButtonContainer = styled.div`
display: flex;
justify-content: center;
`


export const SuccesForm = styled.div`
background-color: white;
padding: 2rem;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)
`

export const Error = styled.button`
  color: red;
  font-size: 12px;
`

export const Title = styled.button`
font-size: 25px;
margin-bottom: 20px;
`

export const InputContainer = styled.div`
display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 10px;
`
{
    App, Title, Error, InputContainer, SuccesForm,
        InputPassword, InputText, ButtonContainer,
        SubmitBtn
}






















