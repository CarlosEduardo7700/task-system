import TaskCard from "@/components/TaskCard/TaskCard";

export default function MyTasks() {
    return (
        <section className="container-tasks">

            <h1>Suas Tasks</h1>

            <div className="board">

                <TaskCard title="Título da Task: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur rerum eveniet nemo odio maxime earum?" status="Status" dueDate="00/00 00:00"/>
                <TaskCard title="Título da Task: Lorem ipsum dolor sit amet, consectetur adipisicing elit." status="Status"/>
                
            </div>

        </section>
    );
}