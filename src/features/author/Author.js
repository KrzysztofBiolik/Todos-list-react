import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";

export default () => (
  <Container>
    <Header title="O autorze" />
    <Section
      title="Krzysztof Biolik"
      body={
        <>
          <section>
            <h2>Dane osobowe</h2>
            <p >Imię: Krzysztof</p>
            <p >Nazwisko: Biolik</p>
            <p >Data urodzenia: 24.12.2001r</p>
          </section>
          <section>
            <h2>Wykształcenie</h2>
            <p >Jestem studentem trzeciego roku studiów na kierunku <strong>Zarządzanie i
              Inżynieria
              produkcji</strong>
              na <strong>Politechnice Śląskiej.</strong> Moja specjalizacja nazywa się "Informatyczne systemy
              produkcji"</p>
          </section>
          <section >
            <h2>Dlaczego programowanie?</h2>
            <p>Z programowaniem wcześniej nie miałem styczności. Obecnie na studiach mam
              przedmiot
              języki
              programowania,
              w którym pracujemy w programie C++, gdzie poznałem podstawowe operacje jak funkcje, tablice czy
              pętle.Nauka na studiach nie sprawia mi wiele satysfakcji, dlatego chcę spróbować czegoś nowego.
              Jestem
              trochę <em>introwertykiem</em>, dlatego lubię robić pewne rzeczy indywidualnie i brać za nie
              odpowiedzialność. Stworzenie czegoś samemu sprawia mi dużo satysfakcji, dlatego myślę, że
              programowanie
              może być fajnym doświadczenim i narazie tak to traktuję.</p>
          </section>
          <section >
            <h2>Zainteresowania</h2>
            <h3>Opis</h3>
            <p >Moim podstawowym hobby jest sport. Moimi ulubionymi aktywnościami jest
              piłka
              nożna oraz siłownia.
              Dużo takżeoglądam sportu, w szczególności jestem fanem ligi angielskiej <i>Premier
                League</i>Klubem któremu kibicuję najbardziej jest <b>Arsenal</b>, a moimi ulubionymi zawodnikami
              są Erling Halland, Bukayo Saka oraz Son
            </p>
          </section>
        </>
      }
    />
  </Container>
);