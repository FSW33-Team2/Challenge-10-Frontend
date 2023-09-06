'use client'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from '@material-tailwind/react'

export function GameListPage() {
  return (
    <div className="w-full py-5">
      <div className="w-full text-center text-black">
        <Typography variant="h2">Game List</Typography>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-4">
        <Card className="mt-6 w-full">
          <CardHeader color="blue-gray" className="relative h-56">
            <img
              src="/GameListPageImage/traditional.jpg"
              alt="card-image"
              className="w-full h-full object-cover"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Rock Paper Scissors
            </Typography>
            <Typography>
              If you love Rock Paper Scissors in real life but don't have anyone
              to play with, then this game will help you pass your time
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <a href="/gamedetail">
              <Button>Play Game</Button>
            </a>
          </CardFooter>
        </Card>

        <Card className="mt-6 w-full">
          <CardHeader color="blue-gray" className="relative h-56">
            <img
              src="/GameListPageImage/metal-slug.jpg"
              alt="card-image"
              className="w-full h-full object-cover"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Metal Slug: Awakening
            </Typography>
            <Typography>
              Metal Slug is a series of Japanese arcade games. The original game
              has been enhanced for mobile versions and other consoles over the
              years. Various other devices also have several Metal Slug games to
              play.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <a href="/leaderboard">
              <Button>Show Score</Button>
            </a>
          </CardFooter>
        </Card>

        <Card className="mt-6 w-full">
          <CardHeader color="blue-gray" className="relative h-56">
            <img
              src="/GameListPageImage/pubg.jpg"
              alt="card-image"
              className="w-full h-full object-cover"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              PlayerUnknown's Battlegrounds (PUBG)
            </Typography>
            <Typography>
              PlayerUnknown's Battlegrounds (PUBG) is a battle royale game,
              where 100 people at once can play online. The winner of this game
              is the individual or team that survives to the end.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <a href="/leaderboard">
              <Button>Show Score</Button>
            </a>
          </CardFooter>
        </Card>

        <Card className="mt-6 w-full">
          <CardHeader color="blue-gray" className="relative h-56">
            <img
              src="/GameListPageImage/free-fire.jpg"
              alt="card-image"
              className="w-full h-full object-cover"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Free Fire
            </Typography>
            <Typography>
              Free Fire is a world-famous survival shooter game available on
              mobile. Each 10-minute game places you on a remote island where
              you are pit against 49 others.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <a href="/leaderboard">
              <Button>Show Score</Button>
            </a>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
