// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  height: 100vh;
  @media screen and (min-width: 767px) {
    flex-direction: row;
  }
`

export const CreditCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #3b4b69;
  background-size: cover;
  height: 100%;
  width: 80%;
  align-self: center;
  @media screen and (min-width: 767px) {
    width: 50%;
  }
`

export const CreditCardHeading = styled.h1`
  font-size: 30px;
  font-family: Roboto;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 0px;
  @media screen and (min-width: 767px) {
    font-size: 35px;
  }
`

export const HorizontalLine = styled.hr`
  border: none;
  border-top: 2px solid #ffd773;
  margin-top: 0px;
  margin: 10px 0;
  width: 50%;
`

export const CardDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  background-size: cover;
  height: 50%;
  width: 50%;
  border-radius: 10px;
  align-self: center;
  margin-top: 20px;
`

export const CardNumberDisplay = styled.p`
  font-size: 20px;
  font-family: Roboto;
  font-weight: bold;
  color: #d3d9e0;
  text-align: left;
  padding: 10px;
`

export const CardHolderName = styled.p`
  font-size: 15px;
  font-family: Roboto;
  color: #c3cad9;
  align-self: flex-start;
  margin: 10px;
`
export const CardHolderNameDisplay = styled.p`
  font-size: 18px;
  font-family: Roboto;
  color: #c3cad9;
  align-self: flex-start;
  margin: 10px;
`
export const PaymentMethodContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  background-size: cover;
  height: 50%;
  width: 80%;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  align-self: center;
  margin: 20px;
  @media screen and (min-width: 767px) {
    width: 30%;
  }
`

export const PaymentMethodHeading = styled.h1`
  font-size: 35px;
  font-family: Roboto;
  font-weight: bold;
  color: #344e7a;
`

export const InputCardNumber = styled.input`
  background-color: #d3d9e0;
  height: 30px;
  width: 70%;
  border-top-width: 0px;
  color: #475569;
  margin: 10px;
  outline: 0px;
`

export const InputCardHolderName = styled.input`
  background-color: #d3d9e0;
  height: 30px;
  width: 70%;
  border-top-width: 0px;
  color: #475569;
  margin: 10px;
`
