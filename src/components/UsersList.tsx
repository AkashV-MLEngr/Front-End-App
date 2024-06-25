import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { RegistrationData } from '../types/types';
const UsersList: React.FC = () => {
  const [users, setUsers] = useState<RegistrationData[]>([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/users');
        setUsers(response.data);
      } catch (error) {
        console.error('There was an error fetching the users:', error);
      }
    };
    fetchUsers();
  }, []);
  return (
    <div className="container mt-5">
      <h2>Registered Users</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>User Type</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.phoneNumber}</td>
              <td>{user.user_type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default UsersList;