
import Prj1 from "../assets/prj1.png";
import Prj2 from "../assets/prj2.png";
import Prj3 from "../assets/prj3.png";
import Prj4 from "../assets/prj4.png";
import Prj5 from "../assets/prj5.png";

export const projects = [
  {
    id: 1,
    title: "Athlink – Sports Social Network",
    image: Prj1,
    description:
      "A sports social platform similar to LinkedIn, connecting athletes and sports clubs. Users can discover opportunities, connect with other athletes, exchange messages, and share photos, videos, and sports-related content. The platform includes post publishing, comments, reactions, and a PHP API for managing users, posts, and interactions.",
    videoId: "BjBmV0k3JHs",
    technologies: ["React", "PHP", "MySQL", "Axios","Tailwind CSS"],
    liveDemo: null,
    sourceCode: "https://github.com/Mohamed-Saad-Lachqar/Athlink",
  },
  {
    id: 2,
    title: "Nowotch",
    image: Prj2,
    description:
      "A responsive company website showcasing digital connectivity services, including 4G/Wi-Fi router rentals, TV/SAT installations, network configuration, and IT maintenance. Developed the main website and contributed to additional WordPress websites for other company projects.",
    videoId: "A9zv3sSY8Lw",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveDemo: "https://mohamed-saad-lachqar.github.io/Nowotch-html/index.html",
    sourceCode: "https://github.com/Mohamed-Saad-Lachqar/Nowotch-html",
  },
  {
    id: 3,
    title: "MSL Books – Book Discovery Web App",
    image: Prj3,
    description:
      "A responsive web application for discovering and exploring books using an external API. It dynamically retrieves book information and presents it through an interactive interface designed to make browsing and discovering books smooth and engaging.",
    videoId: "NlQF509aZdA",
    technologies: ["React", "JavaScript", "API Integration", "Tailwind CSS"],
    liveDemo: 'https://mohamed-saad-lachqar.github.io/MSLbooks/',
    sourceCode: 'https://github.com/Mohamed-Saad-Lachqar/MSLbooks',
  },
  {
    id: 4,
    title: "SepiaStock – Stock Management",
    image: Prj4,
    description:
      "An internal web application developed to simplify inventory and product management. Staff can add, update, delete, and track products through a simple, intuitive interface. The application was deployed and tested to ensure reliable operation and ease of use.",
    videoId: "",
    technologies: ["PHP", "MySQL","JavaScript", "HTML","CSS"],
    liveDemo: null,
    sourceCode: "https://github.com/Mohamed-Saad-Lachqar/SepiaStock",
  },
  {
    id: 5,
    title: "Naturia – Naturopathy & Wellness",
    image: Prj5,
    description:
      "A responsive e-commerce and informational website for a fictional naturopathy and wellness brand. Features include a customized animated hero section, Home, About, Shop, Blog, and Contact pages, a WooCommerce-powered shop, a custom blog grid, and a contact form. Additional custom CSS, PHP, and JavaScript were used for animations, interactions, responsiveness, and visual consistency.",
    videoId: "v7m2lANJUaU",
    technologies: ["WordPress",
      "PHP",
      "WooCommerce",
      "Elementor",
      "CSS",
      "JavaScript",],
    liveDemo: null,
    sourceCode: null,
  },
];
