import React, { useEffect, useState } from "react";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

function AlertSettings({
  setIsDirty,
  localAlertTime,
  setLocalAlertTime,
}) {

  const [selectedTime, setSelectedTime] = useState(localAlertTime);

  useEffect(() => {
    setSelectedTime(localAlertTime);
  }, [localAlertTime]);

  const alertOptions = [
    {
      label: "1 Minute Before",
      value: 1,
    },

    {
      label: "5 Minutes Before",
      value: 5,
    },

    {
      label: "10 Minutes Before",
      value: 10,
    },

    {
      label: "15 Minutes Before",
      value: 15,
    },
  ];

  const handleSelect = (value) => {
    setSelectedTime(value);
    setLocalAlertTime(value);
    setIsDirty(true);
  };

  return (
    <div
      className="
      bg-white/5
      border border-white/10
      rounded-2xl
      p-4
      flex flex-col gap-4
      
      "
    >
      <div
        className="
        flex items-center gap-4
        
        "
      >

        <div
          className="
          w-10 h-10
          rounded-full
          bg-blue-500/20
          flex items-center justify-center
          
          "
        >

          <NotificationsActiveIcon
            className="text-blue-400"
          />
        </div>

        <div>

          <h2
            className="
            text-white
            font-semibold
            text-lg
            "
          >
            Alert Time
          </h2>

          <p
            className="
            text-gray-400
            text-sm
            "
          >
            Choose when notification appears
          </p>

        </div>

      </div>
      <div
        className="
        flex flex-col gap-3
        "
      >

        {alertOptions.map((item) => (

          <button
            key={item.value}

            onClick={() =>
              handleSelect(item.value)
            }

            className={`
              flex
              items-center
              justify-between
              p-3
              rounded-xl
              transition-all
              duration-300

              ${
                selectedTime === item.value
                  ? `
                    bg-blue-600
                    text-white
                    shadow-lg
                    shadow-blue-500/30
                  `
                  : `
                    bg-white/5
                    hover:bg-white/10
                    text-gray-300
                  `
              }
            `}
          >

            <div
              className="
              flex items-center gap-3
              "
            >
              <AccessTimeIcon />

              <span>
                {item.label}
              </span>

            </div>
            {selectedTime === item.value && (

              <div
                className="
                w-3 h-3
                rounded-full
                bg-white
                "
              />

            )}

          </button>

        ))}

      </div>

    </div>
  );
}

export default AlertSettings;