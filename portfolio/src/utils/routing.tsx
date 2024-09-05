import ArtProject from '../assets/pages/art';
import CsProject from '../assets/pages/cs';
import Root from '../root';
import Home from '../home';
import { createBrowserRouter} from 'react-router-dom';

export const router = createBrowserRouter([
    {
        path: "/", 
        element: <Root />,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "art/:id",
                element: <ArtProject/>
            },
            {
                path: "cs/:id",
                element: <CsProject/>
            }
        ]
  
  },
  ]);