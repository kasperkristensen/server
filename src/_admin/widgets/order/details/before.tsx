import { defineWidgetConfig } from "@medusajs/admin-shared";

const Widget = () => {
    return (
        <div className="bg-red-200">
           <pre>order.details.before</pre>
        </div>
    );
}

export const config = defineWidgetConfig({
    zone: "order.details.before",
})

export default Widget