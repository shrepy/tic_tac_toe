import { render } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DashboardScreen from './DashboardScreen';
import Main from './main';

const Dashboard = (propScreen) => {
    // var [propsData,setpropsData] = useState([])
    const [screen,setScreen] = useState("")
    // useEffect(()=>{
    //     setScreen("dashboard")
    // },[])
    debugger
    // setScreen(propScreen)
    const setPara = (e) => {
            debugger
            // e.preventDefault()
            if (propScreen) {
                setScreen("")
            }
            else{
                debugger
                setScreen("")
            }
    }

    if(propScreen.length===1){
        setPara("")
    }
    
       
        const handleChange = (userChoice) => {
            // setpropsData = {
            //     "screenChoice":userChoice,
            //     "newProps":""
            // }
            // debugger
            setScreen(userChoice)
        }

    const dashBoardScreen = () =>{
        return(
            <>
            
            </>
        )
    }

    return(
        <>
        { screen === "" ? (<>
            <h1>Dashboard</h1><hr />
            <h1>Tic Tac Toe</h1><hr style={{width:"20%", marginLeft:"40%"}}/>
            <div className='container'>
            <button onClick={()=>handleChange("single_player")} className='btn btn-warning'>Single Player</button><hr style={{width:"10%", marginLeft:"45%"}} />
            <Link onClick={()=>handleChange("multi_player")} className='btn btn-danger'>Multi Player</Link>
            </div>
            </>)
         : 
            <Main Uchoice={screen}/>} 
        </>
    )
}


export default Dashboard;