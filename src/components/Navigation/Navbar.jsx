'use client'
import React, { useEffect } from 'react'
import Link from 'next/link'
import Cookies from 'js-cookie'

import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from '@material-tailwind/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserToken } from '@/redux/features/Auth/UserTokenSlice'
import { LoginAction } from '@/redux/features/Auth/AuthReducer'

export default function NavbarSimple() {
  const dispatch = useDispatch()
  const usertoken = useSelector((state) => state.usertoken.data)
  const isLoggedIn = useSelector((state) => state.authreducer.isLoggedIn)

  console.log(usertoken)
  useEffect(() => {
    dispatch(fetchUserToken())
  }, [dispatch])

  const AuthCheck = () => {
    if (Object.keys(usertoken).length != 0) {
      dispatch(LoginAction())
    }
  }

  useEffect(() => {
    AuthCheck()
  }, [usertoken])

  const [openNav, setOpenNav] = React.useState(false)

  const handleWindowResize = () => window.innerWidth >= 960 && setOpenNav(false)

  React.useEffect(() => {
    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  return (
    <Navbar className="mx-auto max-w-full px-6 py-3">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5"
        >
          Material Tailwind
        </Typography>
        <div className="hidden lg:block">
          <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
              as="li"
              variant="small"
              color="blue-gray"
              className="p-1 font-medium"
            >
              <a
                href="/"
                className="flex items-center hover:text-blue-500 transition-colors"
              >
                Home
              </a>
            </Typography>
            <Typography
              as="li"
              variant="small"
              color="blue-gray"
              className="p-1 font-medium"
            >
              <a
                href="/gamelist"
                className="flex items-center hover:text-blue-500 transition-colors"
              >
                Game List
              </a>
            </Typography>
            <Typography
              as="li"
              variant="small"
              color="blue-gray"
              className="p-1 font-medium"
            >
              <a
                href="/leaderboard"
                className="flex items-center hover:text-blue-500 transition-colors"
              >
                Leaderboard
              </a>
            </Typography>
            {isLoggedIn ? (
              <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
              >
                <div className="flex items-center ">
                  <a
                    href="/auth/login"
                    className="hover:text-blue-500 transition-colors"
                  >
                    Profile
                  </a>
                  <div className="mx-1">/</div>

                  <a
                    href="/auth/register"
                    className=" hover:text-blue-500 transition-colors"
                  >
                    Logout
                  </a>
                </div>
              </Typography>
            ) : (
              <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
              >
                <div className="flex items-center ">
                  <a
                    href="/auth/login"
                    className="hover:text-blue-500 transition-colors"
                  >
                    Login
                  </a>
                  <div className="mx-1">/</div>

                  <a
                    href="/auth/register"
                    className=" hover:text-blue-500 transition-colors"
                  >
                    Register
                  </a>
                </div>
              </Typography>
            )}
          </ul>
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-medium"
          >
            <a
              href="/"
              className="flex items-center hover:text-blue-500 transition-colors"
            >
              Home
            </a>
          </Typography>
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-medium"
          >
            <a
              href="/gamelist"
              className="flex items-center hover:text-blue-500 transition-colors"
            >
              Game List
            </a>
          </Typography>
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-medium"
          >
            <a
              href="/leaderboard"
              className="flex items-center hover:text-blue-500 transition-colors"
            >
              Leaderboard
            </a>
          </Typography>
          {isLoggedIn ? (
            <Typography
              as="li"
              variant="small"
              color="blue-gray"
              className="p-1 font-medium"
            >
              <div className="flex items-center ">
                <a
                  href="/auth/login"
                  className="hover:text-blue-500 transition-colors"
                >
                  Profile
                </a>
                <div className="mx-1">/</div>

                <a
                  href="/auth/register"
                  className=" hover:text-blue-500 transition-colors"
                >
                  Logout
                </a>
              </div>
            </Typography>
          ) : (
            <Typography
              as="li"
              variant="small"
              color="blue-gray"
              className="p-1 font-medium"
            >
              <div className="flex items-center ">
                <a
                  href="/auth/login"
                  className="hover:text-blue-500 transition-colors"
                >
                  Login
                </a>
                <div className="mx-1">/</div>

                <a
                  href="/auth/register"
                  className=" hover:text-blue-500 transition-colors"
                >
                  Register
                </a>
              </div>
            </Typography>
          )}
        </ul>
      </Collapse>
    </Navbar>
  )
}
