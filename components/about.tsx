import { CheckCircle, Target, Eye, Award } from "lucide-react"

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

export function About() {
  return (
    <section id="nosotros" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-medium text-accent uppercase tracking-wider">Sobre Nosotros</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6 text-balance">
              Más de 15 años garantizando la calidad de sus productos
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                HDLab es un laboratorio especializado en control de calidad para la industria 
                del gas, agua y petróleo. Desde nuestra fundación, hemos trabajado con las 
                principales empresas del sector energético argentino.
              </p>
              <p>
                Contamos con equipamiento de última tecnología y un equipo de profesionales 
                altamente calificados que garantizan resultados precisos y confiables en 
                cada análisis que realizamos.
              </p>
              <p>
                Nuestros procedimientos están basados en las normas de los principales 
                entes reguladores nacionales e internacionales, incluyendo ASTM, GPA, 
                IRAM y normativas del ENARGAS.
              </p>
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
