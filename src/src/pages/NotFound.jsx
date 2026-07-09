function NotFound() {
  return (
    <section className="page-section">
      <div className="container narrow not-found">
        <div className="section-title">
          <h1 className="font-display">Page introuvable</h1>
          <p>La page demand&eacute;e n&apos;existe pas.</p>
        </div>
        <Button to="/" variant="primary">
          Retour &agrave; l&apos;accueil
        </Button>
      </div>
    </section>
  );
}

export default NotFound;
