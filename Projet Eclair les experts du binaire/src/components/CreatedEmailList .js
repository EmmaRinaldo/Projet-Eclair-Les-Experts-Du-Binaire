import React from 'react';
import EmailProgramming from './EmailProgramming';

const CreatedEmailList = () => {
  const emails = [
    // Sample data for emails, you can replace it with actual data from your app state or API
    { name: 'Email 1', sendDate: '2023-05-18', followUpDate: '2023-05-25', class: 'Class A', form: 'Form 1' },
    { name: 'Email 2', sendDate: '2023-05-20', followUpDate: '2023-05-27', class: 'Class B', form: 'Form 2' },
  ];

  return (
    <div class="is-centered column">
      <h2 class="title is-3">Liste d'E-mail Programmer</h2>
      <table class="table is-stripped is-fullwidth">
        <thead>
          <tr>
            <th>Name</th>
            <th>Send Date</th>
            <th>Follow-up Date</th>
            <th>Class</th>
            <th>Form</th>
          </tr>
        </thead>
        <tbody>
          {emails.map((email, index) => (
            <tr key={index}>
              <td>{email.name}</td>
              <td>{email.sendDate}</td>
              <td>{email.followUpDate}</td>
              <td>{email.class}</td>
              <td>{email.form}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>

        <EmailProgramming />

      </div>
    </div>
  );
};

export default CreatedEmailList;