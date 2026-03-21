# Stephen Bayliss Astrology Website

This repository contains the frontend code for the Stephen Bayliss Astrology website, a platform designed to showcase astrology services, provide information, and facilitate booking enquiries.

## Project Overview

The website serves as a digital presence for Stephen Bayliss Astrology, offering detailed descriptions of services such as Natal Chart Readings, Transits & Progressions Readings, and Couples Readings. It features a modern, responsive design with a focus on user experience and clear communication.

## Key Features

-   **Service Showcase**: Detailed presentation of astrology services with pricing and descriptions.
-   **Interactive Contact Form**: A "Book Your Reading" modal that allows users to submit enquiries directly, including service selection, personal details, and preferred contact times.
-   **Dynamic Testimonials**: Displays client feedback to build trust and credibility.
-   **Frequently Asked Questions (FAQ)**: An accordion-style section to address common queries.
-   **Responsive Design**: Optimized for seamless viewing across various devices (desktop, tablet, mobile).
-   **Search Engine Optimization (SEO)**: Implemented meta tags, Open Graph, Twitter Cards, and Schema.org JSON-LD for improved search engine visibility and social media sharing.
-   **Thematic Design**: Incorporates cosmic and astrological visual elements, including background images and a consistent color palette inspired by the reference site.

## Tech Stack

The project is built using a modern web development stack:

-   **Frontend Framework**: [React](https://react.dev/) with [Vite](https://vitejs.dev/) for a fast development experience.
-   **Language**: [TypeScript](https://www.typescriptlang.org/) for type safety and improved code quality.
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/) for utility-first CSS styling, enabling rapid UI development.
-   **UI Components**: [shadcn/ui](https://ui.shadcn.com/) for accessible and customizable UI components.
-   **Iconography**: [Lucide React](https://lucide.dev/) for a collection of beautiful and consistent icons.
-   **Deployment**: Hosted on [Cloudflare Pages](https://pages.cloudflare.com/) for fast, secure, and scalable static site hosting.
-   **Email Functionality**: Powered by a [Cloudflare Worker](https://workers.cloudflare.com/) for handling contact form submissions and sending emails via [Cloudflare Email Routing](https://developers.cloudflare.com/email-routing/).

## Configuration and Deployment

### Frontend (Cloudflare Pages)

The frontend application is deployed via Cloudflare Pages. The build configuration is standard:

-   **Build Command**: `npm run build`
-   **Output Directory**: `/dist`

### Email Service (Cloudflare Worker & Email Routing)

The contact form submissions are handled by a dedicated Cloudflare Worker. This Worker processes the incoming JSON data from the frontend, performs basic validation, and then uses Cloudflare Email Routing to send the enquiry to the designated recipient.

**Worker Endpoint**: `https://shy-scene-c769.ireknie00.workers.dev/contact` (This URL is specific to the deployed Worker and handles POST requests from the contact form).

**Email Routing Binding**: The Worker utilizes an Email Worker binding to send emails. This binding is configured in the `wrangler.toml` (or `wrangler.jsonc`) file associated with the Worker. A typical configuration looks like this:

```toml
[[send_email]]
name = "SEND_EMAIL"
destination_address = "info@stephenbaylissastrology.com.au"
```

-   `name`: Must be `SEND_EMAIL` (case-sensitive) to match the Worker's code.
-   `destination_address`: Must be a verified email address within your Cloudflare Email Routing setup.

**CORS**: The Worker is configured with Cross-Origin Resource Sharing (CORS) headers to allow secure communication only from the deployed frontend (`https://sb-astrology.pages.dev`). It handles `POST` and `OPTIONS` methods and allows `Content-Type` headers.

## Local Development

To set up the project locally, follow these steps:

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/ireccode/sb-astrology-react.git
    cd sb-astrology-react
    ```
2.  **Install dependencies**:
    ```bash
    npm install
    ```
3.  **Run the development server**:
    ```bash
    npm run dev
    ```
    This will start the Vite development server, typically at `http://localhost:5173`.

**Note on Email Functionality in Local Development**: The email submission form directly calls the deployed Cloudflare Worker. Therefore, the email functionality will work even during local development, provided the Worker is deployed and correctly configured on Cloudflare.

## Contributing

Feel free to fork the repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is open-source and available under the [MIT License](LICENSE).
