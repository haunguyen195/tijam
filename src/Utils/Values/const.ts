import { COLOR_TYPE, ICON_TYPE, TYPE } from "./enum";
import { DARK, LIGHT } from "../Themes";
import { EN, VI } from "../Languages";

export const STRING={
  EMAIL:'Tranbaphuc1999@gmail.com',
  MAIL_TO:"mailto:tranbaphuc1999@gmail.com",
  NAME:"ZipEnter",
  GITHUB_LINK:"https://github.com/phuctranba/naoX-mobile-app"
}

export const IMAGE={
  LOGO:require("../../Assets/Images/tijam-logo.png"),
  US_FLAG:require("../../Assets/Images/united-states-flag.png"),
  VI_FLAG:require("../../Assets/Images/vietnam-flag.png"),
  EMPTY_AVATAR:require("../../Assets/Images/avatar-register.png"),
  PLACEHOLDER:require("../../Assets/Images/image-placeholder.png"),
  WORLD_MAP:require("../../Assets/Images/world-map.png")
}

export const LOTTIE={
  INTRO_1:require("../../Assets/Loties/intro-1.json"),
  INTRO_2:require("../../Assets/Loties/intro-2.json"),
  INTRO_3:require("../../Assets/Loties/intro-3.json"),
  LOADING:require("../../Assets/Loties/loading.json"),
  LOADING_2:require("../../Assets/Loties/loading2.json"),
  STAR:require("../../Assets/Loties/star.json"),
  CREATE_POST:require("../../Assets/Loties/create-post.json")
}

export const SETTING_OPTIONS = {
  color: {
    LIGHT: LIGHT,
    DARK: DARK
  },
  language: {
    vi: VI,
    en: EN
  }
};

export const SETTING_DEFAULT = [
  {
    key: "color",
    value: "LIGHT"
  }
];

export const DATA_TYPE_POST = [
  {
    icon: ICON_TYPE.I_NEED,
    color: COLOR_TYPE.I_NEED,
    type: TYPE.I_NEED
  },
  {
    icon: ICON_TYPE.CONFIDING,
    color: COLOR_TYPE.CONFIDING,
    type: TYPE.CONFIDING
  },
  {
    icon: ICON_TYPE.NEWS,
    color: COLOR_TYPE.NEWS,
    type: TYPE.NEWS
  },
  {
    icon: ICON_TYPE.GOSSIP,
    color: COLOR_TYPE.GOSSIP,
    type: TYPE.GOSSIP
  },
  {
    icon: ICON_TYPE.NOW,
    color: COLOR_TYPE.NOW,
    type: TYPE.NOW
  },
  {
    icon: ICON_TYPE.ALERT,
    color: COLOR_TYPE.ALERT,
    type: TYPE.ALERT
  },
  {
    icon: ICON_TYPE.SHARE,
    color: COLOR_TYPE.SHARE,
    type: TYPE.SHARE
  },
  {
    icon: ICON_TYPE.OTHER,
    color: COLOR_TYPE.OTHER,
    type: TYPE.OTHER
  }
];

export const SLIDE_INTRO = [
  {
    image: LOTTIE.INTRO_1,
    key:"SLIDE_1",
    step: 1
  },
  {
    image: LOTTIE.INTRO_2,
    key:"SLIDE_2",
    step: 2
  },
  {
    image: LOTTIE.INTRO_3,
    key:"SLIDE_3",
    step: 3
  }
];

export const MENU = [
  {
    icon_type: "FontAwesome5",
    icon: "map-marked-alt",
    icon_size: 24,
    name: "Home",
  },
  {
    icon_type: "MaterialCommunityIcons",
    icon: "card-account-details",
    icon_size: 23,
    name: "Profile",
  },
  {
    icon_type: "MaterialIcons",
    icon: "feedback",
    icon_size: 26,
    name: "Feedback",
  },
  {
    icon_type: "MaterialIcons",
    icon: "analytics",
    icon_size: 26,
    name: "Statistics",
  },
  {
    icon_type: "Entypo",
    icon: "info-with-circle",
    icon_size: 26,
    name: "About",
  }
];

export const COUNTRY_CODE = [
  {
    name: "Afghanistan",
    label: "Afghanistan (+93)",
    value: "+93",
    value_number: 93,
    code: "AF"
  },
  {
    name: "Aland Islands",
    label: "Aland Islands (+358)",
    value: "+358",
    value_number: 358,
    code: "AX"
  },
  {
    name: "Albania",
    label: "Albania (+355)",
    value: "+355",
    value_number: 355,
    code: "AL"
  },
  {
    name: "Algeria",
    label: "Algeria (+213)",
    value: "+213",
    value_number: 213,
    code: "DZ"
  },
  {
    name: "AmericanSamoa",
    label: "AmericanSamoa (+1684)",
    value: "+1684",
    value_number: 1684,
    code: "AS"
  },
  {
    name: "Andorra",
    label: "Andorra (+376)",
    value: "+376",
    value_number: 376,
    code: "AD"
  },
  {
    name: "Angola",
    label: "Angola (+244)",
    value: "+244",
    value_number: 244,
    code: "AO"
  },
  {
    name: "Anguilla",
    label: "Anguilla (+1264)",
    value: "+1264",
    value_number: 1264,
    code: "AI"
  },
  {
    name: "Antarctica",
    label: "Antarctica (+672)",
    value: "+672",
    value_number: 672,
    code: "AQ"
  },
  {
    name: "Antigua and Barbuda",
    label: "Antigua and Barbuda (+1268)",
    value: "+1268",
    value_number: 1268,
    code: "AG"
  },
  {
    name: "Argentina",
    label: "Argentina (+54)",
    value: "+54",
    value_number: 54,
    code: "AR"
  },
  {
    name: "Armenia",
    label: "Armenia (+374)",
    value: "+374",
    value_number: 374,
    code: "AM"
  },
  {
    name: "Aruba",
    label: "Aruba (+297)",
    value: "+297",
    value_number: 297,
    code: "AW"
  },
  {
    name: "Australia",
    label: "Australia (+61)",
    value: "+61",
    value_number: 61,
    code: "AU"
  },
  {
    name: "Austria",
    label: "Austria (+43)",
    value: "+43",
    value_number: 43,
    code: "AT"
  },
  {
    name: "Azerbaijan",
    label: "Azerbaijan (+994)",
    value: "+994",
    value_number: 994,
    code: "AZ"
  },
  {
    name: "Bahamas",
    label: "Bahamas (+1242)",
    value: "+1242",
    value_number: 1242,
    code: "BS"
  },
  {
    name: "Bahrain",
    label: "Bahrain (+973)",
    value: "+973",
    value_number: 973,
    code: "BH"
  },
  {
    name: "Bangladesh",
    label: "Bangladesh (+880)",
    value: "+880",
    value_number: 880,
    code: "BD"
  },
  {
    name: "Barbados",
    label: "Barbados (+1246)",
    value: "+1246",
    value_number: 1246,
    code: "BB"
  },
  {
    name: "Belarus",
    label: "Belarus (+375)",
    value: "+375",
    value_number: 375,
    code: "BY"
  },
  {
    name: "Belgium",
    label: "Belgium (+32)",
    value: "+32",
    value_number: 32,
    code: "BE"
  },
  {
    name: "Belize",
    label: "Belize (+501)",
    value: "+501",
    value_number: 501,
    code: "BZ"
  },
  {
    name: "Benin",
    label: "Benin (+229)",
    value: "+229",
    value_number: 229,
    code: "BJ"
  },
  {
    name: "Bermuda",
    label: "Bermuda (+1441)",
    value: "+1441",
    value_number: 1441,
    code: "BM"
  },
  {
    name: "Bhutan",
    label: "Bhutan (+975)",
    value: "+975",
    value_number: 975,
    code: "BT"
  },
  {
    name: "Bolivia, Plurinational State of",
    label: "Bolivia, Plurinational State of (+591)",
    value: "+591",
    value_number: 591,
    code: "BO"
  },
  {
    name: "Bosnia and Herzegovina",
    label: "Bosnia and Herzegovina (+387)",
    value: "+387",
    value_number: 387,
    code: "BA"
  },
  {
    name: "Botswana",
    label: "Botswana (+267)",
    value: "+267",
    value_number: 267,
    code: "BW"
  },
  {
    name: "Brazil",
    label: "Brazil (+55)",
    value: "+55",
    value_number: 55,
    code: "BR"
  },
  {
    name: "British Indian Ocean Territory",
    label: "British Indian Ocean Territory (+246)",
    value: "+246",
    value_number: 246,
    code: "IO"
  },
  {
    name: "Brunei Darussalam",
    label: "Brunei Darussalam (+673)",
    value: "+673",
    value_number: 673,
    code: "BN"
  },
  {
    name: "Bulgaria",
    label: "Bulgaria (+359)",
    value: "+359",
    value_number: 359,
    code: "BG"
  },
  {
    name: "Burkina Faso",
    label: "Burkina Faso (+226)",
    value: "+226",
    value_number: 226,
    code: "BF"
  },
  {
    name: "Burundi",
    label: "Burundi (+257)",
    value: "+257",
    value_number: 257,
    code: "BI"
  },
  {
    name: "Cambodia",
    label: "Cambodia (+855)",
    value: "+855",
    value_number: 855,
    code: "KH"
  },
  {
    name: "Cameroon",
    label: "Cameroon (+237)",
    value: "+237",
    value_number: 237,
    code: "CM"
  },
  {
    name: "Canada",
    label: "Canada (+1)",
    value: "+1",
    value_number: 1,
    code: "CA"
  },
  {
    name: "Cape Verde",
    label: "Cape Verde (+238)",
    value: "+238",
    value_number: 238,
    code: "CV"
  },
  {
    name: "Cayman Islands",
    label: "Cayman Islands (+345)",
    value: "+345",
    value_number: 345,
    code: "KY"
  },
  {
    name: "Central African Republic",
    label: "Central African Republic (+236)",
    value: "+236",
    value_number: 236,
    code: "CF"
  },
  {
    name: "Chad",
    label: "Chad (+235)",
    value: "+235",
    value_number: 235,
    code: "TD"
  },
  {
    name: "Chile",
    label: "Chile (+56)",
    value: "+56",
    value_number: 56,
    code: "CL"
  },
  {
    name: "China",
    label: "China (+86)",
    value: "+86",
    value_number: 86,
    code: "CN"
  },
  {
    name: "Christmas Island",
    label: "Christmas Island (+61)",
    value: "+61",
    value_number: 61,
    code: "CX"
  },
  {
    name: "Cocos (Keeling) Islands",
    label: "Cocos (Keeling) Islands (+61)",
    value: "+61",
    value_number: 61,
    code: "CC"
  },
  {
    name: "Colombia",
    label: "Colombia (+57)",
    value: "+57",
    value_number: 57,
    code: "CO"
  },
  {
    name: "Comoros",
    label: "Comoros (+269)",
    value: "+269",
    value_number: 269,
    code: "KM"
  },
  {
    name: "Congo",
    label: "Congo (+242)",
    value: "+242",
    value_number: 242,
    code: "CG"
  },
  {
    name: "Congo, The Democratic Republic of the Congo",
    label: "Congo, The Democratic Republic of the Congo (+243)",
    value: "+243",
    value_number: 243,
    code: "CD"
  },
  {
    name: "Cook Islands",
    label: "Cook Islands (+682)",
    value: "+682",
    value_number: 682,
    code: "CK"
  },
  {
    name: "Costa Rica",
    label: "Costa Rica (+506)",
    value: "+506",
    value_number: 506,
    code: "CR"
  },
  {
    name: "Cote d'Ivoire",
    label: "Cote d'Ivoire (+225)",
    value: "+225",
    value_number: 225,
    code: "CI"
  },
  {
    name: "Croatia",
    label: "Croatia (+385)",
    value: "+385",
    value_number: 385,
    code: "HR"
  },
  {
    name: "Cuba",
    label: "Cuba (+53)",
    value: "+53",
    value_number: 53,
    code: "CU"
  },
  {
    name: "Cyprus",
    label: "Cyprus (+357)",
    value: "+357",
    value_number: 357,
    code: "CY"
  },
  {
    name: "Czech Republic",
    label: "Czech Republic (+420)",
    value: "+420",
    value_number: 420,
    code: "CZ"
  },
  {
    name: "Denmark",
    label: "Denmark (+45)",
    value: "+45",
    value_number: 45,
    code: "DK"
  },
  {
    name: "Djibouti",
    label: "Djibouti (+253)",
    value: "+253",
    value_number: 253,
    code: "DJ"
  },
  {
    name: "Dominica",
    label: "Dominica (+1767)",
    value: "+1767",
    value_number: 1767,
    code: "DM"
  },
  {
    name: "Dominican Republic",
    label: "Dominican Republic (+1849)",
    value: "+1849",
    value_number: 1849,
    code: "DO"
  },
  {
    name: "Ecuador",
    label: "Ecuador (+593)",
    value: "+593",
    value_number: 593,
    code: "EC"
  },
  {
    name: "Egypt",
    label: "Egypt (+20)",
    value: "+20",
    value_number: 20,
    code: "EG"
  },
  {
    name: "El Salvador",
    label: "El Salvador (+503)",
    value: "+503",
    value_number: 503,
    code: "SV"
  },
  {
    name: "Equatorial Guinea",
    label: "Equatorial Guinea (+240)",
    value: "+240",
    value_number: 240,
    code: "GQ"
  },
  {
    name: "Eritrea",
    label: "Eritrea (+291)",
    value: "+291",
    value_number: 291,
    code: "ER"
  },
  {
    name: "Estonia",
    label: "Estonia (+372)",
    value: "+372",
    value_number: 372,
    code: "EE"
  },
  {
    name: "Ethiopia",
    label: "Ethiopia (+251)",
    value: "+251",
    value_number: 251,
    code: "ET"
  },
  {
    name: "Falkland Islands (Malvinas)",
    label: "Falkland Islands (Malvinas) (+500)",
    value: "+500",
    value_number: 500,
    code: "FK"
  },
  {
    name: "Faroe Islands",
    label: "Faroe Islands (+298)",
    value: "+298",
    value_number: 298,
    code: "FO"
  },
  {
    name: "Fiji",
    label: "Fiji (+679)",
    value: "+679",
    value_number: 679,
    code: "FJ"
  },
  {
    name: "Finland",
    label: "Finland (+358)",
    value: "+358",
    value_number: 358,
    code: "FI"
  },
  {
    name: "France",
    label: "France (+33)",
    value: "+33",
    value_number: 33,
    code: "FR"
  },
  {
    name: "French Guiana",
    label: "French Guiana (+594)",
    value: "+594",
    value_number: 594,
    code: "GF"
  },
  {
    name: "French Polynesia",
    label: "French Polynesia (+689)",
    value: "+689",
    value_number: 689,
    code: "PF"
  },
  {
    name: "Gabon",
    label: "Gabon (+241)",
    value: "+241",
    value_number: 241,
    code: "GA"
  },
  {
    name: "Gambia",
    label: "Gambia (+220)",
    value: "+220",
    value_number: 220,
    code: "GM"
  },
  {
    name: "Georgia",
    label: "Georgia (+995)",
    value: "+995",
    value_number: 995,
    code: "GE"
  },
  {
    name: "Germany",
    label: "Germany (+49)",
    value: "+49",
    value_number: 49,
    code: "DE"
  },
  {
    name: "Ghana",
    label: "Ghana (+233)",
    value: "+233",
    value_number: 233,
    code: "GH"
  },
  {
    name: "Gibraltar",
    label: "Gibraltar (+350)",
    value: "+350",
    value_number: 350,
    code: "GI"
  },
  {
    name: "Greece",
    label: "Greece (+30)",
    value: "+30",
    value_number: 30,
    code: "GR"
  },
  {
    name: "Greenland",
    label: "Greenland (+299)",
    value: "+299",
    value_number: 299,
    code: "GL"
  },
  {
    name: "Grenada",
    label: "Grenada (+1473)",
    value: "+1473",
    value_number: 1473,
    code: "GD"
  },
  {
    name: "Guadeloupe",
    label: "Guadeloupe (+590)",
    value: "+590",
    value_number: 590,
    code: "GP"
  },
  {
    name: "Guam",
    label: "Guam (+1671)",
    value: "+1671",
    value_number: 1671,
    code: "GU"
  },
  {
    name: "Guatemala",
    label: "Guatemala (+502)",
    value: "+502",
    value_number: 502,
    code: "GT"
  },
  {
    name: "Guernsey",
    label: "Guernsey (+44)",
    value: "+44",
    value_number: 44,
    code: "GG"
  },
  {
    name: "Guinea",
    label: "Guinea (+224)",
    value: "+224",
    value_number: 224,
    code: "GN"
  },
  {
    name: "Guinea-Bissau",
    label: "Guinea-Bissau (+245)",
    value: "+245",
    value_number: 245,
    code: "GW"
  },
  {
    name: "Guyana",
    label: "Guyana (+595)",
    value: "+595",
    value_number: 595,
    code: "GY"
  },
  {
    name: "Haiti",
    label: "Haiti (+509)",
    value: "+509",
    value_number: 509,
    code: "HT"
  },
  {
    name: "Holy See (Vatican City State)",
    label: "Holy See (Vatican City State) (+379)",
    value: "+379",
    value_number: 379,
    code: "VA"
  },
  {
    name: "Honduras",
    label: "Honduras (+504)",
    value: "+504",
    value_number: 504,
    code: "HN"
  },
  {
    name: "Hong Kong",
    label: "Hong Kong (+852)",
    value: "+852",
    value_number: 852,
    code: "HK"
  },
  {
    name: "Hungary",
    label: "Hungary (+36)",
    value: "+36",
    value_number: 36,
    code: "HU"
  },
  {
    name: "Iceland",
    label: "Iceland (+354)",
    value: "+354",
    value_number: 354,
    code: "IS"
  },
  {
    name: "India",
    label: "India (+91)",
    value: "+91",
    value_number: 91,
    code: "IN"
  },
  {
    name: "Indonesia",
    label: "Indonesia (+62)",
    value: "+62",
    value_number: 62,
    code: "ID"
  },
  {
    name: "Iran, Islamic Republic of Persian Gulf",
    label: "Iran, Islamic Republic of Persian Gulf (+98)",
    value: "+98",
    value_number: 98,
    code: "IR"
  },
  {
    name: "Iraq",
    label: "Iraq (+964)",
    value: "+964",
    value_number: 964,
    code: "IQ"
  },
  {
    name: "Ireland",
    label: "Ireland (+353)",
    value: "+353",
    value_number: 353,
    code: "IE"
  },
  {
    name: "Isle of Man",
    label: "Isle of Man (+44)",
    value: "+44",
    value_number: 44,
    code: "IM"
  },
  {
    name: "Israel",
    label: "Israel (+972)",
    value: "+972",
    value_number: 972,
    code: "IL"
  },
  {
    name: "Italy",
    label: "Italy (+39)",
    value: "+39",
    value_number: 39,
    code: "IT"
  },
  {
    name: "Jamaica",
    label: "Jamaica (+1876)",
    value: "+1876",
    value_number: 1876,
    code: "JM"
  },
  {
    name: "Japan",
    label: "Japan (+81)",
    value: "+81",
    value_number: 81,
    code: "JP"
  },
  {
    name: "Jersey",
    label: "Jersey (+44)",
    value: "+44",
    value_number: 44,
    code: "JE"
  },
  {
    name: "Jordan",
    label: "Jordan (+962)",
    value: "+962",
    value_number: 962,
    code: "JO"
  },
  {
    name: "Kazakhstan",
    label: "Kazakhstan (+77)",
    value: "+77",
    value_number: 77,
    code: "KZ"
  },
  {
    name: "Kenya",
    label: "Kenya (+254)",
    value: "+254",
    value_number: 254,
    code: "KE"
  },
  {
    name: "Kiribati",
    label: "Kiribati (+686)",
    value: "+686",
    value_number: 686,
    code: "KI"
  },
  {
    name: "Korea, Democratic People's Republic of Korea",
    label: "Korea, Democratic People's Republic of Korea (+850)",
    value: "+850",
    value_number: 850,
    code: "KP"
  },
  {
    name: "Korea, Republic of South Korea",
    label: "Korea, Republic of South Korea (+82)",
    value: "+82",
    value_number: 82,
    code: "KR"
  },
  {
    name: "Kuwait",
    label: "Kuwait (+965)",
    value: "+965",
    value_number: 965,
    code: "KW"
  },
  {
    name: "Kyrgyzstan",
    label: "Kyrgyzstan (+996)",
    value: "+996",
    value_number: 996,
    code: "KG"
  },
  {
    name: "Laos",
    label: "Laos (+856)",
    value: "+856",
    value_number: 856,
    code: "LA"
  },
  {
    name: "Latvia",
    label: "Latvia (+371)",
    value: "+371",
    value_number: 371,
    code: "LV"
  },
  {
    name: "Lebanon",
    label: "Lebanon (+961)",
    value: "+961",
    value_number: 961,
    code: "LB"
  },
  {
    name: "Lesotho",
    label: "Lesotho (+266)",
    value: "+266",
    value_number: 266,
    code: "LS"
  },
  {
    name: "Liberia",
    label: "Liberia (+231)",
    value: "+231",
    value_number: 231,
    code: "LR"
  },
  {
    name: "Libyan Arab Jamahiriya",
    label: "Libyan Arab Jamahiriya (+218)",
    value: "+218",
    value_number: 218,
    code: "LY"
  },
  {
    name: "Liechtenstein",
    label: "Liechtenstein (+423)",
    value: "+423",
    value_number: 423,
    code: "LI"
  },
  {
    name: "Lithuania",
    label: "Lithuania (+370)",
    value: "+370",
    value_number: 370,
    code: "LT"
  },
  {
    name: "Luxembourg",
    label: "Luxembourg (+352)",
    value: "+352",
    value_number: 352,
    code: "LU"
  },
  {
    name: "Macao",
    label: "Macao (+853)",
    value: "+853",
    value_number: 853,
    code: "MO"
  },
  {
    name: "Macedonia",
    label: "Macedonia (+389)",
    value: "+389",
    value_number: 389,
    code: "MK"
  },
  {
    name: "Madagascar",
    label: "Madagascar (+261)",
    value: "+261",
    value_number: 261,
    code: "MG"
  },
  {
    name: "Malawi",
    label: "Malawi (+265)",
    value: "+265",
    value_number: 265,
    code: "MW"
  },
  {
    name: "Malaysia",
    label: "Malaysia (+60)",
    value: "+60",
    value_number: 60,
    code: "MY"
  },
  {
    name: "Maldives",
    label: "Maldives (+960)",
    value: "+960",
    value_number: 960,
    code: "MV"
  },
  {
    name: "Mali",
    label: "Mali (+223)",
    value: "+223",
    value_number: 223,
    code: "ML"
  },
  {
    name: "Malta",
    label: "Malta (+356)",
    value: "+356",
    value_number: 356,
    code: "MT"
  },
  {
    name: "Marshall Islands",
    label: "Marshall Islands (+692)",
    value: "+692",
    value_number: 692,
    code: "MH"
  },
  {
    name: "Martinique",
    label: "Martinique (+596)",
    value: "+596",
    value_number: 596,
    code: "MQ"
  },
  {
    name: "Mauritania",
    label: "Mauritania (+222)",
    value: "+222",
    value_number: 222,
    code: "MR"
  },
  {
    name: "Mauritius",
    label: "Mauritius (+230)",
    value: "+230",
    value_number: 230,
    code: "MU"
  },
  {
    name: "Mayotte",
    label: "Mayotte (+262)",
    value: "+262",
    value_number: 262,
    code: "YT"
  },
  {
    name: "Mexico",
    label: "Mexico (+52)",
    value: "+52",
    value_number: 52,
    code: "MX"
  },
  {
    name: "Micronesia, Federated States of Micronesia",
    label: "Micronesia, Federated States of Micronesia (+691)",
    value: "+691",
    value_number: 691,
    code: "FM"
  },
  {
    name: "Moldova",
    label: "Moldova (+373)",
    value: "+373",
    value_number: 373,
    code: "MD"
  },
  {
    name: "Monaco",
    label: "Monaco (+377)",
    value: "+377",
    value_number: 377,
    code: "MC"
  },
  {
    name: "Mongolia",
    label: "Mongolia (+976)",
    value: "+976",
    value_number: 976,
    code: "MN"
  },
  {
    name: "Montenegro",
    label: "Montenegro (+382)",
    value: "+382",
    value_number: 382,
    code: "ME"
  },
  {
    name: "Montserrat",
    label: "Montserrat (+1664)",
    value: "+1664",
    value_number: 1664,
    code: "MS"
  },
  {
    name: "Morocco",
    label: "Morocco (+212)",
    value: "+212",
    value_number: 212,
    code: "MA"
  },
  {
    name: "Mozambique",
    label: "Mozambique (+258)",
    value: "+258",
    value_number: 258,
    code: "MZ"
  },
  {
    name: "Myanmar",
    label: "Myanmar (+95)",
    value: "+95",
    value_number: 95,
    code: "MM"
  },
  {
    name: "Namibia",
    label: "Namibia (+264)",
    value: "+264",
    value_number: 264,
    code: "NA"
  },
  {
    name: "Nauru",
    label: "Nauru (+674)",
    value: "+674",
    value_number: 674,
    code: "NR"
  },
  {
    name: "Nepal",
    label: "Nepal (+977)",
    value: "+977",
    value_number: 977,
    code: "NP"
  },
  {
    name: "Netherlands",
    label: "Netherlands (+31)",
    value: "+31",
    value_number: 31,
    code: "NL"
  },
  {
    name: "Netherlands Antilles",
    label: "Netherlands Antilles (+599)",
    value: "+599",
    value_number: 599,
    code: "AN"
  },
  {
    name: "New Caledonia",
    label: "New Caledonia (+687)",
    value: "+687",
    value_number: 687,
    code: "NC"
  },
  {
    name: "New Zealand",
    label: "New Zealand (+64)",
    value: "+64",
    value_number: 64,
    code: "NZ"
  },
  {
    name: "Nicaragua",
    label: "Nicaragua (+505)",
    value: "+505",
    value_number: 505,
    code: "NI"
  },
  {
    name: "Niger",
    label: "Niger (+227)",
    value: "+227",
    value_number: 227,
    code: "NE"
  },
  {
    name: "Nigeria",
    label: "Nigeria (+234)",
    value: "+234",
    value_number: 234,
    code: "NG"
  },
  {
    name: "Niue",
    label: "Niue (+683)",
    value: "+683",
    value_number: 683,
    code: "NU"
  },
  {
    name: "Norfolk Island",
    label: "Norfolk Island (+672)",
    value: "+672",
    value_number: 672,
    code: "NF"
  },
  {
    name: "Northern Mariana Islands",
    label: "Northern Mariana Islands (+1670)",
    value: "+1670",
    value_number: 1670,
    code: "MP"
  },
  {
    name: "Norway",
    label: "Norway (+47)",
    value: "+47",
    value_number: 47,
    code: "NO"
  },
  {
    name: "Oman",
    label: "Oman (+968)",
    value: "+968",
    value_number: 968,
    code: "OM"
  },
  {
    name: "Pakistan",
    label: "Pakistan (+92)",
    value: "+92",
    value_number: 92,
    code: "PK"
  },
  {
    name: "Palau",
    label: "Palau (+680)",
    value: "+680",
    value_number: 680,
    code: "PW"
  },
  {
    name: "Palestinian Territory, Occupied",
    label: "Palestinian Territory, Occupied (+970)",
    value: "+970",
    value_number: 970,
    code: "PS"
  },
  {
    name: "Panama",
    label: "Panama (+507)",
    value: "+507",
    value_number: 507,
    code: "PA"
  },
  {
    name: "Papua New Guinea",
    label: "Papua New Guinea (+675)",
    value: "+675",
    value_number: 675,
    code: "PG"
  },
  {
    name: "Paraguay",
    label: "Paraguay (+595)",
    value: "+595",
    value_number: 595,
    code: "PY"
  },
  {
    name: "Peru",
    label: "Peru (+51)",
    value: "+51",
    value_number: 51,
    code: "PE"
  },
  {
    name: "Philippines",
    label: "Philippines (+63)",
    value: "+63",
    value_number: 63,
    code: "PH"
  },
  {
    name: "Pitcairn",
    label: "Pitcairn (+872)",
    value: "+872",
    value_number: 872,
    code: "PN"
  },
  {
    name: "Poland",
    label: "Poland (+48)",
    value: "+48",
    value_number: 48,
    code: "PL"
  },
  {
    name: "Portugal",
    label: "Portugal (+351)",
    value: "+351",
    value_number: 351,
    code: "PT"
  },
  {
    name: "Puerto Rico",
    label: "Puerto Rico (+1939)",
    value: "+1939",
    value_number: 1939,
    code: "PR"
  },
  {
    name: "Qatar",
    label: "Qatar (+974)",
    value: "+974",
    value_number: 974,
    code: "QA"
  },
  {
    name: "Romania",
    label: "Romania (+40)",
    value: "+40",
    value_number: 40,
    code: "RO"
  },
  {
    name: "Russia",
    label: "Russia (+7)",
    value: "+7",
    value_number: 7,
    code: "RU"
  },
  {
    name: "Rwanda",
    label: "Rwanda (+250)",
    value: "+250",
    value_number: 250,
    code: "RW"
  },
  {
    name: "Reunion",
    label: "Reunion (+262)",
    value: "+262",
    value_number: 262,
    code: "RE"
  },
  {
    name: "Saint Barthelemy",
    label: "Saint Barthelemy (+590)",
    value: "+590",
    value_number: 590,
    code: "BL"
  },
  {
    name: "Saint Helena, Ascension and Tristan Da Cunha",
    label: "Saint Helena, Ascension and Tristan Da Cunha (+290)",
    value: "+290",
    value_number: 290,
    code: "SH"
  },
  {
    name: "Saint Kitts and Nevis",
    label: "Saint Kitts and Nevis (+1869)",
    value: "+1869",
    value_number: 1869,
    code: "KN"
  },
  {
    name: "Saint Lucia",
    label: "Saint Lucia (+1758)",
    value: "+1758",
    value_number: 1758,
    code: "LC"
  },
  {
    name: "Saint Martin",
    label: "Saint Martin (+590)",
    value: "+590",
    value_number: 590,
    code: "MF"
  },
  {
    name: "Saint Pierre and Miquelon",
    label: "Saint Pierre and Miquelon (+508)",
    value: "+508",
    value_number: 508,
    code: "PM"
  },
  {
    name: "Saint Vincent and the Grenadines",
    label: "Saint Vincent and the Grenadines (+1784)",
    value: "+1784",
    value_number: 1784,
    code: "VC"
  },
  {
    name: "Samoa",
    label: "Samoa (+685)",
    value: "+685",
    value_number: 685,
    code: "WS"
  },
  {
    name: "San Marino",
    label: "San Marino (+378)",
    value: "+378",
    value_number: 378,
    code: "SM"
  },
  {
    name: "Sao Tome and Principe",
    label: "Sao Tome and Principe (+239)",
    value: "+239",
    value_number: 239,
    code: "ST"
  },
  {
    name: "Saudi Arabia",
    label: "Saudi Arabia (+966)",
    value: "+966",
    value_number: 966,
    code: "SA"
  },
  {
    name: "Senegal",
    label: "Senegal (+221)",
    value: "+221",
    value_number: 221,
    code: "SN"
  },
  {
    name: "Serbia",
    label: "Serbia (+381)",
    value: "+381",
    value_number: 381,
    code: "RS"
  },
  {
    name: "Seychelles",
    label: "Seychelles (+248)",
    value: "+248",
    value_number: 248,
    code: "SC"
  },
  {
    name: "Sierra Leone",
    label: "Sierra Leone (+232)",
    value: "+232",
    value_number: 232,
    code: "SL"
  },
  {
    name: "Singapore",
    label: "Singapore (+65)",
    value: "+65",
    value_number: 65,
    code: "SG"
  },
  {
    name: "Slovakia",
    label: "Slovakia (+421)",
    value: "+421",
    value_number: 421,
    code: "SK"
  },
  {
    name: "Slovenia",
    label: "Slovenia (+386)",
    value: "+386",
    value_number: 386,
    code: "SI"
  },
  {
    name: "Solomon Islands",
    label: "Solomon Islands (+677)",
    value: "+677",
    value_number: 677,
    code: "SB"
  },
  {
    name: "Somalia",
    label: "Somalia (+252)",
    value: "+252",
    value_number: 252,
    code: "SO"
  },
  {
    name: "South Africa",
    label: "South Africa (+27)",
    value: "+27",
    value_number: 27,
    code: "ZA"
  },
  {
    name: "South Sudan",
    label: "South Sudan (+211)",
    value: "+211",
    value_number: 211,
    code: "SS"
  },
  {
    name: "South Georgia and the South Sandwich Islands",
    label: "South Georgia and the South Sandwich Islands (+500)",
    value: "+500",
    value_number: 500,
    code: "GS"
  },
  {
    name: "Spain",
    label: "Spain (+34)",
    value: "+34",
    value_number: 34,
    code: "ES"
  },
  {
    name: "Sri Lanka",
    label: "Sri Lanka (+94)",
    value: "+94",
    value_number: 94,
    code: "LK"
  },
  {
    name: "Sudan",
    label: "Sudan (+249)",
    value: "+249",
    value_number: 249,
    code: "SD"
  },
  {
    name: "Suriname",
    label: "Suriname (+597)",
    value: "+597",
    value_number: 597,
    code: "SR"
  },
  {
    name: "Svalbard and Jan Mayen",
    label: "Svalbard and Jan Mayen (+47)",
    value: "+47",
    value_number: 47,
    code: "SJ"
  },
  {
    name: "Swaziland",
    label: "Swaziland (+268)",
    value: "+268",
    value_number: 268,
    code: "SZ"
  },
  {
    name: "Sweden",
    label: "Sweden (+46)",
    value: "+46",
    value_number: 46,
    code: "SE"
  },
  {
    name: "Switzerland",
    label: "Switzerland (+41)",
    value: "+41",
    value_number: 41,
    code: "CH"
  },
  {
    name: "Syrian Arab Republic",
    label: "Syrian Arab Republic (+963)",
    value: "+963",
    value_number: 963,
    code: "SY"
  },
  {
    name: "Taiwan",
    label: "Taiwan (+886)",
    value: "+886",
    value_number: 886,
    code: "TW"
  },
  {
    name: "Tajikistan",
    label: "Tajikistan (+992)",
    value: "+992",
    value_number: 992,
    code: "TJ"
  },
  {
    name: "Tanzania, United Republic of Tanzania",
    label: "Tanzania, United Republic of Tanzania (+255)",
    value: "+255",
    value_number: 255,
    code: "TZ"
  },
  {
    name: "Thailand",
    label: "Thailand (+66)",
    value: "+66",
    value_number: 66,
    code: "TH"
  },
  {
    name: "Timor-Leste",
    label: "Timor-Leste (+670)",
    value: "+670",
    value_number: 670,
    code: "TL"
  },
  {
    name: "Togo",
    label: "Togo (+228)",
    value: "+228",
    value_number: 228,
    code: "TG"
  },
  {
    name: "Tokelau",
    label: "Tokelau (+690)",
    value: "+690",
    value_number: 690,
    code: "TK"
  },
  {
    name: "Tonga",
    label: "Tonga (+676)",
    value: "+676",
    value_number: 676,
    code: "TO"
  },
  {
    name: "Trinidad and Tobago",
    label: "Trinidad and Tobago (+1868)",
    value: "+1868",
    value_number: 1868,
    code: "TT"
  },
  {
    name: "Tunisia",
    label: "Tunisia (+216)",
    value: "+216",
    value_number: 216,
    code: "TN"
  },
  {
    name: "Turkey",
    label: "Turkey (+90)",
    value: "+90",
    value_number: 90,
    code: "TR"
  },
  {
    name: "Turkmenistan",
    label: "Turkmenistan (+993)",
    value: "+993",
    value_number: 993,
    code: "TM"
  },
  {
    name: "Turks and Caicos Islands",
    label: "Turks and Caicos Islands (+1649)",
    value: "+1649",
    value_number: 1649,
    code: "TC"
  },
  {
    name: "Tuvalu",
    label: "Tuvalu (+688)",
    value: "+688",
    value_number: 688,
    code: "TV"
  },
  {
    name: "Uganda",
    label: "Uganda (+256)",
    value: "+256",
    value_number: 256,
    code: "UG"
  },
  {
    name: "Ukraine",
    label: "Ukraine (+380)",
    value: "+380",
    value_number: 380,
    code: "UA"
  },
  {
    name: "United Arab Emirates",
    label: "United Arab Emirates (+971)",
    value: "+971",
    value_number: 971,
    code: "AE"
  },
  {
    name: "United Kingdom",
    label: "United Kingdom (+44)",
    value: "+44",
    value_number: 44,
    code: "GB"
  },
  {
    name: "United States",
    label: "United States (+1)",
    value: "+1",
    value_number: 1,
    code: "US"
  },
  {
    name: "Uruguay",
    label: "Uruguay (+598)",
    value: "+598",
    value_number: 598,
    code: "UY"
  },
  {
    name: "Uzbekistan",
    label: "Uzbekistan (+998)",
    value: "+998",
    value_number: 998,
    code: "UZ"
  },
  {
    name: "Vanuatu",
    label: "Vanuatu (+678)",
    value: "+678",
    value_number: 678,
    code: "VU"
  },
  {
    name: "Venezuela, Bolivarian Republic of Venezuela",
    label: "Venezuela, Bolivarian Republic of Venezuela (+58)",
    value: "+58",
    value_number: 58,
    code: "VE"
  },
  {
    name: "Vietnam",
    label: "Vietnam (+84)",
    value: "+84",
    value_number: 84,
    code: "VN"
  },
  {
    name: "Virgin Islands, British",
    label: "Virgin Islands, British (+1284)",
    value: "+1284",
    value_number: 1284,
    code: "VG"
  },
  {
    name: "Virgin Islands, U.S.",
    label: "Virgin Islands, U.S. (+1340)",
    value: "+1340",
    value_number: 1340,
    code: "VI"
  },
  {
    name: "Wallis and Futuna",
    label: "Wallis and Futuna (+681)",
    value: "+681",
    value_number: 681,
    code: "WF"
  },
  {
    name: "Yemen",
    label: "Yemen (+967)",
    value: "+967",
    value_number: 967,
    code: "YE"
  },
  {
    name: "Zambia",
    label: "Zambia (+260)",
    value: "+260",
    value_number: 260,
    code: "ZM"
  },
  {
    name: "Zimbabwe",
    label: "Zimbabwe (+263)",
    value: "+263",
    value_number: 263,
    code: "ZW"
  }
];

export const NUMBER_KEY_BOARD = [
  [
    {
      value: 1
    },
    {
      value: 2
    },
    {
      value: 3
    }
  ],
  [
    {
      value: 4
    },
    {
      value: 5
    },
    {
      value: 6
    }
  ],
  [
    {
      value: 7
    },
    {
      value: 8
    },
    {
      value: 9
    }
  ],
  [
    {
      value: -2
    },
    {
      value: 0
    },
    {
      value: -1
    }
  ]
];

export const ARRAY_SOCIAL_NETWORKS = [
  "phoneNumberPublic",
  "email",
  "facebook",
  "instagram",
  "youtube",
  "twitter",
  "linkedin",
  "reddit",
  "skype",
  "pinterest"
];

export const ICON_SOCIAL_NETWORKS = {
  phoneNumberPublic: "phone-square",
  facebook: "facebook-square",
  instagram: "instagram",
  linkedin: "linkedin-square",
  youtube: "youtube-play",
  twitter: "twitter-square",
  reddit: "reddit-square",
  skype: "skype",
  email: "at",
  pinterest: "pinterest-square"
};

export const TYPE_KEYBOARD_SOCIAL_NETWORKS = {
  phoneNumberPublic: "numeric",
  facebook: "default",
  instagram: "default",
  linkedin: "default",
  youtube: "default",
  twitter: "default",
  reddit: "default",
  skype: "default",
  email: "email-address",
  pinterest: "default"
};

export const COLOR_SOCIAL_NETWORKS = {
  phoneNumberPublic: "#5B6CA8",
  facebook: "#4267B2",
  instagram: "#cd486b",
  linkedin: "#2867B2",
  youtube: "#FF0000",
  twitter: "#00acee",
  reddit: "#FF4301",
  skype: "#00aff0",
  email: "#4285F4",
  pinterest: "#E60023"
};
