import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Getting Started with AWS Cloud Engineering",
    paragraph:
      "A beginner's guide to launching your first cloud project on AWS. Step-by-step instructions and best practices for new engineers.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Joseph Ntwali",
      image: "/images/testimonials/author-01.png",
      designation: "Cloud Consultant & Founder, JCL",
    },
    tags: ["aws", "cloud", "beginner"],
    publishDate: "2024",
    link: "https://medium.com/@JosephCloudLabs/aws-cloud-engineering-guide"
  },
  {
    id: 2,
    title: "YouTube: Deploying a Serverless App on AWS Lambda",
    paragraph:
      "Watch this hands-on video tutorial to learn how to deploy and manage serverless applications using AWS Lambda and API Gateway.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Joseph Ntwali",
      image: "/images/testimonials/author-02.png",
      designation: "Cloud Consultant & YouTuber",
    },
    tags: ["youtube", "serverless", "lambda"],
    publishDate: "2024",
    link: "https://www.youtube.com/@JosephCloudLabs"
  },
  {
    id: 3,
    title: "Medium: Cost Optimization Strategies in the Cloud",
    paragraph:
      "Explore proven strategies to reduce your cloud spend while maintaining performance and scalability. Real-world examples and tips.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Joseph Ntwali",
      image: "/images/testimonials/author-03.png",
      designation: "Cloud Consultant & Writer",
    },
    tags: ["medium", "cost optimization", "cloud"],
    publishDate: "2024",
    link: "https://medium.com/@JosephCloudLabs/cloud-cost-optimization"
  },
];
export default blogData;
