'use client'

import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAutenticacion } from "@/context/ContextoAuntenticacion"
import { useState } from "react"

const Inicio = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { login, user } = useAutenticacion()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    login({ user: username, password })
    console.log("LOGIN")
    console.log(user)
  }

  return (
    <div className=" place-content-center m-auto lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px] w-fit">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Ingrea tus credenciales
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="usuario">Usuario</Label>
              <Input
                id="usuario"
                type="text"
                placeholder="musuario"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Contraseña</Label>
                <Link
                  href="/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Olvidaste la contraseña?
                </Link>
              </div>
              <Input id="password" type="password" required onChange={(e) => setPassword(e.target.value)} />
            </div>
            <Button type="submit" className="w-full" onClick={handleSubmit}>
              Login
            </Button>
            <Button variant="outline" className="w-full">
              Login con Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            No tienes una cuenta?{" "}
            <Link href="/registro" className="underline">
              Registro
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted md:flex">
        <Image
          src="/oilb.jpg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  )
}

export default Inicio
