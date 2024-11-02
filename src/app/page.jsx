import NumericWidget from "@/components/NumericWidget/NumericWidget";

export default function Home() {
  return (
    <section className="container-home">
      <h1>Seu Dashboard</h1>
      <div className="container-dashboard">

        <NumericWidget title="Número de tasks pendentes" data="15"/>
        <NumericWidget title="Número de tasks atrasadas" data="2"/>
        <NumericWidget title="Número de tasks prestes a vencer" data="5"/>
        <NumericWidget title="Número de tasks concluídas nesse mês" data="11"/>

      </div>
    </section>
  );
}
