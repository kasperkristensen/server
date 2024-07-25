import { defineWidgetConfig } from "@medusajs/admin-shared";

const Widget = () => {
    return (
        <div className="bg-red-200">
           <pre>location.list.before</pre>
        </div>
    );
}

export const config = defineWidgetConfig({
    zone: "location.list.before",
})

export default Widget