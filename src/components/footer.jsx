import Button from "./Button";
import "./footer.css"

export default function FooterTodoApp({count}){
    return(
        <div className="footer">
        <p>bạn có <span>{count}</span> Công việc</p>
        <Button variant="danger">Delete All</Button>
        </div>
    )
}