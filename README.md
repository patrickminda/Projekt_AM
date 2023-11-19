# Projekt_AM

**Temat projektu:** aplikacja do rezerwacji usług (np. fryzjer, mechanik, hydraulik)<br>
**Zaimplementowane funkcjonalności:** rejestracja, logowanie, kalendarz<br>
**Lista ekranów:** ekran główny, wyszukiwanie, strony usługodawców, kalendarz z wizytami, oceny i opinie, rejestracja, logowanie, profil użytkownika<br>
**Wybrany sensor:** aparat- używany przy opiniach produktu jako załącznik do oceny<br>
**Skład zespołu:** Oskar Ołub 3IZ12A, Patryk Minda 3IZ12A

**Struktura Katalogów:**

**>src/**<br>
    >components/<br>
        >Button.js<br>
        >Calendar.js<br>
        >Rating.js<br>
        >...<br>
    >screens/<br>
      >HomeScreen.js<br>
      >SearchScreen.js<br>
      >ServiceProviderScreen.js<br>
      >CalendarScreen.js<br>
      >RatingsAndReviewsScreen.js<br>
      >RegistrationScreen.js<br>
      >LoginScreen.js<br>
      >UserProfileScreen.js<br>
    >navigation/<br>
      >AppNavigator.js<br>
    >services/<br>
      >AuthService.js<br>
      >CalendarService.js<br>
      >RatingService.js<br>
      >...<br>
    >assets/<br>
      >images/<br>
      >fonts/<br>
***>App.js***<br>

***Ekrany***

HomeScreen.js: Główny ekran zawierający dostępne kategorie usług.<br>
SearchScreen.js: Ekran do wyszukiwania usługodawców na podstawie kategorii i lokalizacji.<br>
ServiceProviderScreen.js: Strona szczegółowa usługodawcy z dostępnymi terminami i możliwością rezerwacji.<br>
CalendarScreen.js: Kalendarz z widokiem dostępności i umówionych wizyt.<br>
RatingsAndReviewsScreen.js: Ekran zawierający opinie i oceny dotyczące usługodawców.<br>
RegistrationScreen.js i LoginScreen.js: Ekrany rejestracji i logowania.<br>
UserProfileScreen.js: Profil użytkownika z historią rezerwacji, ocenami itp.<br>
***Nawigacja***<br>
AppNavigator.js: Definicja nawigacji stosowanej w aplikacji.<br>
