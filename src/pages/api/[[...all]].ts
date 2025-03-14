import type { NextApiRequest, NextApiResponse } from "next";
import httpProxyMiddleware from "next-http-proxy-middleware";

const isDevelopment = process.env.NODE_ENV !== "production";

export const config = {
  api: {
    externalResolver: true,
    bodyParser: false,
  },
};

// NextJS rewrite built-in functionnality doesn't support insecure certificates,
// which is always the case in local development.
// https://github.com/vercel/next.js/issues/21537
// The alternative is setting the rewrite ourself with the help of next-http-proxy-middleware
async function handler(req: NextApiRequest, res: NextApiResponse): Promise<unknown> {
  if (isDevelopment) {
    if (req.url?.startsWith("/api/") === true) {
      return httpProxyMiddleware(req, res, {
        target: process.env["NEXT_PUBLIC_API_BASE_URL"] ?? "",
        secure: false,
      });
    }
  }
  res.status(404).send(null);
  return Promise.resolve();
}

export default handler;
