// -- Prismic Repo Name
export const repoName = 'aerosolalliance'

// -- Prismic API endpoint
// Determines which repository to query and fetch data from
// Configure your site's access point here
export const apiEndpoint = `https://${repoName}.cdn.prismic.io/api/v2`

// -- Access Token if the repository is not public
// Generate a token in your dashboard and configure it here if your repository is private
export const accessToken = process.env.PRISMIC_ACCESS_TOKEN

// -- Link resolution rules
// Manages the url links to internal Prismic documents

interface Doc {
  type: string
  uid: string
  url: string
}

export const linkResolver = (doc: Doc) => {
  if (doc.type === 'home') {
    return '/'
  }

  if (doc.type === 'what-you-can-do-subpage') {
    return `${doc.url}`
  }

  if (doc.type === 'facts-subpage') {
    return `${doc.url}`
  }

  return `/${doc.uid}`
}

// -- Route Resolver rules
// Manages the url links to internal Prismic documents two levels deep (optionals)
export const routeResolver = {
  routes: [
    {
      type: 'home',
      path: '/',
    },
    {
      type: 'what-you-can-do-subpage',
      path: '/what-you-can-do/:uid',
    },
    {
      type: 'what-you-can-do',
      path: '/:uid',
    },
    {
      type: 'facts-subpage',
      path: '/facts/:uid',
    },
  ],
}
