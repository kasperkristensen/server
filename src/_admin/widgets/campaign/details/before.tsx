import { defineWidgetConfig } from "@medusajs/admin-shared";

const Widget = () => {
    return (
        <div className="bg-red-200">
           <pre>campaign.details.before</pre>
        </div>
    );
}

export const config = defineWidgetConfig({
    zone: "campaign.details.before",
})

export default Widget