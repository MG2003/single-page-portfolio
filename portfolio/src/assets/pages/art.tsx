import { useParams, useNavigate } from "react-router-dom";
import { getArtByLink } from "../../utils/consts";

export default function ArtProject(){

    let { id } = useParams<"id">();
    let navigate = useNavigate();


    let p = getArtByLink(id);
    
    function back(){
        navigate(-1);
    }

    if(!p){
        return <div>error!</div>
    }

    console.log(p.path)

    return(
        <div key = {p.id} className = "bg-black bg-opacity-90 flex text-white justify-center">
            <div className = "h-screen p-10">
                <img src = {"/assets/art_pf/" + p.path} className = "h-full object-contain"></img>
            </div>
            <div className = "p-10 mt-5 w-1/2 flex flex-col gap-10">
                <div className = "font-jmono font-black text-6xl">{p.title}</div>
      
                <div className = "font-jmono text-3xl"><span className = "font-extrabold">medium: </span>{p.medium}</div>
                <div className = "font-inter text-lg">{p.blurb}</div>
                <button onClick={back} className = "font-jmono text-3xl w-fit">← back</button>
          
            </div>
        </div>
    )
}