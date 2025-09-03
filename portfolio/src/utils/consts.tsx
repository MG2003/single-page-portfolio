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
        txt: "This was the second game I worked on with BRGD, as well as one where I took a larger responsibility from than my previous game. We wanted to make a cute infinite runner similar to Subway Surfers here, except you're a mailman shooting packages at houses. We were pretty low on artists this year so I helped work on numerous shaders to create a morer polished experience for the game. Primarily, I worked on shaders to make the world look spherical to enhance the \"endless\" feel of the game as well as a pixel filter. I also implemented the main firing/scoring mechanic of the game as well as target generation."
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

        txt : "I was the lead programmer for this game! We only had 2 programmers though :P. Slinky Dog is a game about a slinky dog like the one from Toy Story trying to escape their owner by climbing up through the room. It's a difficult 2 player platforming game with each player controlling an end of a string but being restricted by the laws of physics. \nThis was one of our first forays into the Unreal 5 engine, since we wanted to explore something a bit more 3D intensive and \"industry-relevant\". The lumen global illumination definitely helped a lot with creating the vibe for the game - everything is rendered gorgeously and the shadows are super crisp. From a programming standpoint, though, we had to work a lot around the restrictions Unreal brought on us. I had to hand implement a physics system for the spring, with all the derivations and force calculations we learned in high school physics. It was a cool experience and I learned a lot from it, and I think being really proactive in discussing details with the art team helped our productivity a lot. I also made a visual contribution in the form of the spring!"
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

        txt : "This was my final project for CS2240: Advanced Graphics. I and a group of 3 other students came together to implement NVIDIA's 2018 \"Water Surface Wavelets\" paper. It's a super complicated fluid simulation paper that attempts to create a physically accurate and fast real-time water simulation. To do that it uses a bunch of partial differential equations and interpolations to calculate every single point on a 4096 x 4096 x 16 grid. This was a super challenging experience that really challenged everything I'd learned in graphics, as well as my ability to understand graphics research papers, but I think the results turned out super well! As for my part in the project, I worked on the amplitude interpolations that give you the wave-like motion of the water, some dispersion calculations to make sure the water disperses radially like in real like, and I also used a bit of Perlin Noise to create mountains for a cool scene! One of my teammates also added a cute lil boat that ebbs and flows with the waves and causes it's own little waves, which makes everything come together so much better."
    },

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
    ,blurb: "Another exploration into weird, complex machinery! This still life is a composition of a giant CRT TV I got from a family friend. In contrast to the engine, the colors and elements of the circuit feel so much more haphazard, but I think I did a good job in my composition, which I spent hours positioning on my living room to find the perfect placement of circuitboards. The wires really help lead my eyes through the piece. In the middle I also added a circuitboard I sawed out of the actual TV, for some extra pop."
   , imgs: []
},
    {id:1, path:"4.jpg", link: "drowning", title: "Drowning", medium: "charcoal on paper with watercolor on tissue paper"
        ,blurb: "The next stop in my portfolio is a series of massive paintings of my face!! This piece comes from a time when everything felt like just a bit too much. To this day I'm still so proud of this piece, from the complex water details to my weird but nuanced expression. The tissue paper came as a recommendation from my art teacher at the time, who thought the piece could use a bit more than just a sketch on a sheet of paper. I will forever thank her because I think wandering New York looking for tissue paper, and subsequently finishing the piece gave me so much insight on my own artistic process."
    , imgs: []
    },
    {id:3, path:"5.jpeg", link: "pixels", title: "Organic Pixels", medium: "oil on canvas on styrofoam boxes"
        ,blurb: "This one's considerably beefier. Standing at 4 ft x 3 ft x 1 ft, this is easily the biggest piece I've ever attempted. The size gave me so much space to fully render out this expression, every wrinkle, every little gesture with the eye. It was a bit overwhelming, but at this point I'd done so many portraits after the first few underpaintings it just felt natural. The styrofoam installations are what really bring this piece together, though. The portrait is kind of a play on phone pixels, but weird and misshapen like our weird and lopsided identities, impossible to compress into a uniform pattern. "
    , imgs: ["/assets/art_pf/portrait_1.jpg", "/assets/art_pf/portrait_2.jpg"]
    },

    {id:4, path:"7.png", link: "cookbook", title: "Cookbook Zine Design", medium: "adobe illustrator and procreate"
        ,blurb: "This was the final project for VISA0100, where the whole class came together to put together this huge zine of recipes from home. Growing up in a Shanghainese household, the braised pork belly was one of my favorite staples in my mom's repertoire, and so it felt natural that I should include it in the cookbook. In fact, I know this dish so well that I was able to render it almost completely from memory. In terms of the painting, I took a more stylized approach to match an aesthetic inspired by Chinese newspapers and billboards."
    , imgs: ["/assets/art_pf/Cookbook_Max_Guo-1.jpg"]
    }, 
    {id:5, path:"9.png", link: "snake", title: "画蛇添足", medium: "acrylic on canvas"
        ,blurb: "Following this pattern of VISA finals based off my Chinese upbringing, this painting was prompted by the idea of rendering a widely used idiom literally. In this case, I chose 画蛇添足, or \"painting legs on a snake\". Put simply, it means 'less can sometimes be more'. For the composition, I was really obsessed with the work of animator Natasha Allegri at the time, who in turn had recently been posting super cool illustrations done in graffiti in random streets and tunnels. I wanted to create a similar cartoon-ey graffiti effect, so I first used a rough, uneven wash of a muted brown to mimic cement, and then using bright magenta and greens to render the snake and really make it pop from the background. To really sell the idiom, I haphazardly put on the legs at the last minute in bright red. I hope the snake's expression gives you a good laugh!"
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