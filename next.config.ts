import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["placeholder.com", "res.cloudinary.com"], // Add any domains you'll be loading images from
  },
  env: {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    EMAIL_TO: process.env.EMAIL_TO,
  },
}

export default nextConfig

