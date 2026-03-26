import appPreview from '@/assets/ui/iluminaty-phone.png'
import awalLogo from '@/assets/labels/awal.png'
import columbiaLogo from '@/assets/labels/columbia-records.png'
import epicLogo from '@/assets/labels/epic-records.png'
import sonyPodcastsLogo from '@/assets/labels/sony-music-podcasts.png'
import legacyLogo from '@/assets/labels/legacy-recordings.png'
import masterworksLogo from '@/assets/labels/masterworks.svg'
import universalLogo from '@/assets/labels/universal-music-group.svg'
import interscopeLogo from '@/assets/labels/interscope-records.svg'

const fromPublic = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`

export const uiAssets = {
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

export const imageAssets = {
  blog: {
    kingCipherAlbum: fromPublic('/data/blog/king-cipher-concreto-puro.jpg'),
    nycUrbanScene: fromPublic('/data/blog/nyc-escena-urbana-2026.jpg'),
    lunaVibeJapan: fromPublic('/data/blog/luna-vibe-japon.jpg'),
    graffitiGuide: fromPublic('/data/blog/graffiti-guia.jpg'),
    lunaVibeInterview: fromPublic('/data/blog/luna-vibe-entrevista.jpg'),
    trends2026: fromPublic('/data/blog/tendencias-arte-urbano.jpg'),
    kingCipherStory: fromPublic('/data/blog/bronx-king-cipher.png'),
    productionTools: fromPublic('/data/blog/produccion-electronica.jpg'),
  },
  homeArtists: {
    lilFlow: fromPublic('/data/artists/lil-flow-nyc.jpg'),
    monicaBeats: fromPublic('/data/artists/monica-beats.jpg'),
    grafikSoul: fromPublic('/data/artists/grafik-soul.jpg'),
    kingCipher: fromPublic('/data/artists/king-cipher-home.jpg'),
  },
  artistDirectory: {
    kingCipher: fromPublic('/data/artists/king-cipher.jpg'),
    lunaVibeCollective: fromPublic('/data/artists/luna-vibe-collective.jpg'),
    sprayAngel: fromPublic('/data/artists/spray-angel.jpg'),
    soulMaya: fromPublic('/data/artists/soul-maya.jpg'),
    djRemixMaster: fromPublic('/data/artists/dj-remix-master.jpg'),
    streetPoetAlex: fromPublic('/data/artists/street-poet-alex.jpg'),
    visualNexus: fromPublic('/data/artists/visual-nexus.jpg'),
    reggaetonFuego: fromPublic('/data/artists/reggaeton-fuego.jpg'),
    technoProphet: fromPublic('/data/artists/techno-prophet.jpg'),
  },
  about: {
    community: fromPublic('/data/about/about-community.jpg'),
    marcusRivera: fromPublic('/data/about/marcus-rivera.jpg'),
    sofiaChen: fromPublic('/data/about/sofia-chen.jpg'),
    jamesThompson: fromPublic('/data/about/james-thompson.jpg'),
  },
  followers: {
    briarMartin: fromPublic('/data/followers/briar-martin.jpg'),
    averyJohnson: fromPublic('/data/followers/avery-johnson.jpg'),
    jordanLee: fromPublic('/data/followers/jordan-lee.jpg'),
    taylorBrooks: fromPublic('/data/followers/taylor-brooks.jpg'),
  },
  events: {
    kingCipherLive: fromPublic('/data/events/king-cipher-live.jpg'),
    brooklynNeonFestival: fromPublic('/data/events/brooklyn-neon-festival.jpg'),
    soulMayaRelease: fromPublic('/data/events/soul-maya-release.jpg'),
    lunaVibeMidnight: fromPublic('/data/events/luna-vibe-midnight.jpg'),
    sprayAngelWorkshop: fromPublic('/data/events/spray-angel-workshop.jpg'),
    cypherBattles: fromPublic('/data/events/cypher-battles.jpg'),
    reggaetonFuegoParty: fromPublic('/data/events/reggaeton-fuego-party.jpg'),
    producersSymposium: fromPublic('/data/events/producers-symposium.jpg'),
    technoProphetSet: fromPublic('/data/events/techno-prophet-set.jpg'),
  },
}
