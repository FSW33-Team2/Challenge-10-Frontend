'use client';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
 
export function LandingPageCard() {
  return (
    <div className="w-full py-5">
      <div className="w-full text-center text-black">
        <Typography variant="h2">Game List</Typography>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-4">

        <Card className="mt-6 w-full">
          <CardHeader color="blue-gray" className="relative h-56">
            <img
              src="https://i.kym-cdn.com/photos/images/newsfeed/000/521/406/f08.png"
              alt="card-image"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Rock Paper Scissors
            </Typography>
            <Typography>
            Batu-Gunting-Kertas adalah sebuah permainan tangan dua orang. Permainan ini sering digunakan untuk pemilihan acak, seperti halnya pelemparan koin, dadu, dan lain-lain.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
           
            <Button >PLAY</Button>
           
          </CardFooter>
        </Card>

        <Card className="mt-6 w-full">
          <CardHeader color="blue-gray" className="relative h-56">
            <img
              src="https://gamerbraves.sgp1.cdn.digitaloceanspaces.com/2023/06/metal-slug-feature.jpg"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              METAL SLUG
            </Typography>
            <Typography>
            Game Metal Slug adalah game run and gun yang sangat seru dan menantang, dengan berbagai macam musuh, senjata, dan kendaraan yang bisa digunakan.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button>PLAY</Button>
          </CardFooter>
        </Card>

        <Card className="mt-6 w-full">
          <CardHeader color="blue-gray" className="relative h-56">
            <img
              src="https://assetsio.reedpopcdn.com/pubg-tips-tricks-guide-battlegrounds-4415-1513099928095.jpg?width=690&quality=75&format=jpg&auto=webpg"
              alt="card-image"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              PUBG
            </Typography>
            <Typography>
            sebuah permainan battle royale, di mana 100 orang sekaligus dapat bermain secara daring
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button>PLAY</Button>
          </CardFooter>
        </Card>

        <Card className="mt-6 w-full">
          <CardHeader color="blue-gray" className="relative h-56">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/8/87/Call_of_Duty_Infinite_Warfare_cover.jpg/220px-Call_of_Duty_Infinite_Warfare_cover.jpg"
              alt="card-image"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              CALL OF DUTY
            </Typography>
            <Typography>
            pada tahun 1945 menjelang akhir teater Eropa Perang Dunia II, dengan berbagai kilas balik mulai dari tahun 1941 hingga 1944.
            Kisah Vanguard diceritakan di berbagai titik waktu dalam urutan non-kronologis.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button >PLAY</Button>
          </CardFooter>
        </Card>
      </div>
      
    </div>
  );
}