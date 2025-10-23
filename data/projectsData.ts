interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string // e.g. '/static/images/google.png'
}

const projectsData: Project[] = [
  {
    title: 'Sick Fits',
    description:
      '"Sick Fits" is a full-stack e-commerce example project built during the completion of Wes Bos\'s "Advanced React" course. It features a Next.js frontend utilizing Apollo Client for data fetching and caching, and Stripe for payment processing. The backend is built with Keystone JS to act as our auth handler, CMS, and GraphQL API to our MongoDB database.',
    imgSrc: '/static/images/sick-fits/advanced-react-mocks-v2-cropped.jpg',
    href: 'https://sickfits.devondaviau.com/',
  },
  {
    title: 'Story Shelf',
    description: `Story Shelf is a basic CRUD app built with Next.js, TypeScript, Tailwind CSS, Hasura, and Zustand. It provides a simple, pleasing interface for managing your favourite books and keeping track of which ones you've read and which ones you want to read.`,
    imgSrc: '/static/images/story-shelf/story-shelf.png',
    href: 'https://storyshelf.devondaviau.com/',
  },
]

export default projectsData
