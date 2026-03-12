export interface Product {
	id: string;
	title: string;
	description: string;
	price: number;
	originalPrice?: number;
	image: string;
	category: string;
	seller: string;
	rating: number;
	reviews: number;
	condition: 'New' | 'Like New' | 'Good' | 'Fair';
	accessibility: string[];
	shipping: string;
	featured?: boolean;
	badge?: string;
}

export interface Category {
	id: string;
	name: string;
	icon: string;
	description: string;
	count: number;
	color: string;
}

export const categories: Category[] = [
	{
		id: 'mobility',
		name: 'Mobility Aids',
		icon: '♿',
		description: 'Wheelchairs, walkers, scooters & mobility solutions',
		count: 234,
		color: '#6B2FA0'
	},
	{
		id: 'daily-living',
		name: 'Daily Living',
		icon: '🏠',
		description: 'Adaptive tools for cooking, dressing & daily tasks',
		count: 189,
		color: '#00A86B'
	},
	{
		id: 'communication',
		name: 'Communication',
		icon: '💬',
		description: 'AAC devices, hearing aids & communication tools',
		count: 156,
		color: '#E8652D'
	},
	{
		id: 'sensory',
		name: 'Sensory',
		icon: '✨',
		description: 'Visual aids, sensory tools & therapeutic equipment',
		count: 142,
		color: '#2D7DD2'
	},
	{
		id: 'technology',
		name: 'Assistive Tech',
		icon: '💻',
		description: 'Adaptive technology, software & digital accessibility',
		count: 198,
		color: '#FFD700'
	},
	{
		id: 'fitness',
		name: 'Adaptive Fitness',
		icon: '💪',
		description: 'Adaptive sports equipment & accessible fitness gear',
		count: 97,
		color: '#FF6B9D'
	},
	{
		id: 'home',
		name: 'Home Adaptation',
		icon: '🔧',
		description: 'Ramps, grab bars, bathroom aids & home modifications',
		count: 165,
		color: '#4ECDC4'
	},
	{
		id: 'children',
		name: 'Children & Youth',
		icon: '🧒',
		description: 'Adaptive toys, paediatric equipment & learning tools',
		count: 113,
		color: '#F77F00'
	}
];

export const products: Product[] = [
	{
		id: '1',
		title: 'Ultra-Light Foldable Wheelchair',
		description: 'Premium lightweight wheelchair with aerospace-grade aluminium frame. Weighs only 8.5kg, folds compactly for travel. Ergonomic seat cushion with pressure relief technology. Suitable for active users who need portability without compromising comfort.',
		price: 549.99,
		originalPrice: 749.99,
		image: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=600&h=400&fit=crop',
		category: 'mobility',
		seller: 'MobilityFirst UK',
		rating: 4.8,
		reviews: 127,
		condition: 'New',
		accessibility: ['Lightweight', 'Foldable', 'Travel-Friendly'],
		shipping: 'Free Delivery',
		featured: true,
		badge: 'Best Seller'
	},
	{
		id: '2',
		title: 'EZ-Grip Adaptive Cutlery Set',
		description: 'Ergonomically designed cutlery set with built-up handles for those with limited grip strength. Non-slip silicone grips, weighted for stability, dishwasher safe. Includes knife, fork, spoon, and teaspoon.',
		price: 24.99,
		image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&h=400&fit=crop',
		category: 'daily-living',
		seller: 'AdaptAbility Store',
		rating: 4.9,
		reviews: 312,
		condition: 'New',
		accessibility: ['Easy Grip', 'Weighted', 'Non-Slip'],
		shipping: 'Free Delivery',
		featured: true,
		badge: 'Top Rated'
	},
	{
		id: '3',
		title: 'Smart AAC Communication Tablet',
		description: 'Pre-loaded augmentative and alternative communication tablet with intuitive symbol-based interface. Eye-tracking compatible, switch accessible, and customisable voice output. Rugged case included.',
		price: 389.00,
		originalPrice: 459.00,
		image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&h=400&fit=crop',
		category: 'communication',
		seller: 'TechAccess',
		rating: 4.7,
		reviews: 89,
		condition: 'New',
		accessibility: ['Eye-Tracking', 'Switch Access', 'Customisable'],
		shipping: '£4.99 Delivery',
		featured: true
	},
	{
		id: '4',
		title: 'Weighted Sensory Blanket — Premium',
		description: 'Therapeutic weighted blanket providing deep pressure stimulation. 100% organic cotton cover, glass bead filling. Available in multiple weights. Machine washable. Helps reduce anxiety and improve sleep quality.',
		price: 64.99,
		originalPrice: 89.99,
		image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=600&h=400&fit=crop',
		category: 'sensory',
		seller: 'SensorySpace',
		rating: 4.6,
		reviews: 245,
		condition: 'New',
		accessibility: ['Deep Pressure', 'Calming', 'Machine Washable'],
		shipping: 'Free Delivery',
		featured: true,
		badge: 'Popular'
	},
	{
		id: '5',
		title: 'Adaptive Xbox Controller Bundle',
		description: 'Microsoft Adaptive Controller with mounting hardware, joystick, and programmable switches. Designed for gamers with limited mobility. Compatible with Xbox and PC. Includes carry case.',
		price: 129.99,
		image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=600&h=400&fit=crop',
		category: 'technology',
		seller: 'GameAccess',
		rating: 4.9,
		reviews: 178,
		condition: 'New',
		accessibility: ['Switch Access', 'Programmable', 'Mounting Options'],
		shipping: 'Free Delivery',
		featured: true,
		badge: 'Editor\'s Choice'
	},
	{
		id: '6',
		title: 'Folding Aluminium Ramp — 1.8m',
		description: 'Portable folding access ramp for wheelchairs and scooters. Non-slip surface, 300kg weight capacity. Folds in half for easy transport and storage. Meets building regulation standards.',
		price: 189.00,
		image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop',
		category: 'home',
		seller: 'AccessRamps Direct',
		rating: 4.5,
		reviews: 67,
		condition: 'New',
		accessibility: ['Portable', 'Non-Slip', 'High Capacity'],
		shipping: '£9.99 Delivery'
	},
	{
		id: '7',
		title: 'Adaptive Resistance Band Kit',
		description: 'Complete adaptive fitness kit with colour-coded resistance bands, door anchor, ankle straps with easy-close velcro, and illustrated accessible exercise guide. Suitable for seated or standing exercise.',
		price: 34.99,
		image: 'https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=600&h=400&fit=crop',
		category: 'fitness',
		seller: 'ActiveAbility',
		rating: 4.7,
		reviews: 93,
		condition: 'New',
		accessibility: ['Seated Use', 'Easy-Close', 'Visual Guide'],
		shipping: 'Free Delivery'
	},
	{
		id: '8',
		title: 'Sensory Play Kit for Children',
		description: 'Multi-sensory play kit including textured balls, fidget tools, visual timers, and calming putty. Designed by occupational therapists for children with sensory processing differences. BPA-free and safety tested.',
		price: 29.99,
		image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=600&h=400&fit=crop',
		category: 'children',
		seller: 'Little Abilities',
		rating: 4.8,
		reviews: 201,
		condition: 'New',
		accessibility: ['OT Designed', 'BPA-Free', 'Multi-Sensory'],
		shipping: 'Free Delivery',
		featured: true
	},
	{
		id: '9',
		title: 'Electric Mobility Scooter — Compact',
		description: 'Lightweight electric mobility scooter with 25-mile range. Disassembles into 5 pieces for car boot storage. LED lights, adjustable seat height, and ergonomic tiller. Perfect for shopping and day trips.',
		price: 899.00,
		originalPrice: 1199.00,
		image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop',
		category: 'mobility',
		seller: 'MobilityFirst UK',
		rating: 4.6,
		reviews: 54,
		condition: 'New',
		accessibility: ['Long Range', 'Disassembles', 'Adjustable'],
		shipping: 'Free Delivery',
		badge: 'Save £300'
	},
	{
		id: '10',
		title: 'One-Handed Chopping Board',
		description: 'Innovative chopping board with stainless steel spikes and corner clamp to hold food securely. Suction cup feet prevent sliding. Designed for one-handed food preparation. Dishwasher safe.',
		price: 32.50,
		image: 'https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?w=600&h=400&fit=crop',
		category: 'daily-living',
		seller: 'KitchenAbility',
		rating: 4.8,
		reviews: 167,
		condition: 'New',
		accessibility: ['One-Handed Use', 'Non-Slip', 'Secure Hold'],
		shipping: '£2.99 Delivery'
	},
	{
		id: '11',
		title: 'Bluetooth Hearing Amplifier Pro',
		description: 'Rechargeable personal hearing amplifier with Bluetooth streaming. Crystal-clear sound enhancement with noise reduction. Smartphone app for customisation. Discreet behind-the-ear design.',
		price: 149.99,
		originalPrice: 199.99,
		image: 'https://images.unsplash.com/photo-1590658268037-6bf12f032f55?w=600&h=400&fit=crop',
		category: 'communication',
		seller: 'HearClear',
		rating: 4.4,
		reviews: 88,
		condition: 'New',
		accessibility: ['Bluetooth', 'Rechargeable', 'App Control'],
		shipping: 'Free Delivery'
	},
	{
		id: '12',
		title: 'Ergonomic Vertical Mouse — Wireless',
		description: 'Vertical ergonomic mouse reducing wrist strain and RSI symptoms. Adjustable DPI, programmable buttons, long battery life. Works with any computer. Ideal for users with carpal tunnel or limited hand mobility.',
		price: 39.99,
		image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&h=400&fit=crop',
		category: 'technology',
		seller: 'ErgoTech',
		rating: 4.6,
		reviews: 134,
		condition: 'New',
		accessibility: ['Ergonomic', 'Wireless', 'Programmable'],
		shipping: 'Free Delivery'
	}
];

export function getProductById(id: string): Product | undefined {
	return products.find(p => p.id === id);
}

export function getProductsByCategory(categoryId: string): Product[] {
	return products.filter(p => p.category === categoryId);
}

export function getFeaturedProducts(): Product[] {
	return products.filter(p => p.featured);
}

export function searchProducts(query: string): Product[] {
	const q = query.toLowerCase();
	return products.filter(
		p =>
			p.title.toLowerCase().includes(q) ||
			p.description.toLowerCase().includes(q) ||
			p.category.toLowerCase().includes(q) ||
			p.accessibility.some(a => a.toLowerCase().includes(q))
	);
}
