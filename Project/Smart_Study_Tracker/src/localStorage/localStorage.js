export const saveToLocalStorage = (tasks) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

export const loadFromLocalStorage = () => {
  const data = localStorage.getItem("tasks");
  return data ? JSON.parse(data) : [];
};

export const saveSettingsToLocalStorage = (settings) =>{
  localStorage.setItem("settings", JSON.stringify(settings));
};

export const loadSettingsFromLocalStorage = () =>{
  const data = localStorage.getItem("settings");
  return data ? JSON.parse(data) : null;
}