import { defineWidgetConfig } from "@medusajs/admin-shared";

const Widget = () => {
    return (
        <div className="bg-red-200">
           <pre>product_collection.details.after</pre>
        </div>
    );
}

export const config = defineWidgetConfig({
    zone: "product_collection.details.after",
})

export default Widget