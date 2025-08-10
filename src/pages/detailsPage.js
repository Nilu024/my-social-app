import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DetailsPage = () => {
  const [form, setForm] = useState({
    username: "",
    name: "",
    bio: "",
    avatar: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save to localStorage or global state for profilePage to use
    localStorage.setItem("profileData", JSON.stringify(form));
    navigate("/profile");
  };

  return (
    <div
      style={{
        maxWidth: 400,
        margin: "2rem auto",
        padding: 24,
        border: "1px solid #eee",
        borderRadius: 8,
      }}
    >
      <h2>Enter Your Profile Details</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 16 }}>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: 8, marginTop: 4 }}
          />
        </div>
        <div style={{ marginBottom: 16 }}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: 8, marginTop: 4 }}
          />
        </div>
        <div style={{ marginBottom: 16 }}>
          <label>Bio</label>
          <textarea
            name="bio"
            value={form.bio}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: 8, marginTop: 4 }}
          />
        </div>
        <div style={{ marginBottom: 16 }}>
          <label>Avatar Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                  setForm({ ...form, avatar: reader.result });
                };
                reader.readAsDataURL(file);
              }
            }}
            style={{ width: "100%", padding: 8, marginTop: 4 }}
          />
          {form.avatar && (
            <img
              src={form.avatar}
              alt="Avatar Preview"
              style={{
                width: 80,
                height: 80,
                borderRadius: "50%",
                marginTop: 8,
                objectFit: "cover",
              }}
            />
          )}
        </div>
        <button
          type="submit"
          style={{
            padding: "8px 24px",
            borderRadius: 4,
            border: "none",
            background: "#1976d2",
            color: "#fff",
          }}
        >
          Save & View Profile
        </button>
      </form>
    </div>
  );
};

export default DetailsPage;
