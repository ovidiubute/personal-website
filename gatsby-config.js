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
                    }
                },
                links: [
                    {
                        title: "Home",
                        href: "/"
                    },
                    {
                        title: "About me",
                        href: "/about-me"
                    },
                    {
                        title: "Blog",
                        href: "/blog"
                    }
                ],
                articlesPerPage: 4,
                language: "en"
            },
        },
    ],
}