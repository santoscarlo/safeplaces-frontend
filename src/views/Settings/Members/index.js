import React, { useState } from 'react';
import { container, title } from './styles.module.scss';
import { TextInput, Select } from '@wfp/ui';
import emailValidator from '../../../helpers/emailValidator';

const Members = () => {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const onEmail = ({ target: { value } }) => {
    if (value.length) {
      setIsValidEmail(emailValidator(value));
    }
    setEmail(value);
  };

  return (
    <div className={container}>
      <h3 className={title}>Add new member</h3>
      <TextInput
        id="email-input"
        hideLabel
        labelText={null}
        onChange={onEmail}
        autoCorrect="off"
        autoCapitalize="off"
        name="email"
        invalid={email.length && !isValidEmail}
        invalidText={'Please enter a valid email'}
      />
      <h3 className={title}>Existing members</h3>
    </div>
  );
};

export default Members;
