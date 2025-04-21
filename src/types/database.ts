
// Database type definitions based on schema

export interface User {
  user_id: number;
  full_name: string;
  email: string;
  phone_number: string;
  password_hash: string;
  role: string;
  location: string;
  created_at: string;
}

export interface DigitalLiteracyTraining {
  training_id: number;
  title: string;
  description: string;
  difficulty: string;
  trainer_id: number;
  is_offline: boolean;
  created_at: string;
}

export interface UserTrainingProgress {
  progress_id: number;
  user_id: number;
  training_id: number;
  status: string;
  last_accessed: string;
}

export interface OfflineResources {
  resource_id: number;
  title: string;
  description: string;
  file_url: string;
  training_id: number;
  created_at: string;
}

export interface CommunityIssue {
  issue_id: number;
  user_id: number;
  location: string;
  issue_type: string;
  description: string;
  status: string;
  reported_at: string;
}

export interface EssentialService {
  service_id: number;
  name: string;
  category: string;
  description: string;
  website_url: string;
  contact_info: string;
  available_offline: boolean;
  created_at: string;
}

export interface UserServiceAccess {
  access_id: number;
  user_id: number;
  service_id: number;
  accessed_at: string;
  feedback: string;
}

export interface Notification {
  notification_id: number;
  user_id: number;
  text: string;
  is_read: boolean;
  created_at: string;
}
