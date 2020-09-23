const path = require('path')

// module.exports.onCreateNode = ({ node, actions}) => {
//     const {createNodeField} = actions

//     // if (node.internal.type ===  ) {
//     //      const slug = path.basename(node.fileAbsolutePath, '.md')
//     createNodeField({
//         node,
//         name: 'slug',
//         value: slug
//     })
//     // }
// };

module.exports.createPages = async({ graphql, actions}) => {
    const { createPage } = actions
    const candidateTemplate = path.resolve('./src/templates/candidate.js')
    const countyTemplate = path.resolve('./src/templates/results.js')
    const res = await graphql(`
        query {
            allContentfulCandidate {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)

    const countyRes = await graphql(`
        query {
            allContentfulCountyResults {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)

    res.data.allContentfulCandidate.edges.forEach((edge) => {
        createPage({
            component: candidateTemplate,
            path: `/candidates/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })

    countyRes.data.allContentfulCountyResults.edges.forEach((edge) => {
        createPage({
            component: countyTemplate,
            path: `results/county/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })

}