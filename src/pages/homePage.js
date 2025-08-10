import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const mockPosts = [
  {
    id: 1,
    username: "johndoe",
    avatar: "https://i.pravatar.cc/150?img=3",
    content: "Hello, this is my first post!",
    createdAt: "2025-08-10 10:00",
  },
  {
    id: 2,
    username: "janedoe",
    avatar: "https://i.pravatar.cc/150?img=5",
    content: "Excited to join this platform!",
    createdAt: "2025-08-10 11:00",
  },
];

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate fetching posts from an API
    setTimeout(() => {
      setPosts(mockPosts);
    }, 500);
  }, []);

  return (
    <div
      style={{
        maxWidth: 600,
        margin: "2rem auto",
        padding: 24,
        background: "#fff",
        border: "1px solid #e3e8ee",
        borderRadius: 12,
        boxShadow: "0 4px 24px rgba(25, 118, 210, 0.08)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 24,
        }}
      >
        <h1 style={{ color: "#1976d2", margin: 0, fontSize: "2rem" }}>Social App</h1>
        <div>
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
              marginRight: 8,
              boxShadow: "0 1px 2px rgba(25,118,210,0.04)",
            }}
          >
            Home
          </button>
          <button
            onClick={() => navigate("/profile")}
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
            Profile
          </button>
        </div>
      </div>
      <h2 style={{ color: "#1976d2", marginBottom: 20 }}>All Users' Posts</h2>
      {posts.length === 0 ? (
        <div style={{ color: "#888", textAlign: "center", padding: 32 }}>Loading posts...</div>
      ) : (
        posts.map((post) => (
          <div
            key={post.id}
            style={{
              border: "1px solid #eee",
              borderRadius: 8,
              padding: 16,
              marginBottom: 16,
              display: "flex",
              alignItems: "flex-start",
              gap: 16,
              background: "#fafbfc",
              boxShadow: "0 2px 8px rgba(25,118,210,0.03)",
            }}
          >
            <img
              src={post.avatar}
              alt={post.username}
              style={{
                width: 50,
                height: 50,
                borderRadius: "50%",
                objectFit: "cover",
                border: "2px solid #1976d2",
              }}
            />
            <div>
              <div style={{ fontWeight: "bold", color: "#1976d2" }}>{post.username}</div>
              <div style={{ margin: "8px 0", color: "#222" }}>{post.content}</div>
              <div style={{ color: "#888", fontSize: 12 }}>{post.createdAt}</div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default HomePage;