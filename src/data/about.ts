import { imageAssets } from '@/data/assets'
import type { AboutContent } from '@/types/content'

export const aboutContent: AboutContent = {
  missionImage: imageAssets.about.community,
  team: [
    {
      id: 'marcus-rivera',
      name: 'Marcus Rivera',
      role: 'Fundador & CEO',
      bio: 'Productor de hip-hop de Harlem con 20 años en la industria. Su foco es abrir oportunidades reales para talento urbano.',
      image: imageAssets.about.marcusRivera,
      accentClass: 'text-neon-lime',
      email: 'mailto:marcus@iluminaty.com',
      secondaryLink: 'https://linkedin.com/in/marcusrivera',
      secondaryLabel: 'LinkedIn',
    },
    {
      id: 'sofia-chen',
      name: 'Sofia Chen',
      role: 'CTO & Co-Founder',
      bio: 'Ingeniera de software de Brooklyn. Diseña infraestructura escalable y experiencias claras para comunidades creativas.',
      image: imageAssets.about.sofiaChen,
      accentClass: 'text-neon-violet',
      email: 'mailto:sofia@iluminaty.com',
      secondaryLink: 'https://github.com/sofiachen',
      secondaryLabel: 'GitHub',
    },
    {
      id: 'james-thompson',
      name: 'James Thompson',
      role: 'Community Lead',
      bio: 'Curador y promotor cultural del Bronx. Conecta artistas con oportunidades y colaboraciones auténticas.',
      image: imageAssets.about.jamesThompson,
      accentClass: 'text-neon-cyan',
      email: 'mailto:james@iluminaty.com',
      secondaryLink: 'https://instagram.com/jamesthompson',
      secondaryLabel: 'Instagram',
    },
  ],
}
