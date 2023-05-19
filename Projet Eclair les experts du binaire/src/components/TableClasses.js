import React, { useState, useEffect } from 'react';

const TableClasses = () => {
    const [classes, setClasses] = useState([]);
    const [newClass, setNewClass] = useState({
        classes: '',
        email_groupe: ''
    });

    useEffect(() => {
        // Fetch the JSON data when the component mounts
        fetch('../assets/classes.json')
            .then((response) => response.json())
            .then((data) => setClasses(data))
            .catch((error) => console.error('Error:', error));
    }, []);

    const handleDelete = (id) => {
        // Remove the class from the state based on the ID
        setClasses((prevClasses) => prevClasses.filter((cls) => cls.id !== id));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewClass((prevClass) => ({
            ...prevClass,
            [name]: value
        }));
    };

    const handleAddClass = () => {
        // Generate a new unique ID
        const id = classes.length + 1;
        // Create a new class object
        const newClassObj = {
            id,
            classes: newClass.classes,
            email_groupe: newClass.email_groupe
        };
        // Update the state with the new class
        setClasses((prevClasses) => [...prevClasses, newClassObj]);
        // Clear the input fields
        setNewClass({ classes: '', email_groupe: '' });
    };

    return (
        <div class="is-centered column">
            <table class="table is-stripped is-fullwidth">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Class Name</th>
                        <th>Email Group</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {classes.map((cls) => (
                        <tr key={cls.id}>
                            <td>{cls.id}</td>
                            <td>{cls.classes}</td>
                            <td>{cls.email_groupe}</td>
                            <td>
                                <button class="button" onClick={() => handleDelete(cls.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                <h2 class="title">Ajouter une Classe</h2>
                <label class="label">
                    Nom:
                    <input class="input"
                        type="text"
                        name="classes"
                        value={newClass.classes}
                        onChange={handleInputChange}
                    />
                </label>
                <label class="label">
                    Email de Group:
                    <input class="input"
                        type="text"
                        name="email_groupe"
                        value={newClass.email_groupe}
                        onChange={handleInputChange}
                    />
                </label>
                <button class="button" onClick={handleAddClass}>Ajouter une classe</button>
            </div>
        </div>
    );
};

export default TableClasses;