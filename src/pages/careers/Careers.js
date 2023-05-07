import { useLoaderData, Link } from "react-router-dom";

function Careers() {
    const careers = useLoaderData();
    return (
        <div className="careers">
            {careers.map(career => (
                <Link to={career.id.toString()} key={career.data}>
                    <p>{career.title}</p>
                    <p>Based in {career.location}</p>
                </Link>
            ))}
        </div>
    );
}

export default Careers;

export const careersLoader = async ({ params }) => {
    const res = await fetch('http://localhost:4000/careers');
    return res.json();
};