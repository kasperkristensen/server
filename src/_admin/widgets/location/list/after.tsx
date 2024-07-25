import { defineWidgetConfig } from "@medusajs/admin-shared";

const Widget = () => {
    return (
        <div className="bg-red-200">
           <pre>location.list.after</pre>
        </div>
    );
}

export const config = defineWidgetConfig({
    zone: "location.list.after",
})

export default Widget