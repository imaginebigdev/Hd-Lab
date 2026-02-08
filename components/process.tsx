const steps = [
  {
    number: "01",
    title: "Solicitud",
    description: "Recibimos su solicitud de análisis con los detalles del producto y los ensayos requeridos."
  },
  {
    number: "02",
    title: "Muestreo",
    description: "Coordinamos la toma de muestras siguiendo protocolos estandarizados para garantizar la integridad."
  },
  {
    number: "03",
    title: "Análisis",
    description: "Realizamos los ensayos en nuestro laboratorio utilizando métodos acreditados y equipos calibrados."
  },
  {
    number: "04",
    title: "Informe",
    description: "Entregamos los resultados con certificación oficial en el tiempo acordado."
  }
]

export function Process() {
  return (
    <section id="proceso" className="py-24 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">Nuestro Proceso</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6 text-balance">
            Un enfoque sistemático para resultados confiables
          </h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            Seguimos un proceso riguroso que garantiza la calidad y precisión 
            de cada análisis que realizamos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-primary-foreground/20 -translate-x-1/2" />
              )}
              <div className="relative">
                <span className="text-6xl font-bold text-accent/20">{step.number}</span>
                <h3 className="text-xl font-semibold mt-4 mb-3">{step.title}</h3>
                <p className="opacity-80 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
