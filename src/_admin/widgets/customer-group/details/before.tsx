import { defineWidgetConfig } from "@medusajs/admin-shared";

const Widget = () => {
    return (
        <div className="bg-red-200">
           <pre>customer_group.details.before</pre>
        </div>
    );
}

export const config = defineWidgetConfig({
    zone: "customer_group.details.before",
})

export default Widget