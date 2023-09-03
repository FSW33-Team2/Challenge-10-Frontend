'use client';

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import React, { useState } from 'react';
 
export function ProfileCard() {

  const [email, setEmail] = useState('user@example.com');
  const [password, setPassword] = useState('yourpassword');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEditButtonClick = () => {
    // Implement logic to update email and password on server or wherever needed
    console.log('Editing...');
    console.log('New Email:', email);
    console.log('New Password:', password);
    // You can make API calls, update state, or perform any other actions here
  };

  return (
    <Card style={{ width: '400px', height: '420px', backgroundColor: '#F0F0F0'}} className="mx-auto relative">
     <Card style={{ width: '380px', height: '400px' }} className="mx-auto my-auto relative">
      <CardHeader floated={false} className="h-40 w-40 rounded-full overflow-hidden mx-auto">
        <img  
        src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg" 
        alt="profile-picture" 
        className="h-full w-full object-cover"/>
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          Username
        </Typography>
        <div className="mb-4">
            <label>Email:</label>
            <input type="email" value={email} onChange={handleEmailChange} />
          </div>
          <div className="mb-4">
            <label>Password:</label>
            <input type="password" value={password} onChange={handlePasswordChange} />
          </div>
      </CardBody>
      <Button className="mx-auto my-4 mt-0 bg-black text-white hover:bg-gray-500 font-bold py-2 px-4 rounded" onClick={handleEditButtonClick}>
        Edit
      </Button>
    </Card>
    </Card>
  );
}