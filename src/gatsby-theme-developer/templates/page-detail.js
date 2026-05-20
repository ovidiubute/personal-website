import React from "react"
import {graphql} from "gatsby"
import Layout from "gatsby-theme-developer/src/components/Layout";
import PageDetail from "gatsby-theme-developer/src/components/PageDetail";
import Header from "../components/Header";
import useSiteMetadata from "gatsby-theme-developer/src/hooks/use-site-metadata";
import LatestPosts from "../components/LatestPosts";
import TechStack from "../components/TechStack";

const PageTemplate = ({data, location}) => {
  const {
    title,
    subtitle,
    description,
    links
  } = useSiteMetadata();

  const page = data.markdownRemark.frontmatter;
  const htmlContent = data.markdownRemark.html;
  const posts = data.allMarkdownRemark?.edges || [];

  const isHomepage = page.slug === "/";

  const header = <Header
    title={title}
    subtitle={subtitle}
    description={description}
    links={links}
    location={location}/>

  const metaTitle = `${page.title}`;

  return <Layout
    header={header}
    metaTitle={metaTitle}
    metaDescription={page.description ? page.description : description}
    metaUrlPath={page.slug}
    metaPreviewImage={page.coverImage}>
    <PageDetail title={page.title}
                slug={page.slug}
                date={page.date}
                coverImage={page.coverImage}
                content={htmlContent}/>
    {isHomepage && (
      <>
        <TechStack />
        <LatestPosts posts={posts} />
      </>
    )}
  </Layout>
}

export const query = graphql`
  query PageBySlug($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        description
        title
        slug
        coverImage
      }
    }
    allMarkdownRemark(
      limit: 3
      filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } }
      sort: { frontmatter: { date: DESC } }
    ) {
      edges {
        node {
          frontmatter {
            slug
            title
            date
            description
          }
        }
      }
    }
  }
`;

export default PageTemplate
