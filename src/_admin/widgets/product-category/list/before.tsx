import { defineWidgetConfig } from "@medusajs/admin-shared";

const Widget = () => {
    return (
        <div className="bg-red-200">
           <pre>product_category.list.before</pre>
        </div>
    );
}

export const config = defineWidgetConfig({
    zone: "product_category.list.before",
})

export default Widget