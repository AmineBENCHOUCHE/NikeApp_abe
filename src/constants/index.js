import {
	facebook,
	instagram,
	shieldTick,
	support,
	truckFast,
	twitter,
} from "../assets/icons";
import {
	AirJordan3,
	AirJordan5BelAir,
	AirJordan1,
	Airjordan4Eminem,
	AirJordan11,
	Airjordan13,
	customer1,
	customer2,
	AirJordan10,
} from "../assets/images";

export const navLinks = [
	{ href: "#home", label: "Home" },
	{ href: "#about-us", label: "About Us" },
	{ href: "#products", label: "Products" },
	{ href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
	{
		bigShoe: AirJordan1,
	},
	{
		bigShoe: Airjordan4Eminem,
	},
	{
		bigShoe: AirJordan11,
	},
];

export const statistics = [
	{ value: "1k+", label: "Brands" },
	{ value: "500+", label: "Shops" },
	{ value: "250k+", label: "Customers" },
];

export const products = [
	{
		imgURL: AirJordan5BelAir,
		name: "Nike Air Jordan-V \n Bel-Air",
		price: "$210.00",
	},
	{
		imgURL: AirJordan10,
		name: "Nike Air Jordan-X Powder Blue",
		price: "$200.00",
	},
	{
		imgURL: AirJordan3,
		name: "Nike Air Jordan-III Blue Cement",
		price: "$250.00",
	},
	{
		imgURL: Airjordan13,
		name: "Nike Air Jordan-XIII",
		price: "$190.00",
	},
];

export const services = [
	{
		imgURL: truckFast,
		label: "Free shipping",
		subtext: "Enjoy seamless shopping with our complimentary shipping service.",
	},
	{
		imgURL: shieldTick,
		label: "Secure Payment",
		subtext:
			"Experience worry-free transactions with our secure payment options.",
	},
	{
		imgURL: support,
		label: "Love to help you",
		subtext: "Our dedicated team is here to assist you every step of the way.",
	},
];

export const reviews = [
	{
		imgURL: customer1,
		customerName: "Morich Brown",
		rating: 4.5,
		feedback:
			"The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
	},
	{
		imgURL: customer2,
		customerName: "Lota Mongeskar",
		rating: 4.5,
		feedback:
			"The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
	},
];

export const footerLinks = [
	{
		title: "Products",
		links: [
			{ name: "Air Jordan I", link: "/" },
			{ name: "Air Jordan IV", link: "/" },
			{ name: "Air Jordan V", link: "/" },
			{ name: "Air Force VI", link: "/" },
			{ name: "Air Jordan IX", link: "/" },
			{ name: "Air Jordan XI", link: "/" },
		],
	},
	{
		title: "Help",
		links: [
			{ name: "About us", link: "/" },
			{ name: "FAQs", link: "/" },
			{ name: "How it works", link: "/" },
			{ name: "Privacy policy", link: "/" },
			{ name: "Payment policy", link: "/" },
		],
	},
	{
		title: "Get in touch",
		links: [
			{ name: "customer@nike.com", link: "mailto:customer@nike.com" },
			{ name: "+92554862354", link: "tel:+92554862354" },
		],
	},
];

export const socialMedia = [
	{ src: facebook, alt: "facebook logo" },
	{ src: twitter, alt: "twitter logo" },
	{ src: instagram, alt: "instagram logo" },
];
