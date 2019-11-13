export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '5dcc369df093d2ce5663b5ba',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-96nd69br',
                  apiId: '6f9fb3f7-3630-4000-b99a-7e9f560eeeeb'
                },
                {
                  buildHookId: '5dcc369d9d7797c78ec8a568',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-dzr63dap',
                  apiId: 'b5a81b09-bb9e-45f1-a51d-d278632226e4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jasonzhao588/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-dzr63dap.netlify.com', category: 'apps'}
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
