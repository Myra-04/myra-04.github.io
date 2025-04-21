
import { 
  User, 
  DigitalLiteracyTraining,
  UserTrainingProgress,
  OfflineResources,
  CommunityIssue,
  EssentialService,
  UserServiceAccess,
  Notification
} from '../types/database';

// Mock Users
export const users: User[] = [
  {
    user_id: 1,
    full_name: 'Ahmad Bin Abdullah',
    email: 'ahmad@example.com',
    phone_number: '60123456789',
    password_hash: 'hashed_password_1',
    role: 'user',
    location: 'Kuching, Sarawak',
    created_at: '2023-01-10T08:30:00Z'
  },
  {
    user_id: 2,
    full_name: 'Mei Lin Tan',
    email: 'meiling@example.com',
    phone_number: '60187654321',
    password_hash: 'hashed_password_2',
    role: 'trainer',
    location: 'Sibu, Sarawak',
    created_at: '2023-02-15T10:45:00Z'
  },
  {
    user_id: 3,
    full_name: 'John Anak Banyan',
    email: 'john@example.com',
    phone_number: '60198765432',
    password_hash: 'hashed_password_3',
    role: 'admin',
    location: 'Miri, Sarawak',
    created_at: '2023-01-05T09:20:00Z'
  }
];

// Mock Digital Literacy Training
export const digitalLiteracyTrainings: DigitalLiteracyTraining[] = [
  {
    training_id: 1,
    title: 'Introduction to Digital Literacy',
    description: 'Learn the basics of using computers and navigating the internet safely.',
    difficulty: 'beginner',
    trainer_id: 2,
    is_offline: false,
    created_at: '2023-03-10T14:00:00Z'
  },
  {
    training_id: 2,
    title: 'Mobile Applications for Daily Life',
    description: 'Discover useful mobile applications for productivity, communication, and entertainment.',
    difficulty: 'intermediate',
    trainer_id: 2,
    is_offline: true,
    created_at: '2023-04-05T15:30:00Z'
  },
  {
    training_id: 3,
    title: 'Digital Marketing for Local Businesses',
    description: 'Learn how to promote your local business online using social media and other digital platforms.',
    difficulty: 'advanced',
    trainer_id: 3,
    is_offline: false,
    created_at: '2023-05-20T13:15:00Z'
  }
];

// Mock User Training Progress
export const userTrainingProgress: UserTrainingProgress[] = [
  {
    progress_id: 1,
    user_id: 1,
    training_id: 1,
    status: 'completed',
    last_accessed: '2023-03-15T16:45:00Z'
  },
  {
    progress_id: 2,
    user_id: 1,
    training_id: 2,
    status: 'in_progress',
    last_accessed: '2023-04-10T09:30:00Z'
  },
  {
    progress_id: 3,
    user_id: 3,
    training_id: 1,
    status: 'completed',
    last_accessed: '2023-03-20T11:00:00Z'
  }
];

// Mock Offline Resources
export const offlineResources: OfflineResources[] = [
  {
    resource_id: 1,
    title: 'Digital Literacy Handbook',
    description: 'A comprehensive guide to digital literacy fundamentals.',
    file_url: '/resources/digital-literacy-handbook.pdf',
    training_id: 1,
    created_at: '2023-03-05T10:00:00Z'
  },
  {
    resource_id: 2,
    title: 'Mobile Apps Guide',
    description: 'Step-by-step instructions for using essential mobile applications.',
    file_url: '/resources/mobile-apps-guide.pdf',
    training_id: 2,
    created_at: '2023-04-01T13:20:00Z'
  }
];

// Mock Community Issues
export const communityIssues: CommunityIssue[] = [
  {
    issue_id: 1,
    user_id: 1,
    location: 'Kampung Buntal, Kuching',
    issue_type: 'internet_access',
    description: 'Poor internet connectivity in the village affecting online classes for students.',
    status: 'reported',
    reported_at: '2023-06-10T08:45:00Z'
  },
  {
    issue_id: 2,
    user_id: 3,
    location: 'Bintulu Town',
    issue_type: 'digital_services',
    description: 'Need assistance with setting up e-wallet for older residents.',
    status: 'in_progress',
    reported_at: '2023-06-15T14:30:00Z'
  }
];

// Mock Essential Services
export const essentialServices: EssentialService[] = [
  {
    service_id: 1,
    name: 'SarawakPay',
    category: 'financial',
    description: 'Digital payment service for Sarawak residents.',
    website_url: 'https://sarawakpay.gov.my',
    contact_info: '+60 82 555123',
    available_offline: false,
    created_at: '2023-01-15T09:00:00Z'
  },
  {
    service_id: 2,
    name: 'Sarawak Rural Broadband Initiative',
    category: 'connectivity',
    description: 'High-speed internet access for rural areas in Sarawak.',
    website_url: 'https://srbi.sarawak.gov.my',
    contact_info: '+60 82 555234',
    available_offline: true,
    created_at: '2023-02-20T11:30:00Z'
  },
  {
    service_id: 3,
    name: 'Digital Health Sarawak',
    category: 'healthcare',
    description: 'Telemedicine and online health services for Sarawak residents.',
    website_url: 'https://digitalhealth.sarawak.gov.my',
    contact_info: '+60 82 555345',
    available_offline: true,
    created_at: '2023-03-25T13:45:00Z'
  }
];

// Mock User Service Access
export const userServiceAccess: UserServiceAccess[] = [
  {
    access_id: 1,
    user_id: 1,
    service_id: 1,
    accessed_at: '2023-07-05T10:15:00Z',
    feedback: 'Easy to use and very convenient for bill payments.'
  },
  {
    access_id: 2,
    user_id: 3,
    service_id: 2,
    accessed_at: '2023-07-10T16:30:00Z',
    feedback: 'Connection speed has improved significantly in our area.'
  }
];

// Mock Notifications
export const notifications: Notification[] = [
  {
    notification_id: 1,
    user_id: 1,
    text: 'Your training "Introduction to Digital Literacy" is now complete.',
    is_read: true,
    created_at: '2023-03-15T16:50:00Z'
  },
  {
    notification_id: 2,
    user_id: 1,
    text: 'New offline resource available for "Mobile Applications for Daily Life".',
    is_read: false,
    created_at: '2023-04-06T09:00:00Z'
  },
  {
    notification_id: 3,
    user_id: 3,
    text: 'Your community issue report has been updated to "in_progress".',
    is_read: false,
    created_at: '2023-06-16T10:20:00Z'
  }
];

// Database access mock functions
export const mockDb = {
  // User functions
  getUsers: () => users,
  getUserById: (id: number) => users.find(user => user.user_id === id),
  getUserByEmail: (email: string) => users.find(user => user.email === email),
  
  // Digital Literacy Training functions
  getTrainings: () => digitalLiteracyTrainings,
  getTrainingById: (id: number) => digitalLiteracyTrainings.find(training => training.training_id === id),
  
  // User Training Progress functions
  getUserProgress: (userId: number) => userTrainingProgress.filter(progress => progress.user_id === userId),
  
  // Offline Resources functions
  getResources: () => offlineResources,
  getResourcesByTraining: (trainingId: number) => 
    offlineResources.filter(resource => resource.training_id === trainingId),
  
  // Community Issues functions
  getIssues: () => communityIssues,
  getIssuesByUser: (userId: number) => communityIssues.filter(issue => issue.user_id === userId),
  
  // Essential Services functions
  getServices: () => essentialServices,
  getServiceById: (id: number) => essentialServices.find(service => service.service_id === id),
  
  // User Service Access functions
  getUserServiceAccess: (userId: number) => userServiceAccess.filter(access => access.user_id === userId),
  
  // Notifications functions
  getUserNotifications: (userId: number) => notifications.filter(notif => notif.user_id === userId),
};
