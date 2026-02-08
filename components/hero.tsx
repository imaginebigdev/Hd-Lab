import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Award, Clock } from "lucide-react"

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Video de fondo YouTube con aspect ratio 16:9 */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full h-full min-w-[177.78vh] min-h-[56.25vw]">
            <iframe
              src="https://www.youtube.com/embed/u7hCAwqKxVM?autoplay=1&mute=1&loop=1&playlist=u7hCAwqKxVM&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&disablekb=1&iv_load_policy=3&fs=0"
              title="HDLab Background Video"
              allow="autoplay; encrypted-media"
              className="absolute inset-0 w-full h-full"
              style={{ border: 'none' }}
            />
          </div>
        </div>
        {/* Overlay para legibilidad */}
        <div className="absolute inset-0 bg-background/70 dark:bg-background/75" />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-[0.03] z-[1]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm font-medium text-accent">Laboratorio Certificado</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-balance">
              Precisión y confiabilidad en{" "}
              <span className="text-accent">control de calidad</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Contribuimos a mejorar la calidad de los productos de nuestros clientes,
              brindándoles información altamente confiable, precisa y oportuna a través
              de análisis y ensayos basados en las normas de los entes reguladores
              nacionales e internacionales.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="group">
                <Link href="#contacto">
                  Solicitar análisis
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#servicios">Conocer servicios</Link>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="flex flex-col gap-1">
                <Shield className="w-5 h-5 text-accent mb-2" />
                <span className="text-2xl font-bold">100%</span>
                <span className="text-sm text-muted-foreground">Certificado</span>
              </div>
              <div className="flex flex-col gap-1">
                <Award className="w-5 h-5 text-accent mb-2" />
                <span className="text-2xl font-bold">+15</span>
                <span className="text-sm text-muted-foreground">Años de experiencia</span>
              </div>
              <div className="flex flex-col gap-1">
                <Clock className="w-5 h-5 text-accent mb-2" />
                <span className="text-2xl font-bold">48h</span>
                <span className="text-sm text-muted-foreground">Tiempo de respuesta</span>
              </div>
            </div>
          </div>

          {/* <div className="relative hidden lg:block">
            <div className="absolute -inset-4 bg-accent/5 rounded-3xl blur-3xl" />
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-secondary border border-border">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-primary/10" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-12">
                <Image 
                  src="/images/logo-light.png"
                  alt="HDLab"
                  width={280}
                  height={84}
                  className="mb-8"
                />
                <p className="text-muted-foreground text-center text-sm mb-8">Laboratorio de Control de Calidad</p>
                <div className="flex gap-4">
                  <div className="px-4 py-3 bg-background/80 rounded-lg border border-border">
                    <span className="text-xs text-muted-foreground block">Gas</span>
                    <span className="text-sm font-semibold">Análisis</span>
                  </div>
                  <div className="px-4 py-3 bg-background/80 rounded-lg border border-border">
                    <span className="text-xs text-muted-foreground block">Agua</span>
                    <span className="text-sm font-semibold">Ensayos</span>
                  </div>
                  <div className="px-4 py-3 bg-background/80 rounded-lg border border-border">
                    <span className="text-xs text-muted-foreground block">Petróleo</span>
                    <span className="text-sm font-semibold">Control</span>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}
