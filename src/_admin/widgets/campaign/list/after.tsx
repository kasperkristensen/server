import { defineWidgetConfig } from "@medusajs/admin-shared";

const Widget = () => {
    return (
        <div className="bg-red-200">
           <pre>campaign.list.after</pre>
        </div>
    );
}

export const config = defineWidgetConfig({
    zone: "campaign.list.after",
})

export default Widget