import { defineWidgetConfig } from "@medusajs/admin-shared";

const Widget = () => {
    return (
        <div className="bg-red-200">
           <pre>campaign.list.before</pre>
        </div>
    );
}

export const config = defineWidgetConfig({
    zone: "campaign.list.before",
})

export default Widget