import { CheckCircle, Target, Eye, Award, Download } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

const values = [
  {
    icon: CheckCircle,
    title: "Precisión",
    description: "Resultados exactos respaldados por equipamiento de última generación y personal altamente capacitado."
  },
  {
    icon: Target,
    title: "Compromiso",
    description: "Cumplimos con los plazos acordados y mantenemos una comunicación constante con nuestros clientes."
  },
  {
    icon: Eye,
    title: "Transparencia",
    description: "Procesos claros y documentados que permiten la trazabilidad completa de cada análisis."
  },
  {
    icon: Award,
    title: "Excelencia",
    description: "Mejora continua de nuestros procesos para superar las expectativas de nuestros clientes."
  }
]

const quienesSomos = {
  titulo: "Quiénes Somos",
  secciones: [
    {
      id: "empresa",
      titulo: "Sobre HD Lab",
      contenido: "Somos una empresa experta en servicios de laboratorio para la industria del Gas y Petróleo, especializada en el análisis de gas natural y gasolinas mediante sistemas de cromatografía gaseosa."
    },
    {
      id: "equipo",
      titulo: "Nuestro Equipo",
      contenido: "Somos un equipo de profesionales con amplia trayectoria en la industria energética, brindando servicios de cromatografías gaseosas y medición de punto de rocío."
    },
    {
      id: "tecnologia",
      titulo: "Tecnología y Calidad",
      contenido: "Contamos con un laboratorio único equipado con tres cromatógrafos de última generación de Agilent Technologies y un Higrómetro Digital Avanzado Michell Instruments MDM300 I.S. Trabajamos bajo metodologías estandarizadas como ASTM 1945, GPA 2261 y GPA 2166."
    },
    {
      id: "valor",
      titulo: "Nuestra Propuesta de Valor",
      contenido: "Interactuamos con nuestros clientes asistiendo en la logística del muestreo, seguimiento y carga de datos de sus informes, conformando una base de datos de respaldo para toda su información."
    }
  ]
}

export function About() {
  return (
    <section id="nosotros" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-sm font-medium text-accent uppercase tracking-wider">Sobre Nosotros</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6 text-balance">
              Más de 15 años garantizando la calidad de sus productos
            </h2>
            
            {/* Accordion Section */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">{quienesSomos.titulo}</h3>
              <Accordion type="single" collapsible className="w-full">
                {quienesSomos.secciones.map((seccion) => (
                  <AccordionItem key={seccion.id} value={seccion.id}>
                    <AccordionTrigger className="text-left">
                      {seccion.titulo}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {seccion.contenido}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Download Button */}
            <div className="mb-8">
              <Button asChild className="w-full sm:w-auto">
                <a href="/HD Lab Brochure.pdf" download>
                  <Download className="w-4 h-4 mr-2" />
                  Descargar Brochure (PDF)
                </a>
              </Button>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="p-4 bg-secondary/50 rounded-xl border border-border">
                <span className="text-3xl font-bold text-accent">+500</span>
                <p className="text-sm text-muted-foreground mt-1">Clientes satisfechos</p>
              </div>
              <div className="p-4 bg-secondary/50 rounded-xl border border-border">
                <span className="text-3xl font-bold text-accent">+10.000</span>
                <p className="text-sm text-muted-foreground mt-1">Análisis realizados</p>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className={`p-6 rounded-2xl border border-border bg-card ${index % 2 === 1 ? 'sm:mt-8' : ''}`}
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
