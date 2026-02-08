"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react"

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contacto" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">Contacto</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6 text-balance">
            Hablemos de su proyecto
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos listos para ayudarlo con sus necesidades de control de calidad. 
            Contáctenos para recibir asesoramiento personalizado.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Ubicación</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Buenos Aires, Argentina
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Teléfono</h3>
                <p className="text-muted-foreground text-sm">+54 11 1234-5678</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-muted-foreground text-sm">info@hdlab.com.ar</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Horario</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Lunes a Viernes: 8:00 - 18:00<br />
                  Sábados: 9:00 - 13:00
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-card p-8 rounded-2xl border border-border shadow-sm">
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre completo</Label>
                  <Input id="name" placeholder="Juan Pérez" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Empresa</Label>
                  <Input id="company" placeholder="Nombre de su empresa" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="juan@empresa.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Teléfono</Label>
                  <Input id="phone" type="tel" placeholder="+54 11 1234-5678" />
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <Label htmlFor="service">Servicio de interés</Label>
                <select
                  id="service"
                  className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                >
                  <option value="">Seleccione un servicio</option>
                  <option value="gas">Análisis de Gas</option>
                  <option value="agua">Control de Agua</option>
                  <option value="petroleo">Análisis de Petróleo</option>
                  <option value="especiales">Ensayos Especiales</option>
                  <option value="certificaciones">Certificaciones</option>
                  <option value="id">Investigación y Desarrollo</option>
                </select>
              </div>

              <div className="space-y-2 mb-6">
                <Label htmlFor="message">Mensaje</Label>
                <Textarea 
                  id="message" 
                  placeholder="Describa brevemente sus necesidades de análisis..."
                  rows={4}
                  required
                />
              </div>

              <Button type="submit" size="lg" className="w-full" disabled={submitted}>
                {submitted ? (
                  <>
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Mensaje enviado
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Enviar mensaje
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
