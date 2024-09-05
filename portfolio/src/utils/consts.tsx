interface projectInfo{
    id: number,
    link: string,
    title: string,
    thumb: string,
    imgs: string[],
    tags: string[]
}

interface tag{
    id: number,
    t: string
}

const Tags: tag[] = [
    
    {id: 0, t: "hi"},
    {id: 1, t: "bye"} , 
    {id: 2, t: "lie"}


]


const PROJECTS: projectInfo[] = [
    {
        id: 1,
        link: "kebash",
        title: "kebash!",
        thumb: "/assets/project_img/kebash_thumbnail.png",
        imgs: [],
        tags: ["game dev", "C#", "Unity"]

    },
    {
        id: 2,
        link: "origami-bird-battle",
        title: "origami bird battle",
        thumb: "/assets/project_img/origami_bird_battle.png",
        imgs: [],
        tags: ["game dev", "godot"]
    },
    {
        id: 3,
        link: "slinky-dog",
        title: "slinky dog",
        thumb: "/assets/project_img/slinky_thumbnail.png",
        imgs: [],
        tags: ["game dev", "unreal", "3D"]
    },
    {
        id: 4,
        link: "aistrology",
        title: "aistrology",
        thumb: "/assets/project_img/aistrology_thumbnail.png",
        imgs: [],
        tags: ["full stack", "react.js", "llm"]
    },
    {
        id: 5,
        link: "waves",
        title: "wacky waves",
        thumb: "/assets/project_img/wave_thumb.png",
        imgs: [],
        tags: ["graphics", "c++", "openGL", "simulation"]
    },
    {
        id: 6,
        link: "graphix",
        title: "graphics projects",
        thumb: "/assets/project_img/path_thumb.png",
        imgs: [],
        tags: ["graphics", "c++"]
    }

]

interface artwork{
    id: number,
    path: string
}

const ART: artwork[] = [
    {id: 0, path: "0.jpeg"},
    {id:1, path:"3.JPG"},
    {id: 3, path:"1.jpg"},
   {id:2, path: "2.jpg"},

    {id:5, path:"4.jpg"},
    {id:4, path:"5.jpeg"},
    {id:6, path:"6.jpg"},
    {id:7, path:"7.png"}, 
    {id:8, path:"9.png"},

]

export{
    Tags, PROJECTS, ART
};