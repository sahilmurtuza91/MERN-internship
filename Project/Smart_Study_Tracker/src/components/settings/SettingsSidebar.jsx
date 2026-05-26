import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";

import ProfileSection from "./ProfileSection";
import CategoryManager from "./CategoryManager";
import AlertSettings from "./AlertSettings";

import {
  updateProfile,
  updateAlertTime,
  updateCategories,
} from "../../redux/settingsSlice";

function SettingsSidebar({ open, onClose }) {
  const dispatch = useDispatch();

  const globalUser = useSelector((state) => state.settings.profile);
  const globalAlertTime = useSelector((state) => state.settings.alertTime);
  const globalCategory = useSelector((state) => state.settings.categories);

  const [isDirty, setIsDirty] = useState(false);
  const [localProfile, setLocalProfile] = useState(null);
  const [localAlertTime, setLocalAlertTIme] = useState(null);
  const [localCategories, setLocalCategories] = useState([]);

  useEffect(() => {
    if (open) {
      console.log("Initial alert time : ", globalAlertTime);
      setLocalProfile(globalUser);
      setLocalAlertTIme(globalAlertTime);
      setLocalCategories(globalCategory);
      setIsDirty(false);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open, globalUser, globalAlertTime, globalCategory]);

  const handleSave = () => {
    dispatch(updateProfile(localProfile));
    dispatch(updateAlertTime(localAlertTime));
    dispatch(updateCategories(localCategories));
    console.log("Updated alert time : ", localAlertTime);
    setIsDirty(false);
    onClose();
  };
  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-all duration-300 ${open ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      />
      <div
        className={`fixed top-0 right-0 h-screen w-95 bg-[#071120dd] backdrop-blur-md border-l border-white/10 z-50 flex flex-col text-white transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex justify-between items-center p-4 border-b border-white/10 pt-20">
          <h2 className="text-xl font-bold">Settings</h2>
          <button onClick={onClose}>
            <CloseIcon />
          </button>
        </div>
        <div className="p-4 flex flex-col gap-6 overflow-y-auto flex-1">
          <ProfileSection
            setIsDirty={setIsDirty}
            localProfile={localProfile}
            setLocalProfile={setLocalProfile}
          />
          <AlertSettings
            setIsDirty={setIsDirty}
            localAlertTime={localAlertTime}
            setLocalAlertTime={setLocalAlertTIme}
          />
          <CategoryManager
            setIsDirty={setIsDirty}
            localCategories={localCategories}
            setLocalCategories={setLocalCategories}
          />
        </div>
        {isDirty && (
          <div className="p-4 border-t border-white/10">
            <button
              onClick={handleSave}
              className="w-full bg-blue-600 py-2 rounded font-bold"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </>
  );
}
export default SettingsSidebar;
