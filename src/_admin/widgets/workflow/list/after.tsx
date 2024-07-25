import { defineWidgetConfig } from "@medusajs/admin-shared";

const Widget = () => {
    return (
        <div className="bg-red-200">
           <pre>workflow.list.after</pre>
        </div>
    );
}

export const config = defineWidgetConfig({
    zone: "workflow.list.after",
})

export default Widget