import { defineWidgetConfig } from "@medusajs/admin-shared";

const Widget = () => {
    return (
        <div className="bg-red-200">
           <pre>sales_channel.list.before</pre>
        </div>
    );
}

export const config = defineWidgetConfig({
    zone: "sales_channel.list.before",
})

export default Widget