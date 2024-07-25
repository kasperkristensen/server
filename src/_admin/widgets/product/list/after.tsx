import { defineWidgetConfig } from "@medusajs/admin-shared";

const Widget = () => {
    return (
        <div className="bg-red-200">
           <pre>product.list.after</pre>
        </div>
    );
}

export const config = defineWidgetConfig({
    zone: "product.list.after",
})

export default Widget