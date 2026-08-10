import React from "react"
import {graphql} from "gatsby"
import Layout from "gatsby-theme-developer/src/components/Layout";
import PageDetail from "gatsby-theme-developer/src/components/PageDetail";
import Header from "../components/Header";
import useSiteMetadata from "gatsby-theme-developer/src/hooks/use-site-metadata";
import LatestPosts from "../components/LatestPosts";

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

export const Head = ({ data }) => {
  const page = data.markdownRemark.frontmatter;
  const canonicalUrl = `https://ovidiu.dev${page.slug}`;
  const pageDescription = page.description || "Ovidiu Bute is an engineering leader and software architect building AI-native SaaS platforms.";
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ovidiu Bute",
    alternateName: "Ovi",
    url: "https://ovidiu.dev",
    image: "https://ovidiu.dev/avatar.jpeg",
    jobTitle: "Engineering Leader and Software Architect",
    sameAs: [
      "https://www.linkedin.com/in/ovidiubute/",
      "https://github.com/ovidiubute"
    ],
    knowsAbout: [
      "Software architecture",
      "Engineering leadership",
      "Software as a Service",
      "Artificial intelligence",
      "Multi-tenant systems"
    ]
  };

  return <>
    <html lang="en" />
    <title>{page.title}</title>
    <meta name="description" content={pageDescription} />
    <meta name="author" content="Ovidiu Bute" />
    <link rel="canonical" href={canonicalUrl} />
    <meta property="og:title" content={page.title} />
    <meta property="og:description" content={pageDescription} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={canonicalUrl} />
    <meta property="og:image" content="https://ovidiu.dev/og-default.png" />
    <meta name="twitter:card" content="summary_large_image" />
    <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
  </>;
}
