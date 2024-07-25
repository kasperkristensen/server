import { defineWidgetConfig } from "@medusajs/admin-shared";

const Widget = () => {
    return (
        <div className="bg-red-200">
           <pre>sales_channel.details.after</pre>
        </div>
    );
}

export const config = defineWidgetConfig({
    zone: "sales_channel.details.after",
})

export default Widget