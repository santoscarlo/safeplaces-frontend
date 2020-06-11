import React, { useState, useEffect } from 'react';
import moment from 'moment';

import { faCalendarAlt } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import styles from './styles.module.scss';

import 'react-dates/initialize';

function DateInput({
  handleChange,
  displayValue,
  selectedValue,
  type,
  id,
  label,
  name,
}) {
  const initialValue = displayValue ? moment(displayValue).toDate() : '';

  const handleDateChange = date => {
    let dateTime = null;

    if (date) {
      dateTime = moment(date).format();
    }

    handleChange(type, dateTime);
  };

  return (
    <div className={styles.dateInput}>
      <FontAwesomeIcon className={styles.icon} icon={faCalendarAlt} />
      {label && <label labelFor={id}>{label}</label>}
      <DatePicker
        selected={selectedValue ? moment(selectedValue).toDate() : initialValue}
        showTimeSelect
        onChange={date => handleDateChange(date)}
        timeFormat="HH:mm"
        timeIntervals={5}
        className="datePicker"
        dateFormat="MM/dd/yyyy  -  HH:mm"
        required
        id={id}
        name={name}
      />
    </div>
  );
}

export default DateInput;
