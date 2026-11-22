
/** @type {import('next').NextConfig} */

const repoName = "pangasinan-hidden-gems";

const nextConfig = {
  output: "export",
  trailingSlash: true,

  basePath: `/${repoName}`,

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
