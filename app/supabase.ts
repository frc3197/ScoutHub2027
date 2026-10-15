import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const normalizeSupabaseUrl = (url: string) => url.replace(/\/rest\/v1\/?$/, '');

// Configure these in your Expo environment (.env). Use the URL and publishable
// (or legacy anon) key from your own Supabase projects.
const statisticFeedbackUrl = normalizeSupabaseUrl(process.env.EXPO_PUBLIC_SUPABASE_STATISTIC_FEEDBACK_URL!);
const statisticFeedbackKey = process.env.EXPO_PUBLIC_SUPABASE_STATISTIC_FEEDBACK_KEY!;
const mainSupabaseUrl = normalizeSupabaseUrl(process.env.EXPO_PUBLIC_SUPABASE_URL!);
const mainSupabaseKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY!;

// Reconstructed from the compiled app bundle. The original module exported
// two clients; the first used AsyncStorage and disabled session persistence.
export const supabaseStatisticFeedback = createClient(
  statisticFeedbackUrl,
  statisticFeedbackKey,
  {
    auth: {
      storage: AsyncStorage,
      autoRefreshToken: true,
      persistSession: false,
      detectSessionInUrl: false,
    },
  },
);

// The original main client used the default Supabase client options.
export const supabase = createClient(mainSupabaseUrl, mainSupabaseKey);
