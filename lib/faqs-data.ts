/**
 * Static FAQ database for all DreamTeamApps iOS applications.
 * Used by: the public FAQ page, the AI chat system prompt, and the admin FAQ view.
 * To add or update FAQs, edit this file and deploy.
 */

export interface FAQ {
  id: string
  app: 'FishingPalPro' | 'PlayListAI' | 'Search Quest' | 'SkinGuardAI' | 'GigStand' | 'General' | 'AppSupportDesk'
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
  // SEARCH QUEST
  // ─────────────────────────────────────────────────────────────────────────────

  // Getting Started
  {
    id: 'sq-gs-1',
    app: 'Search Quest',
    category: 'Getting Started',
    question: 'What is Search Quest?',
    answer: 'Search Quest is a people and contact lookup app for iOS. Search by name, phone number, email address, or physical address and get publicly available contact information — addresses, phone numbers, relatives, and social profiles — in a clean, easy-to-read report. It is for personal, informational use only.',
    keywords: ['what is', 'about', 'overview', 'people', 'contact', 'lookup', 'finder'],
  },
  {
    id: 'sq-gs-2',
    app: 'Search Quest',
    category: 'Getting Started',
    question: 'What devices does Search Quest run on?',
    answer: 'Search Quest runs on iPhone and iPad. Download it from the App Store and start with a 2-week free trial.',
    keywords: ['device', 'iphone', 'ipad', 'requirement', 'download'],
  },
  {
    id: 'sq-gs-3',
    app: 'Search Quest',
    category: 'Getting Started',
    question: 'What plans are available?',
    answer: 'Search Quest offers two plans: Basic for everyday lookups, and Pro for unlimited searches plus PDF export, alerts, and the full Siri suite. Both are billed through Apple (Monthly or Annual) and include a 2-week free trial.',
    keywords: ['plan', 'tier', 'basic', 'pro', 'price', 'subscription', 'free trial'],
  },

  // How to Search
  {
    id: 'sq-search-1',
    app: 'Search Quest',
    category: 'How to Search',
    question: 'How do I search for someone?',
    answer: 'On the Search tab, pick a search type — Name, Phone, Email, or Address — enter what you know, and tap Search. Adding more detail (such as a full name plus a state) returns more accurate matches.',
    keywords: ['how', 'search', 'name', 'phone', 'email', 'address', 'find'],
  },
  {
    id: 'sq-search-2',
    app: 'Search Quest',
    category: 'How to Search',
    question: 'How does reverse phone lookup work?',
    answer: 'Choose Phone as the search type and enter a 10-digit number including the area code. Search Quest returns the registered owner and public records associated with that number.',
    keywords: ['reverse', 'phone', 'number', 'caller', 'lookup'],
  },
  {
    id: 'sq-search-3',
    app: 'Search Quest',
    category: 'How to Search',
    question: 'Why are my search results limited or empty?',
    answer: 'Make sure you are connected to the internet, and add more detail to narrow the search. An active subscription is required to view full results. Public records can also lag 30 to 90 days behind real life.',
    keywords: ['no results', 'empty', 'limited', 'not found', 'missing'],
  },

  // Reading Your Report
  {
    id: 'sq-report-1',
    app: 'Search Quest',
    category: 'Reading Your Report',
    question: 'What information is in a report?',
    answer: 'Each report can include full name and aliases, age, current location, address history, phone numbers, email addresses, relatives, social media profiles, and employment history.',
    keywords: ['report', 'sections', 'contains', 'data', 'information'],
  },
  {
    id: 'sq-report-2',
    app: 'Search Quest',
    category: 'Reading Your Report',
    question: 'How do I save or share a report?',
    answer: 'Open any result and tap the bookmark icon to save it to your on-device Reports Vault (the Reports tab). Pro subscribers can also export a report as a PDF to share via AirDrop, Messages, or email.',
    keywords: ['save', 'share', 'export', 'pdf', 'reports vault'],
  },

  // Siri Voice
  {
    id: 'sq-siri-1',
    app: 'Search Quest',
    category: 'Siri Voice',
    question: 'How do I search hands-free with Siri?',
    answer: 'Say "Hey Siri," then a phrase that clearly contains "Search Quest," such as "Search Quest look up a person." Siri opens the app and asks for the details. You can also open your last report or have a report read aloud. Set up shortcuts in Account then Siri Voice Commands.',
    keywords: ['siri', 'voice', 'hands-free', 'shortcuts', 'speak'],
  },

  // Subscription & Billing
  {
    id: 'sq-bill-1',
    app: 'Search Quest',
    category: 'Subscription & Billing',
    question: 'How do I manage or cancel my subscription?',
    answer: 'Subscriptions are billed through Apple. Manage, upgrade, or cancel at iPhone Settings > [Your Name] > Subscriptions > Search Quest. Changes take effect at the end of the current billing period.',
    keywords: ['manage', 'cancel', 'subscription', 'billing', 'upgrade'],
  },
  {
    id: 'sq-bill-2',
    app: 'Search Quest',
    category: 'Subscription & Billing',
    question: 'How do I restore a purchase after reinstalling?',
    answer: 'Open the Account tab and tap Restore Purchases, using the same Apple ID you subscribed with. Your plan will be restored automatically.',
    keywords: ['restore', 'purchase', 'reinstall', 'apple id'],
  },

  // Alerts & Security
  {
    id: 'sq-alert-1',
    app: 'Search Quest',
    category: 'Alerts & Security',
    question: 'What are alerts?',
    answer: 'With a Pro subscription you can set an alert on a saved person and be notified when new information — such as an address or phone change — appears. Manage them in the Alerts tab.',
    keywords: ['alert', 'monitor', 'notify', 'watch'],
  },
  {
    id: 'sq-alert-2',
    app: 'Search Quest',
    category: 'Alerts & Security',
    question: 'Can I protect my saved reports?',
    answer: 'Yes. Enable Face ID or Touch ID in the Account tab and Search Quest will require biometric authentication when the app opens. Your history and saved reports are stored privately on your device.',
    keywords: ['face id', 'touch id', 'security', 'private', 'protect', 'biometric'],
  },

  // Privacy & Legal
  {
    id: 'sq-legal-1',
    app: 'Search Quest',
    category: 'Privacy & Legal',
    question: 'Is Search Quest legal to use, and is my search private?',
    answer: 'Search Quest compiles publicly available and licensed records for personal, informational use, and your searches are completely private — the person you look up is never notified. Search Quest is NOT a consumer reporting agency under the Fair Credit Reporting Act (FCRA), and its information may NOT be used for employment, tenant screening, credit, insurance, or any other FCRA-regulated purpose, or to stalk or harass anyone.',
    keywords: ['legal', 'fcra', 'privacy', 'private', 'permissible', 'notified'],
  },
  {
    id: 'sq-legal-2',
    app: 'Search Quest',
    category: 'Privacy & Legal',
    question: 'Will the person I search know about it?',
    answer: 'No. Searches are completely private and confidential. The subject of a search is never notified.',
    keywords: ['notified', 'private', 'anonymous', 'know'],
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
      'Open the reinstalled app, go to Settings (gear icon), and tap Restore Purchases. Make sure you are signed in with the same Apple ID used for the original purchase. Your subscription activates immediately. This works for all three DreamTeamApps — FishingPalPro, PlayListAI, and Search Quest.',
    keywords: ['restore', 'reinstall', 'deleted', 'lost', 'purchase', 'all apps'],
  },
  {
    id: 'gen-2',
    app: 'General',
    category: 'General',
    question: 'Where are my DreamTeamApps subscriptions managed?',
    answer:
      'All subscriptions are managed through Apple and your Apple ID — not through our apps directly. To view, modify, or cancel: go to iPhone Settings > [Your Name] > Subscriptions. You\'ll see all active App Store subscriptions including FishingPalPro, PlayListAI, and Search Quest.',
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
      'FishingPalPro, PlayListAI, and Search Quest are currently iOS-only apps. Android versions are not available at this time but may be considered for future development.',
    keywords: ['android', 'google play', 'other platform', 'non-apple', 'cross platform'],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // APPSUPPORTDESK — AGENT TRAINING & SYSTEM GUIDE
  // ─────────────────────────────────────────────────────────────────────────────

  // SECTION 1: SYSTEM OVERVIEW
  {
    id: 'asd-overview-1',
    app: 'AppSupportDesk',
    category: 'System Overview',
    question: 'What is AppSupport Desk and what is it used for?',
    answer: 'AppSupport Desk is the internal customer support management system for DreamTeamApps. It is used by support agents to receive, track, respond to, and resolve support tickets submitted by customers using FishingPalPro, PlayListAI, and Search Quest. The system also powers a public-facing customer portal where users can submit tickets and search the FAQ, and it includes an AI-assisted chatbot that automatically handles common questions 24/7 using the FAQ knowledge base.',
    keywords: ['overview', 'what is', 'system', 'purpose', 'appsupport', 'helpdesk'],
  },
  {
    id: 'asd-overview-2',
    app: 'AppSupportDesk',
    category: 'System Overview',
    question: 'What are the three main sections of AppSupport Desk?',
    answer: 'AppSupport Desk is divided into three main areas: (1) The Internal Dashboard — where agents manage tickets, view stats, and work with customer contacts. This is the main area agents use daily. (2) The Public Customer Portal — the page customers see when they visit the support site. They can submit tickets, chat with the AI assistant, and browse FAQs here. (3) The FAQ Knowledge Base — the database of questions and answers that powers both the public FAQ page and the AI chatbot. Keeping this database current and thorough is one of the most important ongoing tasks.',
    keywords: ['sections', 'areas', 'dashboard', 'portal', 'knowledge base', 'structure'],
  },
  {
    id: 'asd-overview-3',
    app: 'AppSupportDesk',
    category: 'System Overview',
    question: 'Which apps does DreamTeamApps currently support through AppSupport Desk?',
    answer: 'AppSupport Desk currently handles support for three iOS applications: FishingPalPro (a lunar-phase-based fishing forecast and catch logging app), PlayListAI (an AI-powered playlist creation and management app that works with both Apple Music and Spotify), and Search Quest (a people and contact lookup app). Each app has its own ticket category, FAQ section, and chatbot training data. When working a ticket, always confirm which app the customer is writing about before researching an answer.',
    keywords: ['apps', 'FishingPalPro', 'PlayListAI', 'Search Quest', 'DreamTeamApps', 'products'],
  },
  {
    id: 'asd-overview-4',
    app: 'AppSupportDesk',
    category: 'System Overview',
    question: 'Who has access to AppSupport Desk and how do I log in?',
    answer: 'AppSupport Desk is a private internal tool — access is restricted to authorized DreamTeamApps support agents. You will be provided with your login credentials by the system administrator. Navigate to the AppSupport Desk URL provided to you, enter your email and password on the login screen, and you will be taken directly to the dashboard. If you have trouble logging in or need a password reset, contact the administrator directly. Never share your login credentials with anyone.',
    keywords: ['login', 'access', 'credentials', 'password', 'sign in', 'agent'],
  },
  {
    id: 'asd-overview-5',
    app: 'AppSupportDesk',
    category: 'System Overview',
    question: 'What is the general daily workflow for a support agent?',
    answer: "A typical agent's daily workflow is: (1) Log in and check the Dashboard for new and open ticket counts. (2) Go to the Tickets section and filter by Open status — handle Urgent and High priority tickets first. (3) Read each ticket carefully, review the customer's history under Contacts if needed, and craft a thorough response. (4) Update the ticket status appropriately: In Progress, Pending, or Resolved. (5) At end of day, archive any tickets that are Closed and no longer need to be visible in the main list. (6) Check the chatbot conversation logs periodically — if a question comes up that is not in the FAQ, add it so the chatbot learns.",
    keywords: ['daily', 'workflow', 'routine', 'process', 'agent', 'tasks', 'steps'],
  },

  // SECTION 2: NAVIGATION & SIDEBAR
  {
    id: 'asd-nav-1',
    app: 'AppSupportDesk',
    category: 'Navigation & Sidebar',
    question: 'How do I navigate between sections in AppSupport Desk?',
    answer: 'The left sidebar is your main navigation. It contains links to: Dashboard (home screen with stats and recent activity), Tickets (the full ticket list), Contacts (customer directory), Archived (hidden/closed tickets), FAQ Database (internal knowledge base), Customer Portal (public support page), and Settings. Click any item in the sidebar to navigate to that section. The currently active section is highlighted.',
    keywords: ['navigate', 'sidebar', 'menu', 'sections', 'how to', 'navigation'],
  },
  {
    id: 'asd-nav-2',
    app: 'AppSupportDesk',
    category: 'Navigation & Sidebar',
    question: 'What does the number badge on the sidebar items mean?',
    answer: 'Colored number badges appear next to sidebar items to give you a quick status count at a glance. On the Tickets item, the badge shows the count of open, in-progress, and pending tickets that need attention. On the Archived item, the amber badge shows how many tickets are currently archived. These counts update automatically every time you navigate to a new section.',
    keywords: ['badge', 'count', 'number', 'sidebar', 'indicator', 'notification'],
  },
  {
    id: 'asd-nav-3',
    app: 'AppSupportDesk',
    category: 'Navigation & Sidebar',
    question: 'How do I filter and search the ticket list?',
    answer: 'At the top of the Tickets page there are two filter controls: (1) A search box — type any text to filter tickets by subject, customer name, or customer email in real time. (2) An App dropdown — select FishingPalPro, PlayListAI, or Search Quest to show only tickets for that app, or leave it on All Apps to see everything. You can combine both filters at the same time. The ticket count updates to reflect how many tickets match your current filters.',
    keywords: ['filter', 'search', 'find', 'tickets', 'app filter', 'narrow down'],
  },

  // SECTION 3: UNDERSTANDING TICKETS
  {
    id: 'asd-tickets-1',
    app: 'AppSupportDesk',
    category: 'Understanding Tickets',
    question: 'What is a support ticket?',
    answer: "A support ticket is a recorded customer request for help. When a customer submits a question or problem through the public portal, the system creates a ticket that captures: the customer's name and email, which app they are using, a subject line, a full description of their issue, the category type (Bug Report, Feature Request, Billing, Technical Issue, General Inquiry, etc.), and an automatically assigned priority level. Every ticket is assigned a unique ticket number for reference. The ticket remains in the system until it is resolved and archived.",
    keywords: ['ticket', 'what is', 'support request', 'definition', 'basics'],
  },
  {
    id: 'asd-tickets-2',
    app: 'AppSupportDesk',
    category: 'Understanding Tickets',
    question: 'What are the ticket status levels and what does each one mean?',
    answer: 'Every ticket has one of five statuses: (1) Open — the ticket has just been submitted and has not been looked at yet. Requires immediate attention. (2) In Progress — an agent is actively working on the ticket. (3) Pending — the agent has responded and is waiting for a reply from the customer. (4) Resolved — the issue has been fixed or the question has been fully answered. (5) Closed — the ticket is fully complete with no further action needed. Closed tickets are candidates for archiving.',
    keywords: ['status', 'open', 'in progress', 'pending', 'resolved', 'closed', 'meaning'],
  },
  {
    id: 'asd-tickets-3',
    app: 'AppSupportDesk',
    category: 'Understanding Tickets',
    question: 'What are the ticket priority levels and how are they determined?',
    answer: 'Tickets are assigned one of four priority levels: (1) Urgent — the customer cannot use the app at all, has been charged incorrectly, or the issue affects many users. Respond within 1-2 hours. (2) High — a major feature is broken or the customer is very frustrated. Respond within 4 hours. (3) Medium — a non-critical feature issue or general question. Respond within 24 hours. (4) Low — a minor cosmetic issue, general feedback, or a simple question. Respond within 48 hours.',
    keywords: ['priority', 'urgent', 'high', 'medium', 'low', 'response time', 'urgency'],
  },
  {
    id: 'asd-tickets-4',
    app: 'AppSupportDesk',
    category: 'Understanding Tickets',
    question: 'What are the ticket category types?',
    answer: 'Each ticket is filed under one of six categories: (1) Bug Report — something is not working as intended. (2) Feature Request — the customer wants a new feature added. (3) Billing — subscription, payment, or refund issues. Always handle with highest care. (4) Technical Issue — app crashes, performance problems, or device-specific behavior. (5) Account — login problems, password resets, or subscription access. (6) General Inquiry — questions about how the app works. The FAQ chatbot handles most of these automatically.',
    keywords: ['category', 'bug report', 'feature request', 'billing', 'technical', 'account', 'general'],
  },
  {
    id: 'asd-tickets-5',
    app: 'AppSupportDesk',
    category: 'Understanding Tickets',
    question: 'What information should I look for when first reading a new ticket?',
    answer: "When reading a new ticket, check these things in order: (1) Which app is it for? (2) What is the customer's actual problem — read the full description, not just the subject line. (3) What device and iOS version are they on, if mentioned? (4) Have they tried any troubleshooting steps already? (5) Is this a billing issue or a technical issue? (6) What is the urgency — are they blocked from using the app entirely? (7) Check the Contacts section for this customer's email to see if they have had previous tickets.",
    keywords: ['reading', 'new ticket', 'what to look for', 'assess', 'context', 'first steps'],
  },
  {
    id: 'asd-tickets-6',
    app: 'AppSupportDesk',
    category: 'Understanding Tickets',
    question: 'Can a customer submit more than one ticket?',
    answer: "Yes — a customer can submit as many tickets as they need. All tickets from the same email address are linked in the Contacts section. If you see multiple open tickets from the same customer about the same issue, it usually means they did not hear back fast enough and submitted again. Consolidate your response to the most recent ticket and close or archive the duplicate(s). Always acknowledge in your reply that you saw multiple messages.",
    keywords: ['multiple tickets', 'duplicate', 'same customer', 'submitted twice', 'history'],
  },

  // SECTION 4: MANAGING TICKETS
  {
    id: 'asd-manage-1',
    app: 'AppSupportDesk',
    category: 'Managing Tickets',
    question: 'How do I change the status of a ticket?',
    answer: 'Open the ticket by clicking on it. In the detail view, find the Status field — click on it to open a dropdown and select the new status. Save the change. Best practice: change status to In Progress as soon as you begin working on a ticket so other agents know it is being handled. Change to Pending after you reply and are waiting for the customer. Change to Resolved once the issue is fixed or fully answered.',
    keywords: ['change status', 'update status', 'how to', 'in progress', 'resolved', 'status change'],
  },
  {
    id: 'asd-manage-2',
    app: 'AppSupportDesk',
    category: 'Managing Tickets',
    question: 'When should I mark a ticket as Resolved versus Closed?',
    answer: 'Use Resolved when you have provided a complete answer or fix and want to give the customer a short window to confirm. After 3-5 days with no reply from the customer, change the ticket to Closed. Use Closed when a ticket is definitively done — the customer confirmed it is fixed, or it was a feature request with no further action needed. A Closed ticket is the most appropriate candidate for archiving to keep the main list clean.',
    keywords: ['resolved', 'closed', 'difference', 'when to', 'resolve', 'close', 'done'],
  },
  {
    id: 'asd-manage-3',
    app: 'AppSupportDesk',
    category: 'Managing Tickets',
    question: 'How do I handle a billing or refund issue?',
    answer: 'Billing and refund tickets require special care. Steps: (1) Set priority to High or Urgent immediately. (2) Verify the app they purchased. (3) Remind them that all payments are processed by Apple — DreamTeamApps does not have access to their payment information. (4) Direct them to request a refund at reportaproblem.apple.com — sign in with their Apple ID, select the app, choose a reason, and submit. Apple typically processes refund decisions within 24-48 hours. (5) If charged multiple times, ask them to check Settings > [Their Name] > Subscriptions.',
    keywords: ['billing', 'refund', 'charge', 'payment', 'subscription', 'money', 'Apple', 'reportaproblem'],
  },
  {
    id: 'asd-manage-4',
    app: 'AppSupportDesk',
    category: 'Managing Tickets',
    question: 'How do I handle a feature request ticket?',
    answer: 'Feature requests are valuable. When you receive one: (1) Thank the customer genuinely. (2) Tell them the suggestion has been passed to the development team. (3) Do NOT promise it will be built or give a timeline. (4) If the feature already exists, walk them through how to use it. (5) Add an internal note with the feature description for developer review. (6) Set the ticket to Closed after your reply. Feature request tickets do not stay open — they are captured and closed.',
    keywords: ['feature request', 'new feature', 'suggestion', 'idea', 'request', 'handle'],
  },
  {
    id: 'asd-manage-5',
    app: 'AppSupportDesk',
    category: 'Managing Tickets',
    question: 'What should I do if I cannot reproduce or understand the customer issue?',
    answer: "If you cannot reproduce the issue or the description is unclear, set the ticket status to Pending and reply asking for more information. Helpful things to ask for: the specific steps they took before the problem occurred, their iPhone model and iOS version (Settings > General > About), whether the issue happens every time or randomly, and if possible a screenshot of the error. Be friendly and explain why you are asking — customers respond better when they understand it will help solve their problem faster.",
    keywords: ['cannot reproduce', 'unclear', 'more information', 'ask customer', 'reproduce'],
  },

  // SECTION 5: ARCHIVING & DELETION
  {
    id: 'asd-archive-1',
    app: 'AppSupportDesk',
    category: 'Archiving & Deletion',
    question: 'What is the difference between archiving and deleting a ticket?',
    answer: 'Archiving hides a ticket from the main ticket list but keeps it permanently in the system. Archived tickets can be viewed, searched, restored, and referenced at any time — nothing is lost. Deleting a ticket permanently removes it from the database with no recovery possible. As a general rule: archive Closed tickets to keep the main list clean, and only permanently delete tickets that are clearly spam, test submissions, or contain no useful information. When in doubt, archive rather than delete.',
    keywords: ['archive', 'delete', 'difference', 'hide', 'permanent', 'remove', 'restore'],
  },
  {
    id: 'asd-archive-2',
    app: 'AppSupportDesk',
    category: 'Archiving & Deletion',
    question: 'How do I archive a ticket?',
    answer: 'From the main Tickets list, hover over any ticket row and an archive button will appear on the right side. Click it to archive the ticket. The ticket immediately disappears from the main list and moves to the Archived section in the sidebar. Only archive tickets that are Closed or fully Resolved with no further action needed.',
    keywords: ['how to archive', 'archive button', 'hide ticket', 'move to archive'],
  },
  {
    id: 'asd-archive-3',
    app: 'AppSupportDesk',
    category: 'Archiving & Deletion',
    question: 'How do I restore an archived ticket back to the main ticket list?',
    answer: 'Go to the Archived section in the sidebar. Find the ticket you want to restore. On the right side of the ticket row, click the Restore button (circular arrow icon). The ticket will immediately move back to the main Tickets list with its original status, priority, and all notes intact. This is useful if a customer re-contacts you about a previously closed issue.',
    keywords: ['restore', 'unarchive', 'bring back', 'move back', 'restore ticket'],
  },
  {
    id: 'asd-archive-4',
    app: 'AppSupportDesk',
    category: 'Archiving & Deletion',
    question: 'How do I permanently delete a ticket and when should I do it?',
    answer: 'From the Archived Tickets page, click the Delete button (trash can icon) on any archived ticket. A confirmation dialog will appear — you must confirm before the deletion proceeds. Once confirmed, the ticket and all its notes are permanently removed and cannot be recovered. Only permanently delete tickets that are: clearly spam or test submissions, accidentally created duplicates, or contain no useful historical information. For all real customer interactions, use archive instead of delete so you have a record.',
    keywords: ['permanently delete', 'delete ticket', 'trash', 'remove forever', 'when to delete'],
  },

  // SECTION 6: CONTACTS & CUSTOMER HISTORY
  {
    id: 'asd-contacts-1',
    app: 'AppSupportDesk',
    category: 'Contacts & Customer History',
    question: 'What is the Contacts section and how is it used?',
    answer: "The Contacts section is an automatically maintained directory of every customer who has ever submitted a support ticket. You do not need to manually add contacts — the system creates a contact record the first time a customer submits a ticket. Each contact record shows: their name, email address, which apps they have contacted support about, their full ticket history, and the total number of tickets they have submitted. Use Contacts to look up a customer's history before responding to a ticket.",
    keywords: ['contacts', 'customer', 'directory', 'history', 'customer record'],
  },
  {
    id: 'asd-contacts-2',
    app: 'AppSupportDesk',
    category: 'Contacts & Customer History',
    question: 'Why should I check a customer contact history before responding?',
    answer: "Checking contact history before replying prevents you from: giving advice you already gave them on a previous ticket, missing context about an ongoing issue, overlooking a pattern (a customer who has had the same crash three times likely has a device or settings issue needing a deeper solution), and appearing uninformed when the customer references a previous conversation. A 30-second history check can make the difference between a one-reply resolution and a frustrating back-and-forth.",
    keywords: ['why check', 'history', 'previous tickets', 'context', 'repeat customer'],
  },
  {
    id: 'asd-contacts-3',
    app: 'AppSupportDesk',
    category: 'Contacts & Customer History',
    question: 'Can customers see their own ticket history through the portal?',
    answer: 'Currently the customer portal allows customers to submit new tickets and browse the FAQ — they do not have a personal account login to view their previous tickets. If a customer asks about the status of a previous ticket, they will need to contact support again and provide their ticket number or the email address they used. You can then look up their history in Contacts and update them directly.',
    keywords: ['customer portal', 'ticket history', 'customer login', 'view my tickets', 'status check'],
  },

  // SECTION 7: DASHBOARD & STATISTICS
  {
    id: 'asd-dash-1',
    app: 'AppSupportDesk',
    category: 'Dashboard & Statistics',
    question: 'What does the Dashboard show?',
    answer: 'The Dashboard is your home screen and gives you an instant overview of the support operation. It displays: total ticket counts broken down by status (Open, In Progress, Pending, Resolved, Closed), a ticket count by app (how many tickets each app has received), recent ticket activity, and any urgent tickets that need immediate attention. Check the Dashboard every time you log in to understand the current state before diving into the ticket list.',
    keywords: ['dashboard', 'home screen', 'overview', 'stats', 'counts'],
  },
  {
    id: 'asd-dash-2',
    app: 'AppSupportDesk',
    category: 'Dashboard & Statistics',
    question: 'Why might the ticket counts on the dashboard seem higher than expected?',
    answer: 'If counts seem unexpectedly high, the most likely reasons are: (1) A recent app update caused a new wave of bug reports. (2) Archived tickets are not included in dashboard counts — if you have not been archiving closed tickets regularly, the active counts may be inflated with stale tickets. Make a habit of archiving Closed tickets weekly to keep counts accurate. (3) Duplicate tickets from the same customer submitting multiple times.',
    keywords: ['high count', 'inflated', 'counts wrong', 'too many', 'dashboard count'],
  },

  // SECTION 8: AI CHATBOT SYSTEM
  {
    id: 'asd-chatbot-1',
    app: 'AppSupportDesk',
    category: 'AI Chatbot System',
    question: 'How does the AI chatbot work?',
    answer: "The AI chatbot on the public customer portal is powered by OpenAI's GPT model combined with the AppSupport Desk FAQ knowledge base. When a customer types a question, the chatbot searches the FAQ database for matching answers using keyword matching and semantic understanding. It then generates a natural, conversational response based on that content. The chatbot is available 24/7 and handles the majority of common questions automatically — reducing the number of tickets agents need to manually respond to.",
    keywords: ['chatbot', 'AI', 'how does it work', 'automated', 'bot', 'artificial intelligence'],
  },
  {
    id: 'asd-chatbot-2',
    app: 'AppSupportDesk',
    category: 'AI Chatbot System',
    question: 'What happens when the chatbot cannot answer a customer question?',
    answer: 'When the chatbot cannot find a relevant answer in the FAQ database, it tells the customer it does not have enough information and encourages them to submit a support ticket for personalized help. The customer is then directed to the ticket submission form. This handoff from bot to human agent is intentional — the chatbot handles easy questions so agents can focus on complex or unique issues.',
    keywords: ['chatbot fail', 'cannot answer', 'escalate', 'handoff', 'fallback', 'no answer'],
  },
  {
    id: 'asd-chatbot-3',
    app: 'AppSupportDesk',
    category: 'AI Chatbot System',
    question: 'How do I improve the chatbot ability to answer questions?',
    answer: "The chatbot's quality is directly tied to the FAQ knowledge base. To improve it: (1) When you receive a ticket about a question the chatbot could not answer, add that question and answer to the FAQ after resolving the ticket. (2) Review existing FAQ answers for accuracy — outdated answers make the chatbot give wrong information. (3) Add strong keywords to each FAQ entry. (4) Write FAQ answers in plain, conversational language — the chatbot reproduces the tone of the answer, so robotic text produces robotic responses.",
    keywords: ['improve chatbot', 'better answers', 'train chatbot', 'update FAQ', 'chatbot quality'],
  },
  {
    id: 'asd-chatbot-4',
    app: 'AppSupportDesk',
    category: 'AI Chatbot System',
    question: 'What is the API key used for in the chatbot and why is it never stored in code?',
    answer: "The chatbot uses an OpenAI API key to send customer messages to the GPT model and receive AI-generated responses. This key is a paid credential — anyone who has it can charge API usage to the DreamTeamApps account. For this reason the API key is NEVER stored in the code files or committed to GitHub. It is stored exclusively in Vercel environment variables, which are encrypted and accessible only to the deployed application. If you ever see an API key in a code file, report it to the administrator immediately.",
    keywords: ['API key', 'OpenAI', 'security', 'environment variable', 'Vercel', 'never in code'],
  },

  // SECTION 9: FAQ KNOWLEDGE BASE MANAGEMENT
  {
    id: 'asd-faq-1',
    app: 'AppSupportDesk',
    category: 'FAQ Knowledge Base',
    question: 'What makes a good FAQ answer for the knowledge base?',
    answer: 'A high-quality FAQ answer: (1) Fully answers the question — do not end with contact support if you can provide the answer yourself. (2) Includes specific steps where applicable — numbered instructions are more helpful than vague descriptions. (3) Uses natural, friendly language. (4) Anticipates follow-up questions. (5) Is accurate and up to date — stale answers actively mislead customers. (6) Has keywords that include every word a customer might use when searching, including synonyms.',
    keywords: ['good FAQ', 'quality', 'writing tips', 'best answer', 'FAQ writing'],
  },
  {
    id: 'asd-faq-2',
    app: 'AppSupportDesk',
    category: 'FAQ Knowledge Base',
    question: 'How often should the FAQ knowledge base be reviewed and updated?',
    answer: 'The FAQ knowledge base should be reviewed at least once per month. Specifically: (1) After every app update — new features need FAQ coverage and old answers about changed features need updating. (2) After any surge in a particular ticket type — if 10 customers asked about the same thing this week, that question belongs in the FAQ. (3) When a customer reports that the chatbot gave wrong or outdated information — fix that entry immediately. Treat the FAQ as a living document, not a one-time project.',
    keywords: ['FAQ review', 'update frequency', 'maintain FAQ', 'keep current', 'review schedule'],
  },

  // SECTION 10: RESPONSE GUIDELINES & TONE
  {
    id: 'asd-tone-1',
    app: 'AppSupportDesk',
    category: 'Response Guidelines & Tone',
    question: 'What tone should I use when responding to customers?',
    answer: 'DreamTeamApps is a small independent developer and customers respond very well to a personal, human tone. Guidelines: (1) Be warm and friendly — start with a greeting and use the customer first name. (2) Be empathetic — if something is broken or they are frustrated, acknowledge it before jumping to solutions. (3) Be clear and specific — avoid technical jargon unless the customer is clearly technical. (4) Be honest — if you do not know the answer, say so and tell them you will find out. (5) Be concise — short paragraphs are easier to read. (6) Never be defensive or dismissive.',
    keywords: ['tone', 'response style', 'professional', 'friendly', 'how to respond', 'communication'],
  },
  {
    id: 'asd-tone-2',
    app: 'AppSupportDesk',
    category: 'Response Guidelines & Tone',
    question: 'How do I handle an angry or upset customer?',
    answer: "Angry customers require extra care. Approach: (1) Start by acknowledging their frustration specifically — I completely understand how frustrating this is, and I am sorry for the trouble. Do not skip this step. (2) Do not argue or correct them immediately even if they are wrong — address their feelings first, then the facts. (3) Focus on what you CAN do, not what you cannot. (4) If they are demanding a refund, direct them to Apple's refund process at reportaproblem.apple.com. (5) If a customer is abusive, you may close the ticket and document the reason in an internal note.",
    keywords: ['angry customer', 'upset', 'frustrated', 'rude', 'handle', 'conflict', 'difficult'],
  },
  {
    id: 'asd-tone-3',
    app: 'AppSupportDesk',
    category: 'Response Guidelines & Tone',
    question: 'What is the expected response time for each priority level?',
    answer: 'Response time targets by priority: Urgent — within 1-2 hours. High — within 4 hours. Medium — within 24 hours (by the next business day). Low — within 48 hours. These are targets, not guarantees, but consistency in response time is one of the biggest factors in customer satisfaction. If you know you will miss a target, send a brief acknowledgment reply so the customer knows their ticket was received and is being looked at.',
    keywords: ['response time', 'how long', 'reply time', 'SLA', 'target', 'expected', 'timing'],
  },
  {
    id: 'asd-tone-4',
    app: 'AppSupportDesk',
    category: 'Response Guidelines & Tone',
    question: 'What should I never say or promise in a customer response?',
    answer: 'Never say or promise: (1) We will fix this in the next update — only the developer can commit to a fix timeline. (2) We will give you a refund — refunds go through Apple, not DreamTeamApps. (3) This has never happened before — it may well have. (4) That is not a bug, that is a feature — even if true, it sounds dismissive. (5) I do not know without a follow-up — always add but I will find out and get back to you. (6) Any response that implies the customer is at fault for the issue.',
    keywords: ['never say', 'avoid', 'do not promise', 'what not to say', 'mistakes'],
  },
  {
    id: 'asd-tone-5',
    app: 'AppSupportDesk',
    category: 'Response Guidelines & Tone',
    question: 'How do I close out a resolved ticket professionally?',
    answer: "When closing a resolved ticket, send a closing message that: (1) Confirms what was done or what the solution was. (2) Invites the customer to contact support again if the issue returns. (3) Asks them to consider leaving a review on the App Store if they are satisfied — positive reviews help the app greatly. Example: I am glad we got that sorted out! If anything else comes up, do not hesitate to reach back out. If you are enjoying the app, we would really appreciate a rating on the App Store. Then set the ticket to Resolved.",
    keywords: ['close ticket', 'closing message', 'resolved reply', 'final message', 'App Store review'],
  },

  // SECTION 11: COMMON SUPPORT SCENARIOS
  {
    id: 'asd-scenario-1',
    app: 'AppSupportDesk',
    category: 'Common Support Scenarios',
    question: 'A customer subscribed but still sees the free version — what do I do?',
    answer: "This is a very common issue. Walk the customer through these steps: (1) Force-quit the app and reopen it. (2) Open iPhone Settings > [Their Name] > Subscriptions — confirm the subscription shows as Active. (3) Inside the app, go to Settings or Account > Restore Purchases. (4) Ensure the device is connected to the internet. (5) Sign out of their Apple ID in Settings and sign back in, then reopen the app. If none of these work, ask them to delete and reinstall the app — their subscription is tied to their Apple ID, not the app install, so reinstalling does not cancel it.",
    keywords: ['subscribed', 'still free', 'premium not working', 'subscription not showing', 'restore purchases'],
  },
  {
    id: 'asd-scenario-2',
    app: 'AppSupportDesk',
    category: 'Common Support Scenarios',
    question: 'A customer wants to cancel their subscription — what steps do I give them?',
    answer: 'DreamTeamApps does not process subscription cancellations directly — all subscriptions are managed through Apple. Give the customer these steps: (1) Open iPhone Settings. (2) Tap their name at the top. (3) Tap Subscriptions. (4) Find and tap the app subscription. (5) Tap Cancel Subscription and confirm. The subscription will remain active until the end of the current billing period — they will NOT lose access immediately. Also let them know that canceling does not delete their data — if they resubscribe later, everything is still there.',
    keywords: ['cancel subscription', 'how to cancel', 'stop subscription', 'unsubscribe', 'turn off auto-renew'],
  },
  {
    id: 'asd-scenario-3',
    app: 'AppSupportDesk',
    category: 'Common Support Scenarios',
    question: 'A customer reports the app crashes immediately on opening — how do I respond?',
    answer: 'For an app that crashes on launch, gather this information first: (1) iPhone model and iOS version (Settings > General > About). (2) App version — visible in the App Store on the app page next to Version. (3) When did it start — after an app update, iOS update, or randomly? (4) Have they tried deleting and reinstalling? Once you have this: if it started after a specific update, escalate to the developer with those details. If it is an isolated case, have them delete the app, restart the iPhone fully, and reinstall from the App Store.',
    keywords: ['crash', 'app crash', 'crashes on open', 'launch crash', 'not opening'],
  },
  {
    id: 'asd-scenario-4',
    app: 'AppSupportDesk',
    category: 'Common Support Scenarios',
    question: 'A customer Siri commands are not working — what are the troubleshooting steps?',
    answer: "For Siri not working with DreamTeamApps: (1) Check that Siri is enabled: Settings > Siri & Search. (2) Check that the specific app has Siri permission: Settings > Siri & Search > scroll to the app name — ensure Use with Siri is toggled on. (3) Make sure the app has been opened at least once after the latest update. (4) Try asking Siri using exact phrases from the app's help guide. (5) If on iOS 17 or later, try deleting the app and reinstalling to re-register App Intents. (6) Restart the iPhone fully.",
    keywords: ['Siri not working', 'voice command', 'Siri broken', 'Hey Siri', 'Siri permission'],
  },

  // SECTION 12: ESCALATION GUIDE
  {
    id: 'asd-escalate-1',
    app: 'AppSupportDesk',
    category: 'Escalation Guide',
    question: 'When should I escalate a ticket to the administrator?',
    answer: 'Escalate a ticket to the administrator when: (1) The customer is reporting a crash or bug that appears to affect multiple customers. (2) A billing dispute cannot be resolved through normal Apple refund channels. (3) The customer is threatening legal action or filing a chargeback dispute. (4) An app feature is fundamentally broken and troubleshooting steps cannot fix it. (5) You need confirmation of a technical detail before answering. (6) A customer is requesting a feature change or business policy decision. When escalating, add an internal note with a complete summary of what you tried.',
    keywords: ['escalate', 'when to escalate', 'administrator', 'escalation', 'involve developer'],
  },
  {
    id: 'asd-escalate-2',
    app: 'AppSupportDesk',
    category: 'Escalation Guide',
    question: 'What is considered a critical issue that requires immediate escalation?',
    answer: 'Critical issues requiring immediate escalation are: (1) The app is completely unavailable or the App Store listing was removed. (2) Multiple customers are reporting the same new crash simultaneously — this indicates a server-side or API issue. (3) A security vulnerability is reported — for example a customer can see another user data. (4) The AI chatbot or public portal is down. (5) Payment processor errors that affect all subscribers. For any of these, contact the administrator immediately by the fastest available means — do not wait for them to check the ticket system.',
    keywords: ['critical', 'emergency', 'immediate', 'urgent escalation', 'outage', 'major bug'],
  },
  {
    id: 'asd-escalate-3',
    app: 'AppSupportDesk',
    category: 'Escalation Guide',
    question: 'What should I do if I am new and unsure whether to escalate a ticket?',
    answer: 'When in doubt, escalate — it is always better to involve the administrator on a difficult ticket than to give a customer wrong information or an incomplete solution. As a new agent, a good rule of thumb is: if your troubleshooting steps did not solve the issue after two exchanges with the customer, escalate. If the answer involves a promise about billing, refunds, or app functionality that you are not certain about, escalate. There is no penalty for escalating too often during your first weeks — it is the right instinct.',
    keywords: ['new agent', 'unsure', 'escalate or not', 'when in doubt', 'guidance', 'first weeks'],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // SKINGUARDAI
  // ─────────────────────────────────────────────────────────────────────────────

  {
    id: 'sga-gs-1',
    app: 'SkinGuardAI',
    category: 'Getting Started',
    question: 'What is SkinGuardAI and what does it do?',
    answer:
      'SkinGuardAI is an AI-powered skin-health tracking app for iPhone. You photograph a mole or skin spot and receive an instant AI risk assessment, then track that spot over time on a visual body map. It is designed to help you stay aware of changes and know when it may be time to see a dermatologist. SkinGuardAI is for informational and tracking purposes only and is not a medical diagnosis.',
    keywords: ['what is', 'about', 'overview', 'skin', 'mole', 'description'],
  },
  {
    id: 'sga-gs-2',
    app: 'SkinGuardAI',
    category: 'Getting Started',
    question: 'How do I get started with SkinGuardAI?',
    answer:
      'Download SkinGuardAI from the App Store and open it. Complete the short onboarding, then allow camera access so you can scan a mole or skin spot. Tap Scan, capture a clear photo in good light, and the app returns an AI risk assessment. You can begin with a free trial or subscribe to unlock unlimited scans and full tracking.',
    keywords: ['start', 'setup', 'begin', 'download', 'install', 'new'],
  },
  {
    id: 'sga-scan-1',
    app: 'SkinGuardAI',
    category: 'Scanning & Analysis',
    question: 'How do I scan a mole?',
    answer:
      'Tap Scan on the dashboard, allow camera access if prompted, and frame the mole in good even lighting. Hold the phone steady about six to eight inches away and capture the photo. The image is sent securely for AI analysis and a risk result is returned within a few seconds. For best results, avoid shadows, glare, and blur, and keep the spot centered.',
    keywords: ['scan', 'photo', 'camera', 'capture', 'mole', 'how to'],
  },
  {
    id: 'sga-scan-2',
    app: 'SkinGuardAI',
    category: 'Scanning & Analysis',
    question: 'How does the AI risk assessment work?',
    answer:
      'When you scan a spot, the photo is sent over an encrypted connection to a secure backend that uses OpenAI vision analysis to evaluate visual features. SkinGuardAI returns a risk level of Low (green), Monitor (amber), or Urgent (red), along with guidance. The photo is not permanently stored by the backend or the AI provider. This is an informational screening aid, not a diagnosis.',
    keywords: ['ai', 'analysis', 'risk', 'how it works', 'assessment', 'openai'],
  },
  {
    id: 'sga-scan-3',
    app: 'SkinGuardAI',
    category: 'Scanning & Analysis',
    question: 'What do the Low, Monitor, and Urgent results mean?',
    answer:
      'Low (green) means the AI did not flag notable concern, though you should keep tracking the spot. Monitor (amber) means there are features worth watching, so rescan periodically and note any changes. Urgent (red) means the AI flagged features that warrant prompt attention, and you should consider seeing a dermatologist soon. All results are informational only and never replace a professional exam.',
    keywords: ['low', 'monitor', 'urgent', 'risk level', 'green', 'amber', 'red', 'meaning'],
  },
  {
    id: 'sga-scan-4',
    app: 'SkinGuardAI',
    category: 'Troubleshooting',
    question: 'The AI analysis is not working or fails.',
    answer:
      'AI analysis requires an active internet connection because the photo is sent to a secure backend for processing. If analysis fails, confirm you are online and retry. If it still fails, close and reopen the app. Very dark, blurry, or overly zoomed photos can also fail to analyze, so recapture in good light with the spot centered. If problems continue, contact support at support@dreamteamapps.com.',
    keywords: ['not working', 'failed', 'error', 'analysis', 'stuck', 'internet', 'retry'],
  },
  {
    id: 'sga-track-1',
    app: 'SkinGuardAI',
    category: 'Tracking',
    question: 'How do I track a mole over time with the body map?',
    answer:
      'After a scan you can save the spot to a location on the visual body map. Each saved mole keeps its own history, so you can rescan it later and compare photos and risk levels side by side over weeks and months. Tracking changes over time is one of the most useful ways to catch anything new, so aim to rescan tracked spots on a regular schedule.',
    keywords: ['track', 'body map', 'history', 'compare', 'over time', 'location'],
  },
  {
    id: 'sga-track-2',
    app: 'SkinGuardAI',
    category: 'Tracking',
    question: 'Can I compare a mole to previous scans?',
    answer:
      'Yes. Open a tracked mole from your history to see all of its past scans in order, with dates and risk levels, so you can compare how it looks over time. Watching for changes in size, shape, color, or border is exactly what regular tracking is for.',
    keywords: ['compare', 'history', 'previous', 'changes', 'side by side'],
  },
  {
    id: 'sga-remind-1',
    app: 'SkinGuardAI',
    category: 'Reminders & Alerts',
    question: 'How do I set up self-exam reminders?',
    answer:
      'In Settings, enable scan reminders and choose how often you want to be reminded to perform a self-exam. Reminders require Notifications permission, so allow notifications when prompted, or enable them later in iPhone Settings, SkinGuardAI, Notifications. Regular monthly self-exams are a good habit.',
    keywords: ['reminder', 'self-exam', 'notification', 'schedule', 'alert'],
  },
  {
    id: 'sga-remind-2',
    app: 'SkinGuardAI',
    category: 'Reminders & Alerts',
    question: 'How do UV-index alerts work?',
    answer:
      'SkinGuardAI can alert you when the local UV index is high so you can protect your skin. UV alerts require Location permission to fetch UV data for your area from a free weather service. Your location is used only to retrieve UV data and is not stored or shared. Enable Location for SkinGuardAI in iPhone Settings if UV alerts are not appearing.',
    keywords: ['uv', 'sun', 'alert', 'location', 'index', 'sunscreen'],
  },
  {
    id: 'sga-sub-1',
    app: 'SkinGuardAI',
    category: 'Subscription',
    question: 'What does SkinGuardAI Premium include?',
    answer:
      'Premium unlocks unlimited AI scans, full mole history and body-map tracking, PDF report export, and reminder features. SkinGuardAI offers Monthly and Annual Premium plans. All subscriptions are billed and managed by Apple through the App Store.',
    keywords: ['premium', 'subscription', 'price', 'plans', 'monthly', 'annual', 'features'],
  },
  {
    id: 'sga-sub-2',
    app: 'SkinGuardAI',
    category: 'Subscription',
    question: 'How do I manage, cancel, or restore my subscription?',
    answer:
      'Subscriptions are handled by Apple. To manage or cancel, open iPhone Settings, tap your name at the top, tap Subscriptions, select SkinGuardAI, and make your change. To restore a purchase on a new device or after reinstalling, open SkinGuardAI, go to the paywall or Settings, and tap Restore Purchases while signed in to the same Apple ID.',
    keywords: ['cancel', 'manage', 'restore', 'subscription', 'refund', 'billing'],
  },
  {
    id: 'sga-priv-1',
    app: 'SkinGuardAI',
    category: 'Privacy',
    question: 'Are my mole photos private?',
    answer:
      'Yes. Your mole photos, tracking history, and notes are stored locally on your device, not on our servers. When you request an AI assessment, the image is sent securely and only temporarily to our backend and the AI provider to generate the result, and is not permanently stored. SkinGuardAI does not use advertising or third-party tracking. Deleting the app removes all locally stored data.',
    keywords: ['privacy', 'photos', 'private', 'data', 'stored', 'secure'],
  },
  {
    id: 'sga-med-1',
    app: 'SkinGuardAI',
    category: 'Medical Disclaimer',
    question: 'Is SkinGuardAI a medical diagnosis?',
    answer:
      'No. SkinGuardAI is for informational and tracking purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. The AI risk assessment is a screening aid, not a diagnosis. Always seek the advice of a qualified dermatologist or physician about any skin concern, and seek prompt care for a spot that is new, changing, bleeding, or otherwise worrying.',
    keywords: ['diagnosis', 'medical', 'disclaimer', 'doctor', 'dermatologist', 'not medical advice'],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // GIGSTAND
  // ─────────────────────────────────────────────────────────────────────────────

  // Getting Started
  {
    id: 'gs-gs-1',
    app: 'GigStand',
    category: 'Getting Started',
    question: 'What is GigStand?',
    answer:
      'GigStand is an app for gigging musicians that keeps your chord charts, setlists, and backing tracks in one place, built for the stage. Store each song as a transposable chord chart (ChordPro) or an imported PDF, organize songs into setlists, attach a backing track to any song, and perform in Stage Mode with big, high-contrast text and hands-free foot-pedal control. Everything works offline.',
    keywords: ['what', 'about', 'gigstand', 'overview', 'musician', 'chords', 'setlist'],
  },
  {
    id: 'gs-gs-2',
    app: 'GigStand',
    category: 'Getting Started',
    question: 'What devices does GigStand run on?',
    answer:
      'GigStand is built for iPad (iPadOS 17 or later) and also runs on Apple Silicon Macs through "Designed for iPad." Many performers prefer the larger screen of a Mac laptop or a big iPad on stage. Charts, setlists, and playback all work the same across devices.',
    keywords: ['ipad', 'mac', 'device', 'compatible', 'requirement', 'ios', 'run'],
  },
  {
    id: 'gs-gs-3',
    app: 'GigStand',
    category: 'Getting Started',
    question: 'Does GigStand work offline?',
    answer:
      'Yes. Your songs, charts, setlists, and backing tracks live on your device and perform with no internet connection — perfect for venues with unreliable Wi-Fi. The only feature that uses the internet is the optional AI Chart Assistant, and only at the moment you tap Generate. Everything else, including the entire performance, is fully offline.',
    keywords: ['offline', 'internet', 'wifi', 'connection', 'no signal', 'airplane mode'],
  },
  {
    id: 'gs-gs-4',
    app: 'GigStand',
    category: 'Getting Started',
    question: 'How can I try GigStand quickly without adding my own songs?',
    answer:
      'On a fresh install the Songs screen is empty — tap "Load Sample Setlist" there (or Settings > Demo Content) to instantly load two ready-to-play demo songs, complete with chord charts AND backing tracks, plus a Sample Setlist. Open the Sample Setlist and tap Play to explore Stage Mode, live transpose, auto-scroll, backing-track playback, and foot-pedal navigation before you add a single song of your own.',
    keywords: ['demo', 'sample', 'try', 'example', 'load sample setlist', 'getting started', 'test'],
  },

  // Charts & Setlists
  {
    id: 'gs-chart-1',
    app: 'GigStand',
    category: 'Charts & Setlists',
    question: 'How do I add a song and its chart?',
    answer:
      'On the Songs tab, tap the amber ＋ to create a song, then open it and use the Edit tab. You can type a chord chart in ChordPro (put each chord in square brackets right before the syllable, like "[G]Amazing [C]grace"), import a PDF chart, or use the AI Chart Assistant to build one from pasted lyrics and chords. Set the song\'s Key so transpose works.',
    keywords: ['add', 'song', 'chart', 'chordpro', 'create', 'new', 'type', 'enter'],
  },
  {
    id: 'gs-chart-2',
    app: 'GigStand',
    category: 'Charts & Setlists',
    question: 'Can I import a PDF chart from Chordify or elsewhere?',
    answer:
      'Yes. Open a song → Edit tab → Chart section → "Import PDF Chart Instead," and pick the file from Files or iCloud. PDF charts scroll in Stage Mode, stay in sync with a backing track, and flip to white-on-black night mode. Note that PDF charts cannot be transposed — the key is fixed to the page — which is exactly right when you play along to a recording.',
    keywords: ['pdf', 'import', 'chordify', 'chart', 'file', 'sheet'],
  },
  {
    id: 'gs-chart-desktop',
    app: 'GigStand',
    category: 'Charts & Setlists',
    question: 'What software can I use on my computer to make a chord chart for GigStand?',
    answer:
      "The format you want is called ChordPro — chords in square brackets sitting over the lyrics. There is no GigStand-specific file type: any PDF works, and any ChordPro text works. The simplest free way is to type your song in Pages, Word, or Google Docs using a monospace font (like Menlo or Courier) so the chords line up over the words, then choose File → Print → Save as PDF and import that. For the best results, use a dedicated ChordPro editor such as Chord Provider (free, macOS) or ChordPro Buddy (Mac App Store); these let you type chords over lyrics and export BOTH a .chordpro text file and a PDF. You can also skip outside software entirely and use GigStand's built-in AI Chart Assistant, which builds the chart from pasted lyrics and chords.",
    keywords: ['software', 'app', 'computer', 'mac', 'create', 'make', 'chordpro editor', 'chord provider', 'chordpro buddy', 'pages', 'word', 'desktop', 'how do i make'],
  },
  {
    id: 'gs-chart-textvspdf',
    app: 'GigStand',
    category: 'Charts & Setlists',
    question: 'Should I import a PDF or type the chords as text?',
    answer:
      'Type or paste the chords as text whenever you can. A typed ChordPro chart transposes to any key and resizes for readability right inside GigStand. A PDF is a frozen image — its key and size are baked into the page, so it cannot be transposed or reflowed. Use a PDF when you are playing along to a fixed recording (where the key is fixed anyway) or when you already have a chart you would rather not retype. For your own songs, the text chart is almost always the better choice.',
    keywords: ['pdf', 'text', 'chordpro', 'which', 'better', 'transpose', 'format', 'paste', 'type', 'frozen'],
  },
  {
    id: 'gs-chart-chordify-nofile',
    app: 'GigStand',
    category: 'Charts & Setlists',
    question: "Chordify won't give me a file I can import — how do I get those chords into GigStand?",
    answer:
      "Chordify shows chords in its web player but does not export a chart file, so there is nothing to hand GigStand directly. Use one of three easy paths instead: read the chords off Chordify and type them into GigStand's chart box in ChordPro (chords in [brackets] over the lyrics); paste your lyrics and chords into the built-in AI Chart Assistant and let it build the chart; or make a PDF with a ChordPro editor or a word processor (see the software question above) and import that. You never need Chordify to produce a special file.",
    keywords: ['chordify', 'export', 'import', 'file', 'cant', 'no file', 'download', 'chords', 'website'],
  },
  {
    id: 'gs-chart-3',
    app: 'GigStand',
    category: 'Charts & Setlists',
    question: 'How do I transpose a song to a different key?',
    answer:
      'For typed ChordPro charts, use the KEY − / + buttons in the song\'s Chart preview or in Stage Mode to change key on the fly — every chord, including slash chords, moves together. PDF charts are fixed-key images and cannot be transposed; use a typed chart if you need live transpose.',
    keywords: ['transpose', 'key', 'change key', 'capo', 'pitch', 'higher', 'lower'],
  },
  {
    id: 'gs-set-1',
    app: 'GigStand',
    category: 'Charts & Setlists',
    question: 'How do I build a setlist for a show?',
    answer:
      'On the Setlists tab, tap the amber ＋ and give the show a name, venue, and date. Add songs from your library, split them into multiple sets, and note a break timer after any set. Tap Edit to drag songs into order. When it\'s showtime, tap Play to open Stage Mode at the first song and move through the whole set with the on-screen arrows or a foot pedal.',
    keywords: ['setlist', 'set list', 'show', 'gig', 'order', 'sets', 'build', 'organize'],
  },

  // AI Chart Assistant
  {
    id: 'gs-ai-1',
    app: 'GigStand',
    category: 'AI Chart Assistant',
    question: 'What is the AI Chart Assistant?',
    answer:
      'The AI Chart Assistant turns your lyrics and chords into a clean, stage-ready chord chart automatically. Open a song → Edit tab → Chart section → "Generate Chart with AI," paste the full lyrics and the chords (a plain progression, a list, or text from Chordify), and tap Generate. In a few seconds you get a formatted ChordPro chart with the chords placed over the right syllables — ready to edit, transpose, and perform.',
    keywords: ['ai', 'assistant', 'generate', 'chart', 'auto', 'chords', 'lyrics', 'create'],
  },
  {
    id: 'gs-ai-2',
    app: 'GigStand',
    category: 'AI Chart Assistant',
    question: 'Does the AI Chart Assistant need an internet connection?',
    answer:
      'Yes — it is the one part of GigStand that uses the internet, and only at the moment you tap Generate. Building the chart happens on a secure server. Once the chart is made, it is saved on your device and performs offline forever, like the rest of your songs. If you have no connection, you can still type a ChordPro chart or import a PDF completely offline.',
    keywords: ['ai', 'internet', 'connection', 'online', 'offline', 'wifi', 'generate'],
  },
  {
    id: 'gs-ai-3',
    app: 'GigStand',
    category: 'AI Chart Assistant',
    question: 'Where do my lyrics and chords go — is my content private?',
    answer:
      'When you tap Generate, the lyrics and chords you entered are sent over an encrypted connection to our backend and to our AI provider, Anthropic, solely to build your chart. The text is used only to generate the chart — it is not sold, not used for advertising, and not stored on our servers after your chart is returned. If you never use the AI Chart Assistant, no song content ever leaves your device. Full details are in our Privacy Policy.',
    keywords: ['privacy', 'private', 'lyrics', 'data', 'anthropic', 'stored', 'secure', 'server'],
  },
  {
    id: 'gs-ai-4',
    app: 'GigStand',
    category: 'AI Chart Assistant',
    question: "The AI Chart Assistant won't generate a chart — what's wrong?",
    answer:
      'Almost always it\'s the internet connection, since the assistant is the only online feature. Check that you\'re connected and tap Generate again. For a very long song, give it a few seconds to finish. If it still fails, close and reopen the assistant and retry. Everything else in GigStand keeps working offline in the meantime.',
    keywords: ['ai', 'fail', 'error', 'not working', 'generate', 'stuck', 'wont', 'problem'],
  },
  {
    id: 'gs-ai-5',
    app: 'GigStand',
    category: 'AI Chart Assistant',
    question: 'Is the AI Chart Assistant free?',
    answer:
      'The AI Chart Assistant is a GigStand Premium feature. If you\'re on the free tier, tapping it opens the upgrade screen. Premium (Monthly, Annual, or Lifetime) also unlocks backing-track imports and the rest of the premium features.',
    keywords: ['ai', 'free', 'premium', 'cost', 'price', 'subscription', 'pay'],
  },

  // Stage Mode, Pedal & Tracks
  {
    id: 'gs-stage-1',
    app: 'GigStand',
    category: 'Stage Mode & Performance',
    question: 'How does Stage Mode work?',
    answer:
      'Stage Mode is the performance screen: large white-on-black text, no clutter, and the display never sleeps mid-song. Open it with Perform (▶) from a song, or Play from a setlist. Tap once to show or hide the controls — Previous/Next, KEY − / +, text size, and the tortoise·play·hare auto-scroll. Tap again for a totally clean chart.',
    keywords: ['stage mode', 'perform', 'play', 'night mode', 'screen', 'awake', 'scroll'],
  },
  {
    id: 'gs-stage-2',
    app: 'GigStand',
    category: 'Stage Mode & Performance',
    question: 'How do I connect a Bluetooth foot pedal?',
    answer:
      'Page-turner pedals (AirTurn, iRig BlueTurn, Donner, and others) connect like a Bluetooth keyboard. Put the pedal in pairing mode and set it to its keyboard mode, then add it under Settings > Bluetooth on your iPad or Mac — no setup is needed inside GigStand. AirTurn DUO 500 owners: set it to Mode 3 (Mac/PC keyboard) FIRST — hold the Mode button and release after the 3rd red blink; in its default App-Direct mode it sends nothing to a computer (a quick test is that it types in any text box). In Stage Mode, GigStand responds to these keys: Page Up (or Return/Enter) starts or stops the song; Page Down (or → / ↓ / Space) advances to the next song; ← / ↑ go to the previous. A simple two-pedal setup is left pedal = start/stop, right pedal = next song. Note: the pedal only works on the Stage Mode screen, and next/previous need a setlist with more than one song.',
    keywords: ['foot pedal', 'bluetooth', 'pedal', 'airturn', 'duo 500', 'mode 3', 'page turner', 'pair', 'connect', 'hands free'],
  },
  {
    id: 'gs-stage-3',
    app: 'GigStand',
    category: 'Stage Mode & Performance',
    question: "Auto-scroll isn't moving — why?",
    answer:
      'If the whole chart already fits on the screen, there\'s nothing to scroll. Auto-scroll moves once the chart is longer than the display. Use the tortoise and hare buttons to set the speed, and note that with a backing track attached the scroll paces itself to the song. A quick tap of play (or Return on a foot pedal) starts it.',
    keywords: ['auto scroll', 'scroll', 'not moving', 'stuck', 'speed', 'stage mode'],
  },
  {
    id: 'gs-track-1',
    app: 'GigStand',
    category: 'Stage Mode & Performance',
    question: 'How do I add a backing track to a song?',
    answer:
      'Open a song → Edit tab → Backing Track section → "Add Backing Track," and choose an audio file (MP3, M4A, or WAV). Get files onto your device via the Files app, iCloud Drive, Dropbox, or AirDrop. In Stage Mode a track bar appears above the controls; tap play (or stomp a foot pedal) and the track starts while the chart scrolls in time. Backing-track imports are a Premium feature.',
    keywords: ['backing track', 'audio', 'mp3', 'm4a', 'wav', 'import', 'track', 'music'],
  },

  // Subscription & Privacy
  {
    id: 'gs-sub-1',
    app: 'GigStand',
    category: 'Subscription & Billing',
    question: 'What does GigStand Premium include, and how is it priced?',
    answer:
      'Premium unlocks the AI Chart Assistant, backing-track imports, and the full feature set. It\'s offered as a Monthly or Annual subscription, or a one-time Lifetime purchase that you own forever — all billed through Apple. A free tier lets you try the app. Manage or cancel a subscription at iPhone Settings > [Your Name] > Subscriptions; restore a purchase from within the app using the same Apple ID.',
    keywords: ['premium', 'subscription', 'price', 'lifetime', 'monthly', 'annual', 'cost', 'billing', 'upgrade'],
  },
  {
    id: 'gs-priv-1',
    app: 'GigStand',
    category: 'Privacy',
    question: 'What data does GigStand collect?',
    answer:
      'GigStand has no account, no login, no analytics, and no tracking. Your songs, charts, setlists, and tracks stay in the app\'s private storage on your device. The single exception is the optional AI Chart Assistant: when you use it, the lyrics and chords you enter are sent securely to our server and to Anthropic solely to build your chart, and are not stored afterward or sold. See our Privacy Policy for full details.',
    keywords: ['privacy', 'data', 'collect', 'account', 'tracking', 'personal', 'anthropic'],
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

export const APP_NAMES: FAQ['app'][] = ['FishingPalPro', 'PlayListAI', 'Search Quest', 'SkinGuardAI', 'GigStand', 'General', 'AppSupportDesk']
