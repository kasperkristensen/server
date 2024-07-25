import { defineWidgetConfig } from "@medusajs/admin-shared";

const Widget = () => {
    return (
        <div className="bg-red-200">
           <pre>user.list.after</pre>
        </div>
    );
}

export const config = defineWidgetConfig({
    zone: "user.list.after",
})

export default Widget