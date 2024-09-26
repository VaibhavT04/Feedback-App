import { Link } from "react-router-dom";
import Card from "../shared/Card";

function AboutPage() {
  return (
     <Card reverse={false}>
        <h1>This is About Page</h1>
        <p>Chak de india. Interstellar. Inception, Jai Hind</p>

        <p>
            <Link to='/'>
                Back to Home Page
            </Link>
        </p>
        
     </Card>
  )
}

export default AboutPage