import { useSelector, useDispatch } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';
import { deleteExpenses } from '../features/expenseSlice';
import Button from "@mui/material/Button";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
function ExpenseList() {
    const expensesData = useSelector((state) => state.expenses.expenses);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleEdit = (exp) => {
        navigate("/add", { state: { expense: exp } });
    }

    // filter state
    const [searchText, setSearchText] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("")

    const filterCategory = expensesData.filter((exp) => {
        const matcheSearch = exp.title.toLowerCase().includes(searchText.toLowerCase());

        const matchCategory = categoryFilter ? exp.category === categoryFilter : true;

        return matcheSearch && matchCategory;
    });


    return (
        <div className="mt-6 px-6">

            <div className='flex flex-col md:flex-row gap-4 mb-6 w-75'>
                <TextField
                    label="Search"
                    type="text"
                    placeholder="Search by title"
                    variant="standard"
                    fullWidth
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />

                <FormControl variant="standard" fullWidth>
                    <InputLabel>Category</InputLabel>

                    <Select
                        value={categoryFilter}
                        onChange={(e) => setCategoryFilter(e.target.value)}
                    >
                        <MenuItem value="all"><em>All Categories</em></MenuItem>
                        <MenuItem value="Food">Food 🍔</MenuItem>
                        <MenuItem value="Travel">Travel 🚗</MenuItem>
                        <MenuItem value="Shopping">Shopping 🛍️</MenuItem>
                        <MenuItem value="Bills">Bills 💡</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <hr className='text-gray-400'/>
            {expensesData.length === 0 && (
                <p className="text-gray-400">No Expenses added yet</p>
            )
            }
            {expensesData.length > 0 && filterCategory.length === 0 && (
                <p className="text-red-400">No matching expenses found</p>
            )}
            {
                filterCategory.map((exp) => (
                    <div
                        key={exp.id}
                        className="flex justify-between items-center border p-4 mb-2 rounded"
                    >
                        <div>
                            <p className="font-black">{exp.title}</p>
                            <p>
                                {new Intl.NumberFormat("en-IN", {
                                    style: "currency",
                                    currency: "INR",
                                }).format(exp.amount)}
                            </p>
                            <p>{exp.category}</p>
                            <p>{new Date(exp.date).toLocaleDateString()}</p>
                        </div>

                        <div>
                            <Stack direction="row" spacing={2}>
                                <Button
                                    onClick={() => handleEdit(exp)} variant="contained"
                                    startIcon={<EditIcon />}
                                >
                                    Edit
                                </Button>

                                <Button
                                    onClick={() => dispatch(deleteExpenses(exp.id))}
                                    variant="contained"
                                    color="error"
                                    endIcon={<DeleteIcon />}
                                >
                                    Delete
                                </Button>
                            </Stack>

                        </div>

                    </div>


                ))
            }
        </div>
    )
}

export default ExpenseList