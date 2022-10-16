import { Home } from "./routes/Home";
const routes = [];
routes.push({name:'Home',path:'/', exec: Home });
routes.push({name:'Home',path:'/', exec:''});
routes.push({name:'Home',path:'/', exec:''});

export function router(){
    const {pathname} = window.location
    const route = routes.find((route)=> route.path === pathname)    
    console.log(route)

}