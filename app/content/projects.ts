export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'nextjs-portfolio',
    title: 'Next.js Portfolio',
    description: 'A modern portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features blog posts, project showcase, and dynamic content.',
    image: '/projects/portfolio.png',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MDX'],
    github: 'https://github.com/yourusername/portfolio',
    demo: 'https://your-portfolio.vercel.app',
    featured: true
  },
  {
    id: 'ai-image-generator',
    title: 'AI Image Generator',
    description: 'An AI-powered image generation tool using DALL-E API. Create unique images from text descriptions with advanced customization options.',
    image: '/projects/ai-image.png',
    tags: ['React', 'OpenAI API', 'Node.js', 'MongoDB'],
    github: 'https://github.com/yourusername/ai-image-generator',
    demo: 'https://ai-image-gen.vercel.app',
    featured: true
  },
  {
    id: 'ecommerce-platform',
    title: 'Modern E-commerce Platform',
    description: 'Full-featured e-commerce platform with real-time inventory, payment processing, and admin dashboard. Supports multiple vendors and product categories.',
    image: '/projects/ecommerce.png',
    tags: ['Next.js', 'Stripe', 'PostgreSQL', 'Redis'],
    github: 'https://github.com/yourusername/ecommerce',
    demo: 'https://modern-ecommerce.demo.app',
    featured: true
  },
  {
    id: 'social-media-dashboard',
    title: 'Social Media Analytics Dashboard',
    description: 'Comprehensive social media analytics dashboard integrating multiple platforms. Features real-time data, custom reports, and AI-powered insights.',
    image: '/projects/dashboard.png',
    tags: ['Vue.js', 'D3.js', 'Firebase', 'Social APIs'],
    github: 'https://github.com/yourusername/social-dashboard',
    demo: 'https://social-analytics.demo.app',
    featured: false
  },
  {
    id: 'ai-chatbot',
    title: 'AI Customer Service Chatbot',
    description: 'Intelligent customer service chatbot powered by GPT-4. Features context awareness, multi-language support, and seamless human handoff.',
    image: '/projects/chatbot.png',
    tags: ['Python', 'FastAPI', 'OpenAI', 'WebSocket'],
    github: 'https://github.com/yourusername/ai-chatbot',
    featured: true
  },
  {
    id: 'fitness-tracker',
    title: 'Smart Fitness Tracker',
    description: 'Comprehensive fitness tracking application with workout plans, nutrition tracking, and progress analytics. Supports wearable device integration.',
    image: '/projects/fitness.png',
    tags: ['React Native', 'GraphQL', 'Node.js', 'MongoDB'],
    github: 'https://github.com/yourusername/fitness-tracker',
    demo: 'https://fitness-tracker.demo.app',
    featured: false
  },
  {
    id: 'real-estate-platform',
    title: 'Real Estate Management Platform',
    description: 'Modern real estate platform with virtual tours, appointment scheduling, and property management features. Includes agent and client portals.',
    image: '/projects/real-estate.png',
    tags: ['Angular', 'Node.js', 'PostgreSQL', 'Three.js'],
    github: 'https://github.com/yourusername/real-estate',
    featured: false
  },
  {
    id: 'learning-management',
    title: 'Learning Management System',
    description: 'Feature-rich learning management system with video courses, quizzes, and progress tracking. Supports multiple user roles and course creation.',
    image: '/projects/lms.png',
    tags: ['Next.js', 'Django', 'PostgreSQL', 'AWS'],
    github: 'https://github.com/yourusername/lms',
    demo: 'https://lms-demo.vercel.app',
    featured: true
  },
  {
    id: 'inventory-system',
    title: 'Smart Inventory System',
    description: 'Intelligent inventory management system with barcode scanning, automated reordering, and predictive analytics for stock optimization.',
    image: '/projects/inventory.png',
    tags: ['React', 'Node.js', 'MySQL', 'TensorFlow'],
    github: 'https://github.com/yourusername/inventory',
    featured: false
  },
  {
    id: 'music-streaming',
    title: 'Music Streaming Platform',
    description: 'Modern music streaming platform with personalized recommendations, playlist management, and social features. Supports high-quality audio streaming.',
    image: '/projects/music.png',
    tags: ['Vue.js', 'Go', 'PostgreSQL', 'WebRTC'],
    github: 'https://github.com/yourusername/music-stream',
    demo: 'https://music-stream.demo.app',
    featured: true
  }
];
