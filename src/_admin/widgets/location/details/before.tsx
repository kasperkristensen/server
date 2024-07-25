import { defineWidgetConfig } from "@medusajs/admin-shared";

const Widget = () => {
    return (
        <div className="bg-red-200">
           <pre>location.details.before</pre>
        </div>
    );
}

export const config = defineWidgetConfig({
    zone: "location.details.before",
})

export default Widget