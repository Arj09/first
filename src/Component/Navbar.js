import React from "react";
import { useNavigate } from "react-router-dom";


export const Navbar = ()=>{

    const navigate = useNavigate()

    const handleAdd = ()=>{
        navigate("/view")

    }

    const handleView = ()=>{
        navigate("/")
        
    }
    return(
        <>
        <nav style={{height:"100px", display:"flex", justifyContent:"center" , backgroundColor:"blue", color:"white"}}>
            <ul style={{ listStyle:"none",display:"flex", cursor:"pointer",flex:"row", gap:"10px 30px" ,justifyContent:"space-between", alignItems:"center", textAlign:"center", flexDirection:"row", padding:"15px auto"}}>
                <li onClick={handleAdd}>Add User</li>
                <li onClick={handleView}>View All User</li>
            </ul>

        </nav>

       
        
        
        </>
    )
}

