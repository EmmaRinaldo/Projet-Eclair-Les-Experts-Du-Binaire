import 'bulma/css/bulma.min.css';

//Ajouter un link

const Main = () => {

    return (
        <>
            <div className="column is-9 is-two-third">
                <div className="columns is-centered">
                    <div className="column is-half">
                        <div className="card">
                            <header className="card-header">
                                <p className="card-header-title">
                                    Classes
                                </p>
                            </header>
                            <div className="card-content">
                                <div className="content">
                                    Ajouter ou voir vos classes.
                                </div>
                            </div>
                            <footer className="card-footer">
                                <a href="/classes" className="card-footer-item">En savoir plus</a>
                            </footer>
                        </div>
                    </div>
                </div>

                <div className="columns is-centered">
                    <div className="column is-half">
                        <div className="card">
                            <header className="card-header">
                                <p className="card-header-title">
                                    Formulaires
                                </p>
                            </header>
                            <div className="card-content">
                                <div className="content">
                                    Créer et voir vos formulaire.
                                </div>
                            </div>
                            <footer className="card-footer">
                                <a href="/formulaires" className="card-footer-item">En savoir plus</a>
                            </footer>
                        </div>
                    </div>
                </div>

                <div className="columns is-centered">
                    <div className="column is-half">
                        <div className="card">
                            <header className="card-header">
                                <p className="card-header-title">
                                    Programmation E-mail
                                </p>
                            </header>
                            <div className="card-content">
                                <div className="content">
                                    Programmez vos e-mail.
                                </div>
                            </div>
                            <footer className="card-footer">
                                <a href="/emails" className="card-footer-item">En savoir plus</a>
                            </footer>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );

}

export default Main;