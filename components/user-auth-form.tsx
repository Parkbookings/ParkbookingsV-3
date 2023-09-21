"use client"

import * as React from "react"
import emailjs from "@emailjs/browser"
import autoAnimate from "@formkit/auto-animate"
import { Terminal } from "lucide-react"

import { campFromPark, parkData } from "@/lib/data"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Icons } from "@/components/icons"

import { ComboboxDemo } from "./combo-box"
import { DatePickerDemo } from "./date-range-picker"
import { Alert, AlertDescription, AlertTitle } from "./ui/alert"
import { CampComboboxDemo } from "./ui/camp-combo-box"
import { useToast } from "./ui/use-toast"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [park, setPark] = React.useState<string>("")
  const [camp, setCamp] = React.useState<string>("")
  const [name, setName] = React.useState<string>("")
  const [email, setEmail] = React.useState<string>("")
  const [phone, setPhone] = React.useState<string>("")
  const [id, setId] = React.useState<string>("")
  const [checkIn, setCheckIn] = React.useState<Date>()
  const [checkOut, setCheckOut] = React.useState<Date>()
  const [adults, setAdults] = React.useState<string>("")
  const [children, setChildren] = React.useState<string>("")

  const [show, setShow] = React.useState(false)
  const [showError, setShowError] = React.useState(false)
  const parent = React.useRef(null)
  const parent2 = React.useRef(null)
  const { toast } = useToast()

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault()
    setShowError(false)
    setIsLoading(true)

    if (!park || !camp || !checkIn || !checkOut) {
      setShowError(true)
      setIsLoading(false)
      return
    } else {
      await sendEmail().then(() => {
        setIsLoading(false)
        toast({
          title: "Success",
          description: "Your enquiry has been sent.",
        })
      })
    }
  }
  async function sendEmail() {
    await emailjs.send(
      "service_nheksh7",
      "template_dir079f",
      {
        parkName: park,
        camp_name: camp,
        full_name: name,
        email: email,
        phone: phone,
        id: id,
        check_in: checkIn,
        check_out: checkOut,
        num_adults: adults,
        num_children: children,
      },
      "TWIdqrmOMbvSlxiGi"
    )

    await sendConfirmation()
  }

  async function sendConfirmation() {
    await emailjs.send(
      "service_nheksh7",
      "template_xhf3is8",
      {
        park: park,
        camp: camp,
        email: email,
      },
      "TWIdqrmOMbvSlxiGi"
    )
  }

  React.useEffect(() => {
    parent.current && autoAnimate(parent.current)
  }, [parent])

  React.useEffect(() => {
    parent2.current && autoAnimate(parent2.current)
  }, [parent2])

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit} className="relative">
        <div ref={parent2}>
          {showError && (
            <Alert variant="destructive">
              <Terminal className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>Please fill in all fields.</AlertDescription>
            </Alert>
          )}
        </div>
        <div ref={parent} className="grid gap-2">
          <Label className="mt-4 text-muted-foreground" htmlFor="picker">
            Choose a park
          </Label>
          <ComboboxDemo
            title="Select a park"
            data={parkData}
            value={park}
            setValue={setPark}
            showNext={setShow}
          />
          {park && show && (
            <>
              <Label className="mt-2 text-muted-foreground" htmlFor="picker2">
                Choose a camp
              </Label>
              <CampComboboxDemo
                title="Select a camp"
                data={campFromPark(park)}
                setValue={setCamp}
                value={camp}
              />
            </>
          )}
          <div className="flex gap-2">
            <div>
              <Label className="mt-2 text-muted-foreground" htmlFor="picker">
                Check in
              </Label>
              <DatePickerDemo value={checkIn} setValue={setCheckIn} />
            </div>
            <div>
              <Label className="mt-2 text-muted-foreground" htmlFor="picker">
                Check out
              </Label>
              <DatePickerDemo value={checkOut} setValue={setCheckOut} />
            </div>
          </div>
          <div className="mt-2 flex gap-2">
            <div className="flex flex-col gap-2">
              <Label className="text-muted-foreground" htmlFor="adults">
                Adults
              </Label>
              <Input
                id="adults"
                placeholder="0"
                type="number"
                value={adults}
                required
                onChange={(e) => {
                  setAdults(e.target.value)
                }}
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label className="text-muted-foreground" htmlFor="children">
                Children
              </Label>
              <Input
                id="children"
                placeholder="0"
                type="number"
                value={children}
                required
                onChange={(e) => {
                  setChildren(e.target.value)
                }}
              />
            </div>
          </div>

          <div className="mt-2 grid gap-2">
            <Label className="text-muted-foreground" htmlFor="id">
              ID Number or SANPK Client Number
            </Label>
            <Input
              id="id"
              placeholder="0000 0000 00000"
              type="text"
              autoCapitalize="none"
              autoComplete="id"
              autoCorrect="off"
              disabled={isLoading}
              required
              value={id}
              onChange={(e) => {
                setId(e.target.value)
              }}
            />
          </div>
          <div className="mt-2 grid gap-2">
            <Label className="text-muted-foreground" htmlFor="fullName">
              Full Name
            </Label>
            <Input
              id="fullName"
              placeholder="John Doe"
              type="text"
              autoCapitalize="none"
              autoComplete="name"
              autoCorrect="off"
              disabled={isLoading}
              required
              value={name}
              onChange={(e) => {
                setName(e.target.value)
              }}
            />
          </div>
          <div className="mt-2 grid gap-2">
            <Label className="text-muted-foreground" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
            />
          </div>
          <div className="mt-2 grid gap-2">
            <Label className="text-muted-foreground" htmlFor="phone">
              Contact Number
            </Label>
            <Input
              id="phone"
              placeholder="011 123 4567"
              type="tel"
              autoCapitalize="none"
              autoComplete="tel"
              autoCorrect="off"
              disabled={isLoading}
              required
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value)
              }}
            />
          </div>
        </div>

        <div className="relative my-3">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
        </div>
        <Button disabled={isLoading} type="submit" className="w-full">
          {isLoading && <Icons.moon className="mr-2 h-4 w-4 animate-spin" />}
          Send an enquiry
        </Button>
      </form>
    </div>
  )
}
