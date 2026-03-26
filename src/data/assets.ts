import appPreview from '@/assets/ui/iluminaty-phone.png'
import awalLogo from '@/assets/labels/awal.png'
import columbiaLogo from '@/assets/labels/columbia-records.png'
import epicLogo from '@/assets/labels/epic-records.png'
import sonyPodcastsLogo from '@/assets/labels/sony-music-podcasts.png'
import legacyLogo from '@/assets/labels/legacy-recordings.png'
import masterworksLogo from '@/assets/labels/masterworks.svg'
import universalLogo from '@/assets/labels/universal-music-group.svg'
import interscopeLogo from '@/assets/labels/interscope-records.svg'
import type { ImageAssets, UiAssets } from '@/types/content'

const fromPublic = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`

export const uiAssets: UiAssets = {
  appPreview,
  labelLogos: [
    { id: 'awal', name: 'AWAL', src: awalLogo },
    { id: 'columbia', name: 'Columbia Records', src: columbiaLogo },
    { id: 'epic', name: 'Epic Records', src: epicLogo },
    { id: 'sony-podcasts', name: 'Sony Music Podcasts', src: sonyPodcastsLogo },
    { id: 'legacy', name: 'Legacy Recordings', src: legacyLogo },
    { id: 'masterworks', name: 'Masterworks', src: masterworksLogo },
    { id: 'universal', name: 'Universal Music Group', src: universalLogo },
    { id: 'interscope', name: 'Interscope Records', src: interscopeLogo },
  ],
}

export const imageAssets: ImageAssets = {
  blog: {
    kingCipherAlbum: fromPublic('/data/blog/king-cipher-concreto-puro.webp'),
    nycUrbanScene: fromPublic('/data/blog/nyc-escena-urbana-2026.webp'),
    lunaVibeJapan: fromPublic('/data/blog/luna-vibe-japon.webp'),
    graffitiGuide: fromPublic('/data/blog/graffiti-guia.webp'),
    lunaVibeInterview: fromPublic('/data/blog/luna-vibe-entrevista.webp'),
    trends2026: fromPublic('/data/blog/tendencias-arte-urbano.webp'),
    kingCipherStory: fromPublic('/data/blog/bronx-king-cipher.webp'),
    productionTools: fromPublic('/data/blog/produccion-electronica.webp'),
  },
  homeArtists: {
    lilFlow: fromPublic('/data/artists/lil-flow-nyc.webp'),
    monicaBeats: fromPublic('/data/artists/monica-beats.webp'),
    grafikSoul: fromPublic('/data/artists/grafik-soul.webp'),
    kingCipher: fromPublic('/data/artists/king-cipher-home.webp'),
  },
  artistDirectory: {
    kingCipher: fromPublic('/data/artists/king-cipher.webp'),
    lunaVibeCollective: fromPublic('/data/artists/luna-vibe-collective.webp'),
    sprayAngel: fromPublic('/data/artists/spray-angel.webp'),
    soulMaya: fromPublic('/data/artists/soul-maya.webp'),
    djRemixMaster: fromPublic('/data/artists/dj-remix-master.webp'),
    streetPoetAlex: fromPublic('/data/artists/street-poet-alex.webp'),
    visualNexus: fromPublic('/data/artists/visual-nexus.webp'),
    reggaetonFuego: fromPublic('/data/artists/reggaeton-fuego.webp'),
    technoProphet: fromPublic('/data/artists/techno-prophet.webp'),
  },
  about: {
    community: fromPublic('/data/about/about-community.webp'),
    marcusRivera: fromPublic('/data/about/marcus-rivera.webp'),
    sofiaChen: fromPublic('/data/about/sofia-chen.webp'),
    jamesThompson: fromPublic('/data/about/james-thompson.webp'),
  },
  followers: {
    briarMartin: fromPublic('/data/followers/briar-martin.webp'),
    averyJohnson: fromPublic('/data/followers/avery-johnson.webp'),
    jordanLee: fromPublic('/data/followers/jordan-lee.webp'),
    taylorBrooks: fromPublic('/data/followers/taylor-brooks.webp'),
  },
  events: {
    kingCipherLive: fromPublic('/data/events/king-cipher-live.webp'),
    brooklynNeonFestival: fromPublic('/data/events/brooklyn-neon-festival.webp'),
    soulMayaRelease: fromPublic('/data/events/soul-maya-release.webp'),
    lunaVibeMidnight: fromPublic('/data/events/luna-vibe-midnight.webp'),
    sprayAngelWorkshop: fromPublic('/data/events/spray-angel-workshop.webp'),
    cypherBattles: fromPublic('/data/events/cypher-battles.webp'),
    reggaetonFuegoParty: fromPublic('/data/events/reggaeton-fuego-party.webp'),
    producersSymposium: fromPublic('/data/events/producers-symposium.webp'),
    technoProphetSet: fromPublic('/data/events/techno-prophet-set.webp'),
  },
}
