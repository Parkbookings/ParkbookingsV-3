/* eslint-disable @next/next/no-img-element */

import Link from "next/link"
import { Facebook, Instagram, Mail, Phone } from "lucide-react"

import WhatsappWidget from "@/components/WhatsappWidget"
import { UserAuthForm } from "@/components/user-auth-form"

export default function AuthenticationPage() {
  return (
    <div className="">
      <div className="container relative grid h-screen flex-col items-center justify-center py-10 lg:max-w-none lg:grid-cols-2 lg:p-0">
        {/* <div className="mb-4 flex w-[400px] rounded-md bg-popover-foreground p-4 lg:hidden lg:w-0">
          <img src="/logo.png" alt="" />
        </div> */}
        <WhatsappWidget />
        <div className="relative hidden h-full w-full flex-col bg-background px-10 pb-10 text-white md:w-full lg:flex">
          <div
            className="absolute inset-0 bg-cover bg-center brightness-75"
            style={{
              backgroundImage: "url(/pbnc.jpg)",
            }}
          />
          <div className="relative z-20 mt-10 flex w-full items-center justify-between text-lg font-medium">
            <div className="flex">
              <img
                src="/logo.png"
                alt=""
                className="h-auto w-24 object-contain lg:w-36"
              />
            </div>

            <div className="flex">
              <img
                src="/glrb-logo.png"
                alt=""
                className="h-auto w-24 object-contain lg:w-36"
              />
            </div>

            <div className="flex">
              <img
                src="/glrm-logo.png"
                alt=""
                className="h-auto w-24 object-contain lg:w-36"
              />
            </div>

            <div className="flex">
              <img
                src="/logo.jpg"
                alt=""
                className="h-auto w-24 object-contain lg:w-36"
              />
            </div>
          </div>

          <div className="relative z-20 mt-auto">
            <div className="my-5 text-lg font-bold">
              ParkBookings.com is an appointed sales agent for South African National Parks and serves as a satellite office for bookings at Bakgatla and Manyane.  
Our platform specializes in taking the hassle out of park bookings, ensuring a seamless experience for our customers.
            </div>
            <div className="text-sm font-bold lg:text-xl">
              Contact Information:
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-3 w-3 lg:h-4 lg:w-4" />
              <a
                href="mailto:bookings@parkbookings.com"
                className="text-xs underline xl:text-sm"
              >
                bookings@parkbookings.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="h-3 w-3 lg:h-4 lg:w-4" />
              <a
                href="tel:+27871525540"
                className="text-xs underline xl:text-sm"
              >
                +27871525540
              </a>
            </div>
            <div className="mt-3 space-y-2">
              <div className="text-sm font-bold lg:text-xl">Address:</div>
              <a
                href="https://goo.gl/maps/jr8TNo7tLPS5MLYW8"
                className="text-xs lg:text-sm"
              >
                Monte Circle Business Park, 178
                Montecasino Blvd, Fourways, Sandton, 2191.
              </a>
            </div>
            <div className="mt-3 flex items-center justify-between">
              <img
                src="/wildcardLogo.png"
                alt=""
                className="h-auto w-24 object-contain lg:w-36"
              />
              <div className="flex items-center justify-end space-x-5">
                <Link
                  href="https://web.facebook.com/ParkBookings"
                  target="_blank"
                >
                  <Facebook className="scale-125 text-white" />
                </Link>
                <Link
                  href="https://www.instagram.com/park_bookings/"
                  target="_blank"
                >
                  <Instagram className="scale-125 text-white" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full p-3">
          <div className="flex h-full rounded-3xl bg-background">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
              <div className="flex flex-col space-y-2 text-center">
                <h1 className="text-2xl font-semibold tracking-tight">
                  Taking the drama out of bookings at National Parks
                </h1>
                <p className="text-sm text-muted-foreground">
                  Official Sales Agents for SANParks and selected Provincial
                  Parks.
                </p>
              </div>
              <UserAuthForm />
              <p className="px-8 text-center text-sm text-muted-foreground">
                By clicking continue, you agree to our{" "}
                <Link
                  href="/terms"
                  className="underline underline-offset-4 hover:text-primary"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="/terms"
                  className="underline underline-offset-4 hover:text-primary"
                >
                  Privacy Policy
                </Link>
                .
              </p>

              <div className="relative z-20 flex flex-col text-muted-foreground lg:hidden">
                <div className="text-sm font-bold">Contact Information:</div>
                <div className="flex items-center gap-3">
                  <Mail className="h-3 w-3 lg:h-4 lg:w-4" />
                  <a
                    href="mailto:bookings@parkbookings.com"
                    className="text-sm underline xl:text-sm"
                  >
                    bookings@parkbookings.com
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="h-3 w-3 lg:h-4 lg:w-4" />
                  <a
                    href="tel:+27871525540"
                    className="text-sm underline xl:text-sm"
                  >
                    +27871525540
                  </a>
                </div>
                <div className="mt-3 space-y-2">
                  <div className="text-sm font-bold">Address:</div>
                  <a
                    href="https://goo.gl/maps/jr8TNo7tLPS5MLYW8"
                    className="text-sm underline"
                  >
                    First Floor, Block C, Monte Circle Business Park 178
                    Montecasino Blvd, Magaliessig, Sandton, 2191
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
