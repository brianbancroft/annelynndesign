const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const portfolioItem = path.resolve('./src/pages/portfolio-item.js')
    resolve(
      graphql(
        `
          {
            allContentfulPortfolioItem {
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

        const portfolioItems = result.data.allContentfulPortfolioItem.edges
        portfolioItems.forEach(item => {
          createPage({
            path: `/portfolio/${ item.node.slug }/`,
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
