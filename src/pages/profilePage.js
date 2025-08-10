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
        maxWidth: 500,
        margin: "2rem auto",
        padding: 24,
        border: "1px solid #eee",
        borderRadius: 8,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", marginBottom: 24 }}>
        <img
          src={profile.avatar}
          alt={profile.username}
          style={{
            width: 100,
            height: 100,
            borderRadius: "50%",
            marginRight: 24,
          }}
        />
        <div>
          <h2 style={{ margin: 0 }}>{profile.name}</h2>
          <p style={{ color: "#888", margin: "4px 0" }}>@{profile.username}</p>
          <p style={{ margin: "8px 0" }}>{profile.bio}</p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 16,
        }}
      >
        <div>
          <strong>{profile.posts}</strong>
          <div>Posts</div>
        </div>
        <div>
          <strong>{profile.followers}</strong>
          <div>Followers</div>
        </div>
        <div>
          <strong>{profile.following}</strong>
          <div>Following</div>
        </div>
      </div>
      <button
        style={{
          padding: "8px 24px",
          borderRadius: 4,
          border: "none",
          background: "#1976d2",
          color: "#fff",
        }}
        onClick={() => navigate("/")}
      >
        Edit Profile
      </button>
    </div>
  );
};

export default ProfilePage;
