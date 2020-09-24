const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const portfolioItem = path.resolve('./src/pages/case-study.js')
    resolve(
      graphql(
        `
          {
            allContentfulDetailedCaseStudy {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const portfolioItems = result.data.allContentfulDetailedCaseStudy.edges
        portfolioItems.forEach(item => {
          createPage({
            path: `/portfolio/${item.node.slug}/`,
            component: portfolioItem,
            context: {
              slug: item.node.slug,
            },
          })
        })
      })
    )
  })
}
