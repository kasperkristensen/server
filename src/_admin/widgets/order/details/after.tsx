import { defineWidgetConfig } from "@medusajs/admin-shared";

const Widget = () => {
    return (
        <div className="bg-red-200">
           <pre>order.details.after</pre>
        </div>
    );
}

export const config = defineWidgetConfig({
    zone: "order.details.after",
})

export default Widget