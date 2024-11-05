import TaskCard from "@/components/TaskCard/TaskCard";

export default function MyTasks() {
    return (
        <section className="container-tasks">

            <h1>Suas Tasks</h1>

            <div className="board">

                <TaskCard title="Título da Task" status="Status" dueDate="Data limite: 00/00 00:00"/>
                <TaskCard title="Título da Task" status="Status"/>

            </div>

        </section>
    );
}