<template>
  <section class="rf-datenschutz">
    <h1>Datenschutz</h1>

    <h3>Allgemeine Hinweise zum Datenschutz</h3>
    <p>
      Die Nutzung dieser Website ist in der Regel ohne Angabe personenbezogener Daten möglich. Sofern im Rahmen der Nutzung
      personenbezogene Daten verarbeitet werden, erfolgt dies freiwillig und zweckgebunden. Eine Weitergabe an Dritte findet nur mit
      ausdrücklicher Einwilligung statt.
    </p>
    <p>
      Es wird darauf hingewiesen, dass die Übertragung von Daten im Internet Sicherheitsrisiken bergen kann. Ein vollständiger Schutz der
      Daten vor dem Zugriff durch Dritte ist technisch nicht möglich.
    </p>

    <h3>1. Verantwortlicher</h3>
    <p>Robert Filatow</p>
    <p>Professor-Rippel-Straße 37</p>
    <p>55765 Birkenfeld</p>
    <p>E-Mail: <a href="mailto:robert.filatow@web.de">robert.filatow@web.de</a></p>

    <h3>2. Hosting über GitHub Pages</h3>
    <p>
      Diese Website wird als statisches Webangebot über GitHub Pages bereitgestellt. Der Hosting-Dienst wird von GitHub Inc.,
      88 Colin P. Kelly Jr. St., San Francisco, CA 94107, USA, betrieben.
    </p>
    <p>
      Beim Aufruf der Website verarbeitet GitHub technische Zugriffsdaten, die für den stabilen und sicheren Betrieb erforderlich sind.
      Dazu zählen insbesondere IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Ressourcen sowie Informationen zum verwendeten
      Browser und Betriebssystem.
    </p>
    <p>
      GitHub verarbeitet Daten auch auf Servern in den Vereinigten Staaten. Nach der aktuellen Rechtsprechung des Europäischen
      Gerichtshofs besteht dort kein mit der EU vergleichbares Datenschutzniveau. Daraus können sich Risiken für die Durchsetzung
      europäischer Datenschutzrechte ergeben.
    </p>
    <p>
      Zur Absicherung von Datenübermittlungen in sogenannte Drittstaaten nutzt GitHub von der EU-Kommission genehmigte
      Standardvertragsklauseln gemäß Art. 46 Abs. 2 DSGVO. Diese verpflichten GitHub zur Einhaltung zentraler europäischer
      Datenschutzstandards auch bei einer Verarbeitung außerhalb der Europäischen Union.
    </p>
    <p>
      Weitere Informationen zur Datenverarbeitung durch GitHub finden Sie in den Datenschutzrichtlinien von GitHub.
    </p>

    <h3>3. Cookies und Local Storage</h3>
    <p>Diese Website setzt keine Cookies ein.</p>
    <p>Es findet keine Nutzung von Tracking-, Analyse- oder Marketing-Technologien statt.</p>
    <p>Local Storage wird nicht zur Erstellung von Nutzerprofilen verwendet.</p>

    <h3>4. Externe Links</h3>
    <p>
      Diese Website kann Verweise auf externe Internetseiten enthalten. Für Inhalte und Datenverarbeitungen auf verlinkten Seiten ist
      ausschließlich der jeweilige Betreiber verantwortlich.
    </p>

    <h3>5. Rechte der betroffenen Personen</h3>
    <p>
      Ihnen stehen die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung sowie Datenübertragbarkeit gemäß
      Art. 15 bis 20 DSGVO zu.
    </p>
    <p>
      Sofern eine Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO erfolgt, besteht ein Widerspruchsrecht.
    </p>
    <p>
      Zudem haben Sie das Recht, sich bei einer zuständigen Datenschutzaufsichtsbehörde zu beschweren.
    </p>

    <h3>6. SSL- bzw. TLS-Verschlüsselung</h3>
    <p>
      Diese Website nutzt eine verschlüsselte HTTPS-Verbindung, um übertragene Inhalte vor unbefugtem Zugriff zu schützen.
    </p>

    <h3>7. Aktualität dieser Datenschutzerklärung</h3>
    <p>
      Diese Datenschutzerklärung wird angepasst, sobald sich rechtliche oder technische Rahmenbedingungen ändern.
    </p>
  </section>
</template>

<script>
export default {
  name: "DatenschutzView",
}
</script>

<style scoped>
.rf-datenschutz h1{
  font-size:2rem;
  margin:0 0 24px;
}

.rf-datenschutz h3{
  font-size:1.5rem;
  margin:0 0 12px;
}

.rf-datenschutz{
  background:#fff;
  width:1440px;
  max-width:100%;
  margin:0 auto;
  padding:48px 64px;
  box-sizing:border-box;
}

.rf-datenschutz p{ margin:0 0 12px; line-height:1.6; }
.rf-datenschutz a{ word-break:break-word; }

@media (max-width: 1199px){
  .rf-datenschutz{ padding:40px 48px; }
}
@media (max-width: 1024px){
  .rf-datenschutz{ padding:32px 28px; }
}
@media (max-width: 600px){
  .rf-datenschutz{ padding:24px 18px; }
}
@media (max-width: 480px){
  .rf-datenschutz{ padding:20px 14px; }
}
</style>
