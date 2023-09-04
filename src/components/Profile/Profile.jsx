'use client';

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";
 
export function ProfileCard() {

  const [email, setEmail] = useState('user@example.com');
  const [password, setPassword] = useState('yourpassword');
  const initialData = { email: 'user@example.com', password: 'yourpassword' };
  const [formData, setFormData] = useState(initialData);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEditButtonClick = () => {
    // Simulasikan pengambilan data pengguna dari database
    const userDataFromDatabase = {
      email: 'newuser@example.com',
      password: 'newpassword',
    };

    // Kemudian set data yang diterima dari database ke state
    setEmail(userDataFromDatabase.email);
    setPassword(userDataFromDatabase.password);

    // Setelah itu, buka modal
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalCancel = () => {
    const confirmCancel = window.confirm(
      "Apakah Anda yakin ingin membatalkan perubahan? Data akan kembali ke data awal."
    );
  
    if (confirmCancel) {
      // Kembalikan data ke data awal
      setEmail(initialData.email);
      setPassword(initialData.password);
  
      // Tutup modal setelah mengonfirmasi pembatalan
      setIsModalOpen(false);
    }
  };

  const handleSaveChanges = () => {
    // Implementasikan logika penyimpanan perubahan di sini
    console.log("Saving changes...");
    console.log("New Email:", email);
    console.log("New Password:", password);

    // Setelah menyimpan perubahan, tutup modal
    setIsModalOpen(false);
  };

const TABLE_HEAD = ["Username", "Game", "Score", "Medals"];

const TABLE_ROWS = [
  {
    username: "John Michael",
    game: "Rock,Paper,Scissors",
    score: "4000",
    achievement: "",
  },
  {
    username: "John Michael",
    game: "Rock,Paper,Scissors",
    score: "4000",
    achievement: "",
  },
  {
    username: "John Michael",
    game: "Rock,Paper,Scissors",
    score: "4000",
    achievement: "",
  },
  {
    username: "John Michael",
    game: "Rock,Paper,Scissors",
    score: "4000",
    achievement: "",
  },
  {
    username: "John Michael",
    game: "Rock,Paper,Scissors",
    score: "4000",
  },
];

const achievement = (position) => {
  switch (position) {
    case 1:
      return <FontAwesomeIcon icon={faMedal} color="gold" />;
    case 2:
      return <FontAwesomeIcon icon={faMedal} color="silver" />;
    case 3:
      return <FontAwesomeIcon icon={faMedal} color="brown" />;
    default:
      return null;
  }
};

  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      <div className="col-span-1">
      
      <Card style={{ width: '400px', height: '520px' }} className="mx-auto my-auto relative bg-gray-200">
        <Card style={{ width: '380px', height: '500px' }} className="mx-auto my-auto relative">
          <CardHeader floated={false} className="h-40 w-40 rounded-full overflow-hidden mx-auto">
            <img  
            src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg" 
            alt="profile-picture" 
            className="h-full w-full object-cover"/>
          </CardHeader>
          <CardBody>
            <Typography variant="h4" color="blue-gray" className="mb-2 text-center">
              Username
            </Typography>
              <div class="mb-4">
              <label for="email" class="text-gray-500 font-bold mb-1 mb-0 pr-4">Email:</label> <input
              type="email"
              id="email"
              name="email"
              value={email}
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              />
              </div>
              
              <div class="mb-4">
                <label for="password" class="text-gray-500 font-bold mb-1 mb-0 pr-4">Password:</label> <input
                type="password"
                 id="password"
                name="password"
                value={password}
                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                />
                </div>
<Button className="mx-auto my-2 bg-black text-white hover:bg-gray-500 font-bold py-2 px-4 rounded block" onClick={handleEditButtonClick}>
            Edit
          </Button>
          </CardBody>
        </Card>
        </Card>
      </div>

      <div className="col-span-2">
      <div className="mr-10">
      <Typography variant="h4" color="blue-gray" className="mb-2 text-center">
              GAME HISTORY
            </Typography>
      <Card className="h-full w-full overflow-scroll mr-5">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
          {TABLE_HEAD.map((head, index) => (
              <th
                key={index}
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
        {TABLE_ROWS.map(({ username, game, score }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={username}>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {index + 1}. {username}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {game}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {score}
                  </Typography>
                </td>
                <td className={classes}>{achievement(index + 1)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
    <div className="max-w-screen-xl mx-auto mt-5">
  <div className="w-full md:w-10/11 lg:w-8/9 xl:w-7/9 mx-auto grid grid-cols-2 gap-4">
    <div className="col-span-2 bg-gray-200 p-2 md:p-4 rounded-lg">
      <div className="bg-white p-2 md:p-4 rounded-lg">
        <h4 className="text-2xl font-semibold text-center mb-4">Motto :</h4>
        <p className="text-sm md:text-base text-gray-600 text-center">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  </div>
</div>

      </div>
      </div>
       {/* Modal */}
       <Modal
        isOpen={isModalOpen}
        onRequestClose={handleModalClose}
        contentLabel="Edit Profile Modal"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            maxWidth: "400px",
            maxHeight: "300px",
            margin: "auto",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center", 
          },
        }}
      >
        <button
        className="absoulte absolute top-3 right-3 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
        onClick={handleModalClose}
        >
          &times;
        </button>
        <h2 className="font-bold text-2xl">Edit Profile</h2>
        <br />
        <div class="mb-4">
          <label for="email" class="block text-gray-500 font-bold mb-1">Email:</label>
          <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          />
        </div>
        
        <div class="mb-4">
          <label for="password" class="block text-gray-500 font-bold mb-1">Password:</label>
          <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          />
        </div>
        <div className="flex">
          <Button 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={handleSaveChanges}>Save Changes</Button>
          <Button 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={handleModalCancel}>Cancel</Button>
        </div>
      </Modal>
    </div>
  );
}