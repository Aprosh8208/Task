import { useState } from 'react';

function User() {
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')) || []);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);

  const handleAddUser = () => {
    if (selectedUser) {
      // Editing existing user
      const updatedUsers = users.map((user) =>
        user === selectedUser ? { ...user, name, email } : user
      );
      setUsers(updatedUsers);
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      setSelectedUser(null);
    } else {
      // Adding new user
      const newUser = { name, email };
      setUsers([...users, newUser]);
      localStorage.setItem('users', JSON.stringify([...users, newUser]));
    }

    setName('');
    setEmail('');
  };

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setName(user.name);
    setEmail(user.email);
  };

  const handleDeleteUser = (index) => {
    const updatedUsers = users.filter((user, i) => i !== index);
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  return (
    <div className="container">
      <h1>User Management</h1>
      <div className="mb-3">
        <label className="form-label">Name:</label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Email:</label>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={handleAddUser}>
        {selectedUser ? 'Edit User' : 'Add User'}
      </button>
      <ul className="list-group mt-3">
        {users.map((user, index) => (
          <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
            {user.name} - {user.email}
            <div>
              <button className="btn btn-primary me-2" onClick={() => handleEditUser(user)}>Edit</button>
              <button className="btn btn-danger" onClick={() => handleDeleteUser(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default User;