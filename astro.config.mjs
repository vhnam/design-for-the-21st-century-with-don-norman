// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Design for the 21st Century with Don Norman",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/vhnam/design-for-the-21st-century",
        },
      ],
      sidebar: [
        {
          label: "How Designers Can Improve the World",
          items: [
            {
              label: "Welcome to Design for the 21st Century with Don Norman",
              slug: "how-designers-can-improve-the-world/welcome-to-design-for-the-21st-century-with-don-norman",
            },
          ],
        },
      ],
    }),
  ],
});
