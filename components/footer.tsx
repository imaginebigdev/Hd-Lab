import Link from "next/link"
import Image from "next/image"

const footerLinks = {
  servicios: [
    { label: "Análisis de Gas", href: "#servicios" },
    { label: "Control de Agua", href: "#servicios" },
    { label: "Análisis de Petróleo", href: "#servicios" },
    { label: "Ensayos Especiales", href: "#servicios" },
  ],
  empresa: [
    { label: "Sobre Nosotros", href: "#nosotros" },
    { label: "Nuestro Proceso", href: "#proceso" },
    { label: "Certificaciones", href: "#servicios" },
    { label: "Contacto", href: "#contacto" },
  ],
  legal: [
    { label: "Términos y Condiciones", href: "#" },
    { label: "Política de Privacidad", href: "#" },
    { label: "Política de Calidad", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image 
                src="/images/logo-light.png"
                alt="HDLab - Laboratorio de Control de Calidad"
                width={160}
                height={48}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-sm opacity-80 leading-relaxed mb-6">
              Laboratorio de control de calidad especializado en gas, agua y petróleo. 
              Más de 15 años brindando resultados confiables.
            </p>
            <p className="text-sm opacity-60">
              Buenos Aires, Argentina
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Servicios</h3>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-60">
            © {new Date().getFullYear()} HDLab. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <span className="text-sm opacity-60">info@hdlab.com.ar</span>
            <span className="text-sm opacity-60">+54 11 1234-5678</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
