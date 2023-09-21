import Image from "next/image"
import Link from "next/link"

export default function WhatsappWidget() {
  return (
    <Link
      href="https://wa.me/27722138101"
      className="absolute bottom-5 right-5"
    >
      <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-green-400">
        <Image src="/whatsapp.png" alt="" height={20} width={20} />
      </div>
    </Link>
  )
}
