import ReactMarkdown from 'react-markdown';
import podcasts from "./podcasts.md";

export function Podcasts() {
    
    return (
        <section id="podcast">                       
                    
            <ReactMarkdown children={podcasts} />

        </section>
    );
}

export default Podcasts;