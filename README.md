# Nextfolio - Modern Portfolio Template

A clean, fast, and lightweight portfolio template built with Next.js 14, Vercel, and Tailwind CSS for optimal performance and SEO.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2F1msirius%2FNextfolio)

## Features

- ⚡️ Built with Next.js 14 and TypeScript
- 🎨 Tailwind CSS for styling
- 📱 Fully responsive design
- 🌙 Dark mode support
- 📝 MDX for blog posts
- 📊 Vercel Analytics integration
- 📈 Speed Insights
- 🔍 SEO optimized
- 📰 RSS, Atom, and JSON feeds
- 🧮 KaTeX support for mathematical equations
- 🎥 YouTube video embedding
- 🐦 Twitter/X embeds
- 📨 Contact form integration

## Quick Start

1. **Prerequisites**
   - [Node.js](https://nodejs.org/)
   - [pnpm](https://pnpm.io/installation)

2. **Installation**
   ```bash
   pnpm create next-app --example https://github.com/1msirius/Nextfolio my-portfolio
   cd my-portfolio
   pnpm install
   ```

3. **Development**
   ```bash
   pnpm dev
   ```
   Visit [http://localhost:3000](http://localhost:3000)

## Configuration

1. **Site Metadata**
   Update `config/metadata.ts` with your information:
   ```typescript
   export const metaData = {
     baseUrl: "your-site-url",
     title: "Your Site Title",
     name: "Your Name",
     ogImage: "/opengraph-image.png",
     description: "Your site description"
   };

   export const socialLinks = {
     twitter: "your-twitter-url",
     github: "your-github-url",
     instagram: "your-instagram-url",
     linkedin: "your-linkedin-url",
     email: "mailto:your-email"
   };
   ```

2. **Content**
   - Blog posts: Add MDX files in `/content`
   - Projects: Update `app/project/projectdata.tsx`
   - Photos: Modify `app/photos/page.tsx`

3. **Assets**
   - Replace `public/profile.png` with your photo
   - Update `public/favicon.ico`

## Analytics

Nextfolio comes with built-in support for [Vercel Analytics](https://vercel.com/docs/analytics) and [Speed Insights](https://vercel.com/docs/speed-insights). Simply deploy your site to Vercel and enable these features in your project settings.

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Content:** MDX
- **Deployment:** Vercel
- **Analytics:** Vercel Analytics & Speed Insights

## Dependencies

Key dependencies include:
- React 18.3
- Next.js 14.2
- Tailwind CSS 3.4
- MDX for content
- KaTeX for math equations
- Various utility libraries (date-fns, clsx)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For issues and feature requests, please [open an issue](https://github.com/yourusername/your-repo/issues) on GitHub.

---

Built with ❤️ using Next.js and Vercel