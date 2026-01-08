<template>
  <section class="rf-impressum">
    <h1>Impressum</h1>
    <h3>Angaben gemäß § 5 TMG:</h3>
    <address>
      <p>Robert Filatow</p>
      <p>Webdesigner</p>
      <p>Professor-rippel-Straße, 37</p>
      <p>55765 Birkenfeld</p>
    </address>

    <h3>Kontakt:</h3>
    <p>E-Mail: <a href="mailto:robert.filatow@web.de">robert.filatow@web.de</a></p>

    <h3>Umsatzsteuer:</h3>
    <p>Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz: DE 31 00 81 457</p>

    <h3>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h3>
    <address>
      <p>Robert Filatow</p>
      <p>Professor-Rippel-Str 37</p>
      <p>55765 Birkenfeld</p>
    </address>

    <h3>Online-Streitbeilegung (OS):</h3>
    <p>
      Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
      <a href="http://ec.europa.eu/consumers/odr" rel="noopener noreferrer" target="_blank">http://ec.europa.eu/consumers/odr</a>
    </p>
    <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
    <p>
      Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
    </p>

    <h3>Haftung für Inhalte</h3>
    <p>
      Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
      Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
      überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
    </p>
    <p>
      Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
      Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
      Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
    </p>

    <h3>Haftung für Links</h3>
    <p>
      Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
      fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
      der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
      Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
    </p>
    <p>
      Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
      zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
    </p>

    <h3>Urheberrecht</h3>
    <p>
      Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die
      Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
      schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht
      kommerziellen Gebrauch gestattet.
    </p>
    <p>
      Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
      werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten
      wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
    </p>

    <p>Quelle: eRecht24</p>
  </section>
</template>

<script>
export default {
  name: "ImpressumView",
}
</script>

<style scoped>
.rf-impressum{
  background:#fff;
  width:1440px;
  max-width:100%;
  margin:0 auto;
  padding:48px 64px;
  box-sizing:border-box;
}
.rf-impressum h1{
    font-size: 2rem;
}
.rf-impressum h3{ margin:0 0 12px; font-size: 1.5rem; }
.rf-impressum p{ margin:0 0 12px; line-height:1.6; }
.rf-impressum address{ font-style:normal; margin:0 0 16px; }
.rf-impressum a{ word-break:break-word; }

/* Laptop / kleinere Desktops */
@media (max-width: 1199px){
  .rf-impressum{
    width:100%;
    padding:40px 48px;
  }
}

/* Tablet Landscape */
@media (max-width: 1023px){
  .rf-impressum{
    padding:32px 32px;
  }
}

/* Tablet Vertical  */
@media (max-width: 1024px){
  .rf-impressum{
    padding:32px 28px;
  }
}

/* Smartphone Landscape / kleine Geräte */
@media (max-width: 600px){
  .rf-impressum{
    padding:24px 18px;
  }
}

/* Smartphone Vertical */
@media (max-width: 480px){
  .rf-impressum{
    padding:20px 14px;
  }
}
</style>
