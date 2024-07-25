import { MedusaRequest, MedusaResponse } from "@medusajs/medusa";

const SKIP_PATHS = ["/admin/users/password-token"];

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
  if (SKIP_PATHS.includes(req.path)) {
    return req.next();
  }

  // Your code here
};
