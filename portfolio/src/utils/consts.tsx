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
        id: 1,
        link: "kebash",
        title: "kebash!",
        thumb: "/assets/project_img/kebash_thumbnail.png",
        direct: "https://brownrisdgames.itch.io/kebash",
        imgs: ["/assets/project_img/kebash_menu.jpg", "/assets/project_img/kebash.png"],
        videos: [],
        tags: ["game dev", "C#", "Unity"],

        txt : "This was the first game I made with Brown RISD Game Developers, and the first time I worked with the Unity game engine! This is a super polished party game designed for 4 players, where kebab sticks shoot different types of food at each other. For this game, I developed some dynamic UI elements as well as a general game state manager to navigate between menus."
    },
    {
        id: 2,
        link: "origami-bird-battle",
        title: "origami bird battle",
        thumb: "/assets/project_img/origami_bird_battle.png",
        direct: "https://brownrisdgames.itch.io/origami-bird-battle",
        imgs: ["/assets/project_img/obb.png", "/assets/project_img/obb_menu.png"],
        videos: [],
        tags: ["game dev", "godot"]
        ,

        txt : "This was my third semester at BRGD, where I finally stepped up to the producer role for the team. As a result, I managed timelines and responsibilities for both artists and programmers to maximise efficiency and aim for the best polish. Origami Bird Battle is a 2-player game inspired by paper airplanes and angry birds, where players will shoot paper cranes at each other while trying to build up large origami towers. As a more experienced programmer, I also implemented much larger structures while also working on significant parts of the game design, such as a tetris-like queue for dropping blocks as well as the physics of the blocks."
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
    {
        id: 6,
        link: "graphix",
        title: "graphics projects",
        thumb: "/assets/project_img/path_thumb.png",
        direct: "",
        imgs: ["/assets/project_img/path_dof.png",  "/assets/project_img/path_dof2.png",  "/assets/project_img/path_mirror.png", 
             "/assets/project_img/path_refract.png",  "/assets/project_img/mesh_thumb.png", "/assets/project_img/shadow_test.png",
             "/assets/project_img/fem_obst.gif"
        ],
        videos: [ "/assets/project_img/sphere_obst.mp4"],
        tags: ["graphics", "c++"]
        ,

        txt : "Here are some projects I've worked on as classwork for CS1230 and CS2240! Visual arts and math have always been a massive part of my upbringing so I was super looking forward to take graphics when I decided to come to Brown. I loved CS1230 and decided to take CS2240 almost immediately after I finished the first class, and it was an even better experience! Implementing a pathtracer and learning of the complex math and theory behind it was so cool, as were the complex data structures behind mesh processing and the weird spring physics of finite element motion. In my free time I always find myself coming up with new random graphics projects, be it writing up an interesting looking shader or some procedural generation model, projects which I've been working on with three.js and can't wait to share in the future!"
    }

]

interface artwork{
    id: number,
    path: string,
    link: string,
    title: string,
    medium: string,
    blurb: string
}

const ART: artwork[] = [
    {id: 0, path: "0.jpeg", link:"charcoal1", title: "Charcoal Still Life 1", medium: "charcoal on paper"
        ,blurb: "This is a super quick charcoal still life I did early on, mostly to get a better understanding of creating interesting compositions out of random objects. It's a bit messy, but I'm super proud of being able to navigate complex details such as the outlet wire as well as the mannequin hand's droopy gesture."
    },
    {id:1, path:"3.JPG", link:"charcoal2", title: "Charcoal Still Life 2", medium: "charcoal on paper"
        ,blurb: "This is another charcoal still life I did, right after the first one actually. You can tell I spent a good amount of time more on this one, but also mostly because that first project had so many small details that I tried capturing. I went a lot more into studying various complex textures within one, be it the metal staple gun or the fake cabbage plant."
    },
    {id: 2, path:"2.jpg", link: "engine", title: "Family Car Engine", medium: "oil on canvas"
        ,blurb: "This one's a super ambitious oil painting still life I worked on, approximately 16 x 24 inches in dimensions. It's a rendering of the engine for our old family car, a Honda Civic I can still remember my parents driving home for the first time. Around this time, I was super into the old hard sci-fi of a lot of 90's anime, like Ghost in the Shell, which is why I rendered every single component so painstakingly, even learning about the various mechanisms within the engine(I'm really not a car guy)."
    },
   {id:3, path: "1.jpg", link: "circuit", title: "Circuitboard Still Life", medium: "oil on canvas with sawed off circuits"
    ,blurb: "Another exploration into weird, complex machinery! This still life is a composition of a giant CRT TV I got from a family friend. In contrast to the engine, the colors and elements of the circuit feel so much more haphazard, but I think I did a good job in my composition, which I spent hours positioning on my living room to find the perfect placement of circuitboards. The wires really help lead my eyes through the piece. In the middle I also added a circuitboard I sawed out of the actual TV, for some extra pop."
   },
    {id:4, path:"4.jpg", link: "drowning", title: "Drowning", medium: "charcoal on paper with watercolor on tissue paper"
        ,blurb: "The next stop in my portfolio is a series of massive paintings of my face!! This piece comes from a time when everything felt like just a bit too much. To this day I'm still so proud of this piece, from the complex water details to my weird but nuanced expression. The tissue paper came as a recommendation from my art teacher at the time, who thought the piece could use a bit more than just a sketch on a sheet of paper. I will forever thank her because I think wandering New York looking for tissue paper, and subsequently finishing the piece gave me so much insight on my own artistic process."
    },
    {id:5, path:"6.jpg", link: "wires", title: "Wired", medium: "oil on canvas with auxiliary wires"
        ,blurb: "For a previous project that isn't in this portfolio I bought a large number of auxiliary wires to create this weird circuitboard structure. With a bunch of stuff left I thought it would be cool to render my face in some greusome situation with the wires. This was the final composition after like a day of iterating. Continuing from my previous self-portrait I wanted to play with the shape that my piece took, so I let the wires run wild a bit, looking all the way around the canvas. My parents think it's a super sophisticated commentary on society, but to be honest I just really like ranting on the internet. It feels very visceral, sometimes painful, like this portrait!"
    },
    {id:6, path:"5.jpeg", link: "pixels", title: "Organic Pixels", medium: "oil on canvas on styrofoam boxes"
        ,blurb: "This one's considerably beefier. Standing at 4 ft x 3 ft x 1 ft, this is easily the biggest piece I've ever attempted. The size gave me so much space to fully render out this expression, every wrinkle, every little gesture with the eye. It was a bit overwhelming, but at this point I'd done so many portraits after the first few underpaintings it just felt natural. The styrofoam installations are what really bring this piece together, though. The portrait is kind of a play on phone pixels, but weird and misshapen like our weird and lopsided identities, impossible to compress into a uniform pattern. "
    },

    {id:7, path:"7.png", link: "cookbook", title: "Cookbook Zine Design", medium: "adobe illustrator and procreate"
        ,blurb: "This was the final project for VISA0100, where the whole class came together to put together this huge zine of recipes from home. Growing up in a Shanghainese household, the braised pork belly was one of my favorite staples in my mom's repertoire, and so it felt natural that I should include it in the cookbook. In fact, I know this dish so well that I was able to render it almost completely from memory. In terms of the painting, I took a more stylized approach to match an aesthetic inspired by Chinese newspapers and billboards."
    }, 
    {id:8, path:"9.png", link: "snake", title: "画蛇添足", medium: "acrylic on canvas"
        ,blurb: "Following this pattern of VISA finals based off my Chinese upbringing, this painting was prompted by the idea of rendering a widely used idiom literally. In this case, I chose 画蛇添足, or \"painting legs on a snake\". Put simply, it means 'less can sometimes be more'. For the composition, I was really obsessed with the work of animator Natasha Allegri at the time, who in turn had recently been posting super cool illustrations done in graffiti in random streets and tunnels. I wanted to create a similar cartoon-ey graffiti effect, so I first used a rough, uneven wash of a muted brown to mimic cement, and then using bright magenta and greens to render the snake and really make it pop from the background. To really sell the idiom, I haphazardly put on the legs at the last minute in bright red. I hope the snake's expression gives you a good laugh!"
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