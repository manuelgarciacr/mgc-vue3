<template>
    <v-btn
        class="sidemenu-btn d-none d-md-block"
        :class="{ open: isSideMenuOpen }"
        :style="cssVars"
        @click="onBtnClick"
    >
        <span class="material-icons">double_arrow</span>
    </v-btn>
    <SideMenu
        side-menu
        class="d-none d-md-block"
        :labels="labels"
        :style="cssVars"
        :class="{ open: isSideMenuOpen }"
    ></SideMenu>
    <div
        class="default-view"
        :style="cssVars"
        :class="{ open: isSideMenuOpen, hidden: smAndDown }"
    >
        <section>
            <article id="Tecnologías" data-title="Tecnologías" type="section" :ref="setItemRef">
                <h3>TECNOLOGÍAS</h3>
                <hr />
                <ul>
                    <li>
                        <b>Android Avanzado.</b> EN CURSO. Curso “Android Mobile
                        Developer” (300h) dentro del plan de Formación
                        Profesional para la Ocupación de Alto Nivel (FPOAN)
                        Kotlin, animations, material design, Firebase, Jetpack,
                        RxJava, MVP, MVVM, etc. Nivel 4. Impartido por la UOC.
                        Junio-Octubre 2022. Curso de “Desarrollo Android” (300h)
                        dentro del “Plan de Cualificación en Tecnología Móvil”
                        impartido por el CIFO de l'Hospitalet de Llobregat.
                        Septiembre-Diciembre 2019. Nota final 100% (Excelente).
                    </li>
                    <li>
                        <b>Desarrollo Seguro de Aplicaciones.</b> EN CURSO.
                        Curso “Desenvolupament Segur d’Aplicacions” (104h) del
                        plan de Formación Profesional para la Ocupación de Alto
                        Nivel (FPOAN) Vulnerabilidades, análisis y verificación
                        de aplicaciones, herramientas control de seguridad,
                        verificación de la calidad del código, etc. Nivel 4.
                        Impartido por la UOC. Junio-Octubre 2022.
                    </li>
                    <li>
                        <b>Vue.js.</b> Curso “Front-End with Vue.js” (240h) del
                        plan de Formación Profesional para la Ocupación de Alto
                        Nivel (FPOAN) Vue 2 y 3, Options API, Composition API,
                        etc. Nivel 4. Impartido por la UOC. Enero-Abril 2022.
                    </li>
                    <li>
                        <b>React y React Native.</b> Curso “Full-Stack Web
                        Development with React” (140h) online impartido por The
                        Hong Kong University of Science and Technology en
                        Coursera. Becado por la Generalitat de Catalunya. React
                        Router, Reactstrap, React Native Alerts, Animations,
                        Gestures, Persist Redux Store, Accessing Native
                        Capabilities, Expo SDK, etc. Agosto-Diciembre 2020. Nota
                        final 100%.
                    </li>
                    <li>
                        <b>Bootstrap 5.</b> Curso “Front-End Web UI Frameworks
                        and Tools: Bootstrap 4” (20h) online impartido por The
                        Hong Kong University of Science and Technology en
                        Coursera. Becado por la Generalitat de Catalunya. Less,
                        Sass, Grunt, Gulp, etc. Diciembre-Enero 2020. Nota final
                        100%.
                    </li>
                    <li>
                        <b>Angular 2.</b> Curso “Front-End JavaScript
                        Frameworks: Angular” (38h) online impartido por The Hong
                        Kong University of Science and Technology en Coursera.
                        Becado por la Generalitat de Catalunya. Angular
                        Material, Flex-Layout, RxJS, etc. Noviembre-Diciembre
                        2020. Nota final 100%.
                    </li>
                    <li>
                        <b>AngularJS.</b> Curso “Single Page Web Applications
                        with AngularJS” (50h) online impartido por The Johns
                        Hopkins University en Coursera. Becado por la
                        Generalitat de Catalunya. Componentes, directivas
                        routing, testing, etc. Octubre-Diciembre 2020. Nota
                        final 96%.
                    </li>
                    <li>
                        <b>SEO/SEM.</b> Curso “Posicionamiento SEO/SEM” (60h)
                        impartido por ASEDEM en Barcelona. Posicionamiento
                        orgánico y de pago. Google Analitics, Gogle Ads, etc.
                        Septiembre-Octubre 2020. Nota final 83,9%.
                    </li>
                    <li>
                        <b>NodeJS.</b> Curso “Server-side Development with
                        NodeJS, Express and MongoDB” (36h) online impartido por
                        The Hong Kong University of Science and Technology en
                        Coursera. Becado por la Generalitat de Catalunya.
                        Express, MongoDB RESTful API. Etc. Noviembre-Diciembre
                        2020. Nota final 100%.
                    </li>
                    <li>
                        <b>Java (EE).</b> Curso de “Desarrollo Java (EE)” (350h)
                        dentro del “Plan de Cualificación en Tecnología Móvil”
                        impartido por el CIFO de l'Hospitalet de Llobregat. MVC,
                        SOLID, Spring, Hibernate, etc. Septiembre–Diciembre
                        2019. Nota final 100% (Excelente).
                    </li>
                    <li>
                        <b>Java (SE).</b> Curso “Desarrollo Java (SE)” (300h)
                        dentro del “Plan de Cualificación en Tecnología Móvil”
                        organizado por el CIFO de l'Hospitalet de Llobregat e
                        impartido por la UOC. SeptiembreDiciembre 2018. Nota
                        final A (Excelente).
                    </li>
                    <li>
                        <b>HTML5, CSS3, JS, Jquery, PHP, MySQL, etc.</b> Curso
                        “CP nivel 3 Desarrollo de aplicaciones con tecnología
                        Web” (590h) impartido en IFP Barcelona (Editorial
                        Planeta). Nota final Excelente.
                    </li>
                    <li>
                        <b>CCNA Routing and Switching.</b> Curso “CP nivel 3 de
                        Seguridad Informática” impartido en PUE Barcelona.
                        Instalación y mantenimiento de redes en pequeñas y
                        medianas empresas con CISCO. Nota final Notable.
                    </li>
                    <li>
                        <b
                            >Técnico especialista en informática de gestión.
                            (Técnico Superior DAM).</b
                        >
                        Cursado en el Instituto Politécnico n.º 2 del ejército
                        de tierra de Calatayud y en el I.F.P. Leonardo Da Vinci
                        de Madrid.
                    </li>
                </ul>
                -->
            </article>
        </section>
        <section>
            <article
                id="Experiencia profesional"
                type="section"
                :ref="setItemRef"
            >
                <h3>EXPERIENCIA PROFESIONAL</h3>
                <hr />
                <ul>
                    <li>
                        <b
                            >2020 Analista-programador de aplicaciones
                            informáticas.</b
                        >
                        Ajuntament de L'Hospitalet de Llobregat. Colaboración
                        puntual (05/2020 - 09/2020). Adaptación con Apache
                        Cordova de una app para el control de las fases de
                        desconfinamiento por el personal del ayuntamiento.
                    </li>
                    <li>
                        <b>
                            2018 – 2019 Analista-programador de aplicaciones
                            informáticas.</b
                        >
                        Ajuntament de L'Hospitalet de Llobregat. Análisis y
                        desarrollo de aplicaciones móviles y Web para el
                        departamento de cartografía. Desarrollando con Apache
                        Cordova (CSS3, HTML5, JS Jquery, etc) sobre mapas
                        Leaflet.
                    </li>
                    <li>
                        <b>
                            1996 – 2009 Analista-programador de aplicaciones
                            informáticas.</b
                        >
                        ADP iberia, Barcelona. Análisis y desarrollo de
                        aplicaciones informáticas de gestión para grandes
                        empresas como SOCOMO en Valencia y Carrefour en España y
                        Portugal. Puesta en marcha y posterior mantenimiento de
                        los aplicativos en casa del cliente. Administración de
                        las BBDD del cliente.
                    </li>
                    <li>
                        <b> 1996 Jefe de Almacén.</b> Departament d’Ensenyament
                        Generalitat de Catalunya, Barcelona. Recepción,
                        almacenamiento y control de stock del mobiliario y
                        material escolar de los centros de primaria de Barcelona
                        y Comarcas. Picking del material para su distribución a
                        los centros.
                    </li>
                    <li>
                        <b>1986 – 1992 Cabo 1º Especialista VITE.</b> Ejército
                        de Tierra, Madrid. Gestión de un almacén con más de
                        100.000 ítems de material eléctrico, electrónico y
                        fungible. Control de Stock, solicitudes de reposición de
                        material, y picking. Recepción, registro y verificación
                        de pedidos. Inspección y formación en procedimiento de
                        los centros a nuestro cargo. Condecorado dos veces con
                        la Cruz de la Orden del Mérito Militar con distintivo
                        blanco de 4ª Clase por mi labor en dicho almacén.
                    </li>
                </ul>
            </article>
        </section>
        <section>
            <article
                id="Formación complementaria"
                type="section"
                :ref="setItemRef"
            >
                <h3>FORMACIÓN COMPLEMENTARIA</h3>
                <hr />
                <ul>
                    <li>
                        <b>2022. Prevención de riesgos laborales.</b> EN CURSO.
                        (40h). UOC Barcelona. 2020 (40h). SC2 Barcelona. 2020.
                        Ethical Hacker Fundamental Masterclass (6h). Masterclass
                        a cargo de Genís Margarit y Antonio Bayonas,
                        preparatoria para la certificación EHA. PUE Barcelona.
                    </li>
                    <li>
                        <b
                            >2018. Creación de contenidos para realidad
                            aumentada</b
                        >
                        (40h). Formación continua. CIFO de l'Hospitalet de
                        Llobregat. Nota final Notable.
                    </li>
                    <li>
                        <b
                            >2017. Introducción a Cloud, Big Data y Machine
                            learning.</b
                        >
                        CIFO. L’Hospitalet de Llobregat.
                    </li>
                    <li>
                        <b
                            >2017. Desarrollo aplicaciones híbridas
                            multiplataforma para móviles.</b
                        >
                        CIFO. L’Hospitalet de Llobregat.
                    </li>
                    <li>
                        <b
                            >2006. Gestión de nóminas, Seguridad Social y
                            práctica laboral.</b
                        >
                        Academia ADAMS. Barcelona.
                    </li>
                    <li><b>2003. Genexus.</b> Genexus Ibérica. Barcelona.</li>
                    <li>
                        <b>1993. ADABAS/NATURAL bajo UNIX.</b> Viasoft S.A.
                        Barcelona.
                    </li>
                </ul>
            </article>
        </section>
        <section>
            <article id="Idiomas" type="section" :ref="setItemRef">
                <h3>IDIOMAS</h3>
                <hr />
                <ul>
                    <li><b>Castellano y catalán:</b> Nativos.</li>
                    <li>
                        <b>Inglés:</b> Medio/alto (B2). SC2 Barcelona (Noviembre
                        2020 – Febrero 2021)
                    </li>
                    <li><b>Portugués:</b> Conocimientos básicos.</li>
                </ul>
            </article>
        </section>
        <section>
            <article
                id="Otros datos de interés"
                type="section"
                :ref="setItemRef"
            >
                <h3>OTROS DATOS DE INTERÉS</h3>
                <hr />
                <ul>
                    <li>Gran facilidad de aprendizaje.</li>
                    <li>
                        Acostumbrado a trabajar en equipo. Git, GitLab, Trello,
                        Scrum, etc.
                    </li>
                    <li>Miembro de Mensa en España.</li>
                    <li>
                        Buen trato. Acostumbrado a trabajar en casa del cliente.
                    </li>
                    <li style="margin-bottom: 1rem;">Test de Competencias Clave de Barcelona Activa:</li>
                    <div class="table v-row">
                        <div class="column v-col-12 v-col-md-6">
                            <div class="header">
                                <p>Por encima de la media</p>
                            </div>
                            <div class="body">
                                <ul>
                                    <li>Orientación al logro.</li>
                                    <li>Planificación y organización.</li>
                                    <li>Preocupación por el orden y la calidad.</li>
                                    <li>Trabajo en equipo y cooperación.</li>
                                    <li>Autoconfianza.</li>
                                    <li>Autocontrol.</li>
                                    <li>Compromiso con la organización.</li>
                                    <li>Empatía.</li>
                                    <li>Orientación al cliente.</li>
                                    <li>Aprendizaje y utilización de conocimientos.</li>
                                    <li>Pensamiento conceptual.</li>
                                    <li>Pensamiento analítico.</li>
                                </ul>
                            </div>
                        </div>
                        <div class="column v-col-12 v-col-md-6">
                            <div class="header">
                                <p>Por debajo de la media</p>
                            </div>
                            <div class="body">
                                <ul>
                                    <li>
                                        El Test no ha detectado competencia alguna
                                        con un desarrollo inferior a la media de la
                                        población.
                                    </li>
                                </ul>
                                
                            </div>
                        </div>
                    </div>
                </ul>
            </article>
        </section>
    </div>
</template>

<script setup lang="ts">
    import { useDefaultView } from "../composables/defaultView";

    const {
        SideMenu,
        isSideMenuOpen,
        cssVars,
        onBtnClick,
        labels,
        smAndDown,
        setItemRef
    } = useDefaultView();
</script>

<style scoped lang="scss">
    @import "../composables/defaultView.scss";

    .table {
        margin-top: 2rem;
        .column {
            border: 2px solid rgba(var(--v-theme-on-background));
            padding-bottom: 2.5rem;
            li {
                list-style: disc;
                margin-left: 1.2rem;
            }
            .header {
                color: brown;
                border-bottom: 2px solid rgba(var(--v-theme-on-background));
                padding-bottom: .5rem;
                margin-bottom: .5rem;
            }
            // th {
                
            //     border-right: 2px solid rgba(var(--v-theme-on-background));
            // }
            &:first-of-type {
                border-right: 2px solid rgba(var(--v-theme-on-background));
            }
            &:last-of-type {
                border-top: 2px solid rgba(var(--v-theme-on-background));
            }
        }
    //    td:first-of-type {
    //         border-right: 2px solid rgba(var(--v-theme-on-background));
    //     }
    }
</style>
