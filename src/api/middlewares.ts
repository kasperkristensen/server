import { defineMiddlewares } from "@medusajs/medusa";

export default defineMiddlewares({
  routes: [
    // {
    //   method: "POST",
    //   matcher: "/admin/products",
    //   additionalDataValidator: {
    //     brand_id: z.string().optional(),
    //   },
    //   middlewares: [],
    // },
    // {
    //   method: "POST",
    //   matcher: "/admin/products/:id",
    //   additionalDataValidator: {
    //     brand_id: z.string().nullish(),
    //   },
    //   middlewares: [],
    // },
    {
      method: ["GET"],
      matcher: "/admin/brands",
      middlewares: [],
    },
  ],
});
