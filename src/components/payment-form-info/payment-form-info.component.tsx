import { useState, FormEvent, ChangeEvent } from 'react';

import FormInput from '../../components/form-input/form-input.component';

const defaultFormFields = {
  displayName: '',
  email: '',
  street: '',
  houseNr: '',
  postCode: '',
  city: '',
};

const PaymentFormInfo = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, street, houseNr, postCode, city } = formFields;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <>
      <FormInput
        label='Name'
        type='text'
        required
        onChange={handleChange}
        name='displayName'
        value={displayName}
      />
      <FormInput
        label='Email'
        type='text'
        required
        onChange={handleChange}
        name='email'
        value={email}
      />
      <FormInput
        label='Street'
        type='text'
        required
        onChange={handleChange}
        name='street'
        value={street}
      />
      <FormInput
        label='House Number'
        type='text'
        required
        onChange={handleChange}
        name='houseNr'
        value={houseNr}
      />
      <FormInput
        label='Post Code'
        type='text'
        required
        onChange={handleChange}
        name='postCode'
        value={postCode}
      />
      <FormInput
        label='City'
        type='text'
        required
        onChange={handleChange}
        name='city'
        value={city}
      />
    </>
  );
};

export default PaymentFormInfo;
