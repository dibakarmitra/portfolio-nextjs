// /config/app.ts
export default {
    name: 'Dibakar Mitra Portfolio',
    description: 'Professional portfolio of Dibakar Mitra, a skilled PHP Developer specializing in web development',
    url: process.env.NEXT_PUBLIC_APP_URL || 'https://www.dibakarmitra.com',
    analytics: {
        vercel: process.env.NEXT_PUBLIC_VERCEL_ANALYTICS === 'true',
        speedInsights: process.env.NEXT_PUBLIC_SPEED_INSIGHTS === 'true',
    },
    social: {
        twitter: process.env.NEXT_PUBLIC_TWITTER_HANDLE || 'dibakarmitra',
        github: process.env.NEXT_PUBLIC_GITHUB_HANDLE || 'dibakarmitra',
        linkedin: process.env.NEXT_PUBLIC_LINKEDIN_HANDLE || 'dibakarmitra',
        email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'dibakarmitra07@gmail.com'
    }
};