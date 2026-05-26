import React, { useEffect, useState } from 'react'
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function CategoryManager({
  setIsDirty,
  localCategories,
  setLocalCategories,
}) {
  const [newCategory, setNewCategory] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedValue, setEditedValue] = useState("");

  // add new item
  const handleAddCategory = () => {
    if (!newCategory.trim()) return;

    const duplicate = localCategories.some((cat) => {
      return cat.toLowerCase() === newCategory.toLocaleLowerCase()
    })
    if (duplicate) return;

    setLocalCategories([
      ...localCategories,
      newCategory,
    ])

    setNewCategory("");
    setIsDirty(true);
  }

  // delete old item
  const handleDeleteCategory = (deleteIndex) => {
    const updatedCategories = localCategories.filter((item, index) => index !== deleteIndex);

    setLocalCategories(updatedCategories);
    setIsDirty(true);
  }

  // Edit item
  const handleEditStart = (index, value) => {
    setEditingIndex(index);
    setEditedValue(value);
  }

  const handleSaveEdit = (saveIndex) => {
    if (!editedValue.trim()) return;

    const updatedCategories = [...localCategories];
    updatedCategories[saveIndex] = editedValue;

    setLocalCategories(updatedCategories);

    setEditingIndex(null);
    setEditedValue("");
    setIsDirty(true);
  }

  return (
    <div
      className='bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col gap-4'
    >
      <div>
        <h2 className='text-white text-lg font-semibold'>
          Category Manager
        </h2>
        <p className='text-sm text-gray-400'>Add, rename or remove categories</p>
      </div>

      <div className='flex gap-2'>
        <input type="text"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          placeholder='Add new Category'
          className='flex-1 p-3 rounded-xl bg-white/10 text-white outline-none'
        />
        <button
          onClick={handleAddCategory}
          className='px-4 rounded-xl bg-green-600 hover:bg-green-700 transition-all'
        >
          <AddIcon />
        </button>
      </div>

      <div className='flex flex-col gap-3'>
        {localCategories.map((category, index) => (
          <div
            key={index}
            className='bg-white/5 border border-white/10 rounded-xl p-3 flex items-center justify-center'
          >
            <div className='flex-1'>
              {editingIndex === index ? (
                <input
                  value={editedValue}
                  onChange={(e) => setEditedValue(e.target.value)}
                  className='w-full bg-transparent outline-none text-white'
                />
              ) : (
                <span className='text-white'>{category}</span>
              )}
            </div>
            <div className='flex items-center gap-2'>
              {editingIndex === index ? (
                <button
                  onClick={() => handleSaveEdit(index)}
                  className='text-green-400'
                >Save</button>
              ) : (
                <button
                  onClick={() => handleEditStart(index, category)}
                  className='text-blue-400'
                >
                  <EditIcon />
                </button>
              )}
              <button
                onClick={() => handleDeleteCategory(index)}
                className='text-red-400'
              >
                <DeleteIcon />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CategoryManager