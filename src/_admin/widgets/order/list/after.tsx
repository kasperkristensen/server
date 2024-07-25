import { defineWidgetConfig } from "@medusajs/admin-shared";

const Widget = () => {
    return (
        <div className="bg-red-200">
           <pre>order.list.after</pre>
        </div>
    );
}

export const config = defineWidgetConfig({
    zone: "order.list.after",
})

export default Widget