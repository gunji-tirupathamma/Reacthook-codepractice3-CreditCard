// Write your code here
import {useState} from 'react'

import {
  MainContainer,
  CreditCardContainer,
  CreditCardHeading,
  HorizontalLine,
  CardDetailsContainer,
  CardNumberDisplay,
  CardHolderName,
  CardHolderNameDisplay,
  PaymentMethodContainer,
  PaymentMethodHeading,
  InputCardNumber,
  InputCardHolderName,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [cardHolderName, setCardHolderName] = useState('')

  const onChangeCardNumber = event => {
    setCardNumber(event.target.value)
  }

  const onChangeCardholderName = event => {
    setCardHolderName(event.target.value)
  }

  return (
    <MainContainer>
      <CreditCardContainer>
        <CreditCardHeading>Credit Card</CreditCardHeading>
        <HorizontalLine />
        <CardDetailsContainer data-testid="creditCard">
          <CardNumberDisplay>{cardNumber}</CardNumberDisplay>
          <CardHolderName>CARDHOLDER NAME</CardHolderName>
          <CardHolderNameDisplay>
            {cardHolderName.toUpperCase()}
          </CardHolderNameDisplay>
        </CardDetailsContainer>
      </CreditCardContainer>
      <PaymentMethodContainer>
        <PaymentMethodHeading>Payment Method</PaymentMethodHeading>
        <InputCardNumber
          type="text"
          placeholder="Card Number"
          onChange={onChangeCardNumber}
        />
        <InputCardHolderName
          type="text"
          placeholder="Cardholder Name"
          onChange={onChangeCardholderName}
        />
      </PaymentMethodContainer>
    </MainContainer>
  )
}

export default CreditCard
