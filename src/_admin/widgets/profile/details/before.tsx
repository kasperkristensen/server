import { defineWidgetConfig } from "@medusajs/admin-shared";

const Widget = () => {
    return (
        <div className="bg-red-200">
           <pre>profile.details.before</pre>
        </div>
    );
}

export const config = defineWidgetConfig({
    zone: "profile.details.before",
})

export default Widget