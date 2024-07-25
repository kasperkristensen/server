import { defineWidgetConfig } from "@medusajs/admin-shared";

const Widget = () => {
    return (
        <div className="bg-red-200">
           <pre>customer.details.before</pre>
        </div>
    );
}

export const config = defineWidgetConfig({
    zone: "customer.details.before",
})

export default Widget