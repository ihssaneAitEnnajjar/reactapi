import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock  } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
import axios from 'axios';


const LoginSignup = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleLogin = () => {
        axios.post('http://127.0.0.1:8000/api/login', formData)
            .then(response => {
                console.log(response.data); // Manipuler la réponse comme nécessaire

            })
            .catch(error => {
                console.error(error);
            });
    };
    useEffect(() => {
        const login = async () => {
            try {
                const response = await axios.post('http://127.0.0.1:8000/api/login', formData);
                console.log(response.data); // Manipuler la réponse comme nécessaire
                // Redirection vers '/Productlist' après la connexion réussie
                window.location.href = '/Productlist';
            } catch (error) {
                console.error(error);
            }
        };

        if (formData.email && formData.password) {
            login();
        }
    }, [formData]);

    return (
        <section className="vh-100" style={{ backgroundColor: "#eee" }}>
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11">
                        <div className="card text-black" style={{ borderRadius: "25px" }}>
                            <div className="card-body p-md-3">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                                        <form className="mx-1 mx-md-4">
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <FontAwesomeIcon icon={faUser} className="fa-lg me-3 fa-fw" />
                                                <div className="form-outline flex-fill mb-0">
                                                <input 
    type="text" 
    id="form3Example1c" 
    className="form-control" 
    placeholder="Your Email"
    name="email"
    value={formData.email}
    onChange={handleInputChange}
/>
                                               
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <FontAwesomeIcon icon={faLock} className="fa-lg me-3 fa-fw" />
                                                <div className="form-outline flex-fill mb-0">
                                                    <input 
                                                        type="password" 
                                                        id="form3Example4c" 
                                                        className="form-control" 
                                                        placeholder="Your Password" 
                                                        name="password"
                                                        value={formData.password}
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-center mx-md-4 mb-3 mb-lg-4">
                                                <button type="button" className="btn btn-primary btn-lg px-5" style={{ backgroundColor: 'lightblue', color: 'black' }} onClick={handleLogin}>Sign in</button>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span>Or login with:</span>
                                                <FontAwesomeIcon icon={faFacebookF} className="me-3 ms-3" style={{ color: '#211C6A' }} />
                                                <FontAwesomeIcon icon={faGoogle} className="me-3" style={{ color: '#FF6868' }} />
                                                <FontAwesomeIcon icon={faTwitter} />
                                                <div className="register-link">
                                                    <a href="/Register" style={{ color: 'black', fontWeight: 'lighter' }}>Sign up now</a>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" alt="Registration Illustration" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p className="text-center">Copyright @2024 TestBrand</p>
            </div>
        </section>
    );
}

export default LoginSignup;
