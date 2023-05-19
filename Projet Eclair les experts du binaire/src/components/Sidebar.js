import 'bulma/css/bulma.min.css';

const Sidebar = () => {

    return (

        <aside class="column is-3 is-one-third is-fullheight section menu is-dark">
            <p class="menu-label is-hidden-touch">Navigation</p>
            <ul class="menu-list">
                <li>
                    <a href="/accueil" class="">
                        <span class="icon"><i class="fa fa-home"></i></span> Accueil
                    </a>
                </li>
                <li>
                    <a href="/classes" class="">
                        <span class="icon"><i class="fa fa-table"></i></span> Classes
                    </a>
                </li>
                <li>
                    <a href="/formulaires" class="">
                        <span class="icon"><i class="fa fa-table"></i></span> Formulaires
                    </a>
                </li>
                <li>
                    <a href="/emails" class="">
                        <span class="icon"><i class="fa fa-table"></i></span> Programmation E-mail
                    </a>
                </li>
            </ul>
        </aside>
    )

}

export default Sidebar;