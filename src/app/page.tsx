import { SearchIcon } from "lucide-react"
import Image from "next/image"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"

export default function Home() {
  return (
    <div>
      <Header />
      <div className="p-5">
        {/* TEXTO */}
        <h2 className="text-xl font-bold">Olá, Felipe!</h2>
        <p>Segunda-feira, 05 de agosto.</p>

        {/* BUSCA */}
        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        {/* IMAGEM */}
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            alt="Agende nos melhores com FSW Barber"
            src="/banner-01.png"
            fill
            className="rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  )
}
