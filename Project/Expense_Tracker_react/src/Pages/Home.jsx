import { useSelector } from "react-redux";
import ResponsiveAppBar from "../Components/NavBar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { PieChart, Pie, Cell, Legend } from "recharts";

const COLORS = ["#4CAF50", "#FFBB28", "#8884d8", "#FF4C4C"];
function Home() {
  const expenses = useSelector((state) => state.expenses.expenses);
  const totalExpenses = expenses.reduce(
    (acc, exp) => acc + Number(exp.amount),
    0,
  );

  const categories = ["Food", "Travel", "Shopping", "Bills"];
  const seperateExpense = categories.map((cate) => ({
    name: cate,
    value: expenses
      .filter((singleItem) => singleItem.category === cate)
      .reduce((acc, exp) => acc + Number(exp.amount), 0),
  }));
  return (
    <div
      className="min-h-screen bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${"/Images/back.png"})` }}
    >
      <ResponsiveAppBar />

      <div className="px-10 mx-5">
        <div className=" mt-10 px-10 bg-sky-100 rounded-2xl">
          <div>
            <Typography
              variant="h6"
              sx={{ flexGrow: 1 }}
              className="flex items-center"
            >
              <img src="/Images/icons8-zoho-books-48.png" alt="" />
              FinTackPro
            </Typography>
          </div>
          <div className="flex flex-row md:flex-row justify-between gap-6 mt-5">
            <div className="w-full md:w-1/2">
              <div className="pb-5">
                <Card className="mb-6 w-[50%]">
                  <CardContent>
                    <Typography variant="h6">Total Expenses</Typography>
                    <Typography variant="h4">
                      ₹{totalExpenses.toLocaleString()}
                    </Typography>
                  </CardContent>
                </Card>
              </div>
              <div>
                <div className="flex gap-6 mb-6 w-[50%]">
                  <Card className="flex-1 p-4">
                    <Typography variant="h6" gutterBottom>
                      Spending seperateExpense
                    </Typography>
                    <PieChart width={250} height={250} className="pt-2">
                      <Pie
                        data={seperateExpense}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        label
                      >
                        {seperateExpense.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Legend />
                    </PieChart>
                  </Card>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <Card className="mb-6">
                <CardContent>
                  <Typography variant="h6" className="mt-4">
                    Recent Expenses
                  </Typography>
                  {[...expenses]
                    .sort((a, b) => new Date(b.date) - new Date(a.date))
                    .slice(0, 2)
                    .map((exp) => (
                      <div key={exp.id} className="flex justify-between mt-2">
                        <span>
                          {exp.title} ({exp.category})
                        </span>
                        <span>₹{Number(exp.amount).toLocaleString()}</span>
                      </div>
                    ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
