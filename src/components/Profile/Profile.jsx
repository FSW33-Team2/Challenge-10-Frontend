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
const TABLE_HEAD = ["Name", "Job", "Employed", ""];

const TABLE_ROWS = [
  {
    name: "John Michael",
    job: "Manager",
    date: "23/04/18",
  },
  {
    name: "Alexa Liras",
    job: "Developer",
    date: "23/04/18",
  },
  {
    name: "Laurent Perrier",
    job: "Executive",
    date: "19/09/17",
  },
  {
    name: "Michael Levi",
    job: "Developer",
    date: "24/12/08",
  },
  {
    name: "Richard Gran",
    job: "Manager",
    date: "04/10/21",
  },
];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      <div className="col-span-1">


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

      </div>

      <div className="col-span-2">
      <Card className="h-full w-full overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ name, job, date }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={name}>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {job}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {date}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                    Edit
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
      </div>
    </div>
  );
}