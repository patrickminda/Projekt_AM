# Projekt_AM

**Temat projektu:** aplikacja do rezerwacji usług (np. fryzjer, mechanik, hydraulik)<br>
**Zaimplementowane funkcjonalności:** rejestracja, logowanie, kalendarz<br>
**Lista ekranów:** ekran główny, wyszukiwanie, strony usługodawców, kalendarz z wizytami, oceny i opinie, rejestracja, logowanie, profil użytkownika<br>
**Wybrany sensor:** aparat- używany przy opiniach produktu jako załącznik do oceny<br>
**Skład zespołu:** Oskar Ołub 3IZ12A, Patryk Minda 3IZ12A

**Struktura Katalogów:**

**>src/**

    >components/
      >Button.js
      >Calendar.js
      >Rating.js
      >...
    >screens/
      >HomeScreen.js
      >SearchScreen.js
      >ServiceProviderScreen.js
      >CalendarScreen.js
      >RatingsAndReviewsScreen.js
      >RegistrationScreen.js
      >LoginScreen.js
      >UserProfileScreen.js
    >navigation/
      >AppNavigator.js
    >services/
      >AuthService.js
      >CalendarService.js
      >RatingService.js
      >...
    >assets/
      >images/
      >fonts/
***>App.js***

**Komponenty:**

Button.js: Przycisk do ogólnego użytku w różnych częściach aplikacji.
Calendar.js: Komponent kalendarza do wyświetlania dostępności i rezerwacji.
Rating.js: Komponent do wyświetlania i oceniania usługodawcy.
Inne komponenty według potrzeb.
Ekrany:

HomeScreen.js: Główny ekran zawierający dostępne kategorie usług.
SearchScreen.js: Ekran do wyszukiwania usługodawców na podstawie kategorii i lokalizacji.
ServiceProviderScreen.js: Strona szczegółowa usługodawcy z dostępnymi terminami i możliwością rezerwacji.
CalendarScreen.js: Kalendarz z widokiem dostępności i umówionych wizyt.
RatingsAndReviewsScreen.js: Ekran zawierający opinie i oceny dotyczące usługodawców.
RegistrationScreen.js i LoginScreen.js: Ekrany rejestracji i logowania.
UserProfileScreen.js: Profil użytkownika z historią rezerwacji, ocenami itp.
_Nawigacja:_
AppNavigator.js: Definicja nawigacji stosowanej w aplikacji.
