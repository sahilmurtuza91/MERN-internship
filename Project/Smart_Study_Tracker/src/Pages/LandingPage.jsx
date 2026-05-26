import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
function LandingPage() {
    const navigate = useNavigate();
    const handleClick = ()=>{
        navigate("/app")
    }
    return (
        <div
            className="w-full h-screen bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${"/Images/backgroundImg.jpg"})` }}
        >

            <div className="flex h-full">
                {/* left side */}
                <div className='pt-30 px-20 w-1/2'>
                    <div className='flex items-center mb-10'>
                        <img src="Images/image.png" alt="" className='w-20 h-20 rounded-3xl mr-5' />
                        <h1 className='text-white font-bold text-3xl'>Atheni<span className="text-green-400">fy</span></h1>
                    </div>
                    <div>
                        <h2 className='text-white text-5xl font-bold mb-6'>Study Tracker & <br /><span className='text-green-400'>Focuc Timer</span></h2>

                        <p className='text-gray-400'>Track your study time. stay motivated. <br /> Achieve your academic goals.</p>
                    </div>

                    <div className="text-gray-500 " >

                        <List sx={{ display: "flex", gap: 3  }}>
                            {["Pomodoro Timer", "Statistics", "Gamification"].map((item, i) => (
                                <ListItem key={i} sx={{ width: "auto", padding: 0 }} >
                                    <CheckCircleIcon sx={{ color: "#4CAF50", mr: 1 }} />
                                    <span className="text-gray-500">{item}</span>
                                </ListItem>
                            ))}
                        </List>
                    </div>
                </div>

                {/* Right side */}
                <div className="w-1/2 flex items-center justify-center relative">

                    <div className="w-80 h-96 bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20
                          hover:scale-105 transition duration-300
                          relative z-10">

                        <div className="p-6 text-white">
                            <h3 className="text-2xl font-bold mb-4">Your Progress</h3>
                            <p>Track your daily focus sessions and stay consistent 🚀</p>
                        </div>
                        <div className="space-y-3 text-sm text-gray-200 px-6">
                            <p>-Small steps every day lead to big results.</p>
                            <p>-Discipline beats motivation.</p>
                            <p>-Focus on progress, not perfection.</p>
                            <p>-Your future is built by what you do today.</p>
                        </div>

                        <div className="px-20 mt-10" onClick={handleClick}>
                            <Button 
                            variant="contained" 
                            sx={{ background: "linear-gradient(135deg, #4CAF50, #81C784)", borderRadius: "12px" }}
                            >
                                Get Started 🚀
                            </Button>


                        </div>

                    </div>

                    <div className="absolute w-80 h-96 bg-green-400/30 blur-3xl rounded-3xl top-10 left-10 z-0"></div>

                </div>
            </div>

        </div>
    )
}

export default LandingPage