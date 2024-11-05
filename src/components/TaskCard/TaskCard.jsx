export default function TaskCard({title, status, dueDate}) {
    return (
        <div className="task-card">
            <h2>{title}</h2>
            <div className="task-status">{status}</div>
            <div className="due-date">{dueDate}</div>
        </div>
    );
}