/*
	Config:
  Alle Inhalt und Einstellungsänderungen sollten hier gemacht werden.
  General Settings und Content wird in components wiederverwendet.
	Jede Section ist in Settings and Content variables unterteilt;
*/

module.exports = () => {
    return {
		/* Primary Colour */
		colour_primary: '#993300',
		/* Secondary Colour */
		colour_secondary: '#C3E1EE',
		/* Gray Colour */
		colour_gray: '#eeeeee',
		/* Page Background Colour */
		page_background: '#FBFAE0',
		/* Page Text Colour */
		page_text_colour: '#222',
		/* Link Colour */
		link_colour: '#993300',
		/* Round Edges */
		border_radius: 'false',
		/* Section Padding */
		section_padding: '3rem',
		/* user Google Fonts? */
		use_google_fonts: 'true',
		/* Headline Font */
		font_headline: 'Open Sans',
		/* Normal text Font */
		font_text: 'Open Sans',
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
		client_name: 'Gartenmanufaktur Schmidt',
		/* Client: Street */
		client_street: 'Richard-Byrd-Straße 43a',
		/* Client: Zip and City */
		client_city: '50829 Köln',
		/* Client: Telephone */
		client_tel: '0221.168 528 44',
		/* Client: Fax */
		client_fax: '0221.168 528 45',
		/* Client Lead */
		client_represent: 'Dipl.-Ing. Stefan Schmidt',
		/* Client Email */
		client_email: 'info@gartenmanufaktur-schmidt.de',
		/* Client Logo */
		logo: 'assets/gms_logo.png',
		/* Header Image */
		header_image: 'assets/header.jpg',
		/* Welcome Message Headline */
		welcome_headline: 'Wir machen Ihren Gartentraum wahr.',
		/* Welcome Message / Text */
		welcome_msg: 'In der ganzheitlichen Perspektive liegt die Stärke unserer Gestaltung. Denn das Wesen eines Gartens kann nur verstehen, wer ihn als Ganzes sieht. Wir schaffen auf einfühlsame Weise die Balance zwischen den örtlichen Gegebenheiten und Ihren Wünschen und verbinden ein harmonisches Gesamtbild mit besonderen Materialien und Akzenten.',
		/* Welcome image */
		welcome_image: 'assets/welcome.jpg',

		/* ------------- TEASERS ------------- */
		/* Hier können Hintergrund Farbe der
		Teaser Section, Tile Hintergründe,
		Text-Farbe, Section Headline und
		der Text in den jeweiligen Tiles
		bearbeitet werden */
		/* Teaser Section background */
		teaser_section_bg: '#C3E1EE',
		/* Teaser Tile background */
		teaser_bg: '',
		/* Teaser Tile text colour */
		teaser_text_colour: '',
		/* Teaser Section headline */
		teaser_headline: 'Besonderen Stärken',
		/* Teaser Content */
		teasers: [
			{
				name: 'Neu- oder Umgestaltungen',
				text: 'Ich berate Sie gerne, bringe überraschende Vorschläge ein, entwerfe mit vielen Ideen sowie meinem Gestaltungs- und Fachwissen und gemeinsam mit Ihnen und Ihren Vorstellungen den Garten.'
			},
			{
				name: 'Mit Licht im Garten gestalten',
				text: 'Stimmungsvolle Beleuchtung ihres Gartens mit ausgewählten und besonderen Lampen, wäre das nicht ein schönes Geschenk, mit dem Sie sich selbst beschenken?'
			},
			{
				name: 'Materialien und Akzente',
				text: 'Wir beraten Sie, welche Hölzer, Natursteine und Bodenbeläge am Besten in Ihre Gartengestaltung passen und mit welchen Ausstattungselementen und Accessoires sie sich harmonisch ergänzen lassen.'
			},
		],

		/* ---------- NEWSLETTER ---------- */
		/* Show Newsletter? */
		show_newsletter: 'false',
		/* Newsletter headline */
		newletter_headline: 'Informiert bleiben',
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
				headline: 'Unser Angebot',
				image: '',
				text: 'Ich berate Sie gerne, bringe überraschende Vorschläge ein, entwerfe mit vielen Ideen sowie meinem Gestaltungs- und Fachwissen und gemeinsam mit Ihnen und Ihren Vorstellungen den Garten, in dem Sie und Ihre Familie zu Hause sind und sich rundum wohl fühlen, eben ein \„Garten mit Seele\“.'
			},
			{
				headline: 'Ihr Ansprechpartner',
				image: 'assets/contact.jpg',
				text: 'Stefan Schmidt' + '\n' +
				'Tel: 0221.168 528 44' + '\n' +
				'<a href=\'mailto:info@gartenmanufaktur-schmidt.de\'>info@gartenmanufaktur-schmidt.de</a>'
			}
		]
    }
}
