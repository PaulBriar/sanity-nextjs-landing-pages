const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: 'nb0uh66g',
  dataset: 'production',
  token: '', // or leave blank to be anonymous user
  useCdn: false // `false` if you want to ensure fresh data
})

module.exports = client
