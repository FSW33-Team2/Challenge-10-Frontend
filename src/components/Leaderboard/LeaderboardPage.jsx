'use client';

import { Card, Typography } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal } from "@fortawesome/free-solid-svg-icons";
 
const TABLE_HEAD = ["No","Username", "Level", "Score", "Achievement", ""];
 
const TABLE_ROWS = [
  {
    no :"1",
    username: "jhondoe",
    level: "60",
    score: "2000",
    achievement: "",
    position: 1},
  {
    no :"2",
    username: "alexa123",
    level: "55",
    score: "1500",
    achievement:"",
    position: 2},
  {
    no :"3",
    username: "laurentb",
    level: "48",
    score: "1230",
    achievement:"",
    position: 3},
  {
    no :"4",
    username: "noemichael",
    level: "34",
    score: "1000",
    achievement:""},
  {
    no :"5",
    username: "ricardofx",
    level: "21",
    score: "990",
    achievement:""},
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

export default function LeaderboardPage () {

    return ( 
        <div className="mx-4 my-8">
            <Typography variant="large" color="blue-gray" className="font-semibold text-2xl mb-4 text-center">
        Leaderboard
      </Typography>

      <div className="space-y-2 mx-4 my-8">
  <label htmlFor="listbox" className="block text-sm font-medium text-gray-700">
    Select Games:
  </label>
  <select
    id="listbox"
    name="listbox"
    className="font-normal block w-50% px-4 py-2 border rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
  >
    <option value="option1">Rock Paper Scissors</option>
    <option value="option2">Metal Slug</option>
    <option value="option3">PUBG</option>

  </select>
</div>

<div>
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
        {TABLE_ROWS.map(({ no, username, level, score , position}, index) => {
          const isLast = index === TABLE_ROWS.length - 1;
          const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
          const userAchievement = achievement(position);

          return (
            <tr key={username}>
              <td className={classes}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {no}
                </Typography>
              </td>
              <td className={classes}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {username}
                </Typography>
              </td>
              <td className={classes}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {level}
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
              <td className={classes}>
              {userAchievement}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </Card>
</div>
           
        </div>
    )
}

