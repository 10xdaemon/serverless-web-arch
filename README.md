# AWS Resume Challenge ☁️

A full-stack, serverless resume website built on AWS, featuring a visitor counter and fully automated CI/CD pipelines.

## Live Demo
Check it out at: [https://josiah.world]

## Architecture
- **Frontend:** React, Tailwind CSS, Vite, pnpm.
- **Infrastructure:** AWS S3 (Hosting), CloudFront (CDN), Route 53 (DNS), ACM (SSL).
- **Backend:** API Gateway, AWS Lambda, DynamoDB.
- **CI/CD:** GitHub Actions (Automated build, S3 sync, and CloudFront invalidation).

## Key Technical Challenges

### 1. Automated Deployment with pnpm
Transitioned the project from a local hybrid server to a pure serverless frontend. Configured GitHub Actions to handle the `pnpm` environment, ensuring builds are optimized and cached for speed.

### 2. Cache Management
Implemented automatic CloudFront cache invalidation in the CI/CD pipeline. This ensures that updates pushed to GitHub are visible globally within seconds, rather than waiting for the standard 24-hour TTL.

### 3. Serverless Backend Integration
Developed a Lambda function to manage a visitor counter, ensuring secure communication between the frontend and DynamoDB via API Gateway with proper CORS configuration.