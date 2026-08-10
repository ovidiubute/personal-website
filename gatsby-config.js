module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-developer",
      options: {
        title: "Ovidiu Bute (Ovi)",
        subtitle: "Engineering leader & software architect",
        description: "Ovidiu Bute is an engineering leader and software architect building AI-native, multi-tenant SaaS platforms.",
        siteUrl: "https://ovidiu.dev",
        defaultPreviewImage: "/favicon-32x32.png",
        author: {
          name: "Ovidiu Bute",
          bio: "Engineering leader and software architect building AI-native SaaS platforms",
          avatar: "/avatar.jpeg",
          links: {
            linkedin: "https://linkedin.com/in/ovidiubute",
            github: "https://github.com/ovidiubute",
            mail: "hello@ovidiu.dev",
            twitter: "",
            instagram: "",
          },
        },
        links: [
          {
            title: "Home",
            href: "/",
          },
          {
            title: "About",
            href: "/about-me",
          },
          {
            title: "Blog",
            href: "/blog",
          },
        ],
        articlesPerPage: 20,
        language: "en",
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Space Grotesk\:400,500,600,700`,
          `Inter\:400,500,600`,
        ],
        display: "swap",
      },
    },
  ],
};
