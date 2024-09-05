import { useParams, useNavigate } from "react-router-dom";
import { getProjectByLink } from "../../utils/consts";

export default function CsProject(){

    let { id } = useParams<"id">();
    let navigate = useNavigate();


    let p = getProjectByLink(id);
    
    function back(){
        navigate(-1);
    }

    if(!p){
        return <div>error!</div>
    }


    return(
        <div key = {p.id} className = "bg-black bg-opacity-90 min-h-screen text-white p-10">
            <div className = "text-8xl font-jmono font-black">{p.title}</div>
            <div className = "px-10 my-10">
            {p.direct == ""? <></> : <a href = {p.direct} target = "_blank" className = "font-jmono font-extrabold text-xl">link to project</a>}
            <div className = "font-inter text-xl mt-10 w-fit">{p.txt}</div>
            <div className = "font-jmono text-4xl mt-4 font-black">Gallery</div>
            </div>
            
            

            <div className = "flex flex-wrap gap-4 justify-center my-10">
                {p.imgs.map((img) => 
                <div className = "h-72">
                    <img src = {img} className = "h-full object-contain"></img>
                </div>
                
                )}
            </div>
            <button onClick={back} className = "font-jmono text-3xl">← back</button>
        </div>
    )
}