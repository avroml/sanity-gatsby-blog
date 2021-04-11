export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60729c6873558d17fea7bb7c",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-yokvm3pk",
                  apiId: "eef9e161-37d8-428c-a95d-d457cfc607db",
                },
                {
                  buildHookId: "60729c68435c4714a45683ee",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-12rcu9it",
                  apiId: "43f07002-66d7-421e-969c-5afdedc483eb",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/avroml/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-12rcu9it.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
