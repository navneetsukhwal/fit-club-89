export const business = {
  name: 'Fit Club 89',
  category: 'Gym / Fitness Club',
  phone: '07428522259',
  address: 'NBCC Heights, OR, Pataudi Road, near Petal Apartments, Sector 89, Gurugram, Haryana 122505, India',
  hours: [
    { days: 'Monday–Saturday', opening: '5:00 AM', closing: '10:00 PM' },
    { days: 'Sunday', opening: '9:00 AM', closing: '2:00 PM' },
  ],
  instagramHandle: '@fitclub_89',
  instagramUrl: 'https://www.instagram.com/fitclub_89/',
  rating: '4.9',
  ratingOutOf: '5',
  reviews: '467',
  // Proposed editorial categories only. Confirm, edit or remove before publishing.
  proposedCategories: [
    { title: 'Strength Training', text: 'Build a steady practice around strength, one focused session at a time.', image: 'photo-1583454110551-21f2fa2afe61' },
    { title: 'Cardio Training', text: 'Make room for movement that keeps your energy in motion.', image: 'photo-1534258936925-c58bed479fcb' },
    { title: 'Free Weights', text: 'Explore the fundamentals of lifting at your own pace.', image: 'photo-1581009146145-b5ef050c2e1e' },
    { title: 'Functional Fitness', text: 'Move with intention and build habits that travel beyond a workout.', image: 'photo-1517836357463-d25dfeac3438' },
    { title: 'Personal Training', text: 'A proposed category for one-to-one guidance. Confirm availability before publishing.', image: 'photo-1571019613454-1cb2f99b2d8b' },
    { title: 'Fitness for Every Goal', text: 'A flexible starting point for different routines and ambitions.', image: 'photo-1534438327276-14e5300c3a48' },
  ],
  // Replace these illustrative stock photos with verified club photography when available.
  gallery: [
    { image: 'photo-1534438327276-14e5300c3a48', alt: 'Illustrative view of a contemporary fitness training space' },
    { image: 'photo-1583454110551-21f2fa2afe61', alt: 'Illustrative strength training scene' },
    { image: 'photo-1571019613454-1cb2f99b2d8b', alt: 'Illustrative athlete training with weights' },
    { image: 'photo-1581009146145-b5ef050c2e1e', alt: 'Illustrative close view of strength training equipment' },
    { image: 'photo-1517836357463-d25dfeac3438', alt: 'Illustrative fitness training scene' },
    { image: 'photo-1534258936925-c58bed479fcb', alt: 'Illustrative cardio workout' },
  ],
};

export const stockPhoto = (id: string, width = 1000) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=82`;
