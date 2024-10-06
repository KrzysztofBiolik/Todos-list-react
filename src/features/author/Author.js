import { Container } from "../../common/Container";
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
            <p >Ukończyłem studia inżynierskie na Politechnice Śląskiej na kierunku
              "Zarządzanie i inżynieria produkcji", specjalizacja "Informatyczne systemy zarządzania"
            </p>
          </section>
          <section >
            <h2>Zainteresowania</h2>
            <h3>Opis</h3>
            <p >Moim podstawowym hobby jest sport. Moimi ulubionymi aktywnościami jest
              piłka nożna oraz siłownia.
              Dużo takżeoglądam sportu, w szczególności jestem fanem ligi angielskiej <i>Premier
                League</i>Klubem któremu kibicuję najbardziej jest <b>Arsenal</b>, a moimi ulubionymi zawodnikami
              są Erling Halland, Bukayo Saka oraz Son.
            </p>
          </section>
        </>
      }
    />
  </Container>
);