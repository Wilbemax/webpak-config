console.log(`
██╗    ██╗██╗██╗     ██████╗ ██╗    ██╗███╗   ███╗ █████╗ ██╗  ██╗
██║    ██║██║██║     ██╔══██╗██║    ██║████╗ ████║██╔══██╗╚██╗██╔╝
██║ █╗ ██║██║██║     ██████╔╝██║ █╗ ██║██╔████╔██║███████║ ╚███╔╝ 
██║███╗██║██║██║     ██╔══██╗██║███╗██║██║╚██╔╝██║██╔══██║ ██╔██╗ 
╚███╔███╔╝██║███████╗██████╔╝╚███╔███╔╝██║ ╚═╝ ██║██║  ██║██╔╝ ██╗
 ╚══╝╚══╝ ╚═╝╚══════╝╚═════╝  ╚══╝╚══╝ ╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝
`);


import { createRoot } from 'react-dom/client'
import { App } from '@/Components/App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LazyAbout } from './page/about/About.lazy';
import { Shop } from './page/shop';
import { Suspense } from 'react';

const root = document.getElementById('root')

if (!root) {
    throw new Error('root not found')
}

const container = createRoot(root)

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/about',
                element: <Suspense><LazyAbout /></Suspense>
            }, {
                path: '/shop',
                element: <Suspense><Shop /></Suspense>
            }
        ]
    }
])

container.render(<RouterProvider router={router} />)

