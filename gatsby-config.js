module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-developer",
      options: {
        title: "Ovidiu Bute (Ovi)",
        subtitle: "Tech Lead",
        description: "Ovi's personal blog and portfolio",
        siteUrl: "https://ovidiu.dev",
        defaultPreviewImage: "/favicon-32x32.png",
        author: {
          name: "Ovidiu Bute (Ovi)",
          bio: "Tech Lead",
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
            title: "About me",
            href: "/about-me",
          },
          {
            title: "Blog",
            href: "/blog",
          },
        ],
        articlesPerPage: 4,
        language: "en",
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "UA-138322227-1", // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
          // Defaults to https://www.googletagmanager.com
          origin: "YOUR_SELF_HOSTED_ORIGIN",
          // Delays processing pageview events on route update (in milliseconds)
          delayOnRouteUpdate: 0,
        },
      },
    },
  ],
};
