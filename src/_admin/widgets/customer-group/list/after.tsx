import { defineWidgetConfig } from "@medusajs/admin-shared";

const Widget = () => {
    return (
        <div className="bg-red-200">
           <pre>customer_group.list.after</pre>
        </div>
    );
}

export const config = defineWidgetConfig({
    zone: "customer_group.list.after",
})

export default Widget