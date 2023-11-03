import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import logoDIVINE from '../assets/logoDIVINE.png';
import googleLogo from '../assets/google.png';

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [registrationMessage, setRegistrationMessage] = useState("");

  const handleSignUp = async () => {
    if (!agreeToTerms) {
      alert("You must agree to the terms of service.");
      return;
    }

  
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    } else if (password.length < 8 || !/\d/.test(password) || !/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/[!@#$%^&*]/.test(password)) {
      setPasswordError("Password must be at least 8 characters and include numbers, lowercase and uppercase letters, and special characters.");
      return;
    } else {
      setPasswordError("");
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setEmailError("Invalid email format");
      return;
    } else {
      setEmailError("");
    }

    try {
      const response = await axios.post("/api/signup", {
        name,
        email,
        password,
      confirmPassword,
      });

    
      console.log("User registered successfully", response.data);
    } catch (error) {
  
      console.error("Registration failed", error);
    }
  };


  return (
    <section className="bg-[#FEFAF0] dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="#" className="flex items-center mb-4 text-xl font-semibold text-gray-900 dark:text-white">
          <img src={logoDIVINE} className="w-[8rem] self-center" alt="DIVINE Logo" />
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-2 md:space-y-2 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign up for a new account
            </h1>
            <form className="space-y-2 md:space-y-2">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="User Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Email"
                  required
                />
                {emailError && <p className="text-red-600">{emailError}</p>}
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
                {passwordError && <p className="text-red-600">{passwordError}</p>}
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
                {passwordError && <p className="text-red-600">{passwordError}</p>}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      checked={agreeToTerms}
                      onChange={(e) => setAgreeToTerms(e.target.checked)}
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="terms" className="text-gray-500 dark:text-gray-300">
                      I agree to the <Link to="/terms" className="text-primary-600 hover:underline dark:text-primary-500">Terms of Service</Link>
                    </label>
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={handleSignUp}
                className="text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover-bg-primary-700 dark:focus:ring-primary-800 w-full"
              >
                Sign up
              </button>
              <div className="flex items-center my-2">
                <div className="flex-grow border-b border-gray-300 dark:border-gray-600"></div>
                <p className="text-gray-500 dark:text-gray-300 mx-2">or</p>
                <div className="flex-grow border-b border-gray-300 dark:border-gray-600"></div>
              </div>
              <button
                type="button"
                className="text-black bg-[#FEFAF0] hover:bg-[#FEFAF0] focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover-[#FEFAF0] dark:focus:ring-red-800 w-full"
              >
                Sign up with Google
                <img src={googleLogo} alt="Google Logo" className="w-5 h-5 inline-block ml-2" />
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account? <Link to="/signin" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign in</Link>
              </p>
              {registrationMessage && <p>{registrationMessage}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
