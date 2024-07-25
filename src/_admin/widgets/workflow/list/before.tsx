import { defineWidgetConfig } from "@medusajs/admin-shared";

const Widget = () => {
    return (
        <div className="bg-red-200">
           <pre>workflow.list.before</pre>
        </div>
    );
}

export const config = defineWidgetConfig({
    zone: "workflow.list.before",
})

export default Widget