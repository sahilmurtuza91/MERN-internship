import React, { useEffect, useState } from 'react'

import avatars from "../../data/avatars";
import EditIcon from '@mui/icons-material/Edit';

function ProfileSection({ setIsDirty, localProfile, setLocalProfile, }) {

    const [isEditing, setIsEditing] = useState(false);
    const [showAvatars, setShowAvatars] = useState(false);

    if (!localProfile) return null;

    // localya UI update
    const handleChange = (field, value) => {
        setLocalProfile({
            ...localProfile,
            [field]: value,
        });

        setIsDirty(true);
    };

    const currentAvatar =
        avatars[localProfile.avatar] || avatars.account;

    const AvatarIcon = currentAvatar.icon;

    return (
    <div>
        <h3 className="font-semibold mb-3 text-gray-500 uppercase text-xs tracking-wider">
            Profile Configuration
        </h3>
        <div className='flex items-center gap-4 bg-white/5 p-3 rounded-2xl border border-white/5'>
            <div className="relative shrink-0">
                <div
                    className={`
                        w-14 h-14 rounded-full overflow-hidden border border-white/10 bg-linear-to-b ${currentAvatar.bg} shadow-[0_0_12px_rgba(168,85,247,0.25)] flex items-center justify-center
                    `}
                >
                    <AvatarIcon
                        className={currentAvatar.color}
                        sx={{ fontSize: 44 }}
                    />
                </div>
                <button
                    type="button"
                    onClick={() => {
                        setIsEditing(true);
                        setShowAvatars(!showAvatars);
                    }}
                    className='absolute -bottom-1 -right-1 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full p-1.5 shadow-md active:scale-90 transition-all flex items-center justify-center'
                >
                    <EditIcon sx={{ fontSize: 14 }} />
                </button>
            </div>

            <div className="flex-1 min-w-0">
                {isEditing ? (
                    <div className="flex flex-col gap-2">
                        <input
                            type="text"
                            value={localProfile.name}
                            onChange={(e) =>
                                handleChange('name', e.target.value)
                            }
                            placeholder="Edit Name"
                            className="bg-slate-950/80 border border-white/10 rounded-lg px-2 py-1 text-sm text-white outline-none"
                        />

                        <input
                            type="text"
                            value={localProfile.scholar}
                            onChange={(e) =>
                                handleChange('scholar', e.target.value)
                            }
                            placeholder="Edit Scholar Status"
                            className="bg-slate-950/80 border border-white/10 rounded-lg px-2 py-1 text-xs text-emerald-300 outline-none"
                        />
                    </div>
                ) : (
                    <div
                        onClick={() => setIsEditing(true)}
                        className="cursor-pointer"
                    >
                        <h4 className="font-bold text-white text-base truncate">
                            {localProfile.name}
                        </h4>

                        <span className='text-emerald-300 font-medium text-xs block mt-0.5'>
                            {localProfile.scholar}
                        </span>
                    </div>
                )}
            </div>
        </div>
        {showAvatars && isEditing && (
            <div className='mt-3 flex gap-3 flex-wrap p-2.5 bg-slate-950/60 rounded-xl border border-white/5'>
                {Object.entries(avatars).map(
                    ([key, avatarData]) => {
                        const IconComponent = avatarData.icon;
                        return (
                            <button
                                key={key}
                                type="button"
                                onClick={() => {
                                    handleChange('avatar', key);
                                    setShowAvatars(false);
                                }}
                                className={`
                                    w-11 h-11 rounded-full border flex items-center justify-center transition-all bg-linear-to-b
                                    ${avatarData.bg}

                                    ${localProfile.avatar === key ? 'border-indigo-500 scale-110' : 'border-white/10 hover:scale-105'}
                                `}
                            >
                                <IconComponent
                                    sx={{ fontSize: 24 }}
                                    className={avatarData.color}
                                />
                            </button>
                        );
                    }
                )}
            </div>
        )}
    </div>
);
}
export default ProfileSection