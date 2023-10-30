import { Link, Outlet } from "react-router-dom";
import Menu from "../components/Menu";
import { items } from "../data/items";

export default function Home() {
    return (
        <div>
            <Menu />    
            <h1>Home</h1>
            <div>
                <div>
                    {items.map((item) => (
                        <div>
                            <Link to={`/contact/${item.id}`}>{item.name}</Link>
                        </div>
                    ))}
                </div>
                <Outlet />
            </div>
        </div>
        
    );
}