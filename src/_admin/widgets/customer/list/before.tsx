import { defineWidgetConfig } from "@medusajs/admin-shared";

const Widget = () => {
    return (
        <div className="bg-red-200">
           <pre>customer.list.before</pre>
        </div>
    );
}

export const config = defineWidgetConfig({
    zone: "customer.list.before",
})

export default Widget