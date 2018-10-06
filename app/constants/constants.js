export const medicines = {
	22342342 : { 
		name: "Levofloxacin", 
		price: 3.45,
		img: "pill01.svg",
		dose: "One with every meal" },
	34534435 : { 
		name: "Acivlovir", 
		price: 12.5,
		img: "pill02.svg",
		dose: "One every morning" },
	14242341 : { 
		name: "Ibuprofen", 
		price: 5.6,
		img: "pill01.svg",
		dose: "One every 6 hours" },
	64564564 : { 
		name: "Septrin", 
		price: 8.5,
		img: "pill01.svg",
		dose: "Two with every meal" },
	75673567 : { 
		name: "Acfol", 
		price: 3.5,
		img: "pill01.svg",
		dose: "One when in pain" },
	35345433 : { 
		name: "Omeprazol", 
		price: 2.1,
		img: "pill01.svg",
		dose: "One with every meal" },
	12562645 : { 
		name: "Fluconazole", 
		price: 4.3,
		img: "pill01.svg",
		dose: "One every 8 hours" },
	25664564 : { 
		name: "Enantyum", 
		price: 3.2,
		img: "pill02.svg",
		dose: "One every 3 days" },
	34235345  : {
		name: "Prednisone", 
		price: 7.1, 
		img: "pill01.svg",
		dose: "One with every meal"},
	65653435 : { 
		name: "Mesna", 
		price: 18.3,
		img: "pill01.svg",
		dose: "One every morning" },
	15135353 : { 
		name: "Cyclophosphamide", 
		price: 19.34,
		img: "pill01.svg",
		dose: "One every 6 hours" },
	33434355 : { 
		name: "Ondansetron", 
		price: 78.3, 
		img: "pill01.svg",
		dose: "One with every meal"},
	98234242 : { 
		name: "Hydrocodone", 
		price: 6.4,
		img: "pill01.svg",
		dose: "One every 8 hours" },

}

export const prescriptions = [
				{
					id: 22342342,
					from: "2018-10-4",
					to: "2018-11-23",
				},
				{
					id: 34235345,
					from: "2018-10-4",
					to: "2018-10-13",
				},
 
				{
					id: 35345433,
					from: "2018-10-5",
					to: "2018-11-29",
				},
				{
					id: 12562645,
					from: "2018-10-6",
					to: "2018-11-29",
				},
				{
					id: 25664564,
					from: "2018-10-6",
					to: "2018-11-29",
				},
				{
					id: 65653435,
					from: "2018-10-2",
					to: "2018-11-29",
				},
				{
					id: 15135353,
					from: "2018-10-5",
					to: "2018-11-29",
				},
				{
					id: 33434355,
					from: "2018-10-2",
					to: "2018-11-29",
				},
				{
					id: 98234242,
					from: "2018-10-4",
					to: "2018-11-29",
				},
			]


export const orders = [
				{
					date: "12/1/2016",
					status: "Delivered",
					color: "#C40B5A",
					medication: []


				},
				{
					date: "2/4/2016",
					status: "Delivered",
					color: "#9dbae4",
					medication: []


				},
				{
					date: "5/6/2016",
					status: "Delivered",
					color: "#062BE3",
					medication: []


				},
 
				{
					date: "6/10/2018",
					status: "Pending",
					color: "#C40B5A",
					pharmacy: "Goya 89 Pharmacy",
					medication: [
						{ 
							name: "Fluconazol",
							dose: "Prophylactic fungal infection medicine",
						},
						{
							name: "Enantyum",
							dose: "Pain killer"
						}
					],
					price: 7.5

				},

]



