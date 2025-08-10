import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./appPage.css";

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
    localStorage.setItem("profileData", JSON.stringify(form));
    navigate("/profile");
  };

  return (
    <div
      style={{
        maxWidth: 420,
        margin: "2rem auto",
        padding: 32,
        background: "#fff",
        borderRadius: 16,
        boxShadow: "0 4px 24px rgba(25, 118, 210, 0.08)",
        border: "1px solid #e3e8ee",
      }}
    >
      <h2 style={{ color: "#1976d2", marginBottom: 24, textAlign: "center" }}>
        Enter Your Profile Details
      </h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 16 }}>
          <label style={{ fontWeight: 500 }}>Username</label>
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: 8,
              marginTop: 4,
              border: "1px solid #ccc",
              borderRadius: 4,
              fontSize: "1rem",
            }}
          />
        </div>
        <div style={{ marginBottom: 16 }}>
          <label style={{ fontWeight: 500 }}>Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: 8,
              marginTop: 4,
              border: "1px solid #ccc",
              borderRadius: 4,
              fontSize: "1rem",
            }}
          />
        </div>
        <div style={{ marginBottom: 16 }}>
          <label style={{ fontWeight: 500 }}>Bio</label>
          <textarea
            name="bio"
            value={form.bio}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: 8,
              marginTop: 4,
              border: "1px solid #ccc",
              borderRadius: 4,
              fontSize: "1rem",
              minHeight: 60,
              resize: "vertical",
            }}
          />
        </div>
        <div style={{ marginBottom: 16 }}>
          <label style={{ fontWeight: 500 }}>Avatar Image</label>
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
            style={{ marginTop: 4 }}
          />
          {form.avatar && (
            <img
              src={form.avatar}
              alt="Avatar Preview"
              width={80}
              height={80}
              style={{
                borderRadius: "50%",
                marginTop: 12,
                objectFit: "cover",
                border: "2px solid #1976d2",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            />
          )}
        </div>
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px 0",
            borderRadius: 6,
            border: "none",
            background: "#1976d2",
            color: "#fff",
            fontWeight: 600,
            fontSize: "1rem",
            cursor: "pointer",
            boxShadow: "0 1px 2px rgba(25,118,210,0.08)",
            marginTop: 8,
          }}
        >
          Save & View Profile
        </button>
      </form>
    </div>
  );
}
export default DetailsPage;