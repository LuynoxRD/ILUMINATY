import type { BlogContentBlock, BlogSection } from '@/types/content'

export const sectionsToBlocks = (sections: BlogSection[]): BlogContentBlock[] =>
  sections.flatMap((section) => {
    const blocks: BlogContentBlock[] = []

    if (section.title) {
      blocks.push({
        type: 'heading',
        style: 'h2',
        text: section.title,
      })
    }

    for (const paragraph of section.paragraphs) {
      if (paragraph) {
        blocks.push({
          type: 'paragraph',
          text: paragraph,
        })
      }
    }

    if (section.bullets?.length) {
      blocks.push({
        type: 'bullet-list',
        items: section.bullets.filter(Boolean),
      })
    }

    return blocks
  })

export const blocksToSections = (blocks: BlogContentBlock[]): BlogSection[] => {
  const sections: BlogSection[] = []
  let currentSection: BlogSection | null = null

  const ensureSection = () => {
    if (!currentSection) {
      currentSection = {
        title: 'Contenido',
        paragraphs: [],
      }
      sections.push(currentSection)
    }

    return currentSection
  }

  for (const block of blocks) {
    if (block.type === 'heading') {
      currentSection = {
        title: block.text,
        paragraphs: [],
      }
      sections.push(currentSection)
      continue
    }

    if (block.type === 'paragraph') {
      ensureSection().paragraphs.push(block.text)
      continue
    }

    if (block.type === 'bullet-list') {
      ensureSection().bullets = block.items
      continue
    }
  }

  return sections.filter(section => section.title || section.paragraphs.length || section.bullets?.length)
}
