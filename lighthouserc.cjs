module.exports = {
  ci: {
    collect: {
      staticDistDir: "./dist",
      url: ["http://localhost/index.html", "http://localhost/404.html"]
    },
    assert: {
      assertions: {
        "categories:performance": ["warn", { minScore: 0.85 }],
        "categories:accessibility": ["error", { minScore: 0.95 }],
        "categories:best-practices": ["error", { minScore: 0.95 }],
        "categories:seo": ["error", { minScore: 0.95 }]
      }
    },
    upload: {
      target: "temporary-public-storage"
    }
  }
};
