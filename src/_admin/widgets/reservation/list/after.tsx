import { defineWidgetConfig } from "@medusajs/admin-shared";

const Widget = () => {
    return (
        <div className="bg-red-200">
           <pre>reservation.list.after</pre>
        </div>
    );
}

export const config = defineWidgetConfig({
    zone: "reservation.list.after",
})

export default Widget