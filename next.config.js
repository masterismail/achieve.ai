/** @type {import('next').NextConfig} */
const nextConfig = {
  // Other Next.js configuration options
  

  // Enabling breaking site down into static HTML files per route
    output: 'export', // https://nextjs.org/docs/advanced-features/static-html-export
    // Use distDir for specifying the export directory
    distDir: 'out', // Replace 'out' with your desired export directory name
  };
  
  module.exports = nextConfig;
  