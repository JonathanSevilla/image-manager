import Menu from "../components/Menu";
import{ useParams } from "react-router-dom"
import { getContact} from "../data/items"
import { useMemo } from "react";

export default function Contact() {
    const params = useParams();

    const contact = useMemo(
        () => getContact(params.contactid),
        [params.contactid]
    );

    if(!contact) {
        throw new Error('Contact does not exit')
    }

    return (
        <div>
        <Menu />    
        <h1>{contact.name}</h1>
        </div>
    );
}