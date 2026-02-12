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
            {
              label:
                "21st Century Design: Let's Use Human-Centered Design to Solve Major Global Challenges",
              slug: "how-designers-can-improve-the-world/21st-century-design-lets-use-human-centered-design-to-solve-major-global-challenges",
            },
            {
              label:
                "Why We've Evolved from User-Centered Design to People-, Human- and Humanity-Centered Design",
              slug: "how-designers-can-improve-the-world/why-weve-evolved-from-user-centered-design-to-people-human-and-humanity-centered-design",
            },
            {
              label:
                "Don Norman: Why Designers (Not Engineers or Scientists) Will Solve the UN's 17 Biggest Problems",
              slug: "how-designers-can-improve-the-world/don-norman-why-designers-not-engineers-or-scientists-will-solve-the-uns-17-biggest-problems",
            },
            {
              label: "Let's Democratize Design",
              slug: "how-designers-can-improve-the-world/lets-democratize-design",
            },
            {
              label:
                "What is the Difference Between Wicked Problems and Complex Socio-Technical Systems?",
              slug: "how-designers-can-improve-the-world/what-is-the-difference-between-wicked-problems-and-complex-socio-technical-systems",
            },
            {
              label: "Lesson 1 Recap",
              slug: "how-designers-can-improve-the-world/recap",
            },
          ],
        },
      ],
    }),
  ],
});
