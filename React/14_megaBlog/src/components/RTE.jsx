import React, { useMemo } from "react";
import JoditEditor from "jodit-react";
import { Controller } from "react-hook-form";

function RTE({ name, control, label, defaultValue = "" }) {
    const config = useMemo(
        () => ({
            readonly: false,
            height: 400,
            placeholder: "Start typing...",
        }),
        []
    );

    return (
        <div className="w-full">
            {label && <label className="inline-block mb-1 pl-1">{label}</label>}

            <Controller
                name={name || "content"}
                control={control}
                defaultValue={defaultValue}
                render={({ field: { value, onChange } }) => (
                    <JoditEditor
                        value={value}
                        config={config}
                        onChange={(newContent) => onChange(newContent)}
                    />
                )}
            />
        </div>
    );
}

export default RTE;