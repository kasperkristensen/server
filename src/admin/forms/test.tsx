import { Input, Label } from "@medusajs/ui";
import { z } from "zod";

const FormWidget = ({ register }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="flex flex-col gap-y-2">
        <Label size="small">Brand ID</Label>
        <Input placeholder="Brand ID" {...register("brand_id")} />
      </div>
      <div className="flex flex-col gap-y-2">
        <Label size="small">Test</Label>
        <Input placeholder="Test" {...register("test")} />
      </div>
    </div>
  );
};

function defineFormConfig<T>(config: T): T {
  return {
    ...config,
    /**
     * This property is required to allow the config to be exported,
     * while still allowing HMR to work correctly.
     *
     * It tricks Fast Refresh into thinking that the config is a React component,
     * which allows it to be updated without a full page reload.
     */
    $$typeof: Symbol.for("react.memo"),
  };
}

export const config = defineFormConfig({
  zone: "product.edit",
  schema: z.object({
    brand_id: z.string().optional(),
    test: z.string().optional(),
  }),
  defaultValues: {
    brand_id: "",
    test: "",
  },
});

export default FormWidget;
