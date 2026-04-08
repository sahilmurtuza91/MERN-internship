import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddExpense from "./AddExpense";
import { useNavigate } from "react-router-dom";
function ResponsiveAppBar() {
    
    const navigate = useNavigate()
   

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        sx={{ flexGrow: 1 }}
                        className="flex items-center"
                    >
                        <img src="/Images/icons8-zoho-books-48.png" alt="" />
                        FinTackPro
                    </Typography>

                    
                    <Box>
                        <Button 
                        onClick={()=>navigate("/home")}
                        color="inherit"
                        >
                            Dashboard
                        </Button>
                        
                        <Button 
                        onClick={()=>navigate("/expensesList")}
                        color="inherit"
                        >
                            Expenses
                        </Button>
                        
                        <Button 
                        onClick={()=>navigate("/add")}
                        color="inherit" 
                        >
                            Add Expense
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default ResponsiveAppBar;
