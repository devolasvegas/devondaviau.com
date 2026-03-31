interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string // e.g. '/static/images/google.png'
}

const projectsData: Project[] = [
  {
    title: 'Freshbooks MCP Server',
    description: `A Model Context Protocol server created with the cooperation of Claude Code and custom subagents that bridges Claude Code and the FreshBooks API. Built in TypeScript with stdio transport, it exposes FreshBooks operations — client management, invoicing, and more — as structured tools that an AI assistant can invoke directly. Handles OAuth2 authentication with automatic token refresh, so freelance admin work becomes a natural-language conversation.`,
    imgSrc: '/static/images/canada/mountains.jpg',
    href: 'https://github.com/devolasvegas/freshbooks-mcp',
  },
  {
    title: 'Story Shelf',
    description: `Story Shelf is a basic CRUD app built with Next.js, TypeScript, Tailwind CSS, Hasura, and Zustand. It provides a simple, pleasing interface for managing your favourite books and keeping track of which ones you've read and which ones you want to read.`,
    imgSrc: '/static/images/story-shelf/story-shelf.png',
    href: 'https://storyshelf.devondaviau.com/',
  },
  {
    title: 'Sick Fits',
    description:
      '"Sick Fits" is a full-stack e-commerce example project built during the completion of Wes Bos\'s "Advanced React" course. It features a Next.js frontend utilizing Apollo Client for data fetching and caching, and Stripe for payment processing. The backend is built with Keystone JS to act as our auth handler, CMS, and GraphQL API to our MongoDB database.',
    imgSrc: '/static/images/sick-fits/advanced-react-mocks-v2-cropped.jpg',
    href: 'https://sickfits.devondaviau.com/',
  },
]

export default projectsData
