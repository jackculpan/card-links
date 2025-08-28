import { Hono } from 'hono'

const app = new Hono()

app.get('/', async (c) => {
	const endpoints = [
		"/chase",
		"/capital-on-tap",
		"/uk/amex",
		"/uk/amex-ba",
		"/uk/amex-marriott",
		"/uk/amex-business",
		"/amex",
		"/amex-business",
		"/bilt",
		"/capital-one",
		"/ramp",
		"/rakuten",
		"/curve"
	];

	return c.json({ endpoints });
});

app.get('/chase', async (c) => {
	return c.redirect('https://www.referyourchasecard.com/19s/Q74HGXH21L', 302);
});

app.get('/capital-on-tap', async (c) => {
	return c.redirect('https://cashback.capitalontap.com/referral/?promo=2REFM436R37&referrer=Merchant%20Software', 302);
});

app.get('/uk/amex', async (c) => {
	const urls = [
		"https://www.americanexpress.com/en-gb/credit-cards/referral/prospect/cards/intl/sUsANCYboB?CORID=s~U~s~A~N~C~Y~b~o~B-1748336010084-517844&CPID=100357020&GENCODE=349993074902657&XL=MIANS&ref=sUsANCYboB&v=2", // Susan BA Amex
		// "https://www.americanexpress.com/en-gb/credit-cards/referral/prospect/cards/intl/jACKCkURb?CORID=j~A~C~K~C~k~U~R~b-1748435550183-573043&CPID=100357020&GENCODE=349992852384948&XL=MIANS&ref=jACKCkURb&v=2",
		// "https://www.americanexpress.com/en-gb/credit-cards/referral/prospect/cards/intl/jACKCYDJO?CORID=j~A~C~K~C~Y~D~J~O-1748435870520-570983&CPID=100356998&GENCODE=349993300291503&XL=MIMNS&ref=jACKCYDJO&v=2",
		"https://www.americanexpress.com/en-gb/credit-cards/referral/prospect/cards/intl/jACKCLuTc?CORID=j~A~C~K~C~L~u~T~c-1750738754838-451858&CPID=100356998&GENCODE=349993386925875&XL=MIMNS&ref=jACKCLuTc&v=2", // Jack BA Amex
		// "https://americanexpress.com/en-gb/referral/platinum-credit?ref=jACKCBhAd&XL=MIANS",
		"https://www.americanexpress.com/en-gb/credit-cards/referral/prospect/cards/intl/aLICEOhKQR?CORID=a~L~I~C~E~O~h~K~Q~R-1756384941773-300951&CPID=100357020&GENCODE=349993147631143&XL=MIANS&ref=aLICEOhKQR&v=2", // Alice
	];
	
	const randomUrl = urls[Math.floor(Math.random() * urls.length)];
	return c.redirect(randomUrl, 302);
});

app.get("/uk/amex-ba", async (c) => {
	const urls = [
		"https://americanexpress.com/en-gb/referral/ba-premium-plus-credit?ref=jACKCLuTc&XL=MIMNS",
		"https://www.americanexpress.com/en-gb/credit-cards/referral/prospect/intl/733512729F2C8B01D19FDDC8EA43F924730E87FD8D635F513AD8900CBF5BDBCD42F5FB1476008E140078C165B27B79E8F74818F4508E8A15BF6418587E0B082100B090AA7381920CE7A18858CDCA4FC788C606C1976BFAF536E7877306BFA83802CD881340912CAB05FF8386D05614A7DEA844BB215E2B8EA37AD7990A8A803DD851F39F0FE4D36539ECD778D88D56457238C332CBB29788DFAB6546383DD9985A1E71A466D2951F97FCE4E757DD66294233F60E8D06D7DC0E72018EBDEE64950775E750F3E2325B70E25589BD61E874F7E83A415BEDBBF0C62D720D800A7F04?CORID=j~A~C~K~C~Y~D~J~O-1750395824487-311563&CPID=100356998&GENCODE=349993300291503&XL=MIMNS&ref=jACKCYDJO&v=2",
		"https://www.americanexpress.com/en-gb/credit-cards/referral/prospect/intl/733512729F2C8B0108216F58D7ECDC697BE9DCE7F7C82ED83AD8900CBF5BDBCD42F5FB1476008E140078C165B27B79E8F74818F4508E8A15BF6418587E0B082100B090AA7381920CE7A18858CDCA4FC788C606C1976BFAF536E7877306BFA83802CD881340912CAB05FF8386D05614A7DEA844BB215E2B8EA37AD7990A8A803DD851F39F0FE4D3657430E7BBA0DF78B26411246363B7C14BDFAB6546383DD9985A1E71A466D2951F97FCE4E757DD66294233F60E8D06D7DC0E72018EBDEE64950775E750F3E2325B70E25589BD61E874F7E83A415BEDBBF03551BB8CAA222A62?CORID=j~A~C~K~C~k~U~R~b-1750395823041-311595&CPID=100357020&GENCODE=349992852384948&XL=MIANS&ref=jACKCkURb&v=2",
		"https://www.americanexpress.com/en-gb/credit-cards/referral/prospect/intl/C58CCB67B724461FD5F54F39835619B1287CDB6AFD0A13662B8CE5C04CB3167AF500F554ADB5F49070CEBF9FB64989A65CA4D8A1D49B37316B01486BAF6B111C795894CC6504BFA096AA2D694396DD89EA5E2A9A3F2B270482F7AEF8590C436D973E5A42CF9BC412A9463EB7EC19C1119374624B5D3C86A8529A712B584D228EE7399152BBA558F08399E3BCD8DA2DE342BFF3FA7D9AF03644F63042D0193CC0DA2F35BCBFC500517341940BF8727D7AF5BE93D944527FD0A871A0088C6E053D3CD17A1FE7A6BE7D586247EC4738D4938FFAC7BC27D02A523A5B092CA39E0DE58445CC3571D5D242?CORID=s~U~s~A~N~C~Y~b~o~B-1750395821867-312308&CPID=100357020&GENCODE=349993074902657&XL=MIANS&ref=sUsANCYboB&v=2",
	];

	const randomUrl = urls[Math.floor(Math.random() * urls.length)];
	return c.redirect(randomUrl, 302);
});

app.get("/uk/amex-marriott", async (c) => {
	const urls = [
		"https://www.americanexpress.com/en-gb/credit-cards/referral/prospect/intl/AA8A8DA42DC67422D5F54F39835619B1287CDB6AFD0A13662B8CE5C04CB3167AF500F554ADB5F490D68914215BBD29905CA4D8A1D49B37316B01486BAF6B111C0C7049F20CBA9E8B96AA2D694396DD89EA5E2A9A3F2B270482F7AEF8590C436D973E5A42CF9BC412A9463EB7EC19C111B7B30430CED8BC07529A712B584D228EE7399152BBA558F0CDED10A66DB327DEB3A1F080FE7CF6FA44F63042D0193CC0DA2F35BCBFC500517341940BF8727D7ACC6F5B622FEE70EBA0BE80A6BD3C22A22673087AFF5CE882FE1322BF865AEA3B1E42F7189D5E90090F77FA3B87C474BC?CORID=s~U~s~A~N~C~Y~b~o~B-1750397027544-312822&CPID=100357020&GENCODE=349993074902657&XL=MIANS&ref=sUsANCYboB&v=2",
		"https://www.americanexpress.com/en-gb/credit-cards/referral/prospect/intl/A1A47C9FC12CE02108216F58D7ECDC697BE9DCE7F7C82ED83AD8900CBF5BDBCD42F5FB1476008E14CF0FC60707717309F74818F4508E8A15BF6418587E0B08213A26F60F44E94AB4E7A18858CDCA4FC788C606C1976BFAF536E7877306BFA83802CD881340912CABE8EB12B048D1B561DEA844BB215E2B8EA37AD7990A8A803DD851F39F0FE4D3653EFDA389236AC95B4CB9C3117007EFDDDFAB6546383DD9985A1E71A466D2951F97FCE4E757DD66298B3A1B3C5D6D223CD3142202A0F3E71AE5A9AAF8423BEB2E4A44459B494BD8647103D19CAC18246E3D4EC21323E655D4?CORID=j~A~C~K~C~k~U~R~b-1750397027844-312251&CPID=100357020&GENCODE=349992852384948&XL=MIANS&ref=jACKCkURb&v=2",
		"https://www.americanexpress.com/en-gb/credit-cards/referral/prospect/intl/A1A47C9FC12CE021D19FDDC8EA43F924730E87FD8D635F513AD8900CBF5BDBCD42F5FB1476008E14CF0FC60707717309F74818F4508E8A15BF6418587E0B08213A26F60F44E94AB4E7A18858CDCA4FC788C606C1976BFAF536E7877306BFA83802CD881340912CABE8EB12B048D1B561DEA844BB215E2B8EA37AD7990A8A803DD851F39F0FE4D3650C3262257A334C366411246363B7C14BDFAB6546383DD9985A1E71A466D2951F97FCE4E757DD66298B3A1B3C5D6D223CD3142202A0F3E71AE5A9AAF8423BEB2E4A44459B494BD8647103D19CAC18246E469C520EAD4AA274?CORID=j~A~C~K~C~Y~D~J~O-1750397030164-312215&CPID=100356998&GENCODE=349993300291503&XL=MIMNS&ref=jACKCYDJO&v=2"
	]

	const randomUrl = urls[Math.floor(Math.random() * urls.length)];
	return c.redirect(randomUrl, 302);
});

app.get('/uk/amex-business', async (c) => {
	const urls = [
		"https://www.americanexpress.com/en-gb/credit-cards/referral/prospect/cards/intl/jACKCkURb?CORID=j~A~C~K~C~k~U~R~b-1748435550183-573043&CPID=100357020&GENCODE=349992852384948&XL=MIANS&ref=jACKCkURb&v=2",
		"https://www.americanexpress.com/en-gb/credit-cards/referral/prospect/cards/intl/jACKCYDJO?CORID=j~A~C~K~C~Y~D~J~O-1748435870520-570983&CPID=100356998&GENCODE=349993300291503&XL=MIMNS&ref=jACKCYDJO&v=2",
	]

	const randomUrl = urls[Math.floor(Math.random() * urls.length)];
	return c.redirect(randomUrl, 302);
});

app.get('/amex-business', async (c) => {
	const urls = [
		"https://www.americanexpress.com/en-us/referral/businessgold-card?ref=JACKCqt2u&XL=MIMNS",
		"https://www.americanexpress.com/en-us/referral/businessgold-card?ref=JACKC5D6O&XL=MIMNS",
		"https://www.americanexpress.com/en-us/credit-cards/referral/prospect/cards/business/JACKC5D6O?CORID=J~A~C~K~C~5~D~6~O-1750076216074-176836&GENCODE=349993091774168&XL=MIMNS&extlink=US-MGM-MOBI_MEMBERSHIP-native-1157-205937-K84O%3A9976&ref=JACKC5D6O&v=2",
	];

	const randomUrl = urls[Math.floor(Math.random() * urls.length)];
	return c.redirect(randomUrl, 302);
});

app.get('/amex', async (c) => {
	const urls = [
		"https://www.americanexpress.com/en-us/credit-cards/referral/prospect/cards/personal/JACKC5D6O?CORID=J~A~C~K~C~5~D~6~O-1750076216074-176836&GENCODE=349993091774168&XL=MIMNS&extlink=US-MGM-MOBI_MEMBERSHIP-native-1157-205937-K84O%3A9976&ref=JACKC5D6O&v=2",
		"https://www.americanexpress.com/en-us/credit-cards/referral/prospect/hilton-honors?ref=JACKCzisz&XL=MIMNS",
	];

	const randomUrl = urls[Math.floor(Math.random() * urls.length)];
	return c.redirect(randomUrl, 302);
});

app.get('/bilt', async (c) => {
	return c.redirect('https://bilt.page/r/V4G4-8E67', 302);
});

app.get('/capital-one', async (c) => {
	return c.redirect('https://i.capitalone.com/JxrZAx2AG', 302);
});

app.get('/ramp', async (c) => {
	return c.redirect('https://ramp.com/?rc=XJ63WP&referral_location=referral_page', 302);
});

app.get('/rakuten', async (c) => {
	return c.redirect('https://www.rakuten.com/r/JACKCU106?eeid=28187', 302);
});

app.get('/curve', async (c) => {
	return c.redirect("https://curvecard.sjv.io/c/4799670/2165182/12851", 302);
});

export default app
