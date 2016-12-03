import React from "react"
import { graphql } from "gatsby"

import PrimaryLayout from "../layouts/PrimaryLayout"
import Post from "../components/Post"

export default ({ data }) => {
  console.log(data)
  return (
    <PrimaryLayout column="col-xs-6">
      <Post
        title="This is our first post"
        excerpt="Wer are writing something to be displayed in our excerpt"
      />
    </PrimaryLayout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
          date
          keywords
          image
        }
        excerpt
        html
      }
    }
  }
`
