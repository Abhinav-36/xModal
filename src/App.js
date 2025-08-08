import { useState } from 'react';
import './App.css';
import Modal from './Modal';


function App() {
  const [isOpen,setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    dob: '',
    phone: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const isValidForm = () => {
    if(formData.phone.length !== 10){
      alert("Invalid phone number. Please enter a 10-digit phone number.")
      return false;
    }

    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const dd = String(today.getDate()).padStart(2, '0');

    const currentDate = `${yyyy}-${mm}-${dd}`;
    if(formData.dob > currentDate){
      alert("Invalid date of birth. Date of birth cannot be in the future.")
      return false;
    }

    return true;
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    if(isValidForm()){
      console.log('Form submitted:', formData);
      setIsOpen(false);
      setFormData({
      username: '',
      email: '',
      dob: '',
      phone: '',
    });
    }
    
  };

  return (
    <div className='container'>
      <h1>User Details Modal</h1>
      <button onClick={() => {setIsOpen(true)}} type='button' className='btn'>Open Form</button>
      <Modal onClose={() => {setIsOpen(false)}} isOpen={isOpen}>
        <h2 className="modal-title">Fill Details</h2>
        <form onSubmit={handleSubmit} className="modal-form">
          <label htmlFor="username">
            Username:
            <input
              id="username"
              name="username"
              type="text"
              value={formData.username || ''}
              onChange={handleChange}
              required
            />
          </label>

          <label htmlFor="email">
            Email:
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email || ''}
              onChange={handleChange}
              required
            />
          </label>

          <label htmlFor="phone">
            Phone Number:
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone || ''}
              onChange={handleChange}
              required
            />
          </label>

          <label htmlFor="dob">
            Date of Birth:
            <input
              id="dob"
              name="dob"
              type="date"
              value={formData.dob || ''}
              onChange={handleChange}
              required
            />
          </label>

          <div className="modal-buttons">
            <button className='submit-button' type="submit">Submit</button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default App;
