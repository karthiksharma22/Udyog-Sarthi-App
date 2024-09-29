import React, { useState } from "react";
import "../styles/authform.css";

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  document.title = "Login / SignUp Udyog Saarthi App";
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
    age: "",
    gender: "",
    disability: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [loginError, setLoginError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    validateField(name, value);
  };

  const validateField = (name, value) => {
    let fieldErrors = { ...errors };

    switch (name) {
      case "fullName":
        if (!value && !isLogin) {
          fieldErrors.fullName = "Full Name is required.";
        } else {
          delete fieldErrors.fullName;
        }
        break;

      case "email":
        if (!value) {
          fieldErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          fieldErrors.email = "Email is invalid.";
        } else {
          delete fieldErrors.email;
        }
        break;

      case "password":
        if (!value) {
          fieldErrors.password = "Password is required.";
        } else if (value.length < 6) {
          fieldErrors.password = "Password must be at least 6 characters.";
        } else {
          delete fieldErrors.password;
        }
        break;

      case "phone":
        if (!value) {
          fieldErrors.phone = "Phone number is required.";
        } else if (!/^\d{10}$/.test(value)) {
          fieldErrors.phone = "Phone number must be exactly 10 digits.";
        } else {
          delete fieldErrors.phone;
        }
        break;

      case "age":
        if (!value) {
          fieldErrors.age = "Age is required.";
        } else if (parseInt(value) <= 0) {
          fieldErrors.age = "Age must be a positive number.";
        } else {
          delete fieldErrors.age;
        }
        break;

      case "gender":
        if (!value) {
          fieldErrors.gender = "Gender is required.";
        } else {
          delete fieldErrors.gender;
        }
        break;

      case "disability":
        if (!value) {
          fieldErrors.disability = "Disability is required.";
        } else {
          delete fieldErrors.disability;
        }
        break;

      default:
        break;
    }

    setErrors(fieldErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = Object.keys(formData).reduce((acc, key) => {
      validateField(key, formData[key]);
      return acc;
    }, {});

    if (isLogin) {
      if (!isRegistered) {
        setLoginError("Please complete registration before logging in!!");
        setSuccessMessage("");
      } else if (Object.keys(validationErrors).length === 0) {
        setSuccessMessage("Login Successful!!");
        setLoginError("");
      }
    } else {
      if (Object.keys(validationErrors).length === 0) {
        setIsRegistered(true);
        setSuccessMessage("Registration Successful!!");
        setLoginError("");
      } else {
        setSuccessMessage("");
      }
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        {successMessage && <p className="success">{successMessage}</p>}
        {loginError && <p className="error">{loginError}</p>}

        <div className="form-toggle">
          <button
            className={isLogin ? "active" : ""}
            onClick={() => {
              setIsLogin(true);
              setSuccessMessage("");
              setLoginError("");
            }}
          >
            Login
          </button>
          <button
            className={!isLogin ? "active" : ""}
            onClick={() => {
              setIsLogin(false);
              setSuccessMessage("");
              setLoginError("");
            }}
          >
            Sign Up
          </button>
        </div>

        <form className="form" onSubmit={handleSubmit}>
          <h2>{isLogin ? "Login Form" : "SignUp Form"}</h2>

          {!isLogin && (
            <>
              <input
                type="text"
                name="fullName"
                placeholder="Enter Full Name"
                value={formData.fullName}
                onChange={handleChange}
              />
              {errors.fullName && <p className="error">{errors.fullName}</p>}
            </>
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error">{errors.password}</p>}

          {!isLogin && (
            <>
              <input
                type="text"
                name="phone"
                placeholder="Phone Number (10 digits)"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <p className="error">{errors.phone}</p>}

              <input
                type="number"
                name="age"
                placeholder="Age"
                value={formData.age}
                onChange={handleChange}
                min="1"
              />
              {errors.age && <p className="error">{errors.age}</p>}

              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && <p className="error">{errors.gender}</p>}

              <select
                name="disability"
                value={formData.disability}
                onChange={handleChange}
              >
                <option value="">Select Disability</option>
                <option value="blindness">Blindness</option>
                <option value="lowvision">Low Vision</option>
                <option value="leprosy-cured">Leprosy Cured</option>
                <option value="hearing-impairment">Hearing Impairment</option>
                <option value="locomotor-disability">
                  Locomotor Disability
                </option>
                <option value="mental-retardation">Mental Retardation</option>
                <option value="mental-illness">Mental Illness</option>
              </select>
              {errors.disability && (
                <p className="error">{errors.disability}</p>
              )}
            </>
          )}

          <button type="submit" className={isLogin ? "login" : "signup"}>
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
      </div>
      <div className="design"></div>
    </div>
  );
}
