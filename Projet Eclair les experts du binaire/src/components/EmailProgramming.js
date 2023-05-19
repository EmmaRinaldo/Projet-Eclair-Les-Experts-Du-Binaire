import React, { useState } from 'react';
import Sidebar from './Sidebar';

const EmailProgramming = () => {
  const [name, setName] = useState('');
  const [dateSent, setDateSent] = useState('');
  const [reminderDate, setReminderDate] = useState('');
  const [closingDate, setClosingDate] = useState('');
  const [classText, setClassText] = useState('');
  const [form, setForm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log('Submitted:---', name, dateSent, reminderDate, closingDate, classText, form);
    // Reset form fields
    setName('');
    setDateSent('');
    setReminderDate('');
    setClosingDate('');
    setClassText('');
    setForm('');
  };

  return (
    <div className="container">

      <div className="form-container">
        <h2 class="title is-3">Programmer un E-mail</h2>
        <form onSubmit={handleSubmit}>
          <label className="form-label">
            Name:
            <input
              className="form-input"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <br />

          <label className="form-label">
            Date Sent:
            <input
              className="form-input"
              type="date"
              value={dateSent}
              onChange={(e) => setDateSent(e.target.value)}
            />
          </label>
          <br />

          <label className="form-label">
            Reminder Date:
            <input
              className="form-input"
              type="date"
              value={reminderDate}
              onChange={(e) => setReminderDate(e.target.value)}
            />
          </label>
          <br />

          <label className="form-label">
            Closing Date:
            <input
              className="form-input"
              type="date"
              value={closingDate}
              onChange={(e) => setClosingDate(e.target.value)}
            />
          </label>
          <br />
          <label className="form-label">
            Class:
            <input
              className="form-input"
              type="text"
              value={classText}
              onChange={(e) => setClassText(e.target.value)}
            />
            <br />
            <label className="form-label">
              Form:
              <input
                className="form-input"
                type="text"
                value={form}
                onChange={(e) => setForm(e.target.value)}
              />
            </label>
          </label>

          <button className="form-submit-button" type="submit" >Submit</button>
        </form>
      </div>
    </div>
  );
};

export default EmailProgramming;