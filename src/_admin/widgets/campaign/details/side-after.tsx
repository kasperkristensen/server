import { defineWidgetConfig } from "@medusajs/admin-shared";

const Widget = () => {
    return (
        <div className="bg-red-200">
            <pre>campaign.details.side.after</pre>
        </div>
    );
}

export const config = defineWidgetConfig({
    zone: "campaign.details.side.after",
})

export default Widget