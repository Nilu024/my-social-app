import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Try to load profile data from localStorage
    const stored = localStorage.getItem("profileData");
    if (stored) {
      const data = JSON.parse(stored);
      setProfile({
        ...data,
        followers: 120,
        following: 80,
        posts: 34,
      });
      setLoading(false);
    } else {
      // Simulate fetching user profile data
      setTimeout(() => {
        setProfile({
          username: "johndoe",
          name: "John Doe",
          bio: "Web developer. Coffee lover. Cat person.",
          avatar: "https://i.pravatar.cc/150?img=3",
          followers: 120,
          following: 80,
          posts: 34,
        });
        setLoading(false);
      }, 1000);
    }
  }, []);

  if (loading) {
    return <div>Loading profile...</div>;
  }

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
      <div style={{ display: "flex", justifyContent: "flex-end", gap: 12, marginBottom: 24 }}>
        <button
          onClick={() => navigate("/home")}
          style={{
            padding: "8px 20px",
            borderRadius: 6,
            border: "none",
            background: "#f5f7fa",
            color: "#1976d2",
            fontWeight: 600,
            cursor: "pointer",
            boxShadow: "0 1px 2px rgba(25,118,210,0.04)",
          }}
        >
          Home
        </button>
        <button
          onClick={() => navigate("/details")}
          style={{
            padding: "8px 20px",
            borderRadius: 6,
            border: "none",
            background: "#1976d2",
            color: "#fff",
            fontWeight: 600,
            cursor: "pointer",
            boxShadow: "0 1px 2px rgba(25,118,210,0.08)",
          }}
        >
          Edit
        </button>
      </div>
      <div style={{ display: "flex", alignItems: "center", marginBottom: 24 }}>
        <img
          src={profile.avatar}
          alt={profile.username}
          width={100}
          height={100}
          style={{
            borderRadius: "50%",
            marginRight: 28,
            border: "3px solid #1976d2",
            objectFit: "cover",
            boxShadow: "0 2px 8px rgba(25,118,210,0.08)",
          }}
        />
        <div>
          <h2 style={{ margin: 0, fontSize: "1.5rem", color: "#222" }}>{profile.name}</h2>
          <p style={{ margin: "4px 0", color: "#1976d2", fontWeight: 500 }}>@{profile.username}</p>
          <p style={{ margin: "8px 0", color: "#555" }}>{profile.bio}</p>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 24 }}>
        <div style={{ textAlign: "center" }}>
          <strong style={{ fontSize: "1.2rem", color: "#1976d2" }}>{profile.posts}</strong>
          <div style={{ color: "#888" }}>Posts</div>
        </div>
        <div style={{ textAlign: "center" }}>
          <strong style={{ fontSize: "1.2rem", color: "#1976d2" }}>{profile.followers}</strong>
          <div style={{ color: "#888" }}>Followers</div>
        </div>
        <div style={{ textAlign: "center" }}>
          <strong style={{ fontSize: "1.2rem", color: "#1976d2" }}>{profile.following}</strong>
          <div style={{ color: "#888" }}>Following</div>
        </div>
      </div>
      <h3 style={{ color: "#1976d2", marginBottom: 8 }}>Recent Posts</h3>
      <div
        style={{
          background: "#f5f7fa",
          borderRadius: 8,
          padding: 16,
          minHeight: 60,
          color: "#888",
          textAlign: "center",
        }}
      >
        <p style={{ margin: 0 }}>No posts available.</p>
      </div>
    </div>
  );
};

export default ProfilePage;