// import React, { useState } from 'react';
// import axios from 'axios';

// const MoviePoster = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [movies, setMovies] = useState([]);

//   const handleSearch = async () => {
//       const response = await axios.get(`https://www.omdbapi.com/?s=${searchTerm}&apikey=31edf87f`);
//     const moviesData = response.data.Search || [];
//     setMovies(moviesData);
//   };

//   const handleDownload = async (url) => {
//     const response = await axios.get(url, { responseType: 'blob' });
//     const downloadUrl = window.URL.createObjectURL(new Blob([response.data]));
//     const link = document.createElement('a');
//     link.href = downloadUrl;
//     link.setAttribute('download', 'movie_poster.jpg');
//     document.body.appendChild(link);
//     link.click();
//     link.parentNode.removeChild(link);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Enter movie title"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <button onClick={handleSearch}>Search</button>
//       {movies.map((movie, index) => (
//         <div key={index} style={{ display: 'inline-block', margin: '10px' }}>
//           <img src={movie.Poster} alt="Movie Poster" style={{ width: '200px', height: '900px' }} />
//           <button  onClick={() => handleDownload(movie.Poster)}>Download</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MoviePoster;

// import React, { useState } from 'react';

// const FormValidationExample = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//   });
//   const [errors, setErrors] = useState({});
  
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validateForm(formData);
//     if (Object.keys(validationErrors).length === 0) {
//       // Form is valid, submit the data
//       console.log('Form submitted:', formData);
//       // Reset form state
//       setFormData({
//         username: '',
//         email: '',
//         password: '',
//       });
//     } else {
//       // Form is invalid, set errors state
//       setErrors(validationErrors);
//     }
//   };

//   const validateForm = (data) => {
//     let errors = {};
//     if (!data.username.trim()) {
//       errors.username = 'Username is required';
//     }
//     if (!data.email.trim()) {
//       errors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(data.email)) {
//       errors.email = 'Email is invalid';
//     }
//     if (!data.password.trim()) {
//       errors.password = 'Password is required';
//     } else if (data.password.length < 6) {
//       errors.password = 'Password must be at least 6 characters long';
//     }
//     return errors;
//   };

//   return (
//     <form onSubmit={handleSubmit} style={{background:"gray"}}>
//       <div>
//         <label>Username:</label>
//         <input
//           type="text"
//           name="username"
//           value={formData.username}
//           onChange={handleChange}
//         />
//         {errors.username && <span className="error">{errors.username}</span>}
//       </div>
//       <div>
//         <label>Email:</label>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//         />
//         {errors.email && <span className="error">{errors.email}</span>}
//       </div>
//       <div>
//         <label>Password:</label>
//         <input
//           type="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//         />
//         {errors.password && <span className="error">{errors.password}</span>}
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default FormValidationExample;

import React, { useState } from 'react';

function MyForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const validateForm = () => {
    let newErrors = { };

    if (!formData.name) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email) {
      newErrors.email = 'Name is required';
    }

  //   if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
  //     newErrors.email = 'Please enter a valid email';
  //   }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      // Submit form data (e.g., send to server)
      console.log('Form submitted successfully!', formData);
      setFormData({ name: '', email: '' });
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={{ border: '1px solid red' }}
        />
        {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          // id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={{border: errors.email ? "1px solid red":"1px solid red"}}
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;