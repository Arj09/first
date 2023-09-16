
import React, { useEffect, useState } from "react";
import "./Curd.css"
import { Http } from "./Http";
import { useNavigate } from "react-router-dom";

export const Edit = ()=>{
    const navigate = useNavigate()


    const [Employee, setEmployee] = useState({})

    const handlecancel = ()=>{
        navigate("/")
    }



    const handleEmployee = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setEmployee(Employee=>({...Employee, [name]:value}))

    }

    const handleEmployeeData = (e)=>{

        const { FirstName, LastName, DOB, Study, StartDate, EndDate, CurrentSalary, Description} = Employee
        e.preventDefault()
        Http.put(`/DeliveryBoy/update-Employee/${localStorage.getItem('ID')}`, {
            FirstName,
            LastName,
            DOB,
            Study,
            StartDate,
            EndDate,
            CurrentSalary,
            Description


        }).then((res)=>{
            console.log(res.data.response.message)

        }).catch((err)=>{
            console.log(err)
        })

        
    }


    

    


    return(
        <>

        <form  className="addform" onSubmit={handleEmployeeData} >
            <h1 style={{textAlign:"center"  , margin:"20px auto"}}> Update Employee data</h1>
            <div style={{display:"flex", flexDirection: "row", width : "60%",  margin:"10px auto" , justifyContent:"space-between"}}>
                
                <div style={{display:"flex", flexDirection:"column", width:"40%"}}>
    
                    <label for="fname" >Firstname</label>
                    <input id="fname"  placeholder="Enter Your Name" style={{width:"100%", padding:"5px", margin:"5px 0"}}
                        name="FirstName" value={Employee.FirstName} onChange={handleEmployee}
                    
                    />
                </div>

                <div style={{display:"flex", flexDirection:"column", width:"40%"}}>
    
                    <label for="fname" >Lastname</label>
                    <input id="fname"  placeholder="Enter Your Name"  style={{width:"100%", padding:"5px", margin:"5px 0"}}
                        name="LastName" value={Employee.LastName} onChange={handleEmployee}
                    />
                </div>
                    
            </div>
            
            <div style={{display:"flex", flexDirection:"column", width:"60%", margin:"10px auto" }}>
    
                <label for="fname" >DOB</label>
                <input id="fname"  type="date" style={{width:"100%", padding:"5px", margin:"5px 0"}}
                name="DOB" value={Employee.DOB} onChange={handleEmployee}
                
                
                />
            </div>

            <div style={{display:"flex", flexDirection:"column", width:"60%", margin:"10px auto" }}>
    
                <label for="fname" >Study</label>
                <input  id="fname" type="text" placeholder="Study" style={{width:"100%", padding:"5px", margin:"5px 0"}} 
                name="Study" value={Employee.Study} onChange={handleEmployee}
                />
            </div>

            <div style={{display:"flex", flexDirection: "row", width : "60%",  margin:"10px auto" , justifyContent:"space-between"}}>
                
                
                <div style={{display:"flex", flexDirection:"column", width:"40%"}}>
    
                    <label for="fname" >StartDate</label>
                    <input id="fname" type="date" style={{width:"100%", padding:"5px", margin:"5px 0"}}
                     name="StartDate" value={Employee.StartDate} onChange={handleEmployee}
                    />
                </div>

                <div style={{display:"flex", flexDirection:"column", width:"40%"}}>
    
                    <label for="fname" >EndDate</label>
                    <input id="fname" type="date"   style={{width:"100%", padding:"5px", margin:"5px 0"}}
                    name="EndDate" value={Employee.EndDate} onChange={handleEmployee}
                    />
                </div>
                    
            </div>
            
            
           


           
            <div style={{display:"flex", flexDirection:"column", width:"60%", margin:"10px auto" }}>
    
                <label for="fname" >Current salary</label>
                <input  id="fname" type="text" placeholder="Current salary" style={{width:"100%", padding:"5px", margin:"5px 0"}} 
                 name="CurrentSalary" value={Employee.CurrentSalary} onChange={handleEmployee}
                />
            </div>


            <div style={{display:"flex", flexDirection:"column", width:"60%", height:"40%", margin:"10px auto" }}>
    
                <label for="fname" >Description</label>
                <textarea id="fname"  placeholder="Description"  style={{width:"100%", height:"100%", padding:"5px", margin:"5px 0"}}
                name="Description" value={Employee.Description} onChange={handleEmployee}
                >

            </textarea>
                
            </div>
            

           
            

            <div style={{display:"flex", flexDirection: "row", width : "60%",  margin:"20px auto" , justifyContent:"space-between"}}>
                
                <button   style={{width:"40%", border:"0.2px solid blue", padding:"10px 20px",backgroundColor:"Blue", color:"white"}} onClick={handlecancel}>Cancel</button>
              
                <button type="Submit" style={{width:"40%",border:"0.2px solid blue", padding:"10px 20px" ,backgroundColor:"Blue", color:"white"}} onSubmit={()=>handleEmployeeData}>Save</button>
            </div>


        </form>
        
        
        </>
    )
}