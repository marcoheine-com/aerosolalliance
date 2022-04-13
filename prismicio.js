import * as prismic from '@prismicio/client'
import { enableAutoPreviews } from '@prismicio/next'
import sm from './sm.json'

export const endpoint = sm.apiEndpoint
export const repositoryName = prismic.getRepositoryName(endpoint)
export const accessToken = process.env.PRISMIC_ACCESS_TOKEN

// -- Firebse API key for connectivity with firebse
export const firebaseApiKey = process.env.FIREBASE_API_KEY
// -- Definition of baseURL based on running environment

// TODO: change when going to production
export const baseURL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/'
    : 'https://aerosolalliance.vercel.app/'

export const linkResolver = (doc) => {
  if (doc.type === 'home') {
    return '/'
  }

  if (doc.type === 'what-you-can-do-subpage') {
    return `${doc.url}`
  }

  if (doc.type === 'facts-subpage') {
    return `${doc.url}`
  }

  if (doc.link_type === 'Web') {
    return `${doc.url}`
  }

  return `/${doc.uid}`
}

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

// This factory function allows smooth preview setup
export function createClient(config = {}) {
  const client = prismic.createClient(endpoint, {
    ...config,
    accessToken,
    routes: routeResolver.routes,
  })

  enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  })

  return client
}
