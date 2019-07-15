export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d2d0ad892fa989b301fe85b',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-7tufnod3',
                  apiId: '73e07d6f-da54-4e7f-ab25-424e9ad03851'
                },
                {
                  buildHookId: '5d2d0ad978e4b807a2b96e67',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-25pbhpo7',
                  apiId: 'ae4580c6-7ec6-4af8-be06-972ef693d691'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/PaulBriar/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-25pbhpo7.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
