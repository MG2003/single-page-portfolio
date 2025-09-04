interface projectInfo{
    id: number,
    link: string,
    title: string,
    direct: string,
    thumb: string,
    imgs: string[],
    videos: string[]
    tags: string[],
    txt: string
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
        id: 0,
        link: "kebash",
        title: "kebash!",
        thumb: "/assets/project_img/kebash_thumbnail.png",
        direct: "https://brownrisdgames.itch.io/kebash",
        imgs: ["/assets/project_img/kebash_menu.jpg", "/assets/project_img/kebash.png"],
        videos: ["/assets/demo_reels/kebash_demo.mp4"],
        tags: ["game dev", "C#", "Unity"],

        txt : "This was the first game I made with Brown RISD Game Developers, and the first time I worked with the Unity game engine! This is a super polished party game designed for 4 players, where kebab sticks shoot different types of food at each other. For this game, I developed some dynamic UI elements as well as a general game state manager to navigate between menus."
    },
    {
        id: 1,
        link: "usfps",
        title: "US(F)PS",
        thumb: "/assets/project_img/usfps.png",
        direct: "https://brownrisdgames.itch.io/usfps",
        imgs: [],
        videos: ["/assets/demo_reels/usfps_demo.mp4"],
        tags: ["game dev, unreal, 3D"],
        txt: "This was the second game I worked on with BRGD, as well as one where I took a larger responsibility from than my previous game. We wanted to make a cute infinite runner similar to Subway Surfers here, except you're a mailman shooting packages at houses. We were pretty low on artists this year so I helped work on numerous shaders to create a more polished experience for the game. Primarily, I worked on shaders to make the world look spherical to enhance the \"endless\" feel of the game as well as a pixel filter. I also implemented the main firing/scoring mechanic of the game as well as target generation."
    },
    {
        id: 3,
        link: "slinky-dog",
        title: "slinky dog",
        thumb: "/assets/project_img/slinky_thumbnail.png",
        direct: "https://brownrisdgames.itch.io/slinky-dog",
        imgs: ["/assets/project_img/slinky.png", "/assets/project_img/slinky-gif.gif"],
        videos: [],
        tags: ["game dev", "unreal", "3D"]
        ,

        txt : "I was the lead programmer for this game! We only had 2 programmers though :P. Slinky Dog is a game about a slinky dog like the one from Toy Story trying to escape their owner by climbing up through the room. It's a difficult 2 player platforming game with each player controlling an end of a string but being restricted by the laws of physics. \nThis was one of our first forays into the Unreal 5 engine. I had to hand implement a physics system for the spring, with all the derivations and force calculations we learned in high school physics. It was a cool experience and I learned a lot from it. I also made a visual contribution in the form of the stretchy spring!"
    },
    {
        id: 4,
        link: "hungry-haus",
        title: "hungry haus",
        thumb: "/assets/project_img/hungry_haus.png",
        direct: "https://brownrisdgames.itch.io/hungry-haus",
        imgs: [],
        videos: ["/assets/demo_reels/hungry_demo_lock.mp4", "/assets/demo_reels/hungry_demo.mp4"],
        tags: ["game dev", "godot", "3D"],
        txt: "This is one of the coolest games I've gotten to work on at BRGD. The artists had a really well planned out horror aesthetic that we wanted to execute in full, and we had a lot of programmers this year that made the game super polished. I worked on some of the puzzle designs but most promintently, I helped script the final custscene and worked with some rendering shenanigans for a working mirror."
    },
    {
        id: 5,
        link: "waves",
        title: "wacky waves",
        thumb: "/assets/project_img/wave_thumb.png",
        direct: "https://github.com/sleepytaco/WaterSurfaceWavelets",
        imgs: [
            "/assets/project_img/wacky.png", "/assets/project_img/boat_gif.gif", "/assets/project_img/waves.gif"
        ],
        videos: [],
        tags: ["graphics", "c++", "openGL", "simulation"]
        ,

        txt : "This was my final project for CS2240: Advanced Graphics. I and a group of 3 other students came together to implement NVIDIA's 2018 \"Water Surface Wavelets\" paper. I worked on a lot of the nitty gritty physics simulation, particularly the diffusion of water ripples."
    }
]

interface artwork{
    id: number,
    path: string,
    link: string,
    title: string,
    medium: string,
    blurb: string,
    imgs: string[]
}

const ART: artwork[] = [
   {id:0, path: "1.jpg", link: "circuit", title: "Circuitboard Still Life", medium: "oil on canvas with sawed off circuits"
    ,blurb: "A study of some really weird and complicated machinery, something rooted in my obsession of 90s anime. The colors and elements of the circuit feel so haphazard, but I think I did a good job in my composition. The wires really help lead my eyes through the piece."
   , imgs: []
},
    {id:1, path:"4.jpg", link: "drowning", title: "Drowning", medium: "charcoal on paper with watercolor on tissue paper"
        ,blurb: "This piece comes from a time when everything felt like just a bit too much. To this day I'm still so proud of this piece, from the complex water details to my weird but nuanced expression."
    , imgs: []
    },
    {id:3, path:"5.jpeg", link: "pixels", title: "Organic Pixels", medium: "oil on canvas on styrofoam boxes"
        ,blurb: "This one's considerably beefier. Standing at 4 ft x 3 ft x 1 ft, this is easily the biggest piece I've ever attempted. The size gave me so much space to fully render out this expression, every wrinkle, every little gesture with the eye. The portrait is kind of a play on phone pixels, but weird and misshapen like our weird and lopsided identities, impossible to compress into a uniform pattern. "
    , imgs: ["/assets/art_pf/portrait_1.jpg", "/assets/art_pf/portrait_2.jpg"]
    },

    {id:4, path:"7.png", link: "cookbook", title: "Cookbook Zine Design", medium: "adobe illustrator and procreate"
        ,blurb: "This was the final project for VISA0100, where the whole class came together to put together this huge zine of recipes from home. Growing up in a Shanghainese household, the braised pork belly was one of my favorite staples in my mom's repertoire, and so it felt natural that I should include it in the cookbook."
    , imgs: ["/assets/art_pf/Cookbook_Max_Guo-1.jpg"]
    }, 
    {id:5, path:"9.png", link: "snake", title: "画蛇添足", medium: "acrylic on canvas"
        ,blurb: "Following this pattern of VISA finals based off my Chinese upbringing, this painting was prompted by the idea of rendering a widely used idiom literally. In this case, I chose 画蛇添足, or \"painting legs on a snake\". Put simply, it means 'less can sometimes be more'. For the composition, I was really obsessed with the work of animator Natasha Allegri at the time, which made me go with a haphazard \"graffiti\"-like approach."
    , imgs: []
    },

]


function getProjectByLink(link: string | undefined) {
    return PROJECTS.find((project) => project.link === link);
  }

  function getArtByLink(link: string | undefined) {
    return ART.find((project) => project.link === link);
  }



export{
    Tags, PROJECTS, ART, getProjectByLink, getArtByLink
};