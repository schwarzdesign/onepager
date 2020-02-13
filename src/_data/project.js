/*
	Config:
  Alle Inhalt und Einstellungsänderungen sollten hier gemacht werden.
  General Settings und Content wird in components wiederverwendet.
	Jede Section ist in Settings and Content variables unterteilt;
*/

module.exports = () => {
    return {
		/* Primary Colour */
		colour_primary: '#e80433',
		/* Secondary Colour */
		colour_secondary: '#003466',
		/* Gray Colour */
		colour_gray: '#eeeeee',
		/* Page Background Colour */
		page_background: '#fff',
		/* Page Text Colour */
		page_text_colour: '#222',
		/* Link Colour */
		link_colour: '#003466',
		/* Round Edges */
		border_radius: 'true',
		/* Section Padding */
		section_padding: '3rem',
		/* Headline Font */
		font_headline: 'Asap',
		/* Normal text Font */
		font_text: 'Asap',
		/* Font Size */
		font_size: '2rem',
		/* Current year */
		year: '2020',
		/* SEO description */
		seo_description: 'Site SEO description',

		/* -------- GENERAL CONTENT -------- 
		   ---------- Client Info ---------- 
		Die folgenden Daten werden zur 
		Anzeige des Kontakt, Berechnung 
		der Map Geodaten und Generierung
		des Impressum und Datenschutz
		verwendet. */
		/* Client Info */
		/* Client: Name */
		client_name: 'LDF GmbH',
		/* Client: Street */
		client_street: 'Burgmauer 68',
		/* Client: Zip and City */
		client_city: '50667 Köln',
		/* Client: Telephone */
		client_tel: '+49 (0)221/240 93 42',
		/* Client: Fax */
		client_fax: '+49 (0)221/240 86 70',
		/* Client Lead */
		client_represent: 'Christoph Hofmann',
		/* Client Email */
		client_email: 'Hofmann@infotage-dental.de',
		/* Client Logo */
		logo: 'assets/logo.gif',
		/* Header Image */
		header_image: 'assets/header.jpg',
		/* Welcome Message Headline */
		welcome_headline: 'id infotagen dental 2020',
		/* Welcome Message / Text */
		welcome_msg: 'Auch in diesem Jahr finden die regionalen Dentalfachmessen wieder an folgenden Standorten statt:',
		/* Welcome image */
		welcome_image: 'assets/welcome.jpg',

		/* ------------- TEASERS ------------- */
		/* Hier können Hintergrund Farbe der
		Teaser Section, Tile Hintergründe,
		Text-Farbe, Section Headline und
		der Text in den jeweiligen Tiles
		bearbeitet werden */
		/* Teaser Section background */
		teaser_section_bg: '#eeeeee',
		/* Teaser Tile background */
		teaser_bg: '',
		/* Teaser Tile text colour */
		teaser_text_colour: '',
		/* Teaser Section headline */
		teaser_headline: 'Teaser headline',
		/* Teaser Content */
		teasers: [
			{
				name: 'München',
				text: '<b>11.-12. September 2020</b>' + '\n' + 'Freitag 13-18 Uhr' + '\n' + 'Samstag 10-15 Uhr'
			},
			{
				name: 'Leipzig',
				text: '<b>25.-26. September 2020</b>' + '\n' + 'Freitag 13-18 Uhr' + '\n' + 'Samstag 9-14 Uhr'
			},
			{
				name: 'Stuttgart',
				text: '<b>16.-17. Oktober 2020</b>' + '\n' + 'Freitag 11-18 Uhr' + '\n' + 'Samstag 9-16 Uhr'
			},
			{
				name: 'Frankfurt/M.',
				text: '<b>13.-14. November 2020</b>' + '\n' + 'Freitag 11-18 Uhr' + '\n' + 'Samstag 9-17 Uhr'
			},
		],

		/* ---------- NEWSLETTER ---------- */
		/* Show Newsletter? */
		show_newsletter: 'true',
		/* Newsletter headline */
		newsletter_headline: 'Informiert bleiben',
		/* Newsletter text */
		newsletter_text: 'Wir werden Sie hier weiter aktuell informieren. Gerne können Sie sich auch hier für unseren Newsletter anmelden.',

		/* ------------- MAP ------------- */
		/* Hier kann die Hintergrundfarbe
		der Map Section und der Text links
		von der Map geändert werden.
		Die Geodaten generieren sich auto-
		matisch aus den oben eingetragenen
		Client Infos */
		show_map: 'false',
		map_headline: 'Finden Sie uns',
		map_text: 'Lorem Ipsum dolor sit amet',
		map_bg: '#eeeeee',

		/* ----------- FOOTER ------------ */
		/* Hier verwendete bilder müssen 
		im Ordner /assets abgelegt werden 
		Der letzte Block "Veranstalter" wird
		automatisch aus den Kundendaten generiert */
		footer: [
			{
				headline: 'Für Aussteller',
				image: '',
				text: 'Hier finden Sie eine Informationsbroschüre sowie die Anmeldeunterlagen.'
			},
			{
				headline: 'Kontakt',
				image: 'assets/hofmann.jpg',
				text: 'Christoph Hofmann' + '\n' +
				'Projektmanager' + '\n' +
				'Tel: +49 221 2408671' + '\n' +
				'E-mail: <a href=\'mailto:hofmann@infotage-dental.de\'>hofmann@infotage-dental.de</a>'
			}
		]
    }
}
