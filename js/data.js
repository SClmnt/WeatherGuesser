const capitals = [
  { name: 'KABUL', country: 'AF' },
  { name: 'TIRANA', country: 'AL' },
  { name: 'ALGIERS', country: 'DZ' },
  { name: 'ANDORRA LA VELLA', country: 'AD' },
  { name: 'LUANDA', country: 'AO' },
  { name: "SAINT JOHN'S", country: 'AG' },
  { name: 'BUENOS AIRES', country: 'AR' },
  { name: 'YEREVAN', country: 'AM' },
  { name: 'CANBERRA', country: 'AU' },
  { name: 'VIENNA', country: 'AT' },
  { name: 'BAKU', country: 'AZ' },
  { name: 'NASSAU', country: 'BS' },
  { name: 'MANAMA', country: 'BH' },
  { name: 'DHAKA', country: 'BD' },
  { name: 'BRIDGETOWN', country: 'BB' },
  { name: 'MINSK', country: 'BY' },
  { name: 'BRUSSELS', country: 'BE' },
  { name: 'BELMOPAN', country: 'BZ' },
  { name: 'PORTO-NOVO', country: 'BJ' },
  { name: 'THIMPHU', country: 'BT' },
  { name: 'LA PAZ', country: 'BO' },
  { name: 'SARAJEVO', country: 'BA' },
  { name: 'GABORONE', country: 'BW' },
  { name: 'BRASILIA', country: 'BR' },
  { name: 'SOFIA', country: 'BG' },
  { name: 'OUAGADOUGOU', country: 'BF' },
  { name: 'BUJUMBURA', country: 'BI' },
  { name: 'PHNOM PENH', country: 'KH' },
  { name: 'YAOUNDE', country: 'CM' },
  { name: 'OTTAWA', country: 'CA' },
  { name: 'BANGUI', country: 'CF' },
  { name: 'NDJAMENA', country: 'TD' },
  { name: 'SANTIAGO', country: 'CL' },
  { name: 'BEIJING', country: 'CN' },
  { name: 'BOGOTÁ', country: 'CO' },
  { name: 'MORONI', country: 'KM' },
  { name: 'BRAZZAVILLE', country: 'CG' },
  { name: 'KINSHASA', country: 'CD' },
  { name: 'SAN JOSE', country: 'CR' },
  { name: 'YAMOUSSOUKRO', country: 'CI' },
  { name: 'ZAGREB', country: 'HR' },
  { name: 'HAVANA', country: 'CU' },
  { name: 'NICOSIA', country: 'CY' },
  { name: 'PRAGUE', country: 'CZ' },
  { name: 'COPENHAGEN', country: 'DK' },
  { name: 'DJIBOUTI', country: 'DJ' },
  { name: 'ROSEAU', country: 'DM' },
  { name: 'SANTO DOMINGO', country: 'DO' },
  { name: 'QUITO', country: 'EC' },
  { name: 'CAIRO', country: 'EG' },
  { name: 'SAN SALVADOR', country: 'SV' },
  { name: 'MALABO', country: 'GQ' },
  { name: 'ASMARA', country: 'ER' },
  { name: 'TALLINN', country: 'EE' },
  { name: 'MBABANE', country: 'SZ' },
  { name: 'ADDIS ABABA', country: 'ET' },
  { name: 'SUVA', country: 'FJ' },
  { name: 'HELSINKI', country: 'FI' },
  { name: 'PARIS', country: 'FR' },
  { name: 'LIBREVILLE', country: 'GA' },
  { name: 'BANJUL', country: 'GM' },
  { name: 'TBILISI', country: 'GE' },
  { name: 'BERLIN', country: 'DE' },
  { name: 'ACCRA', country: 'GH' },
  { name: 'ATHENS', country: 'GR' },
  { name: 'SAINT GEORGE', country: 'GD' },
  { name: 'GUATEMALA CITY', country: 'GT' },
  { name: 'CONAKRY', country: 'GN' },
  { name: 'BISSAU', country: 'GW' },
  { name: 'GEORGETOWN', country: 'GY' },
  { name: 'PORT-AU-PRINCE', country: 'HT' },
  { name: 'TEGUCIGALPA', country: 'HN' },
  { name: 'BUDAPEST', country: 'HU' },
  { name: 'REYKJAVIK', country: 'IS' },
  { name: 'NEW DELHI', country: 'IN' },
  { name: 'JAKARTA', country: 'ID' },
  { name: 'TEHRAN', country: 'IR' },
  { name: 'BAGHDAD', country: 'IQ' },
  { name: 'DUBLIN', country: 'IE' },
  { name: 'JERUSALEM', country: 'IL' },
  { name: 'ROME', country: 'IT' },
  { name: 'KINGSTON', country: 'JM' },
  { name: 'TOKYO', country: 'JP' },
  { name: 'AMMAN', country: 'JO' },
  { name: 'ASTANA', country: 'KZ' },
  { name: 'NAIROBI', country: 'KE' },
  { name: 'SOUTH TARAWA', country: 'KI' },
  { name: 'PRISTINA', country: 'XK' },
  { name: 'KUWAIT CITY', country: 'KW' },
  { name: 'BISHKEK', country: 'KG' },
  { name: 'VIENTIANE', country: 'LA' },
  { name: 'RIGA', country: 'LV' },
  { name: 'BEIRUT', country: 'LB' },
  { name: 'MASERU', country: 'LS' },
  { name: 'MONROVIA', country: 'LR' },
  { name: 'TRIPOLI', country: 'LY' },
  { name: 'VADUZ', country: 'LI' },
  { name: 'VILNIUS', country: 'LT' },
  { name: 'LUXEMBOURG', country: 'LU' },
  { name: 'SKOPJE', country: 'MK' },
  { name: 'ANTANANARIVO', country: 'MG' },
  { name: 'LILONGWE', country: 'MW' },
  { name: 'KUALA LUMPUR', country: 'MY' },
  { name: 'MALE', country: 'MV' },
  { name: 'BAMAKO', country: 'ML' },
  { name: 'VALLETTA', country: 'MT' },
  { name: 'MAJURO', country: 'MH' },
  { name: 'NOUAKCHOTT', country: 'MR' },
  { name: 'PORT LOUIS', country: 'MU' },
  { name: 'MEXICO CITY', country: 'MX' },
  { name: 'CHISINAU', country: 'MD' },
  { name: 'MONACO', country: 'MC' },
  { name: 'ULAANBAATAR', country: 'MN' },
  { name: 'PODGORICA', country: 'ME' },
  { name: 'RABAT', country: 'MA' },
  { name: 'MAPUTO', country: 'MZ' },
  { name: 'NAYPYIDAW', country: 'MM' },
  { name: 'WINDHOEK', country: 'NA' },
  { name: 'YAREN', country: 'NR' },
  { name: 'KATHMANDU', country: 'NP' },
  { name: 'AMSTERDAM', country: 'NL' },
  { name: 'WELLINGTON', country: 'NZ' },
  { name: 'MANAGUA', country: 'NI' },
  { name: 'NIAMEY', country: 'NE' },
  { name: 'ABUJA', country: 'NG' },
  { name: 'OSLO', country: 'NO' },
  { name: 'MUSCAT', country: 'OM' },
  { name: 'ISLAMABAD', country: 'PK' },
  { name: 'MELEKEOK', country: 'PW' },
  { name: 'PANAMA CITY', country: 'PA' },
  { name: 'PORT MORESBY', country: 'PG' },
  { name: 'ASUNCION', country: 'PY' },
  { name: 'LIMA', country: 'PE' },
  { name: 'MANILA', country: 'PH' },
  { name: 'WARSAW', country: 'PL' },
  { name: 'LISBON', country: 'PT' },
  { name: 'DOHA', country: 'QA' },
  { name: 'BUCHAREST', country: 'RO' },
  { name: 'MOSCOW', country: 'RU' },
  { name: 'KIGALI', country: 'RW' },
  { name: 'BASSETERRE', country: 'KN' },
  { name: 'CASTRIES', country: 'LC' },
  { name: 'KINGSTOWN', country: 'VC' },
  { name: 'APIA', country: 'WS' },
  { name: 'SAN MARINO', country: 'SM' },
  { name: 'SAO TOME', country: 'ST' },
  { name: 'RIYADH', country: 'SA' },
  { name: 'DAKAR', country: 'SN' },
  { name: 'BELGRADE', country: 'RS' },
  { name: 'VICTORIA', country: 'SC' },
  { name: 'FREETOWN', country: 'SL' },
  { name: 'SINGAPORE', country: 'SG' },
  { name: 'BRATISLAVA', country: 'SK' },
  { name: 'LJUBLJANA', country: 'SI' },
  { name: 'HONIARA', country: 'SB' },
  { name: 'MOGADISHU', country: 'SO' },
  { name: 'BLOEMFONTEIN', country: 'ZA' },
  { name: 'PRETORIA', country: 'ZA' },
  { name: 'CAPE TOWN', country: 'ZA' },
  { name: 'SEOUL', country: 'KR' },
  { name: 'JUBA', country: 'SS' },
  { name: 'MADRID', country: 'ES' },
  { name: 'COLOMBO', country: 'LK' },
  { name: 'KHARTOUM', country: 'SD' },
  { name: 'SURINAME', country: 'SR' },
  { name: 'STOCKHOLM', country: 'SE' },
  { name: 'BERN', country: 'CH' },
  { name: 'DAMASCUS', country: 'SY' },
  { name: 'DUSHANBE', country: 'TJ' },
  { name: 'DODOMA', country: 'TZ' },
  { name: 'BANGKOK', country: 'TH' },
  { name: 'DILI', country: 'TL' },
  { name: 'LOME', country: 'TG' },
  { name: "NUKU'ALOFA", country: 'TO' },
  { name: 'TUNIS', country: 'TN' },
  { name: 'ANKARA', country: 'TR' },
  { name: 'ASHGABAT', country: 'TM' },
  { name: 'FUNAFUTI', country: 'TV' },
  { name: 'KAMPALA', country: 'UG' },
  { name: 'KIEV', country: 'UA' },
  { name: 'ABU DHABI', country: 'AE' },
  { name: 'LONDON', country: 'GB' },
  { name: 'WASHINGTON D.C.', country: 'US' },
  { name: 'MONTEVIDEO', country: 'UY' },
  { name: 'TASHKENT', country: 'UZ' },
  { name: 'PORT VILA', country: 'VU' },
  { name: 'VATICAN CITY', country: 'VA' },
  { name: 'CARACAS', country: 'VE' },
  { name: 'HANOI', country: 'VN' },
  { name: "SANA'A", country: 'YE' },
  { name: 'LUSAKA', country: 'ZM' },
  { name: 'HARARE', country: 'ZW' },
];

window.capitals = capitals;