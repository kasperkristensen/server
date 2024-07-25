import { defineWidgetConfig } from "@medusajs/admin-shared";

const Widget = () => {
    return (
        <div className="bg-red-200">
           <pre>campaign.details.after</pre>
        </div>
    );
}

export const config = defineWidgetConfig({
    zone: "campaign.details.after",
})

export default Widget