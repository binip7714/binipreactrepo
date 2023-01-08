import React, { useState } from 'react';

const AddNames = () => {
    const [names, setNames] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [edit, setEdit] = useState(false);
    const [editIndex, setEditIndex]=useState(-1);
    const { firstName, lastName } = inputValue;

    const handleFirstName = ({ target: { value } }) => {
        setInputValue({ ...inputValue, firstName: value });
    };

    const handLastName = ({ target: { value } }) => {
        setInputValue({ ...inputValue, lastName: value });
    };

    const handleSubmit = () => {
        setNames((prevValue) => [...prevValue,inputValue]);
        setInputValue({ ...inputValue, firstName: '', lastName: '' });
    };

    const handleEdit = ({ target: { value } }) => {
        setEdit(true);
        setEditIndex(value);
        setInputValue(names[value]);
    };
    const handleDelete=({ target: { value } })=>{
        setNames((prev)=>{
            const newNames=[...prev]
            newNames.splice(value,1)
            return newNames
        })
    }

    return (
        <>
            <form>
                <label>FirstName:</label>
                <input type="text" value={firstName} onChange={handleFirstName}/>
                <label>LastName:</label>
                <input type="text" value={lastName} onChange={handLastName}/>
                <button type="button" onClick={handleSubmit}>
                    {edit ? 'Update' : 'Add Names'}
                </button>
                <ul>
                    {names.map((names, index) => (
                        <ul key={index}>
                            <li>
                                {names.firstName}
                                {names.lastName}
                                <button type="button" onClick={handleEdit}>Edit</button>
                                <button type="button" onClick={handleDelete}>Delete</button>
                            </li>
                        </ul>
                    ))}
                </ul>
            </form>
        </>
    );
};

export default AddNames;