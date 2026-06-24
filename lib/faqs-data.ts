/**
 * Static FAQ database for all three DreamTeamApps iOS applications.
 * Used by: the public FAQ page, the AI chat system prompt, and the admin FAQ view.
 * To add or update FAQs, edit this file and deploy.
 */

export interface FAQ {
  id: string
  app: 'FishingPalPro' | 'PlayListAI' | 'SleuthPro' | 'General'
  category: string
  question: string
  answer: string
  keywords: string[]
}

export const ALL_FAQS: FAQ[] = [

  // ─────────────────────────────────────────────────────────────────────────────
  // FISHINGPALPRO
  // ─────────────────────────────────────────────────────────────────────────────

  // Getting Started
  {
    id: 'fpp-gs-1',
    app: 'FishingPalPro',
    category: 'Getting Started',
    question: 'How do I get started with FishingPalPro?',
    answer:
      'Download FishingPalPro from the App Store and open it. Allow location access when prompted — the app needs your GPS to calculate accurate lunar fishing forecasts for your area. You can start a free trial or subscribe to unlock all premium features immediately.',
    keywords: ['start', 'setup', 'download', 'begin', 'new', 'install'],
  },
  {
    id: 'fpp-gs-2',
    app: 'FishingPalPro',
    category: 'Getting Started',
    question: 'What iOS version is required to run FishingPalPro?',
    answer:
      'FishingPalPro requires iOS 16.0 or later. For the best experience, we recommend iOS 17 or newer. Check your version at iPhone Settings > General > About > iOS Version.',
    keywords: ['ios', 'version', 'requirement', 'compatible', 'update'],
  },
  {
    id: 'fpp-gs-3',
    app: 'FishingPalPro',
    category: 'Getting Started',
    question: 'Is FishingPalPro available on iPad?',
    answer:
      'Yes! FishingPalPro works on both iPhone and iPad running iOS/iPadOS 16.0 or later. The interface adapts to the larger iPad screen for a more comfortable experience.',
    keywords: ['ipad', 'tablet', 'compatible', 'device'],
  },
  {
    id: 'fpp-gs-4',
    app: 'FishingPalPro',
    category: 'Getting Started',
    question: 'How do I set up my location for accurate fishing forecasts?',
    answer:
      'When you first open FishingPalPro, tap Allow when asked for location access. You can also update this at iPhone Settings > Privacy & Security > Location Services > FishingPalPro > set to "While Using App." The app uses your GPS to deliver precise lunar and weather data for your exact location.',
    keywords: ['location', 'gps', 'setup', 'permission', 'forecast', 'accuracy'],
  },
  {
    id: 'fpp-gs-5',
    app: 'FishingPalPro',
    category: 'Getting Started',
    question: 'Can I use FishingPalPro without a subscription?',
    answer:
      'Yes — FishingPalPro has a free tier with basic features including today\'s lunar phase summary. A premium subscription unlocks the full monthly lunar calendar, detailed weather integration, unlimited catch logging, GPS mapping, and Siri voice control.',
    keywords: ['free', 'trial', 'subscription', 'without', 'basic'],
  },

  // Subscription & Billing
  {
    id: 'fpp-sub-1',
    app: 'FishingPalPro',
    category: 'Subscription & Billing',
    question: 'What subscription plans does FishingPalPro offer?',
    answer:
      'FishingPalPro offers Monthly and Annual subscription plans. Both include full access to all premium features. The Annual plan saves you significantly compared to paying month-to-month. Pricing is displayed in the app when you tap Subscribe.',
    keywords: ['plan', 'monthly', 'annual', 'yearly', 'price', 'cost', 'subscription'],
  },
  {
    id: 'fpp-sub-2',
    app: 'FishingPalPro',
    category: 'Subscription & Billing',
    question: 'How do I subscribe to FishingPalPro Premium?',
    answer:
      'Open FishingPalPro and tap the Subscribe or Unlock Premium button (it appears when you try to access any premium feature). Select your preferred plan (Monthly or Annual) and confirm with your Apple ID. Your subscription activates immediately and all premium features unlock.',
    keywords: ['subscribe', 'purchase', 'buy', 'premium', 'upgrade', 'unlock'],
  },
  {
    id: 'fpp-sub-3',
    app: 'FishingPalPro',
    category: 'Subscription & Billing',
    question: 'How do I restore my FishingPalPro subscription?',
    answer:
      'Go to FishingPalPro Settings (gear icon) and tap Restore Purchases. Make sure you are signed into the same Apple ID used for the original purchase. If you can\'t find the Restore button, look on the paywall/subscription screen. Your subscription should restore within a few seconds.',
    keywords: ['restore', 'lost', 'subscription', 'missing', 'recover', 'purchased'],
  },
  {
    id: 'fpp-sub-4',
    app: 'FishingPalPro',
    category: 'Subscription & Billing',
    question: 'My subscription is active in Apple but features are still locked — what do I do?',
    answer:
      'This is almost always resolved by restoring your purchase. Open the app, tap any locked feature, and use the Restore Purchases button. If that doesn\'t work: (1) sign out of your Apple ID at iPhone Settings > [Your Name] > Sign Out, then sign back in; (2) force-close and reopen FishingPalPro; (3) tap Restore Purchases again. If still locked, submit a support ticket.',
    keywords: ['locked', 'features', 'active', 'subscription', 'not working', 'paywall'],
  },
  {
    id: 'fpp-sub-5',
    app: 'FishingPalPro',
    category: 'Subscription & Billing',
    question: 'How do I cancel my FishingPalPro subscription?',
    answer:
      'All subscriptions are managed through Apple, not through the app directly. To cancel: go to iPhone Settings > [Your Name] > Subscriptions > FishingPalPro > Cancel Subscription. Your access continues until the end of your current billing period and you will not be charged again.',
    keywords: ['cancel', 'stop', 'end', 'unsubscribe', 'billing'],
  },
  {
    id: 'fpp-sub-6',
    app: 'FishingPalPro',
    category: 'Subscription & Billing',
    question: 'How do I request a refund for FishingPalPro?',
    answer:
      'All billing is handled by Apple — DreamTeamApps does not process payments directly. To request a refund: visit reportaproblem.apple.com, sign in with the Apple ID used for the purchase, find the FishingPalPro charge, and select "Request a Refund." Apple typically responds within 48 hours.',
    keywords: ['refund', 'money back', 'charge', 'billing', 'apple', 'reportaproblem'],
  },
  {
    id: 'fpp-sub-7',
    app: 'FishingPalPro',
    category: 'Subscription & Billing',
    question: 'I was charged but my subscription expired — what happened?',
    answer:
      'Check your subscription status at iPhone Settings > [Your Name] > Subscriptions. If it shows as expired or lapsed, your payment method may have failed. Update your payment method in your Apple ID settings and resubscribe. If you were charged but access has been cut off, submit a support ticket with your Apple receipt.',
    keywords: ['charged', 'expired', 'payment failed', 'billing', 'receipt'],
  },
  {
    id: 'fpp-sub-8',
    app: 'FishingPalPro',
    category: 'Subscription & Billing',
    question: 'Is there a family sharing plan for FishingPalPro?',
    answer:
      'FishingPalPro subscriptions are currently per Apple ID. Apple Family Sharing for subscriptions is not supported at this time. Each family member who wants premium access will need their own subscription.',
    keywords: ['family', 'sharing', 'multiple', 'accounts', 'household'],
  },

  // Lunar Phase Predictions
  {
    id: 'fpp-lunar-1',
    app: 'FishingPalPro',
    category: 'Lunar Phase Predictions',
    question: 'How does the lunar phase fishing prediction work?',
    answer:
      'FishingPalPro uses the Solunar Theory, developed by John Alden Knight in 1926. Fish are most active during major and minor feeding periods determined by the moon and sun\'s gravitational pull. The app calculates these periods using your exact GPS location and the current lunar phase, giving you precise times for peak activity at your fishing spot.',
    keywords: ['lunar', 'moon', 'prediction', 'solunar', 'theory', 'how', 'works'],
  },
  {
    id: 'fpp-lunar-2',
    app: 'FishingPalPro',
    category: 'Lunar Phase Predictions',
    question: 'What is a Major Feeding Period?',
    answer:
      'Major Feeding Periods occur when the moon is directly overhead (transit) or directly underfoot (anti-transit). These typically last 1–2 hours and represent the absolute peak times for fish activity. They are marked as "🌕 Major" in the daily forecast and are your best windows for catching fish.',
    keywords: ['major', 'feeding period', 'peak', 'best time', 'transit'],
  },
  {
    id: 'fpp-lunar-3',
    app: 'FishingPalPro',
    category: 'Lunar Phase Predictions',
    question: 'What is a Minor Feeding Period?',
    answer:
      'Minor Feeding Periods occur when the moon is at a 90-degree angle (moonrise or moonset). These last approximately 45–60 minutes and indicate moderate fish activity. They are shown as "🌙 Minor" in the forecast. While less intense than Major periods, they are still good times to be on the water.',
    keywords: ['minor', 'feeding period', 'moonrise', 'moonset', 'moderate'],
  },
  {
    id: 'fpp-lunar-4',
    app: 'FishingPalPro',
    category: 'Lunar Phase Predictions',
    question: 'How do I view the monthly lunar fishing calendar?',
    answer:
      'From the main screen, tap the Calendar tab (calendar icon at the bottom navigation bar). The monthly calendar shows color-coded fishing quality ratings for every day — Excellent (green), Good (blue), Fair (yellow), and Poor (gray) — based on the lunar phase and moon fullness for that date.',
    keywords: ['calendar', 'monthly', 'view', 'schedule', 'plan'],
  },
  {
    id: 'fpp-lunar-5',
    app: 'FishingPalPro',
    category: 'Lunar Phase Predictions',
    question: 'What do the fishing quality ratings (Excellent/Good/Fair/Poor) mean?',
    answer:
      'Excellent = Full or new moon phase with multiple major feeding periods — the best days of the month. Good = Strong lunar influence with at least one major period. Fair = Average lunar conditions, decent fishing expected. Poor = Least favorable lunar alignment; fish may be less active. New and full moon days consistently produce the highest ratings.',
    keywords: ['excellent', 'good', 'fair', 'poor', 'rating', 'quality', 'best days'],
  },
  {
    id: 'fpp-lunar-6',
    app: 'FishingPalPro',
    category: 'Lunar Phase Predictions',
    question: 'The lunar times seem off or different from yesterday — is this normal?',
    answer:
      'Yes, this is completely normal and accurate. Solunar times shift by approximately 50 minutes each day as the moon progresses through its 29.5-day cycle. Today\'s major period at 9:00 AM will be around 9:50 AM tomorrow, and so on. Also verify your device time zone is set correctly at iPhone Settings > General > Date & Time > Set Automatically.',
    keywords: ['off', 'wrong', 'different', 'times', 'shift', 'timezone', 'normal'],
  },

  // Weather Integration
  {
    id: 'fpp-weather-1',
    app: 'FishingPalPro',
    category: 'Weather Integration',
    question: 'How does the weather feature work in FishingPalPro?',
    answer:
      'FishingPalPro automatically fetches current conditions and a 7-day forecast for your GPS location. Data includes temperature, wind speed and direction, barometric pressure, humidity, and UV index — all factors that directly affect fish behavior and feeding patterns.',
    keywords: ['weather', 'forecast', 'temperature', 'wind', 'conditions'],
  },
  {
    id: 'fpp-weather-2',
    app: 'FishingPalPro',
    category: 'Weather Integration',
    question: 'The weather tab shows a loading spinner and won\'t load — how do I fix it?',
    answer:
      'This is almost always a connectivity or permissions issue. Try these steps in order: (1) Confirm internet is working by opening Safari and loading a page. (2) Toggle Airplane Mode on and off. (3) Go to iPhone Settings > Privacy & Security > Location Services > FishingPalPro and set to "While Using App." (4) Force-close the app and reopen it. (5) Restart your iPhone. If the spinner continues after all steps, submit a support ticket.',
    keywords: ['loading', 'spinner', 'stuck', 'weather', 'not loading', 'infinite'],
  },
  {
    id: 'fpp-weather-3',
    app: 'FishingPalPro',
    category: 'Weather Integration',
    question: 'What is barometric pressure and why does it matter for fishing?',
    answer:
      'Barometric pressure is atmospheric pressure at your location. Fish (especially game fish like bass and crappie) are sensitive to pressure changes. Fishing is typically best during stable or slowly rising pressure. A rapid pressure drop often causes fish to go deep and become inactive. FishingPalPro shows pressure trends with arrows (↑ rising, ↓ falling, → stable) to help you plan your trip.',
    keywords: ['barometric', 'pressure', 'fishing', 'bass', 'weather', 'importance'],
  },
  {
    id: 'fpp-weather-4',
    app: 'FishingPalPro',
    category: 'Weather Integration',
    question: 'Why is wind direction important in FishingPalPro?',
    answer:
      'Wind affects water surface temperature and moves food (insects, baitfish) toward shorelines and points. The classic fishing saying: "Wind from the East, fish bite least; Wind from the West, fish bite best." West and South winds often produce better conditions. FishingPalPro displays wind direction in degrees and compass notation so you can position yourself on the productive side of a lake or river.',
    keywords: ['wind', 'direction', 'east', 'west', 'fishing', 'importance'],
  },
  {
    id: 'fpp-weather-5',
    app: 'FishingPalPro',
    category: 'Weather Integration',
    question: 'Can I check weather for a fishing spot different from my current location?',
    answer:
      'The weather feature currently uses your device\'s GPS location. The ability to pin favorite fishing spots and get their specific weather forecasts is planned for an upcoming version. For now, you can travel to the spot before checking, or enter the zip code in a weather app and cross-reference with FishingPalPro\'s lunar data.',
    keywords: ['different', 'location', 'spot', 'custom', 'other', 'weather'],
  },

  // Catch Logging
  {
    id: 'fpp-catch-1',
    app: 'FishingPalPro',
    category: 'Catch Logging',
    question: 'How do I log a catch in FishingPalPro?',
    answer:
      'Tap the + (plus) button on the main screen or navigate to the Catch Log tab and tap Add Catch. Fill in the fish species, weight, length, bait used, and any notes you want to save. The app automatically records the GPS coordinates, date, time, and current lunar phase. Tap Save to store the entry.',
    keywords: ['log', 'catch', 'record', 'add', 'entry', 'how'],
  },
  {
    id: 'fpp-catch-2',
    app: 'FishingPalPro',
    category: 'Catch Logging',
    question: 'Can I add a photo to my catch log entry?',
    answer:
      'Yes! When logging a catch, tap the camera icon to take a new photo or select one from your photo library. The image is stored with the catch record and appears in your catch history. Make sure FishingPalPro has camera and photo library permissions at iPhone Settings > Privacy & Security.',
    keywords: ['photo', 'picture', 'image', 'camera', 'catch', 'log'],
  },
  {
    id: 'fpp-catch-3',
    app: 'FishingPalPro',
    category: 'Catch Logging',
    question: 'How do I view my catch history?',
    answer:
      'Tap the Catch Log tab (fish icon in the bottom navigation bar). Your catch entries appear in reverse chronological order (newest first). Tap any entry to see the full details, including the GPS map of where the catch was made, weather conditions at the time, and the lunar phase.',
    keywords: ['history', 'view', 'past', 'catches', 'log', 'list'],
  },
  {
    id: 'fpp-catch-4',
    app: 'FishingPalPro',
    category: 'Catch Logging',
    question: 'Can I log a catch using Siri voice control?',
    answer:
      'Yes! Say "Hey Siri, log a catch in FishingPalPro" and Siri will open the app directly to the catch logging screen. You can also set up a custom Siri shortcut in FishingPalPro Settings > Siri Shortcuts to trigger the catch log with any phrase you choose.',
    keywords: ['siri', 'voice', 'log', 'catch', 'hey siri', 'shortcut'],
  },
  {
    id: 'fpp-catch-5',
    app: 'FishingPalPro',
    category: 'Catch Logging',
    question: 'How do I delete a catch entry?',
    answer:
      'In the Catch Log list, swipe left on the entry you want to delete to reveal the red Delete button. You can also tap any entry to open it, then use the trash can icon in the top-right corner to delete it. Deleted entries cannot be recovered.',
    keywords: ['delete', 'remove', 'erase', 'catch', 'entry'],
  },
  {
    id: 'fpp-catch-6',
    app: 'FishingPalPro',
    category: 'Catch Logging',
    question: 'Can I export my catch data?',
    answer:
      'Catch data export (CSV/PDF) is on our feature roadmap. Currently, all catch data is stored securely on your device. You can share individual catch entries via the Share icon on any catch detail view, which opens the iOS share sheet.',
    keywords: ['export', 'download', 'csv', 'share', 'catch data', 'backup'],
  },

  // Siri & Voice Control
  {
    id: 'fpp-siri-1',
    app: 'FishingPalPro',
    category: 'Siri & Voice Control',
    question: 'How do I enable Siri shortcuts for FishingPalPro?',
    answer:
      'Go to iPhone Settings > Siri & Search > scroll down to FishingPalPro and make sure "Learn from this App" and "Suggest Shortcuts" are enabled. Then open FishingPalPro > Settings (gear icon) > Siri Shortcuts and tap each shortcut you want to add. Tap "Add to Siri" and record your preferred voice phrase.',
    keywords: ['siri', 'enable', 'shortcuts', 'setup', 'voice', 'activate'],
  },
  {
    id: 'fpp-siri-2',
    app: 'FishingPalPro',
    category: 'Siri & Voice Control',
    question: 'What Siri commands are available in FishingPalPro?',
    answer:
      'Built-in Siri commands include: "Log a catch in FishingPalPro," "Check today\'s fishing forecast," "What\'s the best time to fish today?", and "Show my catch history." You can also create custom Siri shortcuts for any action in the app via FishingPalPro Settings > Siri Shortcuts.',
    keywords: ['siri', 'commands', 'phrases', 'what to say', 'voice', 'list'],
  },
  {
    id: 'fpp-siri-3',
    app: 'FishingPalPro',
    category: 'Siri & Voice Control',
    question: 'Siri says it doesn\'t recognize my FishingPalPro shortcut — how do I fix this?',
    answer:
      'Try these steps: (1) Open FishingPalPro > Settings > Siri Shortcuts and delete and re-add the shortcut. (2) Go to iPhone Settings > Siri & Search > Shortcuts and look for FishingPalPro shortcuts — if they\'re missing, re-add from the app. (3) Make sure Siri is enabled at iPhone Settings > Siri & Search > Listen for "Hey Siri." (4) Restart your iPhone and re-test.',
    keywords: ['siri', 'not recognized', 'shortcut', 'doesn\'t work', 'fix'],
  },
  {
    id: 'fpp-siri-4',
    app: 'FishingPalPro',
    category: 'Siri & Voice Control',
    question: 'My Siri shortcut works sometimes but not always — why?',
    answer:
      'Inconsistent Siri behavior is commonly caused by Low Power Mode, which restricts background app processing. Go to iPhone Settings > Battery and turn off Low Power Mode. Also ensure you have a stable internet connection when using Siri, as some shortcuts require network access to process.',
    keywords: ['siri', 'inconsistent', 'sometimes', 'intermittent', 'low power'],
  },
  {
    id: 'fpp-siri-5',
    app: 'FishingPalPro',
    category: 'Siri & Voice Control',
    question: 'Does FishingPalPro support Apple Watch?',
    answer:
      'Siri commands work on Apple Watch through iOS Siri integration. A dedicated Apple Watch app with complications and glanceable forecasts is on our development roadmap. We\'ll announce it when it\'s ready.',
    keywords: ['apple watch', 'watch', 'wrist', 'watchos', 'complication'],
  },

  // GPS & Maps
  {
    id: 'fpp-gps-1',
    app: 'FishingPalPro',
    category: 'GPS & Maps',
    question: 'How do I view my catch locations on the map?',
    answer:
      'Open any catch entry from the Catch Log and tap the map preview thumbnail to open the full-screen map view. You can also tap the Map tab (map pin icon in the bottom navigation) to see all your catch locations plotted at once across an interactive map.',
    keywords: ['map', 'gps', 'location', 'view', 'catch locations', 'pins'],
  },
  {
    id: 'fpp-gps-2',
    app: 'FishingPalPro',
    category: 'GPS & Maps',
    question: 'My GPS location in the app is inaccurate — what should I do?',
    answer:
      'Ensure "Precise Location" is enabled: iPhone Settings > Privacy & Security > Location Services > FishingPalPro > toggle "Precise Location" to ON. If you\'re indoors or in an area with poor signal, step outside briefly to acquire a better GPS lock. Also make sure "Set Automatically" is enabled at Settings > General > Date & Time.',
    keywords: ['gps', 'inaccurate', 'wrong location', 'precise', 'fix'],
  },
  {
    id: 'fpp-gps-3',
    app: 'FishingPalPro',
    category: 'GPS & Maps',
    question: 'Can I save favorite fishing spots?',
    answer:
      'Yes! On the Map tab, tap and hold any location on the map to drop a pin, then tap "Save as Favorite Spot" in the popup. You can give it a custom name. Your saved spots appear in the Favorites list and can be quickly selected when logging a catch.',
    keywords: ['favorite', 'saved', 'spot', 'pin', 'bookmark', 'location'],
  },
  {
    id: 'fpp-gps-4',
    app: 'FishingPalPro',
    category: 'GPS & Maps',
    question: 'Does FishingPalPro work offline?',
    answer:
      'The lunar prediction calculations work completely offline — no internet needed for fishing times. Weather data and satellite map imagery require an active internet connection. Previously fetched data may be cached briefly. For real-time weather accuracy, connect to WiFi or cellular before heading to the water.',
    keywords: ['offline', 'no internet', 'cellular', 'connection', 'works without'],
  },
  {
    id: 'fpp-gps-5',
    app: 'FishingPalPro',
    category: 'GPS & Maps',
    question: 'Can I share my catch location with fishing buddies?',
    answer:
      'Yes! Open any catch entry and tap the Share icon. This opens the iOS share sheet where you can send the catch details and GPS coordinates via Messages, email, AirDrop, or any other app. The shared content includes the location, fish species, weight, and date.',
    keywords: ['share', 'send', 'buddies', 'friends', 'location', 'catch'],
  },

  // Troubleshooting
  {
    id: 'fpp-trouble-1',
    app: 'FishingPalPro',
    category: 'Troubleshooting',
    question: 'FishingPalPro crashes when I open it — what should I do?',
    answer:
      'Work through these steps: (1) Force-close the app (swipe up from the bottom on Face ID iPhones, or double-press Home on older models, then swipe up on FishingPalPro). (2) Reopen the app. (3) If it still crashes, restart your iPhone (hold Side + Volume Down > Slide to power off). (4) If crashes continue, delete and reinstall FishingPalPro from the App Store — your subscription is safe and can be restored via Restore Purchases.',
    keywords: ['crash', 'crashing', 'force close', 'restart', 'open', 'freeze'],
  },
  {
    id: 'fpp-trouble-2',
    app: 'FishingPalPro',
    category: 'Troubleshooting',
    question: 'The app is very slow or freezes — how do I fix it?',
    answer:
      'Try these steps in order: (1) Force-close and reopen FishingPalPro. (2) Free up storage space — go to iPhone Settings > General > iPhone Storage and delete unused apps or media. (3) Restart your iPhone. (4) Make sure iOS is updated at Settings > General > Software Update. (5) Check if Low Power Mode is on (Settings > Battery) — turn it off for best app performance.',
    keywords: ['slow', 'freezes', 'lag', 'performance', 'unresponsive', 'stuck'],
  },
  {
    id: 'fpp-trouble-3',
    app: 'FishingPalPro',
    category: 'Troubleshooting',
    question: 'The app stopped working after an iOS update — what do I do?',
    answer:
      'iOS updates occasionally require apps to be reinstalled to register new system permissions. Delete FishingPalPro from your iPhone, then reinstall it from the App Store. After reinstalling, tap Restore Purchases to recover your subscription. All catch data stored locally will reload.',
    keywords: ['ios update', 'stopped working', 'after update', 'reinstall', 'update broke'],
  },
  {
    id: 'fpp-trouble-4',
    app: 'FishingPalPro',
    category: 'Troubleshooting',
    question: 'FishingPalPro asks for location permission every time I open it — how do I fix this?',
    answer:
      'This means the permission is set to "Ask Next Time." To make it permanent: go to iPhone Settings > Privacy & Security > Location Services > FishingPalPro > select "While Using App." The app will no longer prompt you for location access on each launch.',
    keywords: ['location permission', 'every time', 'keeps asking', 'prompt', 'permission'],
  },
  {
    id: 'fpp-trouble-5',
    app: 'FishingPalPro',
    category: 'Troubleshooting',
    question: 'I can\'t find FishingPalPro in the App Store — is it still available?',
    answer:
      'Yes, FishingPalPro is available on the App Store. Search for "FishingPalPro" as one word (no space). If you previously downloaded it, check your purchase history: App Store > tap your account icon > Purchased > search for FishingPalPro.',
    keywords: ['find', 'app store', 'missing', 'not there', 'search', 'purchase history'],
  },
  {
    id: 'fpp-trouble-6',
    app: 'FishingPalPro',
    category: 'Troubleshooting',
    question: 'The app crashes specifically when I try to log a catch with GPS enabled — what do I do?',
    answer:
      'This specific crash is usually caused by a GPS permission conflict. Try: (1) Go to iPhone Settings > Privacy & Security > Location Services > FishingPalPro and toggle the setting Off, then back to "While Using App." (2) Force-close and reopen the app. (3) Try logging a catch without enabling GPS first, then add the GPS tag afterward by tapping the location pin on the catch entry. If the crash persists, submit a support ticket with your iOS version and iPhone model.',
    keywords: ['crash', 'gps', 'log catch', 'location', 'save catch crash'],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // PLAYLISTAI
  // ─────────────────────────────────────────────────────────────────────────────

  // Getting Started
  {
    id: 'plai-gs-1',
    app: 'PlayListAI',
    category: 'Getting Started',
    question: 'What is PlayListAI and what does it do?',
    answer:
      'PlayListAI is an AI-powered playlist management app for Apple Music. It features MelodAI — your intelligent music assistant — who creates personalized playlists based on your mood, activity, or any theme you describe in plain language. It also supports Siri voice commands for hands-free playlist management.',
    keywords: ['what is', 'how does', 'description', 'overview', 'about', 'melodai'],
  },
  {
    id: 'plai-gs-2',
    app: 'PlayListAI',
    category: 'Getting Started',
    question: 'Do I need an Apple Music subscription to use PlayListAI?',
    answer:
      'Yes, an active Apple Music subscription is required to use PlayListAI. PlayListAI enhances your Apple Music experience by adding AI playlist generation and smart management tools — it doesn\'t replace or provide access to Apple Music independently.',
    keywords: ['apple music', 'required', 'subscription', 'need', 'work without'],
  },
  {
    id: 'plai-gs-3',
    app: 'PlayListAI',
    category: 'Getting Started',
    question: 'How do I connect my Apple Music library to PlayListAI?',
    answer:
      'When you first open PlayListAI, tap Allow when prompted for access to your Apple Music library. If you accidentally denied it: go to iPhone Settings > Privacy & Security > Media & Apple Music > PlayListAI and enable access. Then force-close and reopen the app.',
    keywords: ['connect', 'apple music', 'library', 'permission', 'access', 'link'],
  },
  {
    id: 'plai-gs-4',
    app: 'PlayListAI',
    category: 'Getting Started',
    question: 'What is MelodAI?',
    answer:
      'MelodAI is PlayListAI\'s built-in AI music assistant. Describe the playlist you want in natural language — "upbeat summer road trip songs," "mellow jazz for working from home," "90s hip-hop classics," or "songs similar to Taylor Swift" — and MelodAI builds a curated playlist for you in seconds.',
    keywords: ['melodai', 'ai', 'assistant', 'who is', 'what is', 'create playlist'],
  },
  {
    id: 'plai-gs-5',
    app: 'PlayListAI',
    category: 'Getting Started',
    question: 'Is PlayListAI available on iPad?',
    answer:
      'Yes! PlayListAI is compatible with iPhone and iPad running iOS/iPadOS 16.0 or later. The interface is optimized for both screen sizes.',
    keywords: ['ipad', 'compatible', 'tablet', 'device', 'ios version'],
  },

  // Subscription & Billing
  {
    id: 'plai-sub-1',
    app: 'PlayListAI',
    category: 'Subscription & Billing',
    question: 'What subscription plans does PlayListAI offer?',
    answer:
      'PlayListAI offers Monthly and Annual subscription plans. Premium unlocks unlimited AI playlist generation, advanced Siri voice commands, and full song search capabilities. Pricing is shown when you tap any premium feature in the app.',
    keywords: ['plan', 'subscription', 'monthly', 'annual', 'price', 'cost'],
  },
  {
    id: 'plai-sub-2',
    app: 'PlayListAI',
    category: 'Subscription & Billing',
    question: 'How do I subscribe to PlayListAI Premium?',
    answer:
      'Open PlayListAI and tap any premium feature — MelodAI AI generation, advanced search, or unlimited saves. Choose your plan (Monthly or Annual) on the subscription screen and confirm with your Apple ID. Premium features activate immediately.',
    keywords: ['subscribe', 'buy', 'purchase', 'premium', 'upgrade'],
  },
  {
    id: 'plai-sub-3',
    app: 'PlayListAI',
    category: 'Subscription & Billing',
    question: 'How do I restore my PlayListAI subscription?',
    answer:
      'Go to PlayListAI Settings (gear icon) and tap Restore Purchases. Make sure you\'re signed in with the same Apple ID used for the original purchase. The restore usually completes within a few seconds.',
    keywords: ['restore', 'lost', 'subscription', 'missing', 'recover'],
  },
  {
    id: 'plai-sub-4',
    app: 'PlayListAI',
    category: 'Subscription & Billing',
    question: 'How do I cancel my PlayListAI subscription?',
    answer:
      'Go to iPhone Settings > [Your Name] > Subscriptions > PlayListAI > Cancel Subscription. Your premium access continues until the end of the current billing period and you won\'t be charged again.',
    keywords: ['cancel', 'stop', 'unsubscribe', 'end', 'billing'],
  },
  {
    id: 'plai-sub-5',
    app: 'PlayListAI',
    category: 'Subscription & Billing',
    question: 'I subscribed but the app still shows the paywall — what do I do?',
    answer:
      'Tap Restore Purchases (found in Settings or on the paywall screen itself). If that doesn\'t help: (1) Force-close and reopen the app. (2) Sign out of your Apple ID at iPhone Settings > [Your Name] > Sign Out, then sign back in. (3) Tap Restore Purchases again. If still locked, submit a support ticket.',
    keywords: ['paywall', 'still locked', 'subscribed', 'not unlocked', 'premium'],
  },
  {
    id: 'plai-sub-6',
    app: 'PlayListAI',
    category: 'Subscription & Billing',
    question: 'How do I get a refund for PlayListAI?',
    answer:
      'All App Store purchases are handled by Apple. To request a refund, visit reportaproblem.apple.com, sign in with the Apple ID used for the purchase, find the PlayListAI charge, and select "Request a Refund." Apple typically responds within 48 hours.',
    keywords: ['refund', 'money back', 'billing', 'apple', 'charge'],
  },

  // AI Playlist Creation
  {
    id: 'plai-ai-1',
    app: 'PlayListAI',
    category: 'AI Playlist Creation',
    question: 'How do I create a playlist with MelodAI?',
    answer:
      'Tap the AI Create button (sparkle/wand icon) on the main screen. Type or speak your playlist description — any mood, activity, era, or genre works. Tap Generate and MelodAI builds your playlist in seconds. Review the songs, then tap Save Playlist to add it to your Apple Music library.',
    keywords: ['create playlist', 'melodai', 'generate', 'ai', 'how to', 'make playlist'],
  },
  {
    id: 'plai-ai-2',
    app: 'PlayListAI',
    category: 'AI Playlist Creation',
    question: 'What kinds of prompts work best with MelodAI?',
    answer:
      'The more descriptive the better. Great prompts: "Energetic workout songs from the 2000s," "Relaxing acoustic songs for a rainy afternoon," "Latin pop hits for a dinner party," "Classic rock guitar solos," or "Songs similar to The Weeknd and Drake." You can specify decade, tempo, mood, activity, or named artists as inspiration.',
    keywords: ['prompt', 'what to type', 'describe', 'examples', 'works best', 'suggestions'],
  },
  {
    id: 'plai-ai-3',
    app: 'PlayListAI',
    category: 'AI Playlist Creation',
    question: 'Why isn\'t my generated playlist appearing in Apple Music?',
    answer:
      'After MelodAI generates a playlist, you MUST tap Save Playlist for it to be added to your Apple Music library. Browsing the playlist in PlayListAI doesn\'t automatically save it. Also make sure Sync Library is on: iPhone Settings > Music > Sync Library.',
    keywords: ['not showing', 'apple music', 'not appearing', 'missing', 'save playlist', 'library'],
  },
  {
    id: 'plai-ai-4',
    app: 'PlayListAI',
    category: 'AI Playlist Creation',
    question: 'The Save Playlist button doesn\'t appear after generation — what do I do?',
    answer:
      'Scroll down on the generated playlist screen — the Save Playlist button may be below the song list and off-screen. If scrolling doesn\'t reveal it, force-close PlayListAI, reopen it, and generate the playlist again. This is a known display issue being addressed in an upcoming update.',
    keywords: ['save playlist', 'button missing', 'not visible', 'can\'t save', 'disappeared'],
  },
  {
    id: 'plai-ai-5',
    app: 'PlayListAI',
    category: 'AI Playlist Creation',
    question: 'Can I edit a playlist after MelodAI creates it?',
    answer:
      'Yes! On the generated playlist screen you can: swipe left on a song to remove it, tap the + button to add songs via search, or tap the MelodAI button again to regenerate with a modified or completely new prompt. Once saved to Apple Music, you can also edit it directly in the Apple Music app.',
    keywords: ['edit', 'modify', 'change', 'remove', 'add songs', 'playlist'],
  },
  {
    id: 'plai-ai-6',
    app: 'PlayListAI',
    category: 'AI Playlist Creation',
    question: 'MelodAI generated songs that show as unavailable — why?',
    answer:
      'MelodAI suggests songs based on its AI knowledge, but occasionally a suggested track may not be in your regional Apple Music catalog. Unavailable songs appear grayed out. You can remove them and tap "Fill Gaps" to have MelodAI suggest replacements that are available in your region.',
    keywords: ['unavailable', 'grayed out', 'not available', 'region', 'fill gaps', 'catalog'],
  },
  {
    id: 'plai-ai-7',
    app: 'PlayListAI',
    category: 'AI Playlist Creation',
    question: 'How many songs can MelodAI add to a playlist?',
    answer:
      'By default, MelodAI generates playlists of 20 songs. You can request a different count in your prompt — for example "give me a 30-song road trip playlist" or "short 10-song morning playlist." The playlist can also be expanded by adding songs manually after generation.',
    keywords: ['how many songs', 'count', 'number', 'songs in playlist', '20'],
  },

  // Song Search
  {
    id: 'plai-search-1',
    app: 'PlayListAI',
    category: 'Song Search',
    question: 'How do I search for songs in PlayListAI?',
    answer:
      'Tap the Search tab (magnifying glass icon) at the bottom of the screen. You can search by song title, artist name, album, or genre. Results pull from the full Apple Music catalog available in your region. Tap any result to add it to a playlist or play it.',
    keywords: ['search', 'find song', 'how to search', 'magnifying glass', 'song lookup'],
  },
  {
    id: 'plai-search-2',
    app: 'PlayListAI',
    category: 'Song Search',
    question: 'My song search returns no results — how do I fix it?',
    answer:
      'Try these steps: (1) Check your internet connection. (2) Verify Media & Apple Music access: iPhone Settings > Privacy & Security > Media & Apple Music > PlayListAI > Allow. (3) Force-close PlayListAI and reopen it. (4) If you briefly see results then they disappear, this is a known sync issue — delete and reinstall the app. (5) If the issue continues, submit a support ticket.',
    keywords: ['no results', 'search not working', 'empty', 'blank', 'search fails'],
  },
  {
    id: 'plai-search-3',
    app: 'PlayListAI',
    category: 'Song Search',
    question: 'Can I search by genre in PlayListAI?',
    answer:
      'Yes! Type any genre name in the search bar (Jazz, Classical, Hip-Hop, Country, Electronic, R&B, etc.) to browse songs in that category. You can also combine genre with era — "90s jazz" or "modern country" — for more targeted results.',
    keywords: ['genre', 'search', 'jazz', 'rock', 'country', 'filter'],
  },
  {
    id: 'plai-search-4',
    app: 'PlayListAI',
    category: 'Song Search',
    question: 'Some search results show a grayed-out lock icon — what does that mean?',
    answer:
      'A lock icon means the song requires an Apple Music subscription to play. If you have an Apple Music subscription but still see locks, verify it\'s active at iPhone Settings > [Your Name] > Subscriptions. Also check Music > Sync Library is enabled in iPhone Settings > Music.',
    keywords: ['lock icon', 'grayed out', 'locked', 'can\'t play', 'subscription'],
  },

  // Siri & Voice Commands (PlayListAI)
  {
    id: 'plai-siri-1',
    app: 'PlayListAI',
    category: 'Siri & Voice Commands',
    question: 'How do I set up Siri commands for PlayListAI?',
    answer:
      'Open PlayListAI > Settings > Siri Shortcuts. Tap each shortcut you want to enable and tap "Add to Siri." You can record a custom voice phrase for each command. Make sure PlayListAI is enabled in iPhone Settings > Siri & Search.',
    keywords: ['siri', 'setup', 'add to siri', 'shortcuts', 'voice commands', 'enable'],
  },
  {
    id: 'plai-siri-2',
    app: 'PlayListAI',
    category: 'Siri & Voice Commands',
    question: 'What Siri commands work with PlayListAI?',
    answer:
      'Available commands include: "Create a playlist in PlayListAI," "Play my [playlist name] playlist," "Search for [song or artist] in PlayListAI," and "Open PlayListAI." Additional custom shortcuts for any in-app action can be added via Settings > Siri Shortcuts.',
    keywords: ['siri', 'commands', 'what to say', 'list', 'phrases', 'available'],
  },
  {
    id: 'plai-siri-3',
    app: 'PlayListAI',
    category: 'Siri & Voice Commands',
    question: 'Siri says "PlayListAI isn\'t available" — how do I fix this?',
    answer:
      'Go to iPhone Settings > Siri & Search > scroll to PlayListAI and enable all toggles. If PlayListAI doesn\'t appear in the Siri & Search list, delete and reinstall the app. After reinstalling, go to PlayListAI > Settings > Siri Shortcuts and re-add your shortcuts.',
    keywords: ['siri', 'not available', 'doesn\'t know', 'not recognized', 'fix'],
  },
  {
    id: 'plai-siri-4',
    app: 'PlayListAI',
    category: 'Siri & Voice Commands',
    question: 'Can I use Siri to control music playback through PlayListAI?',
    answer:
      'Music playback is controlled through Apple Music, not directly through PlayListAI. Use standard Siri music commands ("Hey Siri, play my [playlist name]") which trigger playback via Apple Music. PlayListAI handles playlist creation and management; Apple Music handles playing.',
    keywords: ['playback', 'play music', 'control', 'siri', 'apple music', 'play'],
  },

  // Troubleshooting (PlayListAI)
  {
    id: 'plai-trouble-1',
    app: 'PlayListAI',
    category: 'Troubleshooting',
    question: 'PlayListAI crashes when I open it — what should I do?',
    answer:
      'Force-close the app, restart your iPhone, and reopen PlayListAI. If it continues to crash, delete and reinstall from the App Store. Your PlayListAI subscription is stored with Apple and is recovered via Restore Purchases. Apple Music playlists you\'ve saved are stored in Apple Music and unaffected.',
    keywords: ['crash', 'crashing', 'won\'t open', 'force close', 'restart'],
  },
  {
    id: 'plai-trouble-2',
    app: 'PlayListAI',
    category: 'Troubleshooting',
    question: 'MelodAI takes forever to generate a playlist — is something wrong?',
    answer:
      'MelodAI typically generates in 5–15 seconds on a good connection. If it spins for more than 30 seconds: (1) Check your internet connection. (2) Force-close and retry with a simpler prompt. (3) If it consistently times out, try switching from cellular to WiFi. Very long or complex prompts occasionally take longer — this is normal.',
    keywords: ['slow', 'taking long', 'loading', 'melodai', 'timeout', 'stuck'],
  },
  {
    id: 'plai-trouble-3',
    app: 'PlayListAI',
    category: 'Troubleshooting',
    question: 'My saved playlists disappeared from PlayListAI — where are they?',
    answer:
      'Playlists you saved are in your Apple Music library, not locally in PlayListAI. Open the Apple Music app and go to Library > Playlists. If they\'re not there either, check that Sync Library is on (iPhone Settings > Music > Sync Library) and give it a few minutes to sync.',
    keywords: ['disappeared', 'missing playlists', 'gone', 'saved playlists', 'lost'],
  },
  {
    id: 'plai-trouble-4',
    app: 'PlayListAI',
    category: 'Troubleshooting',
    question: 'PlayListAI can\'t access my Apple Music library even after I gave permission — help!',
    answer:
      'Go to iPhone Settings > Privacy & Security > Media & Apple Music > PlayListAI and confirm it shows "Allow." If it does, toggle it Off, wait 10 seconds, toggle it back On. Force-close PlayListAI and reopen it. Also check that your Apple Music subscription is active at iPhone Settings > [Your Name] > Subscriptions.',
    keywords: ['can\'t access', 'library', 'permission', 'apple music', 'denied'],
  },
  {
    id: 'plai-trouble-5',
    app: 'PlayListAI',
    category: 'Troubleshooting',
    question: 'Can PlayListAI manage Spotify playlists?',
    answer:
      'PlayListAI currently integrates exclusively with Apple Music. Spotify integration is one of our most-requested features and is on the development roadmap. We\'ll announce it via app update when it\'s available.',
    keywords: ['spotify', 'integration', 'other services', 'roadmap', 'not supported'],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // SLEUTHPRO
  // ─────────────────────────────────────────────────────────────────────────────

  // Getting Started
  {
    id: 'sp-gs-1',
    app: 'SleuthPro',
    category: 'Getting Started',
    question: 'What is SleuthPro and what does it do?',
    answer:
      'SleuthPro is a people search and public records investigation app for iOS. It gives you access to publicly available data to help you find people, verify identities, reconnect with family or old friends, and investigate background information. It is for personal, informational use only.',
    keywords: ['what is', 'description', 'about', 'overview', 'people search', 'investigation'],
  },
  {
    id: 'sp-gs-2',
    app: 'SleuthPro',
    category: 'Getting Started',
    question: 'What subscription tiers are available in SleuthPro?',
    answer:
      'SleuthPro offers three tiers: Basic (entry-level access to public records), Pro (expanded search capabilities and more detailed results), and Professional (full access to all data sources and unlimited searches). There is also a Deep Dive Investigation add-on purchase for comprehensive one-time reports.',
    keywords: ['tiers', 'subscription', 'basic', 'pro', 'professional', 'plans'],
  },
  {
    id: 'sp-gs-3',
    app: 'SleuthPro',
    category: 'Getting Started',
    question: 'What is the Deep Dive Investigation add-on?',
    answer:
      'Deep Dive Investigation is an optional one-time purchase add-on that generates the most comprehensive investigation report available for a specific person. It aggregates data from all public record sources and typically compiles in 30–60 seconds. Each Deep Dive purchase covers one specific search subject.',
    keywords: ['deep dive', 'investigation', 'addon', 'add-on', 'report', 'one time'],
  },
  {
    id: 'sp-gs-4',
    app: 'SleuthPro',
    category: 'Getting Started',
    question: 'Is SleuthPro legal to use?',
    answer:
      'Yes. SleuthPro only accesses publicly available information. It is for personal and informational use. Important: SleuthPro is NOT for use in employment screening, tenant screening, credit decisions, or any use governed by the Fair Credit Reporting Act (FCRA). Users must agree to the Terms of Service, which prohibit illegal or discriminatory use of results.',
    keywords: ['legal', 'allowed', 'lawful', 'fcra', 'terms of service', 'use'],
  },
  {
    id: 'sp-gs-5',
    app: 'SleuthPro',
    category: 'Getting Started',
    question: 'What iOS version does SleuthPro require?',
    answer:
      'SleuthPro requires iOS 16.0 or later for optimal performance. We recommend iOS 17 or newer for the best experience. Check your version at iPhone Settings > General > About > iOS Version.',
    keywords: ['ios', 'version', 'requirement', 'compatible', 'device'],
  },

  // Subscription & Billing (SleuthPro)
  {
    id: 'sp-sub-1',
    app: 'SleuthPro',
    category: 'Subscription & Billing',
    question: 'How do I subscribe to SleuthPro?',
    answer:
      'Open SleuthPro and tap any locked feature or the Subscribe button. Select your preferred tier (Basic, Pro, or Professional) and complete the purchase through your Apple ID. Your selected tier activates immediately.',
    keywords: ['subscribe', 'how to', 'purchase', 'buy', 'upgrade', 'tier'],
  },
  {
    id: 'sp-sub-2',
    app: 'SleuthPro',
    category: 'Subscription & Billing',
    question: 'How do I upgrade from Basic to Pro or Professional?',
    answer:
      'Go to SleuthPro > Settings > Subscription > Upgrade Plan. Select your new tier and confirm through Apple. Apple prorates the cost for any remaining days in your current billing period — you only pay the difference.',
    keywords: ['upgrade', 'basic to pro', 'tier', 'higher plan', 'professional'],
  },
  {
    id: 'sp-sub-3',
    app: 'SleuthPro',
    category: 'Subscription & Billing',
    question: 'How do I restore my SleuthPro subscription after reinstalling?',
    answer:
      'Open SleuthPro > Settings > Restore Purchases. Use the same Apple ID as your original purchase. Your subscription tier and any Deep Dive report history restore immediately.',
    keywords: ['restore', 'reinstall', 'lost', 'subscription', 'recover', 'missing'],
  },
  {
    id: 'sp-sub-4',
    app: 'SleuthPro',
    category: 'Subscription & Billing',
    question: 'My Deep Dive Report never generated after purchase — what happened?',
    answer:
      'First, check your internet connection and force-close/reopen the app — the report compiles in the background and can take up to 60 seconds. Go to SleuthPro > My Reports to see if it completed. If it\'s not there after 5 minutes, submit a support ticket with your Apple purchase receipt and the search details. Our team will verify the purchase and either regenerate the report or arrange a refund.',
    keywords: ['deep dive', 'not generated', 'purchase', 'report missing', 'spinner', 'didn\'t load'],
  },
  {
    id: 'sp-sub-5',
    app: 'SleuthPro',
    category: 'Subscription & Billing',
    question: 'How do I cancel my SleuthPro subscription?',
    answer:
      'Go to iPhone Settings > [Your Name] > Subscriptions > SleuthPro > Cancel Subscription. Your current tier access continues until the end of your billing period and you won\'t be charged again.',
    keywords: ['cancel', 'stop', 'end subscription', 'unsubscribe'],
  },
  {
    id: 'sp-sub-6',
    app: 'SleuthPro',
    category: 'Subscription & Billing',
    question: 'I was charged but my tier wasn\'t upgraded — what do I do?',
    answer:
      'First, try Restore Purchases in SleuthPro Settings. If your tier still doesn\'t reflect the upgrade, submit a support ticket and include your Apple receipt (screenshot from App Store > Account > Purchase History). We\'ll manually verify and update your account.',
    keywords: ['charged', 'not upgraded', 'tier wrong', 'billing issue', 'receipt'],
  },
  {
    id: 'sp-sub-7',
    app: 'SleuthPro',
    category: 'Subscription & Billing',
    question: 'How do I request a refund for a Deep Dive Report I didn\'t receive?',
    answer:
      'Visit reportaproblem.apple.com, sign in with the Apple ID used for the purchase, find the SleuthPro charge, and request a refund. You can also submit a support ticket with your receipt — we\'ll investigate and assist with the Apple refund process.',
    keywords: ['refund', 'deep dive', 'didn\'t receive', 'money back', 'apple', 'report'],
  },

  // Search Features
  {
    id: 'sp-search-1',
    app: 'SleuthPro',
    category: 'Search Features',
    question: 'How do I search for a person in SleuthPro?',
    answer:
      'From the home screen, tap New Search. Enter as much information as you have — first name, last name, city, state, age range, or phone number. More details improve accuracy and narrow the results. Tap Search to run the query. Results appear within seconds.',
    keywords: ['search', 'find person', 'how to', 'new search', 'start search'],
  },
  {
    id: 'sp-search-2',
    app: 'SleuthPro',
    category: 'Search Features',
    question: 'What information can SleuthPro find?',
    answer:
      'Depending on your subscription tier, SleuthPro may provide: full name and known aliases, current and previous addresses, phone numbers, email addresses, known relatives and associates, social media profiles, and general public record history. More detail is unlocked on Pro and Professional tiers.',
    keywords: ['what information', 'data', 'find', 'results', 'records', 'show'],
  },
  {
    id: 'sp-search-3',
    app: 'SleuthPro',
    category: 'Search Features',
    question: 'Why do some result fields show "Upgrade Required"?',
    answer:
      'Certain data fields are only available on higher subscription tiers. Basic shows a limited view, Pro expands to more detailed records, and Professional unlocks all available information. To see those fields, upgrade your plan in SleuthPro > Settings > Subscription > Upgrade Plan.',
    keywords: ['upgrade required', 'locked', 'tier', 'upgrade', 'more data'],
  },
  {
    id: 'sp-search-4',
    app: 'SleuthPro',
    category: 'Search Features',
    question: 'Why does my search return no results?',
    answer:
      'Try broadening your search — use first name and last name without a city, or try an alternate spelling of the name. Very common names may need extra detail like state or approximate age. If you\'re certain the person exists but there are no results, it likely means very limited public records exist for that individual.',
    keywords: ['no results', 'nothing found', 'empty', 'can\'t find', 'zero results'],
  },
  {
    id: 'sp-search-5',
    app: 'SleuthPro',
    category: 'Search Features',
    question: 'How current is the data in SleuthPro?',
    answer:
      'SleuthPro aggregates data from public record sources that update on their own schedules — some daily, some weekly, some monthly. The data reflects the most recently available public records but may not include changes from the past 30–90 days.',
    keywords: ['current', 'up to date', 'recent', 'old data', 'how fresh'],
  },
  {
    id: 'sp-search-6',
    app: 'SleuthPro',
    category: 'Search Features',
    question: 'Can I save search results?',
    answer:
      'Yes. On any search result, tap the Save or Bookmark icon to store it in My Reports. Saved reports are accessible anytime under the My Reports tab, even without an internet connection.',
    keywords: ['save', 'bookmark', 'my reports', 'saved results', 'store'],
  },
  {
    id: 'sp-search-7',
    app: 'SleuthPro',
    category: 'Search Features',
    question: 'How many searches can I perform?',
    answer:
      'Search limits depend on your tier: Basic has a limited monthly search quota, Pro offers significantly more searches per month, and Professional includes unlimited searches. You can view your current usage at SleuthPro > Settings > Search Quota.',
    keywords: ['search limit', 'quota', 'how many', 'unlimited', 'monthly'],
  },

  // Deep Dive Investigation
  {
    id: 'sp-dd-1',
    app: 'SleuthPro',
    category: 'Deep Dive Investigation',
    question: 'What\'s included in a Deep Dive Investigation report?',
    answer:
      'A Deep Dive report provides the most comprehensive data available from all public sources, including: full address history, all associated phone numbers, known relatives and associates, professional history, social media profiles, and all available public record data. The report typically compiles in 30–60 seconds.',
    keywords: ['deep dive', 'included', 'what\'s in', 'report', 'comprehensive', 'details'],
  },
  {
    id: 'sp-dd-2',
    app: 'SleuthPro',
    category: 'Deep Dive Investigation',
    question: 'My Deep Dive report shows N/A in some sections — is that normal?',
    answer:
      'Yes, this is completely normal. N/A means no publicly available records were found for that specific data category for this person. Not everyone has every type of public record. The completeness of a Deep Dive report depends entirely on what public records exist for the subject.',
    keywords: ['n/a', 'empty sections', 'incomplete', 'missing data', 'not available', 'normal'],
  },
  {
    id: 'sp-dd-3',
    app: 'SleuthPro',
    category: 'Deep Dive Investigation',
    question: 'Can I share or export my Deep Dive report?',
    answer:
      'Yes. On the report screen, tap the Share button to open the iOS share sheet. You can send the report via Messages, email, or save it as a PDF to your Files app. All saved reports are also accessible in the My Reports tab anytime.',
    keywords: ['share', 'export', 'pdf', 'send', 'report', 'download'],
  },
  {
    id: 'sp-dd-4',
    app: 'SleuthPro',
    category: 'Deep Dive Investigation',
    question: 'How many Deep Dive reports can I purchase?',
    answer:
      'Deep Dive is an à la carte add-on with no limit. Each purchase covers one investigation report for one specific search subject. You can buy as many Deep Dive reports as you need, independently of your subscription tier.',
    keywords: ['how many', 'limit', 'multiple', 'purchase again', 'à la carte'],
  },

  // Privacy & Legal (SleuthPro)
  {
    id: 'sp-priv-1',
    app: 'SleuthPro',
    category: 'Privacy & Legal',
    question: 'Can people tell if I searched for them in SleuthPro?',
    answer:
      'No. All searches are completely private. The subject of a search is never notified, and no record of your search is shared with the person you searched for.',
    keywords: ['private', 'anonymous', 'notified', 'see', 'know', 'searched'],
  },
  {
    id: 'sp-priv-2',
    app: 'SleuthPro',
    category: 'Privacy & Legal',
    question: 'My own information appears in SleuthPro — how do I remove it?',
    answer:
      'SleuthPro displays publicly available records data. We cannot modify public records directly, but we can submit data suppression requests to our data providers. Submit a support ticket identifying specifically what information appears and your full name — our team will initiate the data removal process.',
    keywords: ['remove', 'myself', 'own information', 'data removal', 'opt out', 'personal'],
  },
  {
    id: 'sp-priv-3',
    app: 'SleuthPro',
    category: 'Privacy & Legal',
    question: 'I found incorrect information in a SleuthPro search result — what do I do?',
    answer:
      'Submit a support ticket identifying the incorrect data. We can flag inaccuracies to our data providers for review and correction in future record updates. Please include the search subject\'s name and the specific data that appears to be incorrect.',
    keywords: ['incorrect', 'wrong', 'inaccurate', 'error', 'false information', 'report'],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // GENERAL (Applies to all apps)
  // ─────────────────────────────────────────────────────────────────────────────

  {
    id: 'gen-1',
    app: 'General',
    category: 'General',
    question: 'How do I restore a purchase after deleting and reinstalling an app?',
    answer:
      'Open the reinstalled app, go to Settings (gear icon), and tap Restore Purchases. Make sure you are signed in with the same Apple ID used for the original purchase. Your subscription activates immediately. This works for all three DreamTeamApps — FishingPalPro, PlayListAI, and SleuthPro.',
    keywords: ['restore', 'reinstall', 'deleted', 'lost', 'purchase', 'all apps'],
  },
  {
    id: 'gen-2',
    app: 'General',
    category: 'General',
    question: 'Where are my DreamTeamApps subscriptions managed?',
    answer:
      'All subscriptions are managed through Apple and your Apple ID — not through our apps directly. To view, modify, or cancel: go to iPhone Settings > [Your Name] > Subscriptions. You\'ll see all active App Store subscriptions including FishingPalPro, PlayListAI, and SleuthPro.',
    keywords: ['manage', 'subscriptions', 'apple', 'apple id', 'where', 'settings'],
  },
  {
    id: 'gen-3',
    app: 'General',
    category: 'General',
    question: 'How do I contact DreamTeamApps support?',
    answer:
      'You\'re already here! Submit a support ticket using the form on this page and our team will respond within 24 hours. You can also use the AI chat assistant (💬 button in the bottom-right corner) for instant answers to common questions.',
    keywords: ['contact', 'support', 'email', 'help', 'reach', 'team'],
  },
  {
    id: 'gen-4',
    app: 'General',
    category: 'General',
    question: 'How do I report a bug in one of the apps?',
    answer:
      'Submit a support ticket using the form on this page. Select the app and choose "🐛 Bug / Not Working" as the issue type. In the Details field, include: your iPhone model, iOS version, a description of what happened, and the steps to reproduce the issue. Screenshots are always helpful if you can attach them.',
    keywords: ['bug', 'report', 'issue', 'problem', 'not working', 'error'],
  },
  {
    id: 'gen-5',
    app: 'General',
    category: 'General',
    question: 'How long does it take to receive a response to a support ticket?',
    answer:
      'We aim to respond to all support tickets within 24 hours on business days. Complex issues (billing disputes, account recovery) may take up to 48 hours. You\'ll receive our reply at the email address you provided when submitting the ticket.',
    keywords: ['response time', 'how long', '24 hours', 'reply', 'wait'],
  },
  {
    id: 'gen-6',
    app: 'General',
    category: 'General',
    question: 'Are DreamTeamApps available on Android?',
    answer:
      'FishingPalPro, PlayListAI, and SleuthPro are currently iOS-only apps. Android versions are not available at this time but may be considered for future development.',
    keywords: ['android', 'google play', 'other platform', 'non-apple', 'cross platform'],
  },
]

export function getFAQsByApp(app: FAQ['app']): FAQ[] {
  return ALL_FAQS.filter(f => f.app === app)
}

export function getFAQsByCategory(app: FAQ['app'], category: string): FAQ[] {
  return ALL_FAQS.filter(f => f.app === app && f.category === category)
}

export function getCategories(app: FAQ['app']): string[] {
  const cats = ALL_FAQS.filter(f => f.app === app).map(f => f.category)
  return [...new Set(cats)]
}

export function searchFAQs(query: string, app?: FAQ['app']): FAQ[] {
  const q = query.toLowerCase()
  let pool = app ? ALL_FAQS.filter(f => f.app === app) : ALL_FAQS
  return pool.filter(f =>
    f.question.toLowerCase().includes(q) ||
    f.answer.toLowerCase().includes(q) ||
    f.keywords.some(k => k.toLowerCase().includes(q))
  )
}

export const APP_NAMES: FAQ['app'][] = ['FishingPalPro', 'PlayListAI', 'SleuthPro', 'General']
