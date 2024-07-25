import { defineWidgetConfig } from "@medusajs/admin-shared";

const Widget = () => {
    return (
        <div className="bg-red-200">
           <pre>product.list.before</pre>
        </div>
    );
}

export const config = defineWidgetConfig({
    zone: "product.list.before",
})

export default Widget