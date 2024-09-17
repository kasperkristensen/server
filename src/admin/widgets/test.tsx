import { defineWidgetConfig } from "@medusajs/admin-sdk";

const TestWidget = () => {
  return <div>Test Widget</div>;
};

export const config = defineWidgetConfig({
    zone: "product.details.before"
})

export default TestWidget;