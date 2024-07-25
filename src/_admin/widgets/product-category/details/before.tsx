import { defineWidgetConfig } from "@medusajs/admin-shared";

const Widget = () => {
    return (
        <div className="bg-red-200">
           <pre>product_category.details.before</pre>
        </div>
    );
}

export const config = defineWidgetConfig({
    zone: "product_category.details.before",
})

export default Widget