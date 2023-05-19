import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TableForm = () => {
    const [forms, setForms] = useState([]);
    const [newFormTitle, setNewFormTitle] = useState('');

    useEffect(() => {
        // Fetch the list of Google Forms from the server
        fetchForms();
    }, []);

    const fetchForms = async () => {
        try {
            const response = await axios.get('/api/forms');
            setForms(response.data);
        } catch (error) {
            console.error('Error fetching forms:', error);
        }
    };

    const createForm = async () => {
        try {
            const response = await axios.post('/api/forms', { title: newFormTitle });
            console.log('Form created:', response.data);

            // Clear the input and fetch the updated list of forms
            setNewFormTitle('');
            fetchForms();
        } catch (error) {
            console.error('Error creating form:', error);
        }
    };

    return (
        <div class="is-centered column">

            {/* Form Creation Section */}
            <h2 class="title is-3">Créer un nouveau formulaire</h2>
            <div>
                <input class="input"
                    type="text"
                    value={newFormTitle}
                    onChange={(e) => setNewFormTitle(e.target.value)}
                    placeholder="Enter form title"
                />
                <button class="button" onClick={createForm}>Create Form</button>
            </div>
            <br />
            <br />

            {/* Forms Table */}
            <h2 class="title is-3">Tous les formulaires</h2>
            <table class="table is-stripped is-fullwidth">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Lien de partage</th>
                    </tr>
                </thead>
                <tbody>
                    {forms.map((form) => (
                        <tr key={form.id}>
                            <td>{form.title}</td>
                            <td>{form.link}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableForm;