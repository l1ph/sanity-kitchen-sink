export default {
  widgets: [
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
                  buildHookId: '63568cb5515bc834f3406419',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-paeghtbb',
                  apiId: 'dda30aa0-7b35-4eac-b644-2d864c8540ec'
                },
                {
                  buildHookId: '63568cb51f0a1e353d6327da',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-uhzcr6xn',
                  apiId: 'd41fa071-57be-4c62-a8bf-19ef3882fd3e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/l1ph/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-uhzcr6xn.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
