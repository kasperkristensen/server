import { defineWidgetConfig } from "@medusajs/admin-shared";

const Widget = () => {
    return (
        <div className="bg-red-200">
           <pre>workflow.details.before</pre>
        </div>
    );
}

export const config = defineWidgetConfig({
    zone: "workflow.details.before",
})

export default Widget