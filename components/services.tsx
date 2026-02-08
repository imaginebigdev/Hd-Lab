import { Droplet, Flame, Fuel, FlaskConical, FileCheck, Microscope } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: Flame,
    title: "Análisis de Gas",
    description: "Análisis completos de composición de gas natural, GLP y gases industriales según normas ASTM, GPA e IRAM.",
    features: ["Cromatografía de gases", "Poder calorífico", "Densidad relativa", "Punto de rocío"]
  },
  {
    icon: Droplet,
    title: "Control de Agua",
    description: "Ensayos de calidad de agua para uso industrial, inyección y efluentes conforme a regulaciones ambientales.",
    features: ["Análisis físico-químico", "Microbiología", "Metales pesados", "Calidad de efluentes"]
  },
  {
    icon: Fuel,
    title: "Análisis de Petróleo",
    description: "Caracterización completa de crudos y derivados del petróleo según estándares internacionales.",
    features: ["Gravedad API", "Contenido de azufre", "Viscosidad", "Punto de inflamación"]
  },
  {
    icon: FlaskConical,
    title: "Ensayos Especiales",
    description: "Análisis personalizados según requerimientos específicos de nuestros clientes.",
    features: ["Corrosión", "Compatibilidad de materiales", "Estabilidad térmica", "Análisis de trazas"]
  },
  {
    icon: FileCheck,
    title: "Certificaciones",
    description: "Emisión de certificados de calidad reconocidos por entes reguladores nacionales e internacionales.",
    features: ["Informes técnicos", "Certificados oficiales", "Auditorías de calidad", "Documentación regulatoria"]
  },
  {
    icon: Microscope,
    title: "Investigación y Desarrollo",
    description: "Servicios de I+D para optimización de procesos y desarrollo de nuevos productos.",
    features: ["Estudios de factibilidad", "Optimización de procesos", "Desarrollo de métodos", "Consultoría técnica"]
  }
]

export function Services() {
  return (
    <section id="servicios" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">Nuestros Servicios</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6 text-balance">
            Soluciones integrales de control de calidad
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos una amplia gama de servicios de análisis y ensayos para la industria 
            del gas, agua y petróleo, garantizando resultados precisos y confiables.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.title} className="group hover:shadow-lg transition-shadow border-border bg-card">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
