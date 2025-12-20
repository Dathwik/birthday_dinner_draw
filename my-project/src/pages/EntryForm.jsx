import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

/* ---------- Validation Regex ---------- */
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const instagramRegex = /^@?[a-zA-Z0-9._]{1,30}$/;
const nameRegex = /^[A-Za-z][A-Za-z\s'-]{1,29}$/;
const usPhoneRegex =
  /^(\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/;

function EntryForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailOrInstagram: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  /* ---------- Redirect after submit ---------- */
  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        navigate("/");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [submitted, navigate]);

  /* ---------- Handlers ---------- */
  function handleChange(e) {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));

    setErrors(prev => ({
      ...prev,
      [name]: undefined,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (loading) return;

    const newErrors = {};

    if (!nameRegex.test(formData.firstName.trim())) {
      newErrors.firstName =
        "First name must be 2–30 letters (letters, spaces, - ').";
    }

    if (!nameRegex.test(formData.lastName.trim())) {
      newErrors.lastName =
        "Last name must be 2–30 letters (letters, spaces, - ').";
    }

    const value = formData.emailOrInstagram.trim();
    if (!emailRegex.test(value) && !instagramRegex.test(value)) {
      newErrors.emailOrInstagram =
        "Enter a valid email or Instagram handle.";
    }

    if (!usPhoneRegex.test(formData.phone.trim())) {
      newErrors.phone = "Enter a valid US phone number.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      await addDoc(collection(db, "entries"), {
        firstName: formData.firstName.trim(),
        lastName: formData.lastName.trim(),
        emailOrInstagram: formData.emailOrInstagram.trim(),
        phone: formData.phone.trim(),
        createdAt: serverTimestamp(),
      });

      setSubmitted(true);
    } catch (error) {
      console.error("Firestore error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  /* ---------- Render ---------- */
  return (
    <div className="background">
      {/* 🎈 Balloons */}
      <div className="balloon-container">
        <span className="balloon red"></span>
        <span className="balloon blue"></span>
        <span className="balloon pink"></span>
        <span className="balloon purple"></span>
        <span className="balloon gold"></span>
      </div>

      {/* Title */}
      {!submitted && (
        <div className="title">
          <h1><i>Fill in the details!!</i></h1>
        </div>
      )}

      {/* Form / Success */}
      <div className="form-card">
        {!submitted ? (
          <form className="entry-form" onSubmit={handleSubmit}>
            <label>
              First Name
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
              {errors.firstName && (
                <span className="form-error">{errors.firstName}</span>
              )}
            </label>

            <label>
              Last Name
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
              {errors.lastName && (
                <span className="form-error">{errors.lastName}</span>
              )}
            </label>

            <label>
              Email or Instagram
              <input
                type="text"
                name="emailOrInstagram"
                value={formData.emailOrInstagram}
                onChange={handleChange}
              />
              {errors.emailOrInstagram && (
                <span className="form-error">
                  {errors.emailOrInstagram}
                </span>
              )}
            </label>

            <label>
              Phone Number
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && (
                <span className="form-error">{errors.phone}</span>
              )}
            </label>

            <button
              type="submit"
              className="enter-draw-button"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit Entry"}
            </button>
          </form>
        ) : (
          <div className="success-message">
            <h2>🎉 Entry Submitted!</h2>

            <p>
              Thank you for entering the draw.
              <br />
              Your details have been successfully sent.
            </p>

            <p className="redirect-note">
              You’ll be redirected to the home page in a few seconds.
            </p>

            <button
              className="enter-draw-button"
              onClick={() => navigate("/")}
            >
              Go Back to Home
            </button>
          </div>
        )}
      </div>

      {/* Instructions */}
      {!submitted && (
        <div className="instructions-card">
          <div className="instructions-title">
            <h3><i>How the Draw Works</i></h3>
          </div>
          <ul>
            <li>Fill in all details accurately.</li>
            <li>Enter either a valid email or Instagram handle.</li>
            <li>Only one entry per person is allowed.</li>
            <li>The winner will be contacted before the event.</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default EntryForm;
