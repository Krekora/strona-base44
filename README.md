# Landing 1:1 + Mail Options (Demo)

Ten projekt to landing inspirowany stylem strony gry + 3 warianty sekcji mailowej,
przelaczane przyciskami na stronie.

## Warianty

1. Sam klikalny adres email (`mailto:`).
2. Formularz kontaktowy (UI gotowe, wymaga podpiecia backendu/API).
3. Newsletter (UI gotowe, wymaga podpiecia narzedzia mailingowego).

## Jak uruchomic lokalnie

Najprosciej otworz `index.html` w przegladarce.

## Jak podpiac realna wysylke maili

### Opcja 1: Klkalny email

Nic nie trzeba integrowac. Wystarczy podmienic adres w `mailto:`.

### Opcja 2: Formularz kontaktowy

Mozliwe drogi:

- Formspree (najszybsza konfiguracja bez backendu)
- Netlify Forms
- Vercel + Resend (najbardziej profesjonalna opcja)
- Wlasny backend (Node/PHP/Python) + SMTP/API

### Opcja 3: Newsletter

Najwygodniej:

- Brevo
- MailerLite
- ConvertKit

W praktyce podmieniasz `action` formularza na endpoint dostawcy i dodajesz klucz/API po stronie serwera, jesli wymagane.

## Uwaga prawna

Przy odwzorowaniu 1:1 warto uzyc wlasnych grafik i copy, aby uniknac problemow z prawami autorskimi.
