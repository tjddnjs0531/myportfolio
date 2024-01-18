import App from './App';
import Main from './components/Main/Main';
import Section1 from './components/Main/Section1/Section1';
import Section2 from './components/Main/Section2/Section2';
import Project from './components/Main/Section3/Project';
import ProjectDetail from './components/Main/Section3/ProjectDetail';
import Section4 from './components/Main/Section4/Section4';


export const RouterInfo = [
    {
        path: '/',
        element: <Main />,
        children: [
            { path: 'section1', element: <Section1 />},
            { path: '/section2', element: <Section2 />},
            { path: 'projects', element: <Project />},
            { path: 'projects/:projectId', element: <ProjectDetail />},
            { path: 'section4', element: <Section4 />}
        ]
    },

]