'use client'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAuth } from "@/context/ContextoAuth"
import Link from "next/link"
import { useState, type FormEvent } from "react"

const Registro = () => {

  const { registro } = useAuth()
  const [nombreUsuario, setNombreUsuario] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const usuario = { usuario: nombreUsuario, password }
    registro(usuario)
  }

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Registro</CardTitle>
        <CardDescription>
          Ingresa un nombre de usuario
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="user">Usuario</Label>
          <Input
            id="user"
            type="text"
            placeholder="ej.usuario1234"
            onChange={e => setNombreUsuario(e.target.value)}
            required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" required onChange={e => setPassword(e.target.value)} />
        </div>
      </CardContent>
      <CardFooter>
        <Button type="submit" className="w-full" onClick={handleSubmit}>
          Registro
        </Button>
      </CardFooter>
    </Card>
  )
}

export default Registro
