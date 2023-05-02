interface Props {
  children: React.ReactNode;
}

function DashboardLayout({ children }: Props) {
  return (
    <div style={{ color: "red", padding: "15px", fontSize: "20px" }}>
      <h3>NAvBar</h3>
      {children}
    </div>
  );
}

export default DashboardLayout;
//layout es la misma exacta instancia mientras naveguemos y cambie el children, por ello no vamos a tener que re renderizar
//el navbar en este caso por ejemplo.
//si quiero hacer que se rerenderice hago lo mismo que en esta pagina pero el archivo se debe llamar template
