import { useState } from 'react';
import './Form.css'
import axios from 'axios';

const API_KEY = 'OhioHealth666';
function Form() {
    const [formData, setFormData] = useState({ firstName: '', city: '', yearOfJoining: '' });
    const [data, setData] = useState([]);
    const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSave = async () => {
        if (formData.yearOfJoining < new Date().getFullYear() - 5) {
            alert("Year must be within the last 5 years");
            return;
        }

        await axios.post('https://localhost:7024/api/user', formData, {
            headers: { 'X-API-KEY': API_KEY }
        });
        
        setFormData({ firstName: '', city: '', yearOfJoining: '' });

    };

    const handleRetrieve = async () => {
        const res = await axios.get('https://localhost:7024/api/user', {
            headers: { 'X-API-KEY': API_KEY }
        });
        setData(res.data);
    };

    return (
        <div className="container">
            <h2>Save User Information</h2>
            <div className="form-container">
                <input
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="input-field"
                />
                <input
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleChange}
                    className="input-field"
                />
                <input
                    name="yearOfJoining"
                    placeholder="Year of Joining"
                    type="number"
                    value={formData.yearOfJoining}
                    onChange={handleChange}
                    className="input-field"
                />
                <div className="button-container">
                    <button onClick={handleSave} className="btn btn-save">Save</button>
                    <button onClick={handleRetrieve} className="btn btn-retrieve">Retrieve</button>
                </div>
            </div>
            <div className="data-list">
                <ul>
                    {data.map((d, i) => (
                        <li key={i} className="data-item">{d.firstName}, {d.city}, {d.yearOfJoining}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Form;
