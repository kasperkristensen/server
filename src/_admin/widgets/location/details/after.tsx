import { defineWidgetConfig } from "@medusajs/admin-shared";

const Widget = () => {
    return (
        <div className="bg-red-200">
           <pre>location.details.after</pre>
        </div>
    );
}

export const config = defineWidgetConfig({
    zone: "location.details.after",
})

export default Widget