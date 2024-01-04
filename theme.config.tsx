import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>CWI Theme</span>,
  project: {
    link: "https://github.com/Code-Wave-Innovation/docs",
  },
  docsRepositoryBase: "https://github.com/Code-Wave-Innovation/docs#readme",
  footer: {
    text: (
      <footer>
        {" "}
        © 2022 - {new Date().getFullYear()}. All rights reserved. Made with ❤️ by Code Wave Innovation{" "}
      </footer>
    ),
  },
};

export default config;
