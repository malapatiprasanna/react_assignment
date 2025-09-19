import React, { useEffect, useState } from "react";
import { Layout, message } from "antd";
import { fetchUsers } from "./services/api";
import UserGrid from "./components/UserGrid";
import UserModalForm from "./components/UserModalForm";

const { Content } = Layout;

export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const [editingUser, setEditingUser] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    fetchUsers()
      .then((data) => {
        const enriched = data.map((u) => ({ ...u, liked: false }));
        setUsers(enriched);
        setLoading(false);
      })
      .catch(() => {
        message.error("Failed to load users");
        setLoading(false);
      });
  }, []);

  function handleLike(id) {
    setUsers((prev) =>
      prev.map((u) => (u.id === id ? { ...u, liked: !u.liked } : u))
    );
  }

  function handleDelete(id) {
    setUsers((prev) => prev.filter((u) => u.id !== id));
    message.success("User deleted");
  }

  function handleEdit(user) {
    setEditingUser(user);
    setModalOpen(true);
  }

  function handleSave(values) {
    if (!editingUser) return;
    setUsers((prev) =>
      prev.map((u) =>
        u.id === editingUser.id ? { ...u, ...values } : u
      )
    );
    setModalOpen(false);
    message.success("User updated");
  }

  return (
    <Layout style={{ background: "#fff" }}>
      <Content style={{ padding: 24 }}>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <UserGrid
            users={users}
            onLike={handleLike}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}
      </Content>

      <UserModalForm
        visible={modalOpen}
        user={editingUser}
        onCancel={() => setModalOpen(false)}
        onSave={handleSave}
      />
    </Layout>
  );
}
