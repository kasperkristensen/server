import { defineWidgetConfig } from "@medusajs/admin-shared";

const Widget = () => {
    return (
        <div className="bg-red-200">
            <pre>campaign.details.side.before</pre>
        </div>
    );
}

export const config = defineWidgetConfig({
    zone: "campaign.details.side.before",
})

export default Widget