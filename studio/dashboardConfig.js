export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '6149b3b0423cc0e3bd93b57f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-q7aro83u',
                  apiId: '380a1064-c329-4587-b25d-fb5320dc63c2'
                },
                {
                  buildHookId: '6149b3b0aa4e2bc64d6d0803',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-tjmy7t55',
                  apiId: 'e216473f-ecae-454b-8b7f-258d9adade45'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/SohelKabir/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-tjmy7t55.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
