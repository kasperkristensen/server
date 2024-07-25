import { defineWidgetConfig } from "@medusajs/admin-shared";

const Widget = () => {
    return (
        <div className="bg-red-200">
           <pre>reservation.details.after</pre>
        </div>
    );
}

export const config = defineWidgetConfig({
    zone: "reservation.details.after",
})

export default Widget