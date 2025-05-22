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
  // {
  //   title: 'The Time Machine',
  //   description: `Imagine being able to travel back in time or to the future. Simple turn the knob
  //   to the desired date and press "Go". No more worrying about lost keys or
  //   forgotten headphones with this simple yet affordable solution.`,
  //   imgSrc: '/static/images/time-machine.jpg',
  //   href: '/blog/the-time-machine',
  // },
]

export default projectsData
