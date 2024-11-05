export default function Header() {
    return (
      <header className="container-header">
        <nav>
            <a href="/"><h1>Task<strong>System</strong></h1></a>
            <a href="/tasks">Suas Tasks</a>
        </nav>
        
        <a href="#">Logout</a>
      </header>
    );
  }