import { defineCustomFieldsConfig } from "@medusajs/admin-sdk";
import { Text } from "@medusajs/ui";
import { z } from "zod";

const BrandDisplay = ({ data }) => {
  return (
    <div className="py-4 px-6 grid grid-cols-2 text-ui-fg-subtle">
      <Text size="small" leading="compact" weight="plus">
        Brand!
      </Text>
      <Text size="small" leading="compact">
        {data?.brand?.name || "-"}
      </Text>
    </div>
  );
};

export default defineCustomFieldsConfig({
  model: "product",
  link: "brand",
  forms: [
    {
      zone: "edit",
      fields: {
        brand_id: {
          label: "Brand!",
          validation: z.string().optional(),
          defaultValue: (data) => data?.brand?.id || "",
        },
      },
    },
  ],
  display: [
    {
      zone: "general",
      component: BrandDisplay,
    },
  ],
});
